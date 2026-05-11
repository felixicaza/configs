import type { Linter } from 'eslint'
import type { Options } from '../src/types/index.ts'

import { describe, expect, it } from 'vitest'

import { felixicaza, felixicazaConfig } from '../src/index.ts'
import { GLOB_EXCLUDE } from '../src/constants/glob.ts'

function findNamedConfig(configs: Linter.Config[], name: string): Linter.Config | undefined {
  return configs.find(config => config && typeof config === 'object' && 'name' in config && config.name === name)
}

const allDisabled: Required<Options> = {
  astro: false,
  json: false,
  packageJson: false,
  yaml: false,
  disables: false
}

describe('index public API', () => {
  it('builds default config with global ignores and presets', () => {
    const result = felixicaza()

    expect(result.length).toBeGreaterThan(1)
    expect(result[0]).toMatchObject({ ignores: GLOB_EXCLUDE })
    expect(findNamedConfig(result, 'felixicaza/astro')).toBeDefined()
    expect(findNamedConfig(result, 'felixicaza/json')).toBeDefined()
    expect(findNamedConfig(result, 'felixicaza/package-json')).toBeDefined()
    expect(findNamedConfig(result, 'felixicaza/yaml')).toBeDefined()
  })

  it('supports disabling all presets', () => {
    const result = felixicaza(allDisabled)

    expect(result).toHaveLength(1)
    expect(result[0]).toMatchObject({ ignores: GLOB_EXCLUDE })
  })

  it('appends user configs at the end', () => {
    const userConfig: Linter.Config = {
      name: 'user/custom',
      rules: {
        eqeqeq: 'error'
      }
    }

    const result = felixicaza(allDisabled, [userConfig])

    expect(result).toHaveLength(2)
    expect(result[0]).toMatchObject({ ignores: GLOB_EXCLUDE })
    expect(result[1]).toEqual(userConfig)
  })

  it('exports felixicazaConfig equivalent to default call', () => {
    const fromCall = felixicaza()

    expect(felixicazaConfig).toHaveLength(fromCall.length)

    expect(felixicazaConfig[0]).toMatchObject({ ignores: GLOB_EXCLUDE })
    expect(fromCall[0]).toMatchObject({ ignores: GLOB_EXCLUDE })

    expect(felixicazaConfig.slice(1)).toEqual(fromCall.slice(1))
  })
})
