import type { OxlintConfig } from 'oxlint'
import type { Options } from '../types/index.ts'

import { presetEntries } from '../presets.ts'

export function selectPresetConfigs(options: Required<Options>): OxlintConfig[] {
  return presetEntries
    .filter(([name]) => options[name] !== false)
    .flatMap(([, createConfig]) => createConfig(options))
}
