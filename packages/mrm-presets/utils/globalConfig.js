const { execFileSync } = require('node:child_process')

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
    try {
      execFileSync(command, ['config', 'set', key, value], { stdio: 'inherit' })
    } catch {
      failed.push(`${command} config set ${key} ${value}`)
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
