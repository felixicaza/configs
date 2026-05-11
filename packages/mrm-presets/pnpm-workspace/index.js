const { yaml } = require('mrm-core')

function task() {
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
}
task.description = 'Adds pnpm workspace security configuration'

module.exports = task
