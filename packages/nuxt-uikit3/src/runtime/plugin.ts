import type { UIkitPlugin } from './uikit.types'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
  const uikitOptions = nuxtApp.$config.public.uikit

  if (uikitOptions.js) {
    try {
      const UIkit = (await import('uikit').then(
        (r) => r.default || r
      )) as UIkitPlugin['uikit']

      if (uikitOptions.icons) {
        try {
          const Icons = await import('uikit/dist/js/uikit-icons.js').then(
            (r) => r.default || r
          )

          UIkit.use(Icons)
        } catch (error) {
          console.error('Faild to load UIkit Icons: ', error)
        }
      }

      nuxtApp.provide('uikit3', UIkit)
    } catch (error) {
      console.error('Failed to load UIkit: ', error)
    }
  }
})
