const { lines } = require('mrm-core')
const { isYes, applyGlobalConfigs } = require('../utils/globalConfig.js')

const GLOBAL_NPM_CONFIGS = [
  ['ignore-scripts', 'true'],
  ['allow-git', 'none'],
  ['min-release-age', '2']
]

function task({ global }) {
  lines('.npmrc')
    .add([
      'save-exact = true',
      'ignore-scripts = true',
      'allow-git = none',
      'min-release-age = 2',
      'strict-peer-deps = true'
    ])
    .save()

  if (!isYes(global)) return

  applyGlobalConfigs(GLOBAL_NPM_CONFIGS, 'npm')
}

task.description = 'Adds npmrc security configuration'

module.exports = task

module.exports.parameters = {
  global: {
    type: 'input',
    message: 'Apply npm global config? \nThis will set npm config options globally (y/n)',
    default: 'n',
    validate: (value) => ['y', 'n'].includes(value.toLowerCase()) || 'Please enter y or n'
  }
}
