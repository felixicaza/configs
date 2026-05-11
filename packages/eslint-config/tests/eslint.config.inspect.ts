import { felixicaza } from '../src/index.ts'

export default felixicaza(
  {},
  [
    {
      ignores: [
        'tests/fixtures/**',
        'dist/**'
      ]
    }
  ]
)
