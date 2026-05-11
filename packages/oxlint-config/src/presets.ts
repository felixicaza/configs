import type { PresetName } from './types/index.ts'

import { stylistic, jsdoc, complexity, imports, promise, node, eslint, oxc, typescript } from './configs/index.ts'

export const presetEntries = [
  ['stylistic', stylistic],
  ['jsdoc', jsdoc],
  ['complexity', complexity],
  ['imports', imports],
  ['promise', promise],
  ['node', node],
  ['eslint', eslint],
  ['oxc', oxc],
  ['typescript', typescript]
] as const

export const defaultOptions: Readonly<Record<PresetName, boolean>> = {
  stylistic: true,
  jsdoc: true,
  complexity: true,
  imports: true,
  promise: true,
  node: true,
  eslint: true,
  oxc: true,
  typescript: true
}
