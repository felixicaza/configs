import { describe, expect, it } from 'vitest'

import { astro, css, json, packageJson, pnpm, yaml } from '../src/configs/index.ts'
import { selectPresetConfigs } from '../src/utils/selectPresetConfigs.ts'

describe('utils/selectPresetConfigs', () => {
  it('returns empty list when all presets are disabled', () => {
    const result = selectPresetConfigs({
      astro: false,
      css: false,
      json: false,
      packageJson: false,
      pnpm: false,
      yaml: false
    })

    expect(result).toEqual([])
  })

  it('selects only astro preset when astro is enabled', () => {
    const result = selectPresetConfigs({
      astro: true,
      css: false,
      json: false,
      packageJson: false,
      pnpm: false,
      yaml: false
    })

    expect(result).toEqual(astro)
  })

  it('selects only json and packageJson presets when json and packageJson are enabled', () => {
    const result = selectPresetConfigs({
      astro: false,
      css: false,
      json: true,
      packageJson: true,
      pnpm: false,
      yaml: false
    })

    expect(result).toEqual([...json, ...packageJson()])
  })

  it('selects all presets in declaration order when all are enabled', () => {
    const result = selectPresetConfigs({
      astro: true,
      css: true,
      json: true,
      packageJson: true,
      pnpm: true,
      yaml: true
    })

    expect(result).toEqual([...astro, ...css, ...json, ...packageJson(), ...pnpm, ...yaml])
  })
})
