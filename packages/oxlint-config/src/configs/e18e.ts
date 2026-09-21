import type { OxlintConfig, DummyRuleMap } from 'oxlint'

const modernization: DummyRuleMap = {
  'e18e/prefer-array-at': 'error',
  'e18e/prefer-array-fill': 'error',
  'e18e/prefer-includes': 'error',
  'e18e/prefer-array-to-reversed': 'error',
  'e18e/prefer-array-to-sorted': 'error',
  'e18e/prefer-array-to-spliced': 'error',
  'e18e/prefer-object-has-own': 'error',
  'e18e/prefer-spread-syntax': 'error',
  'e18e/prefer-url-canparse': 'error',
  'e18e/prefer-get-or-insert': 'error'
}

const performanceImprovements: DummyRuleMap = {
  // 'e18e/no-indexof-equality': 'error', // Requires TypeScript Eslint parser
  'e18e/prefer-array-from-map': 'error',
  'e18e/prefer-array-some': 'error',
  'e18e/prefer-timer-args': 'error',
  'e18e/prefer-static-regex': 'error',
  'e18e/prefer-string-fromcharcode': 'error',
  'e18e/prefer-includes-over-regex-test': 'error',
  'e18e/prefer-flatmap-over-map-flat': 'error',
  'e18e/prefer-slice-over-split-index': 'error',
  'e18e/no-spread-in-reduce': 'error'
}

/**
 * e18e ESLint plugin configuration.
 *
 * e18e rules for JavaScript/TypeScript modernization and performance improvements.
 * @see https://github.com/e18e/eslint-plugin
 */
export const e18e: OxlintConfig = {
  jsPlugins: [import.meta.resolve('@e18e/eslint-plugin')],
  rules: {
    ...modernization,
    ...performanceImprovements
  }
}
