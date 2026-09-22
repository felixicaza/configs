import { describe, expect, it } from 'vitest'

import {
  antfu,
  antiSlop,
  complexity,
  e18e,
  eslint,
  importIntegrity,
  imports,
  jsdoc,
  noCommentSlop,
  node,
  oxc,
  promise,
  stylistic,
  typescript,
  vitest
} from '../src/configs/index.ts'
import { selectPresetConfigs } from '../src/utils/selectPresetConfigs.ts'

describe('utils/selectPresetConfigs', () => {
  it('returns empty list when all presets are disabled', () => {
    const result = selectPresetConfigs({
      antfu: false,
      antiSlop: false,
      complexity: false,
      e18e: false,
      eslint: false,
      importIntegrity: false,
      imports: false,
      jsdoc: false,
      noCommentSlop: false,
      node: false,
      oxc: false,
      promise: false,
      stylistic: false,
      typescript: false,
      vitest: false
    })

    expect(result).toEqual([])
  })

  it('selects only complexity preset when complexity is enabled', () => {
    const result = selectPresetConfigs({
      antfu: false,
      antiSlop: false,
      complexity: true,
      e18e: false,
      eslint: false,
      importIntegrity: false,
      imports: false,
      jsdoc: false,
      noCommentSlop: false,
      node: false,
      oxc: false,
      promise: false,
      stylistic: false,
      typescript: false,
      vitest: false
    })

    expect(result).toEqual([complexity])
  })

  it('selects only eslint and jsdoc presets when eslint and jsdoc are enabled', () => {
    const result = selectPresetConfigs({
      antfu: false,
      antiSlop: false,
      complexity: false,
      e18e: false,
      eslint: true,
      importIntegrity: false,
      imports: false,
      jsdoc: true,
      noCommentSlop: false,
      node: false,
      oxc: false,
      promise: false,
      stylistic: false,
      typescript: false,
      vitest: false
    })

    expect(result).toEqual([jsdoc, eslint])
  })

  it('selects all presets in declaration order when all are enabled', () => {
    const result = selectPresetConfigs({
      antfu: true,
      antiSlop: true,
      complexity: true,
      e18e: true,
      eslint: true,
      importIntegrity: true,
      imports: true,
      jsdoc: true,
      noCommentSlop: true,
      node: true,
      oxc: true,
      promise: true,
      stylistic: true,
      typescript: true,
      vitest: true
    })

    expect(result).toEqual([
      antfu,
      antiSlop,
      noCommentSlop,
      stylistic,
      jsdoc,
      e18e,
      complexity,
      imports,
      importIntegrity(),
      promise,
      node,
      eslint,
      oxc,
      typescript,
      vitest
    ])
  })
})
