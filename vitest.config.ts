import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      'packages/eslint-config',
      'packages/oxfmt-config',
      'packages/oxlint-config',
      'packages/tsdown-config'
    ]
  }
})
