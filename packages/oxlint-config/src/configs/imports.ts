import type { OxlintConfig } from 'oxlint'

/**
 * Import rules configuration.
 *
 * Import rules help enforce consistent import/export practices and prevent common issues related to module imports.
 * @see https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=import
 */
export const imports: OxlintConfig = {
  plugins: ['import'],
  rules: {
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/default': 'warn',
    'import/export': 'warn',
    'import/exports-last': 'error',
    'import/first': 'error',
    'import/no-absolute-path': 'warn',
    'import/no-anonymous-default-export': 'warn',
    'import/no-cycle': 'error',
    'import/no-duplicates': 'error',
    'import/no-empty-named-blocks': 'warn',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-namespace': 'error'
  }
}
