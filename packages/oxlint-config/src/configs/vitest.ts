import type { OxlintConfig } from 'oxlint'

/**
 * Vitest rules configuration.
 *
 * Vitest rules help ensure that your code follows best practices and avoids common pitfalls when using Vitest.
 * @see https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=vitest
 */
export const vitest: OxlintConfig = {
  plugins: ['vitest'],
  rules: {
    'vitest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
    'vitest/no-identical-title': 'error',
    'vitest/no-import-node-test': 'error',
    'vitest/prefer-hooks-in-order': 'error',
    'vitest/prefer-hooks-on-top': 'error',
    'vitest/prefer-lowercase-title': 'error',
    'vitest/valid-title': ['error', { allowArguments: true }]
  }
}
