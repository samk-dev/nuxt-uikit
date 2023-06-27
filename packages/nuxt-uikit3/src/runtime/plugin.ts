import UIkit from 'uikit'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
  const uikitOptions = nuxtApp.$config.app.uikit

  if (uikitOptions.js) {
    // const UIkit = await import('uikit')
    //   .then((r) => r.default || r) as UIkit
    //   .catch((err) => console.error('Failed to load UIkit: ', err))
    nuxtApp.provide('uikit3', UIkit)
  }

  if (uikitOptions.icons) {
    await import('uikit/dist/js/uikit-icons.js')
      .then((r) => r.default || r)
      .catch((err) => console.error('Failed to load UIkit Icons: ', err))
  }
})

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
