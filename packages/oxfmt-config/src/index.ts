import type { OxfmtConfig } from 'oxfmt'
import type { Options, UserConfig } from './types/index.ts'

import { GLOB_EXCLUDE } from './constants/glob.ts'
import { defaultOptions } from './presets.ts'
import { composeConfig } from './utils/composeConfig.ts'
import { selectPresetConfigs } from './utils/selectPresetConfigs.ts'

export function felixicaza(options: Options = {}, userConfigs: readonly UserConfig[] = []): OxfmtConfig {
  const resolved = { ...defaultOptions, ...options }
  const selected = selectPresetConfigs(resolved)
  const normalizedUserConfigs = userConfigs as OxfmtConfig[]

  return composeConfig(
    {
      ignorePatterns: GLOB_EXCLUDE
    },
    ...selected,
    ...normalizedUserConfigs
  )
}

export const felixicazaConfig: OxfmtConfig = felixicaza()
