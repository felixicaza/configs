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
