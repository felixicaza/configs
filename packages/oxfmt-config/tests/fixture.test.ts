import type { OxfmtConfig } from 'oxfmt'
import type { Options } from '../src/types/index.ts'

import { cp, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { delimiter, dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { x } from 'tinyexec'
import { glob } from 'tinyglobby'
import { afterAll, beforeAll, it } from 'vitest'

import { felixicaza } from '../src/index.ts'

const isWindows = process.platform === 'win32'
const timeout = isWindows ? 300_000 : 60_000

const testDir = dirname(fileURLToPath(import.meta.url))
const fixturesInputDir = resolve(testDir, 'fixtures/input')
const fixturesOutputDir = resolve(testDir, 'fixtures/output')
const localBinDir = resolve(testDir, '../node_modules/.bin')

let fixturesTempDir = ''

beforeAll(async() => {
  fixturesTempDir = await mkdtemp(join(tmpdir(), 'oxfmt-config-fixtures-'))
})

afterAll(async() => {
  if (fixturesTempDir) {
    await rm(fixturesTempDir, { recursive: true, force: true })
  }
})

runWithConfig('default', {})
runWithConfig('without-presets', {
  base: false,
  yaml: false,
  jsdoc: false,
  mdx: false
})
runWithConfig(
  'with-user-config',
  {},
  {
    semi: true,
    trailingComma: 'all',
    arrowParens: 'avoid',
    bracketSameLine: false
  } as OxfmtConfig
)

function runWithConfig(name: string, options: Options, ...userConfigs: OxfmtConfig[]): void {
  it.concurrent(
    name,
    async({ expect }): Promise<void> => {
      const from = fixturesInputDir
      const output = resolve(fixturesOutputDir, name)
      const target = resolve(fixturesTempDir, name)

      // Copy fixtures to temp directory
      await cp(from, target, {
        recursive: true,
        filter: (src: string) => !src.includes('node_modules')
      })

      // Generate oxfmt config
      const resolvedConfig = felixicaza(options, userConfigs)
      const configContent = `export default ${JSON.stringify(resolvedConfig, null, 2)}\n`
      await writeFile(join(target, 'oxfmt.config.ts'), configContent, 'utf-8')

      // Run oxfmt CLI with the config
      const result = await x('oxfmt', ['.', '--write'], {
        nodeOptions: {
          cwd: target,
          env: {
            ...process.env,
            PATH: [localBinDir, process.env.PATH ?? ''].join(delimiter)
          }
        }
      })

      if (result.exitCode !== 0) {
        throw new Error(`oxfmt failed (${result.exitCode})\nSTDOUT:\n${result.stdout}\nSTDERR:\n${result.stderr}`)
      }

      // Get all formatted files
      const files = await glob('**/*', {
        cwd: target,
        onlyFiles: true,
        ignore: ['node_modules', 'oxfmt.config.ts']
      })

      await Promise.all(
        files.map(async(file: string) => {
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
