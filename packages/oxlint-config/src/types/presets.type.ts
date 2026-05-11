import type { OxlintConfig, DummyRule } from 'oxlint'
import type { presetEntries } from '../presets.ts'

export type PresetName = (typeof presetEntries)[number][0]
export type PresetMap = Record<PresetName, OxlintConfig>
export type Options = Partial<Record<PresetName, boolean>>
export type UserConfig = Omit<OxlintConfig, 'rules' | 'extends' | 'ignorePatterns'> & {
  rules?: Record<string, DummyRule>
  extends?: UserConfig[]
  ignorePatterns?: string[]
}
