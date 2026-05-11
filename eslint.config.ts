import { felixicaza } from '@felixicaza/eslint-config'

export default felixicaza(
  {},
  [
    {
      files: ['./packages/mrm-presets/package.json'],
      rules: {
        'package-json/require-exports': 'off',
        'package-json/require-files': 'off'
      }
    },
    {
      ignores: ['packages/*/tests/fixtures/**', '**/.eslint-config-inspector']
    }
  ]
)
