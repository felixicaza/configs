import type { OxlintConfig } from 'oxlint'

/**
 * TypeScript rules configuration.
 *
 * TypeScript rules help ensure that your code follows best practices and avoids common pitfalls when using TypeScript.
 * @see https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=typescript
 */
export const typescript: OxlintConfig = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx'],
      plugins: ['typescript'],
      rules: {
        'getter-return': 'off',
        'constructor-super': 'off',
        'no-const-assign': 'off',
        'no-dupe-class-members': 'off',
        'no-dupe-keys': 'off',
        'no-func-assign': 'off',
        'no-import-assign': 'off',
        'no-new-native-nonconstructor': 'off',
        'no-obj-calls': 'off',
        'no-redeclare': 'off',
        'no-setter-return': 'off',
        'no-this-before-super': 'off',
        'no-undef': 'off',
        'no-unreachable': 'off',
        'no-unsafe-negation': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'require-await': 'off',
        'typescript/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
        'typescript/consistent-type-definitions': ['error', 'interface'],
        'typescript/consistent-type-imports': ['error', {
          disallowTypeAnnotations: false,
          fixStyle: 'separate-type-imports',
          prefer: 'type-imports'
        }],
        'typescript/no-dupe-class-members': 'error',
        'typescript/no-dynamic-delete': 'off',
        'typescript/no-empty-object-type': ['error', { allowInterfaces: 'always' }],
        'typescript/no-explicit-any': 'off',
        'typescript/no-extraneous-class': 'off',
        'typescript/no-import-type-side-effects': 'error',
        'typescript/no-invalid-void-type': 'off',
        'typescript/no-non-null-assertion': 'off',
        'typescript/no-redeclare': ['error', { builtinGlobals: false }],
        'typescript/no-require-imports': 'error',
        'typescript/no-unused-expressions': ['error', {
          allowShortCircuit: true,
          allowTaggedTemplates: true,
          allowTernary: true
        }],
        'typescript/no-unused-vars': 'off',
        'typescript/no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
        'typescript/no-useless-constructor': 'off',
        'typescript/no-wrapper-object-types': 'error',
        'typescript/require-await': 'error',
        'typescript/triple-slash-reference': 'off',
        'typescript/unified-signatures': 'off'
        // 'typescript/method-signature-style': ['error', 'property'],
      }
    }
  ]
}
