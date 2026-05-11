import { describe, expect, it } from 'vitest'

import { astro, disables, json, packageJson, yaml } from '../src/configs/index.ts'
import { selectPresetConfigs } from '../src/utils/selectPresetConfigs.ts'

describe('utils/selectPresetConfigs', () => {
  it('returns empty list when all presets are disabled', () => {
    const result = selectPresetConfigs({
      astro: false,
      json: false,
      packageJson: false,
      yaml: false,
      disables: false
    })

    expect(result).toEqual([])
  })

  it('selects only astro preset when astro is enabled', () => {
    const result = selectPresetConfigs({
      astro: true,
      json: false,
      packageJson: false,
      yaml: false,
      disables: false
    })

    expect(result).toEqual(astro)
  })

  it('selects only json and packageJson presets when json and packageJson are enabled', () => {
    const result = selectPresetConfigs({
      astro: false,
      disables: false,
      json: true,
      packageJson: true,
      yaml: false
    })

    expect(result).toEqual([...json, ...packageJson])
  })

  it('selects all presets in declaration order when all are enabled', () => {
    const result = selectPresetConfigs({
      astro: true,
      disables: true,
      json: true,
      packageJson: true,
      yaml: true
    })

    expect(result).toEqual([...astro, ...disables, ...json, ...packageJson, ...yaml])
  })
})
