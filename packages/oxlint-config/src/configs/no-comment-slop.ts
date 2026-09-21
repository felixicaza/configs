import type { OxlintConfig } from 'oxlint'

/**
 * No comment slop rules configuration.
 *
 * Flags AI comment slop in JavaScript and TypeScript.
 * @see https://github.com/jantimon/eslint-plugin-no-comment-slop
 */
export const noCommentSlop: OxlintConfig = {
  // Use `import.meta.resolve()` due Oxlint does not resolve the plugin specifier
  jsPlugins: [import.meta.resolve('eslint-plugin-no-comment-slop')],
  rules: {
    'no-comment-slop/max-comment-lines': 'error',
    'no-comment-slop/multiline-jsdoc-format': 'error',
    'no-comment-slop/no-banner-comment': 'error',
    'no-comment-slop/no-em-dash': 'error',
    'no-comment-slop/no-foreign-syntax': 'error',
    'no-comment-slop/no-jargon': 'error',
    'no-comment-slop/no-trailing-period': 'error',
    'no-comment-slop/prefer-jsdoc-for-exports': 'error',
    'no-comment-slop/require-member-docs': 'error'
  }
}
