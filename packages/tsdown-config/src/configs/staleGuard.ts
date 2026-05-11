import type { UserConfig } from 'tsdown'

import { StaleGuardRecorder } from 'tsdown-stale-guard'

export const staleGuard: UserConfig = {
  plugins: [StaleGuardRecorder()]
}
