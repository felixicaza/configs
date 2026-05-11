import type { UserConfig } from 'tsdown'
import type { Options } from '../src/types/index.ts'

import { describe, expect, it } from 'vitest'

import { dts, staleGuard } from '../src/configs/index.ts'
import { felixicaza, felixicazaConfig } from '../src/index.ts'

const allDisabled: Required<Options> = {
  dts: false,
  staleGuard: false
}

describe('index public API', () => {
  it('builds default config with base options and all preset plugins', () => {
    const result = felixicaza()

    expect(result.target).toBe('node24')
    expect(result.minify).toBe(true)
    expect(result.plugins).toEqual([
      ...(Array.isArray(dts.plugins) ? dts.plugins : []),
      ...(Array.isArray(staleGuard.plugins) ? staleGuard.plugins : [])
    ])
  })

  it('supports disabling all presets', () => {
    const result = felixicaza(allDisabled)

    expect(result).toMatchObject({
      target: 'node24',
      minify: true
    })
    expect(result.plugins).toEqual([])
  })

  it('applies user configs at the end with last-write-wins behavior', () => {
    const userConfig: UserConfig = {
      minify: false
    }

    const result = felixicaza(allDisabled, [userConfig])

    expect(result).toMatchObject({
      target: 'node24',
      minify: false
    })
    expect(result.plugins).toEqual([])
  })

  it('exports felixicazaConfig equivalent to default call', () => {
    expect(felixicazaConfig).toEqual(felixicaza())
  })
})
