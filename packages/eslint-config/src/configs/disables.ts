import type { Linter } from 'eslint'

import pluginOxlint from 'eslint-plugin-oxlint'

export const disables: Linter.Config[] = [
  ...pluginOxlint.configs['flat/all']
]
