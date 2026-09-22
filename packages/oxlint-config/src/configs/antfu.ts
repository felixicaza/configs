import type { OxlintConfig } from 'oxlint'

/**
 * Antfu rules configuration.
 *
 * Anthony's opinionated ESLint rules.
 * @see https://github.com/antfu/eslint-plugin-antfu
 */
export const antfu: OxlintConfig = {
  // Use `import.meta.resolve()` due Oxlint does not resolve the plugin specifier
  jsPlugins: [import.meta.resolve('eslint-plugin-antfu')],
  rules: {
    'antfu/consistent-chaining': 'error',
    'antfu/consistent-list-newline': 'error',
    'antfu/top-level-function': 'error'
  }
}
