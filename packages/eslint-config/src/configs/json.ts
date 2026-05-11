import type { Linter } from 'eslint'

import { configs as configJsonc } from 'eslint-plugin-jsonc'

export const json: Linter.Config[] = [
  ...configJsonc['flat/recommended-with-json'],
  ...configJsonc['flat/recommended-with-jsonc'],
  ...configJsonc['flat/recommended-with-json5'],
  {
    name: 'felixicaza/json',
    files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
    rules: {
      'jsonc/indent': ['error', 2],
      'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'jsonc/comma-dangle': ['error', 'never']
    }
  },
  {
    name: 'felixicaza/jsonc',
    files: ['**/*.jsonc'],
    rules: {
      'jsonc/no-comments': 'off'
    }
  }
]
