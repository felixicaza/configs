import type { Linter } from 'eslint'

import { describe, expect, it } from 'vitest'

import { composeConfig } from '../src/utils/composeConfig.ts'

describe('utils/composeConfig', () => {
  it('returns empty array when no configs are passed', () => {
    expect(composeConfig()).toEqual([])
  })

  it('concatenates files configs preserving order', () => {
    const firstConfig: Linter.Config = {
      files: ['**/*.ts'],
      rules: {
        semi: 'error'
      }
    }

    const secondConfig: Linter.Config = {
      rules: {
        semi: 'warn',
        quotes: 'error'
      }
    }

    const result = composeConfig(firstConfig, secondConfig)

    expect(result).toEqual([
      {
        files: ['**/*.ts'],
        rules: {
          semi: 'error'
        }
      },
      {
        rules: {
          semi: 'warn',
          quotes: 'error'
        }
      }
    ])
  })

  it('merges global ignore-only configs without overriding previous patterns', () => {
    const result = composeConfig(
      {
        name: 'global-ignores-a',
        ignores: ['**/dist', '**/coverage']
      },
      {
        rules: {
          semi: 'error'
        }
      },
      {
        ignores: ['**/coverage', '**/tests/fixtures/**']
      }
    )

    expect(result).toEqual([
      {
        name: 'global-ignores-a',
        ignores: ['**/dist', '**/coverage', '**/tests/fixtures/**']
      },
      {
        rules: {
          semi: 'error'
        }
      }
    ])
  })
})
