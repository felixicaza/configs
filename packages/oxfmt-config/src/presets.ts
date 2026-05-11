import type { PresetName } from './types/index.ts'

import { base, jsdoc, mdx, yaml } from './configs/index.ts'

export const presetEntries = [
  ['base', base],
  ['jsdoc', jsdoc],
  ['mdx', mdx],
  ['yaml', yaml]
] as const

export const defaultOptions: Readonly<Record<PresetName, boolean>> = {
  base: true,
  jsdoc: true,
  mdx: true,
  yaml: true
}
