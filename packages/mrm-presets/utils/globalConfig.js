const { spawnSync } = require('node:child_process')
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

function runGlobalConfigs(configs, command) {
  return configs.reduce((failed, [key, value]) => {
    const args = ['config', 'set', key, value]
    const cmdText = `${command} ${args.join(' ')}`

    try {
      const result = spawnSync(command, args, {
        stdio: 'inherit',
        shell: isWindows,
        windowsHide: true
      })

      if (result.error || result.status !== 0) {
        failed.push(cmdText)
        if (result.error) {
          console.error(`[error] ${result.error.message}`)
        }
      }
    } catch(error) {
      failed.push(cmdText)
      console.error(`[error] ${error.message}`)
    }

    return failed
  }, [])
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

function applyGlobalConfigs(configs, command) {
  printGlobalConfigPreview(configs, command)
  const failedCommands = runGlobalConfigs(configs, command)
  reportGlobalConfigResult(failedCommands, command)
}

module.exports = { isYes, applyGlobalConfigs }
