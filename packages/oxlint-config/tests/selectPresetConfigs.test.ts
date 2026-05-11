import { describe, expect, it } from 'vitest'

import { complexity, eslint, imports, jsdoc, node, oxc, promise, stylistic, typescript } from '../src/configs/index.ts'
import { selectPresetConfigs } from '../src/utils/selectPresetConfigs.ts'

describe('utils/selectPresetConfigs', () => {
  it('returns empty list when all presets are disabled', () => {
    const result = selectPresetConfigs({
      complexity: false,
      eslint: false,
      imports: false,
      jsdoc: false,
      node: false,
      oxc: false,
      promise: false,
      stylistic: false,
      typescript: false
    })

    expect(result).toEqual([])
  })

  it('selects only complexity preset when complexity is enabled', () => {
    const result = selectPresetConfigs({
      complexity: true,
      eslint: false,
      imports: false,
      jsdoc: false,
      node: false,
      oxc: false,
      promise: false,
      stylistic: false,
      typescript: false
    })

    expect(result).toEqual([complexity])
  })

  it('selects only eslint and jsdoc presets when eslint and jsdoc are enabled', () => {
    const result = selectPresetConfigs({
      complexity: false,
      eslint: true,
      imports: false,
      jsdoc: true,
      node: false,
      oxc: false,
      promise: false,
      stylistic: false,
      typescript: false
    })

    expect(result).toEqual([eslint, jsdoc])
  })

  it('selects all presets in declaration order when all are enabled', () => {
    const result = selectPresetConfigs({
      complexity: true,
      eslint: true,
      imports: true,
      jsdoc: true,
      node: true,
      oxc: true,
      promise: true,
      stylistic: true,
      typescript: true
    })

    expect(result).toEqual([complexity, eslint, imports, jsdoc, node, oxc, promise, stylistic, typescript])
  })
})
