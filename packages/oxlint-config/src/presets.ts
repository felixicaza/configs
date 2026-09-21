import type { OxlintConfig } from 'oxlint'
import type { Options, PresetName } from './types/index.ts'

import {
  antiSlop,
  noCommentSlop,
  stylistic,
  jsdoc,
  e18e,
  complexity,
  imports,
  importIntegrity,
  promise,
  node,
  eslint,
  oxc,
  typescript,
  vitest
} from './configs/index.ts'

type ResolvedOptions = Required<Options>
type PresetFactory = (options: ResolvedOptions) => OxlintConfig[]

export const presetEntries: readonly [PresetName, PresetFactory][] = [
  ['antiSlop', () => [antiSlop]],
  ['noCommentSlop', () => [noCommentSlop]],
  ['stylistic', () => [stylistic]],
  ['jsdoc', () => [jsdoc]],
  ['e18e', () => [e18e]],
  ['complexity', () => [complexity]],
  ['imports', () => [imports]],
  [
    'importIntegrity',
    options => [
      importIntegrity(typeof options.importIntegrity === 'object' ? options.importIntegrity : {})
    ]
  ],
  ['promise', () => [promise]],
  ['node', () => [node]],
  ['eslint', () => [eslint]],
  ['oxc', () => [oxc]],
  ['typescript', () => [typescript]],
  ['vitest', () => [vitest]]
]

export const defaultOptions: Required<Options> = {
  antiSlop: true,
  noCommentSlop: true,
  stylistic: true,
  jsdoc: true,
  e18e: true,
  complexity: true,
  imports: true,
  importIntegrity: true,
  promise: true,
  node: true,
  eslint: true,
  oxc: true,
  typescript: true,
  vitest: false
}
