import type { Linter } from 'eslint'
import type { FlatConfigInput } from '../types/index.ts'

function unique(items: readonly string[] = []): string[] {
  return [...new Set(items)]
}

function isGlobalIgnoreOnlyConfig(config: Linter.Config): config is Linter.Config & { ignores: string[] } {
  if (!Array.isArray(config.ignores)) { return false }

  const keys = Object.keys(config)
  return keys.every(key => key === 'ignores' || key === 'name')
}

export function composeConfig(...configs: readonly FlatConfigInput[]): Linter.Config[] {
  const flattened = configs.flatMap(config => Array.isArray(config) ? [...config] : [config])

  let mergedGlobalIgnores: string[] = []
  let firstGlobalIgnoreIndex = -1
  const merged: Linter.Config[] = []

  for (const config of flattened) {
    if (isGlobalIgnoreOnlyConfig(config)) {
      mergedGlobalIgnores = unique([...(mergedGlobalIgnores ?? []), ...(config.ignores ?? [])])

      if (firstGlobalIgnoreIndex === -1) {
        firstGlobalIgnoreIndex = merged.length
        merged.push(config)
      }

      continue
    }

    merged.push(config)
  }

  if (firstGlobalIgnoreIndex !== -1) {
    const firstGlobalIgnore = merged[firstGlobalIgnoreIndex]
    merged[firstGlobalIgnoreIndex] = {
      ...firstGlobalIgnore,
      ignores: mergedGlobalIgnores
    }
  }

  return merged
}
