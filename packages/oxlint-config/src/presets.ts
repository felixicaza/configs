import type { OxlintConfig } from 'oxlint'
import type { Options, PresetName, PresetOptionsMap, ResolvedOptions } from './types/index.ts'

import {
  antfu,
  antiSlop,
  noCommentSlop,
  stylistic,
  jsdoc,
  e18e,
  complexity,
  imports,
  importIntegrity,
  promise,
  node,
  eslint,
  oxc,
  typescript,
  unicorn,
  vitest
} from './configs/index.ts'

type PresetFactory = (options: ResolvedOptions) => OxlintConfig[]
type PresetEntry = readonly [PresetName, PresetFactory]
type PresetOptionResolvers = {
  [K in keyof PresetOptionsMap]: (value: Required<Options>[K]) => PresetOptionsMap[K]
}

export const presetEntries: readonly PresetEntry[] = [
  ['antfu', () => [antfu]],
  ['antiSlop', () => [antiSlop]],
  ['noCommentSlop', () => [noCommentSlop]],
  ['stylistic', () => [stylistic]],
  ['jsdoc', () => [jsdoc]],
  ['e18e', () => [e18e]],
  ['complexity', () => [complexity]],
  ['imports', () => [imports]],
  ['importIntegrity', options => [importIntegrity(options.importIntegrity)]],
  ['promise', () => [promise]],
  ['node', () => [node]],
  ['eslint', () => [eslint]],
  ['oxc', () => [oxc]],
  ['typescript', () => [typescript]],
  ['unicorn', () => [unicorn]],
  ['vitest', () => [vitest]]
]

export const defaultOptions: Required<Options> = {
  antfu: true,
  antiSlop: true,
  noCommentSlop: true,
  stylistic: true,
  jsdoc: true,
  e18e: true,
  complexity: true,
  imports: true,
  importIntegrity: true,
  promise: true,
  node: true,
  eslint: true,
  oxc: true,
  typescript: true,
  unicorn: true,
  vitest: false
}

/**
 * Resolves configurable preset values into their concrete options.
 *
 * Boolean values use the preset's default options, while explicit option objects are returned unchanged.
 * @returns A map of resolvers for configurable preset options.
 */
export const presetOptionResolvers = {
  importIntegrity: (value) => {
    if (value === true || value === false) return {}
    return value
  }
} satisfies PresetOptionResolvers
