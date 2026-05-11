import type { OxfmtConfig } from 'oxfmt'

import { describe, expect, it } from 'vitest'

import { composeConfig } from '../src/utils/composeConfig.ts'

describe('utils/composeConfig', () => {
  it('returns empty object when no configs are passed', () => {
    expect(composeConfig()).toEqual({})
  })

  it('merges top-level options and concatenates overrides preserving order', () => {
    const firstConfig: OxfmtConfig = {
      semi: false,
      overrides: [
        {
          files: ['**/*.mdx'],
          options: { proseWrap: 'preserve' }
        }
      ]
    }

    const secondConfig: OxfmtConfig = {
      singleQuote: true,
      overrides: [
        {
          files: ['**/*.yaml', '**/*.yml'],
          options: { tabWidth: 3 }
        }
      ]
    }

    const result = composeConfig(firstConfig, secondConfig)

    expect(result).toMatchObject({
      semi: false,
      singleQuote: true
    })
    expect(result.overrides).toEqual([
      {
        files: ['**/*.mdx'],
        options: { proseWrap: 'preserve' }
      },
      {
        files: ['**/*.yaml', '**/*.yml'],
        options: { tabWidth: 3 }
      }
    ])
  })

  it('merges ignorePatterns without overwriting and removes duplicates', () => {
    const firstConfig: OxfmtConfig = {
      ignorePatterns: ['**/dist', '**/coverage']
    }

    const secondConfig: OxfmtConfig = {
      ignorePatterns: ['**/coverage', '**/.next']
    }

    const result = composeConfig(firstConfig, secondConfig)

    expect(result.ignorePatterns).toEqual(['**/dist', '**/coverage', '**/.next'])
  })
})
