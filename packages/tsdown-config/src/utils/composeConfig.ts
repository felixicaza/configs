import type { UserConfig } from 'tsdown'

function toPluginArray(plugins: UserConfig['plugins']) {
  if (plugins == null || plugins === false) { return [] }

  return Array.isArray(plugins) ? plugins : [plugins]
}

function composeTwo(accumulator: UserConfig, config: UserConfig): UserConfig {
  return {
    ...accumulator,
    ...config,
    plugins: [...toPluginArray(accumulator.plugins), ...toPluginArray(config.plugins)]
  }
}

export function composeConfig(...configs: UserConfig[]): UserConfig {
  return configs.reduce(composeTwo, {} as UserConfig)
}
