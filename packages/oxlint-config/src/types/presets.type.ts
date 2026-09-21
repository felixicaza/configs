import type { DummyRule, OxlintConfig } from 'oxlint'

type BooleanPresetName = Exclude<PresetName, 'importIntegrity'>

export type PresetName =
  | 'stylistic' |
  'jsdoc' |
  'e18e' |
  'complexity' |
  'imports' |
  'importIntegrity' |
  'promise' |
  'node' |
  'eslint' |
  'oxc' |
  'typescript' |
  'vitest'
export interface ImportIntegrityOptions {
  monorepo?: boolean
}
export type Options = {
  [Preset in BooleanPresetName]?: boolean
} & {
  importIntegrity?: boolean | ImportIntegrityOptions
}
export type PresetMap = Record<PresetName, OxlintConfig>
export type UserConfig = Omit<OxlintConfig, 'rules' | 'extends' | 'ignorePatterns'> & {
  rules?: Record<string, DummyRule>
  extends?: UserConfig[]
  ignorePatterns?: string[]
}
