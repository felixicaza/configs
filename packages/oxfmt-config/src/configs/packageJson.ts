import type { OxfmtConfig } from 'oxfmt'

/**
 * Package json order configuration for Oxfmt.
 *
 * This configuration is designed to enforce a specific order of properties in package.json files.
 * Displaying properties in a predefined order can help maintain consistency and readability.
 */
export const packageJson: OxfmtConfig = {
  sortPackageJson: {
    sortScripts: true
  }
}
