import type { Linter } from 'eslint'
import type { Options, UserConfig } from './types/index.ts'

import { globalIgnores } from 'eslint/config'

import { GLOB_EXCLUDE } from './constants/glob.ts'
import { defaultOptions } from './presets.ts'
import { composeConfig } from './utils/composeConfig.ts'
import { selectPresetConfigs } from './utils/selectPresetConfigs.ts'

export function felixicaza(options: Options = {}, userConfigs: readonly UserConfig[] = []): Linter.Config[] {
  const resolved = { ...defaultOptions, ...options }
  const selected = selectPresetConfigs(resolved as Required<Options>)

  return composeConfig(
    globalIgnores(GLOB_EXCLUDE),
    selected,
    userConfigs
  )
}

export const felixicazaConfig: Linter.Config[] = felixicaza()
