import type { OxfmtConfig } from 'oxfmt'

/**
 * MDX configuration for Oxfmt.
 *
 * This configuration is tailored for projects that use MDX for writing content with embedded JSX.
 * It can include specific parser options, plugins, or rules that are relevant to MDX syntax and formatting.
 */
export const mdx: OxfmtConfig = {
  overrides: [
    {
      files: ['**/*.mdx'],
      options: {
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'ignore'
      }
    }
  ]
}
