import type { OxlintConfig } from 'oxlint'

/**
 * JSDoc rules configuration.
 *
 * JSDoc rules help ensure that your code is properly documented and that the documentation is accurate and consistent.
 * @see https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=jsdoc
 * @see https://github.com/gajus/eslint-plugin-jsdoc
 */
export const jsdoc: OxlintConfig = {
  plugins: ['jsdoc'],
  jsPlugins: [
    // Use `import.meta.resolve()` due Oxlint does not resolve the plugin specifier
    { name: 'jsdoc-js', specifier: import.meta.resolve('eslint-plugin-jsdoc') }
  ],
  rules: {
    'jsdoc/check-access': 'warn',
    'jsdoc/check-property-names': 'warn',
    'jsdoc/empty-tags': 'warn',
    'jsdoc/implements-on-classes': 'warn',
    'jsdoc/no-defaults': 'warn',
    'jsdoc/require-param-name': 'warn',
    'jsdoc/require-property': 'warn',
    'jsdoc/require-property-description': 'warn',
    'jsdoc/require-property-name': 'warn',
    'jsdoc/require-returns-description': 'warn',
    'jsdoc-js/check-param-names': 'warn',
    'jsdoc-js/check-types': 'warn',
    'jsdoc-js/no-multi-asterisks': 'warn',
    'jsdoc-js/require-returns-check': 'warn',
    'jsdoc-js/require-yields-check': 'warn'
  }
}
