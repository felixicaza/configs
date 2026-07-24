const { spawn } = require('node:child_process')
const { platform } = require('node:process')

const isWindows = platform === 'win32'

function isYes(value) {
  return String(value).toLowerCase() === 'y'
}

function printGlobalConfigPreview(configs, command) {
  console.info('[info] Commands to be executed:')
  for (const [key, value] of configs) {
    console.info(`[info] - ${command} config set ${key} ${value}`)
  }
}

function runCommand(command, args) {
  return new Promise((resolve) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: isWindows,
      windowsHide: true
    })

    child.on('error', (error) => {
      resolve({
        success: false,
        error
      })
    })

    child.on('close', (code) => {
      resolve({
        success: code === 0,
        code
      })
    })
  })
}

async function runGlobalConfigs(configs, command) {
  const results = await Promise.all(
    configs.map(async([key, value]) => {
      const args = ['config', 'set', key, value]
      const cmdText = `${command} ${args.join(' ')}`

      const result = await runCommand(command, args)

      if (!result.success) {
        if (result.error) {
          console.error(`[error] ${result.error.message}`)
        }

        return cmdText
      }

      return null
    })
  )

  return results.filter(Boolean)
}

function reportGlobalConfigResult(failedCommands, command) {
  if (failedCommands.length === 0) {
    console.info('\n[ok] Global configuration applied successfully.')
    console.info(`[info] To verify changes run: ${command} config list -g`)
    return
  }

  console.error('\n[error] Some commands failed:')
  for (const cmd of failedCommands) {
    console.error(`[error] - ${cmd}`)
  }
}

async function applyGlobalConfigs(configs, command) {
  printGlobalConfigPreview(configs, command)
  const failedCommands = await runGlobalConfigs(configs, command)
  reportGlobalConfigResult(failedCommands, command)
}

module.exports = { isYes, applyGlobalConfigs }
