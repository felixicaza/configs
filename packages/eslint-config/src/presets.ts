import type { PresetName } from './types/index.ts'

import { astro, json, packageJson, yaml } from './configs/index.ts'

export const presetEntries = [
  ['astro', astro],
  ['json', json],
  ['packageJson', packageJson],
  ['yaml', yaml]
] as const

export const defaultOptions: Readonly<Record<PresetName, boolean>> = {
  astro: true,
  json: true,
  packageJson: true,
  yaml: true
}
