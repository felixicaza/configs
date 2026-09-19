import type { Linter } from 'eslint'

export type PresetName = 'astro' | 'json' | 'packageJson' | 'yaml'
export type PresetMap = Record<PresetName, Linter.Config[]>
export type UserConfig = Linter.Config
export interface PackageJsonOptions {
  publishable?: boolean
}
export interface Options {
  astro?: boolean
  json?: boolean
  packageJson?: boolean | PackageJsonOptions
  yaml?: boolean
}
