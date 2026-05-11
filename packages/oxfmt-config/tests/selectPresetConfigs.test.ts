import { describe, expect, it } from 'vitest'

import { base, jsdoc, mdx, yaml } from '../src/configs/index.ts'
import { selectPresetConfigs } from '../src/utils/selectPresetConfigs.ts'

describe('utils/selectPresetConfigs', () => {
  it('returns empty list when all presets are disabled', () => {
    const result = selectPresetConfigs({
      base: false,
      jsdoc: false,
      mdx: false,
      yaml: false
    })

    expect(result).toEqual([])
  })

  it('selects only base preset when base is enabled', () => {
    const result = selectPresetConfigs({
      base: true,
      jsdoc: false,
      mdx: false,
      yaml: false
    })

    expect(result).toEqual([base])
  })

  it('selects only mdx preset when mdx is enabled', () => {
    const result = selectPresetConfigs({
      base: false,
      jsdoc: false,
      mdx: true,
      yaml: true
    })

    expect(result).toEqual([mdx, yaml])
  })

  it('selects all presets in declaration order when all are enabled', () => {
    const result = selectPresetConfigs({
      base: true,
      jsdoc: true,
      mdx: true,
      yaml: true
    })

    expect(result).toEqual([base, jsdoc, mdx, yaml])
  })
})
