import type { Options, UserConfig } from '../src/types/index.ts'

import { cp, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { delimiter, dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { x } from 'tinyexec'
import { glob } from 'tinyglobby'
import { afterAll, beforeAll, it } from 'vitest'

const isWindows = process.platform === 'win32'
const timeout = isWindows ? 300_000 : 60_000

const testDir = dirname(fileURLToPath(import.meta.url))
const fixturesInputDir = resolve(testDir, 'fixtures/input')
const fixturesOutputDir = resolve(testDir, 'fixtures/output')
const localBinDir = resolve(testDir, '../node_modules/.bin')
const configModuleUrl = pathToFileURL(resolve(testDir, '../src/index.ts')).href

let fixturesTempDir = ''

beforeAll(async(): Promise<void> => {
  fixturesTempDir = await mkdtemp(join(tmpdir(), 'oxlint-config-fixtures-'))
})

afterAll(async(): Promise<void> => {
  if (!fixturesTempDir) return

  await rm(fixturesTempDir, { recursive: true, force: true })
})

runWithConfig('default', {})

runWithConfig('without-presets', {
  stylistic: false,
  jsdoc: false,
  complexity: false,
  imports: false,
  promise: false,
  node: false,
  eslint: false,
  oxc: false,
  typescript: false
})

runWithConfig(
  'with-user-config',
  {},
  [
    {
      rules: {
        'no-console': 'error'
      }
    }
  ]
)

function runWithConfig(name: string, options: Options, userConfigs?: UserConfig[]): void {
  it.concurrent(
    name,
    async({ expect }): Promise<void> => {
      const from = fixturesInputDir
      const output = resolve(fixturesOutputDir, name)
      const target = resolve(fixturesTempDir, name)

      await cp(from, target, {
        recursive: true,
        filter: (src: string): boolean => !src.includes('node_modules')
      })

      const configContent = [
        `import { felixicaza } from ${JSON.stringify(configModuleUrl)}`,
        '',
        `export default felixicaza(${
           JSON.stringify(options, null, 2)
           }, ${
           JSON.stringify(userConfigs, null, 2)
           })`,
        ''
      ].join('\n')

      await writeFile(join(target, 'oxlint.config.ts'), configContent, 'utf-8')

      const result = await x('oxlint', ['--fix', '--fix-suggestions', '--fix-dangerously', '--ignore-pattern', 'oxlint.config.ts', '.'], {
        nodeOptions: {
          cwd: target,
          env: {
            ...process.env,
            PATH: [localBinDir, process.env.PATH ?? ''].join(delimiter)
          }
        }
      })

      if (result.exitCode !== 0) {
        throw new Error(
          `oxlint failed (${result.exitCode})\nSTDOUT:\n${result.stdout}\nSTDERR:\n${result.stderr}`
        )
      }

      const files = await glob('**/*', {
        cwd: target,
        onlyFiles: true,
        ignore: ['node_modules', 'oxlint.config.ts']
      })

      await Promise.all(
        files.map(async(file: string): Promise<void> => {
          const content = await readFile(join(target, file), 'utf-8')
          const source = await readFile(join(from, file), 'utf-8')
          const outputPath = join(output, file)

          if (content === source) {
            await rm(outputPath, { force: true })
            return
          }

          await expect.soft(content).toMatchFileSnapshot(outputPath)
        })
      )
    },
    timeout
  )
}
