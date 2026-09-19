import type { Linter } from 'eslint'
import type { Options, PresetName } from './types/index.ts'

import { astro, json, packageJson, yaml } from './configs/index.ts'

type ResolvedOptions = Required<Options>
type PresetFactory = (options: ResolvedOptions) => Linter.Config[]

export const presetEntries: readonly [PresetName, PresetFactory][] = [
  ['astro', () => astro],
  ['json', () => json],
  [
    'packageJson',
    options => packageJson(typeof options.packageJson === 'object' ? options.packageJson : {})
  ],
  ['yaml', () => yaml]
]

export const defaultOptions: ResolvedOptions = {
  astro: true,
  json: true,
  packageJson: {},
  yaml: true
}
