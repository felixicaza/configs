import type { OxfmtConfig } from 'oxfmt'

/**
 * JSDoc configuration for Oxfmt.
 *
 * This configuration is tailored for projects that use JSDoc for documentation.
 * It can include specific parser options, plugins, or rules that are relevant to JSDoc comments and annotations.
 */
export const jsdoc: OxfmtConfig = {
  jsdoc: {
    commentLineStrategy: 'multiline',
    descriptionWithDot: true,
    preferCodeFences: true
  }
}
