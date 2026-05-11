import type { OxlintConfig } from 'oxlint'

/**
 * Node.js rules configuration.
 *
 * Node.js rules help ensure that your code follows best practices and avoids common pitfalls when running in a Node.js environment.
 * @see https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=node
 */
export const node: OxlintConfig = {
  plugins: ['node'],
  rules: {
    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-exports-assign': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error'
  }
}
