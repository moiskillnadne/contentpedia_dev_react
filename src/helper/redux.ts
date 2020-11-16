/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import { Action } from '@/types/common.d'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function combine(initS: any, ...fn: ((s: any, a: Action) => any)[]) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (s = initS, a: Action): any => {
    for (let i = 0; i < fn.length; i += 1) {
      const newState = fn[i](s, a)
      if (newState) return newState
    }

    return s
  }
}
