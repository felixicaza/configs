#!/usr/bin/env node

const { rm, mkdir } = require('node:fs/promises')
const { resolve, join } = require('node:path')
const { spawn } = require('node:child_process')

async function main() {
  const interactive = process.argv.includes('--interactive')

  const packageRoot = resolve(__dirname, '..')
  const tempDir = join(packageRoot, '.temp')

  await rm(tempDir, { recursive: true, force: true })
  await mkdir(tempDir, { recursive: true })

  const mrmCli = require.resolve('mrm/bin/mrm')

  const args = ['all']

  if (interactive) {
    args.push('-i')
  }

  args.push('--dir', '..')

  const child = spawn(process.execPath, [mrmCli, ...args], {
    cwd: tempDir,
    stdio: 'inherit'
  })

  child.on('error', (err) => {
    console.error(err)
    process.exit(1)
  })

  child.on('close', (code) => {
    process.exit(code ?? 1)
  })
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
