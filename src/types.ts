type NUIkitCssBuildOptions = {
  /**
   * @description which css preprocessor to use
   *
   * @default scss
   * */
  preprocessor: 'scss' | 'less'
  /**
   * @description variables path
   *
   * @default undefined
   * */
  stylesPath: string
  /**
   * @description variables path
   *
   * @default undefined
   * */
  variablesPath?: string
  /**
   * @description mixins path
   *
   * @default undefined
   * */
  mixinsPath?: string
}

type NUIkitCssOptions = {
  /**
   * @description Enable/Disable the module from loading UIkit 3 core css
   *
   * @default false
   */
  coreCss: boolean
  /**
   * @description Enable/Disable the module from loading UIkit 3 default theme css
   *
   * @default false
   */
  coreTheme: boolean
  /**
   * @description Customize UIkit css build
   *
   * @default undefined
   * */
  build?: NUIkitCssBuildOptions
}

export interface NuxtUIkitModuleOptions {
  css: NUIkitCssOptions
  js: boolean
  icons: boolean
}
