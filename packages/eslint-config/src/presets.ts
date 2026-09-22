import type { Linter } from 'eslint'
import type { Options, PresetName, PresetOptionsMap, ResolvedOptions } from './types/index.ts'

import { astro, css, json, packageJson, pnpm, yaml } from './configs/index.ts'

type PresetFactory = (options: ResolvedOptions) => Linter.Config[]
type PresetEntry = readonly [PresetName, PresetFactory]
type PresetOptionResolvers = {
  [K in keyof PresetOptionsMap]: (value: Required<Options>[K]) => PresetOptionsMap[K]
}

export const presetEntries: readonly PresetEntry[] = [
  ['astro', () => astro],
  ['css', () => css],
  ['json', () => json],
  ['packageJson', options => packageJson(options.packageJson)],
  ['pnpm', () => pnpm],
  ['yaml', () => yaml]
]

export const defaultOptions: Required<Options> = {
  astro: true,
  css: true,
  json: true,
  packageJson: true,
  pnpm: false,
  yaml: true
}

/**
 * Resolves configurable preset values into their concrete options.
 *
 * Boolean values use the preset's default options, while explicit option objects are returned unchanged.
 * @returns A map of resolvers for configurable preset options.
 */
export const presetOptionResolvers = {
  packageJson: value => {
    if (value === true || value === false) return {}
    return value
  }
} satisfies PresetOptionResolvers
