import type { Linter } from 'eslint'

import { configs as pnpmPlugin } from 'eslint-plugin-pnpm'

export const pnpm: Linter.Config[] = [
  ...pnpmPlugin.json,
  ...pnpmPlugin.yaml,
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
