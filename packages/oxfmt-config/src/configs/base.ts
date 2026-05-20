import type { OxfmtConfig } from 'oxfmt'

/**
 * Base configuration for Oxfmt.
 *
 * This configuration serves as the foundation for all other configurations in this project.
 * It includes common settings and rules that are shared across different environments and file types.
 */
export const base: OxfmtConfig = {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none'
}

/**
 * Default configuration that is always applied regardless of presets.
 *
 * Disable sorting of package.json due that is enabled by default in Oxfmt.
 * @see https://oxc.rs/docs/guide/usage/formatter/sorting.html#sort-package-json-fields
 */
export const defaults: OxfmtConfig = {
  sortPackageJson: false
}
