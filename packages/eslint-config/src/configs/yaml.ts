import type { Linter } from 'eslint'

import { configs as configYml } from 'eslint-plugin-yml'

export const yaml: Linter.Config[] = [
  ...configYml['flat/recommended'],
  {
    name: 'felixicaza/yaml',
    files: ['**/*.yaml', '**/*.yml'],
    rules: {
      'yml/indent': ['error', 3, { indicatorValueIndent: 2 }],
      'yml/quotes': ['error', { prefer: 'double' }]
    }
  }
]
