import type { NuxtUIkitModuleOptions } from './types'
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { addCustomTab } from '@nuxt/devtools-kit'
import { name, version } from '../package.json'

export default defineNuxtModule<NuxtUIkitModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'uikit3',
    compatibility: {
      nuxt: '^3.0.0',
      bridge: false
    }
  },
  defaults: {
    css: {
      coreCss: true,
      coreTheme: true
    },
    js: true,
    icons: true
  },
  setup: function (moduleOpts, nuxt) {
    const resolver = createResolver(import.meta.url)

    const nuxtOptions = nuxt.options
    // provide module options to runtime/plugin.ts
    // @ts-ignore
    nuxtOptions.runtimeConfig.app.uikit ||= {} as NuxtUIkitModuleOptions
    // @ts-ignore
    nuxtOptions.runtimeConfig.app.uikit = moduleOpts

    const cssOptions = moduleOpts.css
    // load only core css
    if (cssOptions?.coreCss && !cssOptions.coreTheme) {
      nuxtOptions.css ||= []
      nuxtOptions.css.push(`uikit/dist/css/uikit-core.min.css`)
    }
    // load core + default theme css
    if (cssOptions?.coreCss && cssOptions.coreTheme) {
      nuxtOptions.css ||= []
      nuxtOptions.css.push(`uikit/dist/css/uikit.min.css`)
    }
    // custom css build
    if (cssOptions?.build) {
      nuxtOptions.vite ||= {}
      nuxtOptions.vite.css ||= {}
      nuxtOptions.vite.css.preprocessorOptions ||= {}

      // main stylesheet
      nuxtOptions.css ||= []
      nuxtOptions.css.push(moduleOpts?.css?.build?.stylesPath || '')

      const lang = cssOptions.build.preprocessor
      if (lang === 'scss') {
        if (cssOptions.build.variablesPath) {
          nuxtOptions.vite.css.preprocessorOptions.scss = {
            additionalData: `@import "${moduleOpts?.css?.build?.variablesPath}";`
          }
        }
        if (cssOptions.build.mixinsPath) {
          nuxtOptions.vite.css.preprocessorOptions.scss = {
            additionalData: `@import "${moduleOpts?.css?.build?.mixinsPath}";`
          }
        }
      } else if (lang === 'less') {
        if (cssOptions.build.variablesPath) {
          nuxtOptions.vite.css.preprocessorOptions.less = {
            additionalData: `@import "${moduleOpts?.css?.build?.variablesPath}";`
          }
        }
        if (cssOptions.build.mixinsPath) {
          nuxtOptions.vite.css.preprocessorOptions.less = {
            additionalData: `@import "${moduleOpts?.css?.build?.mixinsPath}";`
          }
        }
      }
    }

    if (moduleOpts.js) {
      nuxtOptions.build.transpile ||= []
      nuxtOptions.build.transpile.push('uikit')

      if (moduleOpts.icons) {
        nuxtOptions.build.transpile.push('uikit/dist/js/uikit-icons')
      }

      addPlugin({
        src: resolver.resolve('./runtime/uikit.client'),
        mode: 'client'
      })
    }

    // add uikit documentation to DevTools
    if (nuxt.options.dev && nuxt.options.devtools) {
      addCustomTab({
        name: 'nuxt-uikit3',
        title: 'UIkit 3',
        icon: 'logos:uikit',
        view: {
          type: 'iframe',
          src: 'https://getuikit.com/docs/introduction'
        }
      })
    }
  }
})
