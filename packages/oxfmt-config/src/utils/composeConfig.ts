import type { OxfmtConfig } from 'oxfmt'

function unique<T>(items: readonly T[] = []): T[] {
  return [...new Set(items)]
}

function mergeIgnorePatterns(left?: string[], right?: string[]): string[] {
  return unique([...(left ?? []), ...(right ?? [])])
}

function composeTwo(accumulator: OxfmtConfig, config: OxfmtConfig): OxfmtConfig {
  return {
    ...accumulator,
    ...config,
    overrides: [...(accumulator.overrides ?? []), ...(config.overrides ?? [])],
    ignorePatterns: mergeIgnorePatterns(
      accumulator.ignorePatterns as string[] | undefined,
      config.ignorePatterns as string[] | undefined
    )
  }
}

export function composeConfig(...configs: OxfmtConfig[]): OxfmtConfig {
  return configs.reduce(composeTwo, {} as OxfmtConfig)
}
