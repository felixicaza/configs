import type { OxlintConfig } from 'oxlint'

import { describe, expect, it } from 'vitest'

import { composeConfig } from '../src/utils/composeConfig.ts'

describe('utils/composeConfig', () => {
  it('returns empty object when no configs are passed', () => {
    expect(composeConfig()).toEqual({})
  })

  it('merges top-level options and concatenates overrides preserving order', () => {
    const firstConfig: OxlintConfig = {
      rules: {
        'no-console': 'warn'
      },
      overrides: [
        {
          files: ['**/*.mdx'],
          rules: { 'no-unused-vars': 'off' }
        }
      ]
    }

    const secondConfig: OxlintConfig = {
      rules: {
        eqeqeq: 'error'
      },
      overrides: [
        {
          files: ['**/*.yaml', '**/*.yml'],
          rules: { indent: ['error', 2] }
        }
      ]
    }

    const result = composeConfig(firstConfig, secondConfig)

    expect(result).toMatchObject({
      rules: {
        'no-console': 'warn',
        eqeqeq: 'error'
      }
    })
    expect(result.overrides).toEqual([
      {
        files: ['**/*.mdx'],
        rules: { 'no-unused-vars': 'off' }
      },
      {
        files: ['**/*.yaml', '**/*.yml'],
        rules: { indent: ['error', 2] }
      }
    ])
  })

  it('merges ignorePatterns without overwriting and removes duplicates', () => {
    const firstConfig: OxlintConfig = {
      ignorePatterns: ['**/dist', '**/coverage']
    }

    const secondConfig: OxlintConfig = {
      ignorePatterns: ['**/coverage', '**/.next']
    }

    const result = composeConfig(firstConfig, secondConfig)

    expect(result.ignorePatterns).toEqual(['**/dist', '**/coverage', '**/.next'])
  })
})
