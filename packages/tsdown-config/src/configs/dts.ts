import type { UserConfig } from 'tsdown'

import { rolldownPluginDtsMinifyLite } from 'rolldown-plugin-dts-minify-lite'

export const dts: UserConfig = {
  plugins: [
    rolldownPluginDtsMinifyLite({
      keepJsDocs: true
    })
  ]
}
