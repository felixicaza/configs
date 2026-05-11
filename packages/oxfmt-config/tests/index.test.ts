import type { OxfmtConfig } from 'oxfmt'
import type { Options } from '../src/types/index.ts'

import { describe, expect, it } from 'vitest'

import { felixicaza, felixicazaConfig } from '../src/index.ts'
import { GLOB_EXCLUDE } from '../src/constants/glob.ts'

const allDisabled: Required<Options> = {
  base: false,
  jsdoc: false,
  mdx: false,
  yaml: false
}

describe('index public API', () => {
  it('builds default config with ignorePatterns and all presets merged', () => {
    const result = felixicaza()

    expect(result.ignorePatterns).toEqual(GLOB_EXCLUDE)

    expect(result).toMatchObject({
      semi: false,
      singleQuote: true,
      jsxSingleQuote: true,
      trailingComma: 'none',
      jsdoc: {
        commentLineStrategy: 'multiline',
        descriptionWithDot: true,
        preferCodeFences: true
      }
    })

    expect(result.overrides).toEqual([
      {
        files: ['**/*.mdx'],
        options: {
          proseWrap: 'preserve',
          htmlWhitespaceSensitivity: 'ignore'
        }
      },
      {
        files: ['**/*.yaml', '**/*.yml'],
        options: {
          singleQuote: false,
          tabWidth: 3
        }
      }
    ])
  })

  it('supports disabling all presets', () => {
    const result = felixicaza(allDisabled)
    expect(result).toMatchObject({ ignorePatterns: GLOB_EXCLUDE })
    expect(result.overrides).toEqual([])
  })

  it('applies user configs at the end with last-write-wins behavior', () => {
    const userConfig: OxfmtConfig = {
      semi: true,
      overrides: [
        {
          files: ['**/*.json'],
          options: { tabWidth: 4 }
        }
      ]
    }

    const result = felixicaza(allDisabled, [userConfig])

    expect(result.ignorePatterns).toEqual(GLOB_EXCLUDE)
    expect(result.semi).toBe(true)
    expect(result.overrides).toEqual([
      {
        files: ['**/*.json'],
        options: { tabWidth: 4 }
      }
    ])
  })

  it('exports felixicazaConfig equivalent to default call', () => {
    expect(felixicazaConfig).toEqual(felixicaza())
  })
})
