import type { Linter } from 'eslint'
import type { Options, PresetMap, PresetName } from '../types/index.ts'

import { astro, disables, json, packageJson, yaml } from '../configs/index.ts'

const presetEntries = [
  ['astro', astro],
  ['json', json],
  ['packageJson', packageJson],
  ['yaml', yaml],
  ['disables', disables]
] as const

export function selectPresetConfigs(options: Required<Options>): Linter.Config[] {
  const presets = Object.fromEntries(presetEntries) as PresetMap

  return (Object.keys(options) as PresetName[])
    .filter(name => options[name])
    .flatMap(name => presets[name])
}
