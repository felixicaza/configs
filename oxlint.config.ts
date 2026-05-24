import { felixicaza } from '@felixicaza/oxlint-config'

export default felixicaza(
  {
    vitest: true
  },
  [
    {
      ignorePatterns: ['packages/*/tests/fixtures/**', '**/.eslint-config-inspector']
    }
  ]
)
