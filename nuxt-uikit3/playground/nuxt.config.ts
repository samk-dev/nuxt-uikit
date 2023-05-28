export default defineNuxtConfig({
  modules: ['../src/module', '@nuxt/devtools'],
  devtools: {
    enabled: true
  },
  uikit3: {
    css: {
      coreCss: false,
      coreTheme: false,
      build: {
        preprocessor: 'scss',
        stylesPath: '~/assets/scss/app.scss',
        variablesPath: '~/assets/scss/variables.scss'
      }
    }
  }
})
