type NUIkitCssBuildOptions = {
  /**
   * @description which css preprocessor to use
   *
   * */
  preprocessor: 'scss' | 'less'
  /**
   * @description variables path
   *
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
   * @default true
   */
  coreCss?: boolean
  /**
   * @description Enable/Disable the module from loading UIkit 3 default theme css
   *
   * @default true
   */
  coreTheme?: boolean
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
