import type { Linter } from 'eslint'

import { configs as configYml } from 'eslint-plugin-yml'

export const yaml: Linter.Config[] = [
  ...configYml.base,
  {
    name: 'felixicaza/yaml',
    files: ['**/*.yaml', '**/*.yml'],
    rules: {
      'yml/block-mapping-colon-indicator-newline': 'error',
      'yml/block-mapping-question-indicator-newline': 'error',
      'yml/block-mapping': 'error',
      'yml/block-sequence-hyphen-indicator-newline': 'error',
      'yml/block-sequence': 'error',
      'yml/flow-mapping-curly-newline': 'error',
      'yml/flow-mapping-curly-spacing': 'error',
      'yml/flow-sequence-bracket-newline': 'error',
      'yml/flow-sequence-bracket-spacing': 'error',
      'yml/indent': ['error', 3, { indicatorValueIndent: 2 }],
      'yml/key-spacing': 'error',
      'yml/no-empty-document': 'error',
      'yml/no-empty-key': 'error',
      'yml/no-empty-mapping-value': 'error',
      'yml/no-empty-sequence-entry': 'error',
      'yml/no-irregular-whitespace': 'error',
      'yml/no-multiple-empty-lines': 'error',
      'yml/no-tab-indent': 'error',
      'yml/no-trailing-spaces': 'error',
      'yml/no-trailing-zeros': 'error',
      'yml/plain-scalar': 'error',
      'yml/quotes': ['error', { prefer: 'double' }],
      'yml/spaced-comment': 'error'
    }
  }
]
