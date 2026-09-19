import type { Linter } from 'eslint'

import { configs } from 'eslint-plugin-pnpm'

export const pnpm: Linter.Config[] = [
  ...configs.json,
  ...configs.yaml,
  {
    name: 'felixicaza/pnpm-workspace',
    files: ['pnpm-workspace.yaml'],
    rules: {
      'pnpm/yaml-no-anonymous-catalog': 'warn'
    },
    settings: {
      pnpm: {
        ensureWorkspaceFile: true
      }
    }
  }
]
