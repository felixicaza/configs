import type { OxlintConfig } from 'oxlint'

/**
 * Oxc rules configuration.
 *
 * Oxc rules help ensure that your code follows best practices and avoids common pitfalls.
 * @see https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=oxc
 */
export const oxc: OxlintConfig = {
  plugins: ['oxc'],
  rules: {
    'oxc/bad-array-method-on-arguments': 'error',
    'oxc/branches-sharing-code': 'error',
    'oxc/misrefactored-assign-op': 'error',
    'oxc/no-accumulating-spread': 'error',
    'oxc/no-barrel-file': 'error',
    'oxc/no-const-enum': 'error',
    'oxc/no-this-in-exported-function': 'error'
  }
}
