import { describe, expect, it } from 'vitest'

import { dts, staleGuard } from '../src/configs/index.ts'
import { selectPresetConfigs } from '../src/utils/selectPresetConfigs.ts'

describe('utils/selectPresetConfigs', () => {
  it('returns empty list when all presets are disabled', () => {
    const result = selectPresetConfigs({
      dts: false,
      staleGuard: false
    })

    expect(result).toEqual([])
  })

  it('selects only dts preset when dts is enabled', () => {
    const result = selectPresetConfigs({
      dts: true,
      staleGuard: false
    })

    expect(result).toEqual([dts])
  })

  it('selects all presets in declaration order when all are enabled', () => {
    const result = selectPresetConfigs({
      dts: true,
      staleGuard: true
    })

    expect(result).toEqual([dts, staleGuard])
  })
})
