import type { OxfmtConfig, OxfmtOverrideConfig } from 'oxfmt'
import type { presetEntries } from '../presets.ts'

export type PresetName = (typeof presetEntries)[number][0]
export type PresetMap = Record<PresetName, OxfmtConfig>
export type Options = Partial<Record<PresetName, boolean>>
export type UserConfig = Omit<OxfmtConfig, 'overrides'> & {
  overrides?: OxfmtOverrideConfig[]
}
