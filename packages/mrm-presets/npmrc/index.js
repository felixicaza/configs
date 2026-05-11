const { lines } = require('mrm-core')

function task() {
  lines('.npmrc')
    .add([
      'save-exact = true',
      'ignore-scripts = true',
      'allow-git = none',
      'min-release-age = 2',
      'strict-peer-deps = true'
    ])
    .save()
}
task.description = 'Adds npmrc security configuration'

module.exports = task
