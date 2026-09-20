import type { Linter } from 'eslint'

import cssPlugin from '@eslint/css'
import cssStylisticPlugin from 'eslint-plugin-css-stylistic'
import cssOrderPlugin from 'eslint-plugin-css-properties-order'

export const css: Linter.Config[] = [
  {
    name: 'felixicaza/css',
    files: ['**/*.css'],
    language: 'css/css',
    plugins: {
      css: cssPlugin
    },
    languageOptions: {
      tolerant: true
    },
    rules: {
      'css/font-family-fallbacks': 'error',
      'css/no-duplicate-imports': 'error',
      'css/no-duplicate-keyframe-selectors': 'error',
      'css/no-empty-blocks': 'error',
      'css/no-important': 'error',
      'css/no-invalid-at-rule-placement': 'error',
      'css/no-invalid-named-grid-areas': 'error',
      'css/no-invalid-properties': 'error',
      'css/no-unmatchable-selectors': 'error',
      'css/prefer-logical-properties': 'error',
      'css/selector-complexity': ['error', { maxIds: 1, maxAttributes: 1, maxPseudoClasses: 1, maxUniversals: 1 }],
      'css/use-baseline': 'warn'
    }
  },
  {
    name: 'felixicaza/css/order',
    files: ['**/*.css'],
    language: 'css/css',
    plugins: {
      'css-order': cssOrderPlugin
    },
    rules: {
      'css-order/properties-order': 'error'
    }
  },
  {
    name: 'felixicaza/css/stylistic',
    files: ['**/*.css'],
    language: 'css/css',
    plugins: {
      'css-stylistic': cssStylisticPlugin
    },
    rules: {
      'css-stylistic/at-rule-name-case': 'error',
      'css-stylistic/at-rule-name-space-after': 'error',
      'css-stylistic/at-rule-semicolon-newline-after': 'error',
      'css-stylistic/at-rule-semicolon-space-before': 'error',
      'css-stylistic/block-closing-brace-empty-line-before': 'error',
      'css-stylistic/block-closing-brace-newline-after': 'error',
      'css-stylistic/block-closing-brace-newline-before': 'error',
      'css-stylistic/block-opening-brace-newline-after': 'error',
      'css-stylistic/block-opening-brace-space-before': 'error',
      'css-stylistic/color-hex-case': 'error',
      'css-stylistic/declaration-block-semicolon-newline-after': 'error',
      'css-stylistic/declaration-block-semicolon-space-before': 'error',
      'css-stylistic/declaration-block-trailing-semicolon': ['error', 'never'],
      'css-stylistic/declaration-colon-newline-after': ['error', 'always-multi-line'],
      'css-stylistic/declaration-colon-space-after': ['error', 'always-single-line'],
      'css-stylistic/declaration-colon-space-before': 'error',
      'css-stylistic/function-comma-newline-after': 'error',
      'css-stylistic/function-comma-newline-before': 'error',
      'css-stylistic/function-comma-space-after': 'error',
      'css-stylistic/function-comma-space-before': 'error',
      'css-stylistic/function-max-empty-lines': 'error',
      'css-stylistic/function-whitespace-after': 'error',
      'css-stylistic/indentation': 'error',
      'css-stylistic/max-empty-lines': ['error', 1],
      'css-stylistic/media-feature-name-case': 'error',
      'css-stylistic/media-feature-range-operator-space-after': 'error',
      'css-stylistic/media-feature-range-operator-space-before': 'error',
      'css-stylistic/named-grid-areas-alignment': 'error',
      'css-stylistic/no-empty-first-line': 'error',
      'css-stylistic/no-eol-whitespace': 'error',
      'css-stylistic/no-extra-semicolons': 'error',
      'css-stylistic/no-missing-end-of-source-newline': 'error',
      'css-stylistic/no-multiple-whitespaces': 'error',
      'css-stylistic/number-leading-zero': 'error',
      'css-stylistic/number-no-trailing-zeros': 'error',
      'css-stylistic/property-case': 'error',
      'css-stylistic/selector-list-comma-newline-after': ['error', 'always'],
      'css-stylistic/selector-max-empty-lines': 'error',
      'css-stylistic/selector-pseudo-class-case': 'error',
      'css-stylistic/selector-pseudo-element-case': 'error',
      'css-stylistic/string-quotes': 'error',
      'css-stylistic/unit-case': 'error',
      'css-stylistic/value-list-comma-space-after': 'error',
      'css-stylistic/value-list-comma-space-before': 'error',
      'css-stylistic/value-list-max-empty-lines': 'error'
    }
  }
]
