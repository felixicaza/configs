import type { PresetName } from './types/index.ts'

import { dts, staleGuard } from './configs/index.ts'

export const presetEntries = [
  ['dts', dts],
  ['staleGuard', staleGuard]
] as const

export const defaultOptions: Readonly<Record<PresetName, boolean>> = {
  dts: true,
  staleGuard: true
}
