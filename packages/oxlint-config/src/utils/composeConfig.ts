import type { OxlintConfig } from 'oxlint'

function unique<T>(items: readonly T[] = []): T[] {
  return [...new Set(items)]
}

function mergeObject<T extends Record<string, unknown>>(left?: T, right?: T): T | undefined {
  if (!left && !right) return undefined
  return { ...left, ...right } as T
}

function mergeIgnorePatterns(left?: string[], right?: string[]): string[] {
  return unique([...(left ?? []), ...(right ?? [])])
}

function composeTwo(accumulator: OxlintConfig, config: OxlintConfig): OxlintConfig {
  return {
    ...accumulator,
    ...config,
    options: {
      typeAware: true,
      typeCheck: true
    },
    rules: mergeObject(accumulator.rules, config.rules),
    env: mergeObject(accumulator.env, config.env),
    globals: mergeObject(accumulator.globals, config.globals),
    plugins: unique([...(accumulator.plugins ?? []), ...(config.plugins ?? [])]),
    jsPlugins: unique([...(accumulator.jsPlugins ?? []), ...(config.jsPlugins ?? [])]),
    overrides: [...(accumulator.overrides ?? []), ...(config.overrides ?? [])],
    ignorePatterns: mergeIgnorePatterns(
      accumulator.ignorePatterns as string[] | undefined,
      config.ignorePatterns as string[] | undefined
    )
  }
}

export function composeConfig(...configs: OxlintConfig[]): OxlintConfig {
  return configs.reduce(composeTwo, {} as OxlintConfig)
}
