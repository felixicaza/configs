import type { Linter } from 'eslint'
import type { FlatConfigInput } from '../types/index.ts'

function unique(items: readonly string[] = []): string[] {
  return [...new Set(items)]
}

function isSingleConfig(config: FlatConfigInput): config is Linter.Config {
  return !Array.isArray(config)
}

function isGlobalIgnoreOnlyConfig(config: Linter.Config): config is Linter.Config & { ignores: string[] } {
  if (!Array.isArray(config.ignores)) return false

  const keys = Object.keys(config)
  return keys.every(key => key === 'ignores' || key === 'name')
}

export function composeConfig(...configs: Array<FlatConfigInput | undefined>): Linter.Config[] {
  const definedConfigs = configs.filter((config): config is FlatConfigInput => config !== undefined)
  const flattened: Linter.Config[] = definedConfigs.flatMap((config): Linter.Config[] => {
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
