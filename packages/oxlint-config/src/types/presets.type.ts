import type { DummyRule, OxlintConfig } from 'oxlint'

type BooleanPresetName = Exclude<PresetName, keyof PresetOptionsMap>

export type PresetMap = Record<PresetName, OxlintConfig>

export interface ImportIntegrityOptions {
  monorepo?: boolean
}

export interface PresetOptionsMap {
  importIntegrity: ImportIntegrityOptions
}

export type ResolvedOptions = { [Preset in BooleanPresetName]: boolean } & {
  [Preset in keyof PresetOptionsMap]: PresetOptionsMap[Preset]
}

export type Options = {
  [Preset in BooleanPresetName]?: boolean
} & {
  [Preset in keyof PresetOptionsMap]?: boolean | PresetOptionsMap[Preset]
}

export type UserConfig = Omit<OxlintConfig, 'rules' | 'extends' | 'ignorePatterns'> & {
  rules?: Record<string, DummyRule>
  extends?: UserConfig[]
  ignorePatterns?: string[]
}

export type PresetName =
  | 'antfu'
  | 'antiSlop'
  | 'noCommentSlop'
  | 'stylistic'
  | 'jsdoc'
  | 'e18e'
  | 'complexity'
  | 'imports'
  | 'importIntegrity'
  | 'promise'
  | 'node'
  | 'eslint'
  | 'oxc'
  | 'typescript'
  | 'unicorn'
  | 'vitest'
