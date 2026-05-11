import { felixicaza } from '@felixicaza/oxlint-config'

export default felixicaza(
  {},
  [
    {
      ignorePatterns: ['packages/*/tests/fixtures/**', '**/.eslint-config-inspector']
    }
  ]
)
