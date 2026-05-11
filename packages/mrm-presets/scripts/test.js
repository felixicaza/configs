#!/usr/bin/env node

const fs = require('node:fs')
const path = require('node:path')
const { spawnSync } = require('node:child_process')

const interactive = process.argv.includes('--interactive')

const packageRoot = path.resolve(__dirname, '..')
const tempDir = path.join(packageRoot, '.temp')

fs.rmSync(tempDir, { recursive: true, force: true })
fs.mkdirSync(tempDir, { recursive: true })

const mrmBin = path.join(
  packageRoot,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'mrm.cmd' : 'mrm'
)

const args = ['all']

if (interactive) {
  args.push('-i')
}

args.push('--dir', '..')

const result = spawnSync(mrmBin, args, {
  cwd: tempDir,
  stdio: 'inherit'
})

if (result.error) {
  console.error(result.error)
  process.exit(1)
}

process.exit(result.status ?? 1)
