import type { UserConfig } from 'tsdown'
import type { Options, PresetMap, PresetName } from '../types/index.ts'

import { presetEntries } from '../presets.ts'

export function selectPresetConfigs(options: Required<Options>): UserConfig[] {
  const presets = Object.fromEntries(presetEntries) as PresetMap

  return (Object.keys(options) as PresetName[])
    .filter(name => options[name])
    .map(name => presets[name])
}
