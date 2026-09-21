import type { OxlintConfig } from 'oxlint'
import type { ImportIntegrityOptions } from '../types/index.ts'

import importIntegrityPlugin from 'import-integrity-lint'

/**
 * Import Integrity rules configuration.
 *
 * Import Integrity is a linter that analyzes the imports, exports and module
 * relationships across your codebase. It catches dead exports, broken boundaries,
 * common footguns, and other issues that accumulate as a codebase grows.
 * @see https://nebrius.github.io/import-integrity-lint/rules/
 */
export function importIntegrity(options: ImportIntegrityOptions = {}): OxlintConfig {
  if (options.monorepo) {
    return {
      settings: {
        'import-integrity': {
          monorepoRootDir: import.meta.dirname
        }
      },
      options: {
        // Avoid noise from package-specific configurations
        reportUnusedDisableDirectives: 'off'
      },
      // Use `import.meta.resolve()` due Oxlint does not resolve the plugin specifier
      jsPlugins: [
        {
          name: 'import-integrity',
          specifier: import.meta.resolve('import-integrity-lint')
        }
      ],
      rules: {
        ...importIntegrityPlugin.configs.monorepoRecommended.rules
      }
    }
  }

  return {
    settings: {
      'import-integrity': {
        packageRootDir: import.meta.dirname
      }
    },
    // Use `import.meta.resolve()` due Oxlint does not resolve the plugin specifier
    jsPlugins: [
      {
        name: 'import-integrity',
        specifier: import.meta.resolve('import-integrity-lint')
      }
    ],
    rules: {
      ...importIntegrityPlugin.configs.recommended.rules
    }
  }
}
