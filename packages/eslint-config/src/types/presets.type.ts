import type { Linter } from 'eslint'

export type PresetName = 'astro' | 'css' | 'json' | 'packageJson' | 'pnpm' | 'yaml'
export type PresetMap = Record<PresetName, Linter.Config[]>
export type UserConfig = Linter.Config
export interface PackageJsonOptions {
  publishable?: boolean
}
export interface Options {
  astro?: boolean
  css?: boolean
  json?: boolean
  packageJson?: boolean | PackageJsonOptions
  pnpm?: boolean
  yaml?: boolean
}
