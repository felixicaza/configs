import type { Linter } from 'eslint'
import type { PackageJsonOptions } from '../types/index.ts'

import { configs as configPackageJson } from 'eslint-plugin-package-json'

export function packageJson(options: PackageJsonOptions = {}): Linter.Config[] {
  return [
    options.publishable
      ? configPackageJson['recommended-publishable']
      : configPackageJson.recommended,
    configPackageJson.stylistic
  ]
}
