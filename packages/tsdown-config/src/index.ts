import type { UserConfig } from 'tsdown'
import type { Options } from './types/index.ts'

import { base } from './configs/index.ts'
import { defaultOptions } from './presets.ts'
import { composeConfig } from './utils/composeConfig.ts'
import { selectPresetConfigs } from './utils/selectPresetConfigs.ts'

export function felixicaza(options: Options = {}, userConfigs: readonly UserConfig[] = []): UserConfig {
  const resolved = { ...defaultOptions, ...options }
  const selected = selectPresetConfigs(resolved)

  return composeConfig(
    base,
    ...selected,
    ...userConfigs
  )
}

export const felixicazaConfig: UserConfig = felixicaza()
