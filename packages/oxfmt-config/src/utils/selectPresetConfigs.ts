import type { OxfmtConfig } from 'oxfmt'
import type { Options, PresetMap, PresetName } from '../types/index.ts'

import { defaults } from '../configs/base.ts'
import { presetEntries } from '../presets.ts'

export function selectPresetConfigs(options: Required<Options>): OxfmtConfig[] {
  const presets = Object.fromEntries(presetEntries) as PresetMap

  const configs = (Object.keys(options) as PresetName[])
    .filter(name => options[name])
    .map(name => presets[name])

  return [defaults, ...configs]
}
