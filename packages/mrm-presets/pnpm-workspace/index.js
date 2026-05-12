const { yaml } = require('mrm-core')
const { isYes, applyGlobalConfigs } = require('../utils/globalConfig.js')

const GLOBAL_PNPM_CONFIGS = [
  ['blockExoticSubdeps', 'true'],
  ['minimumReleaseAge', '2880'],
  ['trustPolicy', 'no-downgrade'],
  ['strictDepBuilds', 'true']
]

function task({ global }) {
  yaml('pnpm-workspace.yaml')
    .merge({
      blockExoticSubdeps: true,
      autoInstallPeers: false,
      minimumReleaseAge: 2880,
      trustPolicy: 'no-downgrade',
      strictPeerDependencies: true,
      strictDepBuilds: true
    })
    .save()

  if (!isYes(global)) return

  applyGlobalConfigs(GLOBAL_PNPM_CONFIGS, 'pnpm')
}

task.description = 'Adds pnpm workspace security configuration'

module.exports = task

module.exports.parameters = {
  global: {
    type: 'input',
    message: 'Apply pnpm global config? \nThis will set pnpm config options globally (y/n)',
    default: 'n',
    validate: (value) => ['y', 'n'].includes(value.toLowerCase()) || 'Please enter y or n'
  }
}
