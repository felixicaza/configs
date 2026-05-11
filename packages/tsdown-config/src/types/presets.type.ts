import type { UserConfig } from 'tsdown'

export type PresetName = 'dts' | 'staleGuard'
export type Options = Partial<Record<PresetName, boolean>>
export type PresetMap = Readonly<Record<PresetName, UserConfig>>
