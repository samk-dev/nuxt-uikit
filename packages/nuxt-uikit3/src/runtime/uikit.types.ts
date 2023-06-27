import type UIkit from 'uikit'

export interface UIkitPlugin {
  uikit: typeof UIkit
  $uikit3: typeof UIkit
}

declare module '#app' {
  interface NuxtApp {
    $uikit3: typeof UIkit
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $uikit3: typeof UIkit
  }
}
export {}
