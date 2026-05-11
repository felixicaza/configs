import { felixicaza } from '@felixicaza/eslint-config'

export default felixicaza(
  {},
  [
    {
      ignores: ['packages/*/tests/fixtures/**', '**/.eslint-config-inspector']
    }
  ]
)
