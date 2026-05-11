import type { Linter } from 'eslint'

export type FlatConfigInput = Linter.Config | readonly Linter.Config[]
