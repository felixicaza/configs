import type { PresetName } from './types/index.ts'

import { base, jsdoc, mdx, yaml, packageJson } from './configs/index.ts'

export const presetEntries = [
  ['base', base],
  ['jsdoc', jsdoc],
  ['mdx', mdx],
  ['yaml', yaml],
  ['packageJson', packageJson]
] as const

export const defaultOptions: Readonly<Record<PresetName, boolean>> = {
  base: true,
  jsdoc: true,
  mdx: true,
  yaml: true,
  packageJson: false
}
