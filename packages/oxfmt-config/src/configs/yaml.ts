import type { OxfmtConfig } from 'oxfmt'

/**
 * YAML configuration for Oxfmt.
 *
 * This configuration is tailored for projects that use YAML for configuration or data files.
 * It can include specific parser options, plugins, or rules that are relevant to YAML syntax and formatting.
 */
export const yaml: OxfmtConfig = {
  overrides: [
    {
      files: ['**/*.yaml', '**/*.yml'],
      options: {
        singleQuote: false,
        tabWidth: 3
      }
    }
  ]
}
