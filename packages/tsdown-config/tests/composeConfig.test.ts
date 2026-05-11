import { describe, expect, it } from 'vitest'

import { dts } from '../src/configs/index.ts'
import { composeConfig } from '../src/utils/composeConfig.ts'

describe('utils/composeConfig', () => {
  it('returns empty object when no configs are passed', () => {
    expect(composeConfig()).toEqual({})
  })

  it('merges top-level options with last-write-wins behavior', () => {
    const result = composeConfig(
      {
        target: 'node18',
        minify: false
      },
      {
        minify: true
      }
    )

    expect(result).toEqual({
      target: 'node18',
      minify: true,
      plugins: []
    })
  })

  it('concatenates plugins preserving declaration order', () => {
    const result = composeConfig(dts)

    expect(result.plugins).toEqual([
      ...(Array.isArray(dts.plugins) ? dts.plugins : [])
    ])
  })
})
