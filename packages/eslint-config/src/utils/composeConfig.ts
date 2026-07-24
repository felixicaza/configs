import type { Linter } from 'eslint'
import type { FlatConfigInput } from '../types/index.ts'

function unique(items: readonly string[] = []): string[] {
  return [...new Set(items)]
}

function isSingleConfig(config: FlatConfigInput): config is Linter.Config {
  return !Array.isArray(config)
}

function isGlobalIgnoreOnlyConfig(config: unknown): config is Linter.Config & { ignores: string[] } {
  if (!config || typeof config !== 'object') return false

  const maybeConfig = config as Partial<Linter.Config>
  if (!Array.isArray(maybeConfig.ignores)) return false

  const keys = Object.keys(config)
  return keys.every(key => key === 'ignores' || key === 'name')
}

export function composeConfig(...configs: readonly FlatConfigInput[]): Linter.Config[] {
  const flattened: Linter.Config[] = configs.flatMap((config): Linter.Config[] => {
    if (config == null) return []

    if (isSingleConfig(config)) {
      return [config]
    }

    return config.filter((item): item is Linter.Config => item != null)
  })

  let mergedGlobalIgnores: string[] = []
  let firstGlobalIgnoreIndex = -1
  const merged: Linter.Config[] = []

  for (const config of flattened) {
    if (isGlobalIgnoreOnlyConfig(config)) {
      mergedGlobalIgnores = unique([...mergedGlobalIgnores, ...(config.ignores ?? [])])

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
