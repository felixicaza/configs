import type { Linter } from 'eslint'

import { configs as configAstro } from 'eslint-plugin-astro'
import stylistic from '@stylistic/eslint-plugin'

export const astro: Linter.Config[] = [
  ...configAstro['flat/recommended'],
  ...configAstro['flat/jsx-a11y-recommended'],
  {
    name: 'felixicaza/astro',
    files: ['**/*.astro'],
    rules: {
      'astro/missing-client-only-directive-value': 'error',
      'astro/no-conflict-set-directives': 'error',
      'astro/no-deprecated-astro-canonicalurl': 'error',
      'astro/no-deprecated-astro-fetchcontent': 'error',
      'astro/no-deprecated-astro-resolve': 'error',
      'astro/no-deprecated-getentrybyslug': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'astro/valid-compile': 'error',
      'astro/no-prerender-export-outside-pages': 'error',
      'astro/no-unsafe-inline-scripts': ['error', {
        allowDefineVars: false,
        allowModuleScripts: false,
        allowNonExecutingTypes: ['application/ld+json', 'application/json'],
        allowNonce: false
      }],
      'astro/no-unused-css-selector': 'error',
      'astro/prefer-class-list-directive': 'error',
      'astro/prefer-object-class-list': 'error',
      'astro/prefer-split-class-list': ['error', { splitLiteral: true }],
      'astro/sort-attributes': ['error', { type: 'alphabetical', order: 'asc', ignoreCase: true }],

      'astro/jsx-a11y/alt-text': 'error',
      'astro/jsx-a11y/anchor-ambiguous-text': 'error',
      'astro/jsx-a11y/anchor-has-content': 'error',
      'astro/jsx-a11y/anchor-is-valid': 'error',
      'astro/jsx-a11y/aria-props': 'error',
      'astro/jsx-a11y/aria-proptypes': 'error',
      'astro/jsx-a11y/aria-role': 'error',
      'astro/jsx-a11y/aria-unsupported-elements': 'error',
      'astro/jsx-a11y/heading-has-content': 'error',
      'astro/jsx-a11y/html-has-lang': 'error',
      'astro/jsx-a11y/iframe-has-title': 'error',
      'astro/jsx-a11y/img-redundant-alt': 'error',
      'astro/jsx-a11y/label-has-associated-control': 'error',
      'astro/jsx-a11y/lang': 'error',
      'astro/jsx-a11y/mouse-events-have-key-events': 'error',
      'astro/jsx-a11y/no-access-key': 'error',
      'astro/jsx-a11y/no-aria-hidden-on-focusable': 'error',
      'astro/jsx-a11y/no-autofocus': 'error',
      'astro/jsx-a11y/no-distracting-elements': 'error',
      'astro/jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
      'astro/jsx-a11y/no-noninteractive-element-interactions': 'error',
      'astro/jsx-a11y/no-redundant-roles': 'error',
      'astro/jsx-a11y/no-static-element-interactions': 'error',
      'astro/jsx-a11y/prefer-tag-over-role': 'error',
      'astro/jsx-a11y/role-has-required-aria-props': 'error',
      'astro/jsx-a11y/role-supports-aria-props': 'error'
    }
  },
  {
    name: 'felixicaza/astro/style',
    files: ['**/*.astro'],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
      '@stylistic/block-spacing': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/comma-dangle': ['error', {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/comma-style': ['error', 'last'],
      '@stylistic/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/eol-last': 'error',
      '@stylistic/generator-star-spacing': ['error', { before: true, after: true }],
      '@stylistic/indent': ['error', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: ['TemplateLiteral *', 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
        offsetTernaryExpressions: true
      }],
      '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'non-jsx' }],
      '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
      '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/new-parens': 'error',
      '@stylistic/no-extra-parens': ['error', 'functions'],
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-mixed-operators': ['error', {
        groups: [
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: true
      }],
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
      '@stylistic/no-tabs': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before', '|>': 'before' } }],
      '@stylistic/padded-blocks': ['error', { blocks: 'never', switches: 'never', classes: 'never' }],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: 'never' }],
      '@stylistic/rest-spread-spacing': ['error', 'never'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/semi-spacing': ['error', { before: false, after: true }],
      '@stylistic/space-before-blocks': ['error', 'always'],
      '@stylistic/space-before-function-paren': ['error', 'never'],
      '@stylistic/space-in-parens': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/space-unary-ops': ['error', { words: true, nonwords: false }],
      '@stylistic/spaced-comment': ['error', 'always', {
        line: { markers: ['*package', '!', '/', ',', '='] },
        block: { balanced: true, markers: ['*package', '!', ',', ':', '::', 'flow-include'], exceptions: ['*'] }
      }],
      '@stylistic/template-curly-spacing': ['error', 'never'],
      '@stylistic/template-tag-spacing': ['error', 'never'],
      '@stylistic/wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],
      '@stylistic/yield-star-spacing': ['error', 'both']
    }
  },
  {
    name: 'felixicaza/astro/internal/style',
    files: ['**/*.astro/*.js', '**/*.astro/*.ts'],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': ['error', 2]
    }
  }
]
