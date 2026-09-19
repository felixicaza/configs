import type { Linter } from 'eslint'
import type { Options } from '../types/index.ts'

import { presetEntries } from '../presets.ts'

export function selectPresetConfigs(options: Required<Options>): Linter.Config[] {
  return presetEntries
    .filter(([name]) => options[name] !== false)
    .flatMap(([, createConfig]) => createConfig(options))
}
