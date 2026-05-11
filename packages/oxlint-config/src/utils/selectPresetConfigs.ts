import type { OxlintConfig } from 'oxlint'
import type { Options, PresetMap, PresetName } from '../types/index.ts'

import { presetEntries } from '../presets.ts'

export function selectPresetConfigs(options: Required<Options>): OxlintConfig[] {
  const presets = Object.fromEntries(presetEntries) as PresetMap

  return (Object.keys(options) as PresetName[])
    .filter(name => options[name])
    .map(name => presets[name])
}
