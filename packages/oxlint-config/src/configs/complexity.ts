import type { OxlintConfig } from 'oxlint'

/**
 * Complexity rules configuration.
 *
 * Complexity rules for cyclomatic complexity and cognitive complexity.
 * These rules help identify and manage code that may be difficult to understand or maintain due to its complexity.
 * @see https://github.com/itaymendel/oxlint-plugin-complexity
 */
export const complexity: OxlintConfig = {
  // Use `import.meta.resolve()` due Oxlint does not resolve the plugin specifier
  jsPlugins: [import.meta.resolve('oxlint-plugin-complexity')],
  rules: {
    'complexity/complexity': 'error'
  }
}
