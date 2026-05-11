import type { OxlintConfig } from 'oxlint'

/**
 * Unicorn rules configuration.
 *
 * This configuration enables the `unicorn` plugin, which provides a set of rules that enforce better code practices and improve code readability.
 * @see https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=unicorn
 */
export const unicorn: OxlintConfig = {
  plugins: ['unicorn'],
  rules: {
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-date-clone': 'error',
    'unicorn/consistent-empty-array-spread': 'error',
    'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/filename-case': [
      'error',
      {
        cases: { kebabCase: true, pascalCase: true },
        ignore: [/^[A-Z]+\..*$/]
      }
    ],
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'warn',
    'unicorn/no-accessor-recursion': 'warn',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-document-cookie': 'error',
    'unicorn/no-empty-file': 'off',
    'unicorn/no-instanceof-builtins': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error'
  }
}
