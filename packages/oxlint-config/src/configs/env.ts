import type { OxlintConfig } from 'oxlint'

/**
 * Environment configuration.
 *
 * Configures the environments that the code is expected to run in, such as browser, Node.js, service workers, etc.
 * This helps Oxlint understand the global variables and APIs that are available in the codebase, allowing it to provide accurate linting results.
 * @see https://oxc.rs/docs/guide/usage/linter/config-file-reference.html#env
 */
export const env: OxlintConfig = {
  env: {
    builtin: true,
    browser: true,
    node: true,
    serviceworker: true,
    worker: true
  }
}
