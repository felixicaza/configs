import type { OxlintConfig } from 'oxlint'

/**
 * Promise rules configuration.
 *
 * Promise rules help ensure that your code follows best practices and avoids common pitfalls when working with Promises.
 * @see https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=promise
 */
export const promise: OxlintConfig = {
  plugins: ['promise'],
  rules: {
    'promise/param-names': 'error'
  }
}
