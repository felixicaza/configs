import type { OxlintConfig } from 'oxlint'
import type { Options } from '../src/types/index.ts'

import { describe, expect, it } from 'vitest'

import { felixicaza, felixicazaConfig } from '../src/index.ts'
import { env as expectedEnv } from '../src/configs/env.ts'
import { GLOB_EXCLUDE } from '../src/constants/glob.ts'

const allDisabled: Required<Options> = {
  complexity: false,
  eslint: false,
  imports: false,
  jsdoc: false,
  node: false,
  oxc: false,
  promise: false,
  stylistic: false,
  typescript: false
}

describe('index public API', () => {
  it('builds default config with env, ignorePatterns and merged preset rules', () => {
    const result = felixicaza()

    expect(result.ignorePatterns).toEqual(GLOB_EXCLUDE)
    expect(result.env).toEqual(expectedEnv.env)

    expect(result.rules).toMatchObject({
      'jsdoc/check-access': 'warn',
      '@stylistic/semi': ['error', 'never'],
      'no-console': ['warn', { allow: ['warn', 'error', 'info', 'clear'] }]
    })

    expect(result.overrides).toHaveLength(1)
    expect(result.overrides?.[0]).toMatchObject({
      files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx'],
      plugins: ['typescript']
    })
  })

  it('supports disabling all presets', () => {
    const result = felixicaza(allDisabled)

    expect(result).toMatchObject({
      ignorePatterns: GLOB_EXCLUDE,
      env: expectedEnv.env
    })

    expect(result.rules).toBeUndefined()
    expect(result.overrides).toEqual([])
  })

  it('applies user configs at the end with last-write-wins behavior', () => {
    const userConfig: OxlintConfig = {
      rules: {
        'no-console': 'error'
      },
      ignorePatterns: ['ignored-by-user/**'],
      overrides: [
        {
          files: ['**/*.mdx'],
          rules: {
            'no-console': 'error'
          }
        }
      ]
    }

    const result = felixicaza(allDisabled, [userConfig])

    expect(result).toMatchObject({
      ignorePatterns: [...GLOB_EXCLUDE, 'ignored-by-user/**'],
      env: expectedEnv.env
    })

    expect(result.rules).toMatchObject({
      'no-console': 'error'
    })

    expect(result.overrides).toEqual(userConfig.overrides)
  })

  it('exports felixicazaConfig equivalent to default call', () => {
    expect(felixicazaConfig).toEqual(felixicaza())
  })
})
