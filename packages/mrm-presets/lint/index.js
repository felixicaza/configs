const { lines, yaml, json, packageJson, install } = require('mrm-core')

const oxlintPackages = ['@felixicaza/oxlint-config', 'oxlint']
const precommitsPackages = ['simple-git-hooks', 'nano-staged']
const eslintPackages = ['@felixicaza/eslint-config', 'eslint@9', 'jiti']

function task({ precommits, eslintConfig, usingAstro }) {
  lines('oxlint.config.ts')
    .add([
      'import { felixicaza } from \'@felixicaza/oxlint-config\'',
      '',
      'export default felixicaza()'
    ])
    .save()

  packageJson()
    .setScript('linx', 'oxlint .')
    .setScript('lint:fix', 'oxlint . --fix')
    .save()

  json('.vscode/extensions.json', {})
    .merge({
      recommendations: ['oxc.oxc-vscode']
    })
    .save()

  json('.vscode/settings.json', {})
    .merge({
      'prettier.enable': false,
      'editor.codeActionsOnSave': {
        'source.fixAll.oxc': 'explicit',
        'source.organizeImports': 'never'
      }
    })
    .save()

  install(oxlintPackages, { dev: true, pnpm: true })

  if (precommits.toLowerCase() === 'y') {
    packageJson()
      .setScript('prepare', 'simple-git-hooks')
      .merge({
        'simple-git-hooks': {
          'pre-commit': 'pnpm nano-staged'
        },
        'nano-staged': {
          '*': 'pnpm lint:fix'
        }
      })
      .save()

    yaml('pnpm-workspace.yaml')
      .merge({
        allowBuilds: {
          'simple-git-hooks': true
        }
      })
      .save()

    install(precommitsPackages, { dev: true, pnpm: true })
  }

  if (eslintConfig.toLowerCase() === 'y') {
    lines('eslint.config.ts')
      .add([
        'import { felixicaza } from \'@felixicaza/eslint-config\'',
        '',
        `export default felixicaza(${usingAstro.toLowerCase() === 'n' ? '{ astro: false }' : ''})`
      ])
      .save()

    json('.vscode/settings.json', {})
      .merge({
        'eslint.validate': [
          'astro',
          'json',
          'jsonc',
          'json5',
          'yaml'
        ]
      })
      .save()
  }

  install(eslintPackages, { dev: true, pnpm: true })
}
task.description = 'Adds linter configurations'

module.exports = task

module.exports.parameters = {
  precommits: {
    type: 'input',
    message: 'Setup precommits? (y/n)',
    default: 'y',
    validate: (value) => ['y', 'n'].includes(value.toLowerCase()) || 'Please enter y or n'
  },
  eslintConfig: {
    type: 'input',
    message: 'Want to set up ESLint? (y/n)',
    default: 'y',
    validate: (value) => ['y', 'n'].includes(value.toLowerCase()) || 'Please enter y or n'
  },
  usingAstro: {
    type: 'input',
    message: 'Using Astro? (y/n)',
    default: 'n',
    validate: (value) => ['y', 'n'].includes(value.toLowerCase()) || 'Please enter y or n'
  }
}
