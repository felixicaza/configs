import type { Linter } from 'eslint'
import type { PackageJsonOptions } from '../types/index.ts'

import { configs as packageJsonPlugin } from 'eslint-plugin-package-json'

export function packageJson(options: PackageJsonOptions = {}): Linter.Config[] {
  return [
    options.publishable
      ? packageJsonPlugin['recommended-publishable']
      : packageJsonPlugin.recommended,
    packageJsonPlugin.stylistic
  ]
}
