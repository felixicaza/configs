import type { OxlintConfig } from 'oxlint'

/**
 * Anti Slop rules configuration.
 *
 * Opinionated Oxlint rules for rejecting low-evidence TypeScript and JavaScript patterns.
 * @see https://github.com/kamaal111/anti-slop
 */
export const antiSlop: OxlintConfig = {
  // Use `import.meta.resolve()` due Oxlint does not resolve the plugin specifier
  jsPlugins: [import.meta.resolve('@kamaal111/oxlint-plugin-anti-slop')],
  rules: {
    'anti-slop/no-array-filter-map': 'error',
    'anti-slop/no-chained-type-assertions': 'error',
    'anti-slop/no-conditional-empty-object-spread': 'error',
    'anti-slop/no-known-value-widening': 'error',
    'anti-slop/no-module-mocking': 'error',
    'anti-slop/no-object-parameters': 'error',
    'anti-slop/no-reduce-accumulator-copy': 'error',
    'anti-slop/no-reflect-apply': 'error',
    'anti-slop/no-reflect-get': 'error',
    'anti-slop/no-runtime-typeof': 'error',
    'anti-slop/no-shape-in-symbol-names': 'error',
    'anti-slop/no-unknown-parameters': 'error',
    'anti-slop/no-unknown-returns': 'error',
    'anti-slop/no-unknown-type-aliases': 'error',
    'anti-slop/no-unsafe-dictionary-type': 'error',
    'anti-slop/no-widen-then-assert': 'error',
    'anti-slop/require-safety-comment-for-type-assertion': 'error'
  }
}
