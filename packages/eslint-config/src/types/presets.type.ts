import type { Linter } from 'eslint'

export type PresetName = 'astro' | 'json' | 'packageJson' | 'yaml' | 'disables'
export type PresetMap = Record<PresetName, Linter.Config[]>
export type Options = Partial<Record<PresetName, boolean>>
export type UserConfig = Linter.Config
