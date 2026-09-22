import type { Linter } from 'eslint'

type BooleanPresetName = Exclude<PresetName, keyof PresetOptionsMap>

export type PresetMap = Record<PresetName, Linter.Config[]>

export interface PackageJsonOptions {
  publishable?: boolean
}

export interface PresetOptionsMap {
  packageJson: PackageJsonOptions
}

export type ResolvedOptions = { [Preset in BooleanPresetName]: boolean } & {
  [Preset in keyof PresetOptionsMap]: PresetOptionsMap[Preset]
}

export type Options = { [Preset in BooleanPresetName]?: boolean } & {
  [Preset in keyof PresetOptionsMap]?: boolean | PresetOptionsMap[Preset]
}

export type UserConfig = Linter.Config

export type PresetName =
  | 'astro'
  | 'css'
  | 'json'
  | 'packageJson'
  | 'pnpm'
  | 'yaml'
