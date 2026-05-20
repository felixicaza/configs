import { describe, expect, it } from 'vitest'

import { base, jsdoc, mdx, yaml, packageJson } from '../src/configs/index.ts'
import { defaults } from '../src/configs/base.ts'
import { selectPresetConfigs } from '../src/utils/selectPresetConfigs.ts'

describe('utils/selectPresetConfigs', () => {
  it('returns only defaults when all presets are disabled', () => {
    const result = selectPresetConfigs({
      base: false,
      jsdoc: false,
      mdx: false,
      yaml: false,
      packageJson: false
    })

    expect(result).toEqual([defaults])
  })

  it('selects only base preset when base is enabled', () => {
    const result = selectPresetConfigs({
      base: true,
      jsdoc: false,
      mdx: false,
      yaml: false,
      packageJson: false
    })

    expect(result).toEqual([defaults, base])
  })

  it('selects only mdx and yaml presets when they are enabled', () => {
    const result = selectPresetConfigs({
      base: false,
      jsdoc: false,
      mdx: true,
      yaml: true,
      packageJson: false
    })

    expect(result).toEqual([defaults, mdx, yaml])
  })

  it('selects all presets in declaration order when all are enabled', () => {
    const result = selectPresetConfigs({
      base: true,
      jsdoc: true,
      mdx: true,
      yaml: true,
      packageJson: true
    })

    expect(result).toEqual([defaults, base, jsdoc, mdx, yaml, packageJson])
  })
})
