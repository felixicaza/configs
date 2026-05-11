export const GLOB_NODE_MODULES = '**/node_modules'
export const GLOB_DIST = [
  '**/dist',
  '**/dev-dist' // When use `@vite-pwa/pwa`
]
export const GLOB_LOCKFILE: string[] = [
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb'
]
export const ASTRO_FILES = [
  '**/*.astro',
  '**/*.astro/*.js',
  '**/*.astro/*.ts'
]

export const GLOB_EXCLUDE: string[] = [
  GLOB_NODE_MODULES,
  ...GLOB_DIST,
  ...GLOB_LOCKFILE,
  ...ASTRO_FILES,
  '**/output',
  '**/coverage',
  '**/public',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/.history',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.next',
  '**/.svelte-kit',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',
  '**/.vite-inspect',
  '**/.yarn',
  '**/.nitro',
  '**/CHANGELOG*.md',
  '**/LICENSE*',
  '**/*.min.*',
  '**/__snapshots__',
  '**/vite.config.*.timestamp-*',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
  '**/.context',
  '**/.claude',
  '**/.agents',
  '**/.*/skills'
]
