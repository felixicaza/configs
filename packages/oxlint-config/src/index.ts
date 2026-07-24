import type { OxlintConfig } from 'oxlint'
import type { Options, UserConfig } from './types/index.ts'

import { GLOB_EXCLUDE } from './constants/glob.ts'
import { defaultOptions } from './presets.ts'
import { env, typeaware } from './configs/index.ts'
import { composeConfig } from './utils/composeConfig.ts'
import { selectPresetConfigs } from './utils/selectPresetConfigs.ts'

export function felixicaza(options: Options = {}, userConfigs: readonly UserConfig[] = []): OxlintConfig {
  const resolved = { ...defaultOptions, ...options }
  const selected = selectPresetConfigs(resolved)
  const normalizedUserConfigs = userConfigs as OxlintConfig[]

  return composeConfig(
    env,
    typeaware,
    {
      ignorePatterns: GLOB_EXCLUDE
    },
    ...selected,
    ...normalizedUserConfigs
  )
}

export const felixicazaConfig: OxlintConfig = felixicaza()
