import type { Linter } from 'eslint'
import type { Options, PresetOptionsMap, ResolvedOptions } from '../types/index.ts'

import { presetEntries, presetOptionResolvers } from '../presets.ts'

function resolveOptions(options: Required<Options>): ResolvedOptions {
  const resolvedOptions = { ...options }

  // SAFETY: presetOptionResolvers contains exactly the configurable preset names
  for (const name of Object.keys(presetOptionResolvers) as Array<keyof PresetOptionsMap>) {
    const resolve = presetOptionResolvers[name]
    resolvedOptions[name] = resolve(options[name])
  }

  // SAFETY: every configurable preset has been normalized, and all remaining options are booleans
  return resolvedOptions as ResolvedOptions
}

export function selectPresetConfigs(options: Required<Options>): Linter.Config[] {
  const resolvedOptions = resolveOptions(options)

  return presetEntries
    .filter(([name]) => options[name] !== false)
    .flatMap(([, createConfig]) => createConfig(resolvedOptions))
}
