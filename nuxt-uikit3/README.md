# Nuxt UIKit 3

⚠️ the package is still work in progress and will be released soon ⚠️

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]
[![UIkit][uikit-src]][uikit-href]

Nuxt compatibility: `^3.0.0` Bridge: `false`

![cover image](../.github/assets/nuxt-uikit3.jpg)

UIkit 3 Nuxt module

UIkit is a lightweight and modular front-end framework for developing fast and powerful web interfaces

- [Release Notes](/CHANGELOG.md)
- [UIkit 3 Docs](https://getuikit.com/docs/introduction)
- [Nuxt Docs](https://nuxt.com/docs/getting-started/introduction)
- [Online playground](https://stackblitz.com/edit/nuxt-uikit3-example?file=app.vue)
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- Injects UIkit 3 into Nuxt with 0 config ✅
- scss/less to customize UIkit 3 theme ✅
- Use all UIKit 3 JS components without writing any JS ✅
- Use UIKit 3 icons pack ✅
- UIkit 3 documentation in Nuxt Devtools ✅

### On version `1.0.0` release **todos:**
- Tests
- Docs

## Quick Setup

Add `@samk_dev/nuxt-uikit3` dependency to your project

```bash
# Using npm
npm install --save-dev @samk_dev/nuxt-uikit3

# Using pnpm
pnpm add -D @samk_dev/nuxt-uikit3

# Using yarn
yarn add --dev @samk_dev/nuxt-uikit3
```

Add `@samk_dev/nuxt-uikit3` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['@samk_dev/nuxt-uikit3']
});
```

That's it! You can now use Nuxt Uikit 3 in your Nuxt app ✨

## Module Options

By default, Nuxt UIkit 3 Module loads UIkit 3 core css && core theme css, but you can select what css components to import or disable this behaviour && load your own custom css.

### Default UIkit 3 core css && default theme css

```typescript
export default defineNuxtConfig({
  modules: ['@samk_dev/nuxt-uikit3'],
  uikit3: {
    css: {
      coreCss: boolean, // default true
      coreTheme: boolean // default true
    },
    js: boolean, // default true
    icons: boolean, // default true
  }
})
```

### Customize UIKit 3 css

In this example we'll use sass, please refer to UIKit 3 [sass docs](https://getuikit.com/docs/sass) / [less docs](https://getuikit.com/docs/less)

`Install sass && sass-loader`

```bash
npm i -D sass sass-loader
```

in `nuxt.config.ts`

```typescript
export default defineNuxtConfig({
  modules: ['@samk_dev/nuxt-uikit3'],
  uikit3: {
    css: {
      // disable coreCss && coreThemeCss
      coreCss: false, 
      coreTheme: false,
      // set css preprocessor and .scss/less file paths
      build: {
        preprocessor: 'scss',
        stylesPath: '~/assets/scss/site.scss',
        variablesPath: '~/assets/scss/variables.scss',
        mixinsPath: '~/assets/scss/mixins.scss'
      }
    },
    // ...rest of uikit3 options
  }
})
```


## Enable in Nuxt Devtools

In order to view UIkit 3 in Nuxt Devtools you have to install `@nuxt/devtools` please see
[Nuxt Devtools Documentation](https://devtools.nuxtjs.org) and follow the Getting started section.

Once you have it installed in `nuxt.config.ts` and enable devtools. That's it ✨ now you have a tab with UIkit 3 docs

```ts
devtools: {
  enabled: true
}
```

## CSS

You can use any css class from UIkit 3 as you would normally do.

### CSS Example

```html
<section class="uk-section uk-section-default">
  <div class="uk-container">
    <h1 class="uk-heading-medium">Are You Nuxt!</h1>
    <button type="button" class="uk-button uk-button-primary">Click me!</button>
  </div>
</section>
```

## Icons

Enable `icons: true` in `nuxt.config.ts`

```ts
// nuxt.config.ts
uikit3: {
  // ...rest of options
  icons: true;
}
```

```html
<span data-uk-icon="icon: check; ratio: 2"></span>
```

## Javascript

You can use UIkit 3 JS components by adding the `data-uk-<component-name>`

**To work with javascript components from UIkit 3, you have to add `data-uk-<component-name>`
Please refer to UIkit 3 documentation as they mentioned there**

From [UIkit 3 Docs](https://getuikit.com/docs/javascript)

`UIkit and reactive JavaScript frameworks. UIkit is listening for DOM manipulations and will automatically initialize, connect and disconnect components as they are inserted or removed from the DOM. That way it can easily be used with JavaScript frameworks like Vue.js and React. You can use UIkit components by adding uk-* or data-uk-* attributes to your HTML elements without writing a single line of JavaScript. This is UIkit's best practice of using its components and should always be considered first.`

```html
<!-- ❌ WILL NOT WORK -->
<div uk-sticky="offset: 50;"></div>
<!-- ✅ WILL WORK -->
<div data-uk-sticky="offset: 50;"></div>
```

## Usage Example

### Accordion Component

Using the `data-uk-<component-name>` method:

```html
<template>
  <ul data-uk-accordion>
    <li class="uk-open">
      <a class="uk-accordion-title" href="#">Item 1</a>
      <div class="uk-accordion-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </li>
    <li>
      <a class="uk-accordion-title" href="#">Item 2</a>
      <div class="uk-accordion-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </li>
    <li>
      <a class="uk-accordion-title" href="#">Item 3</a>
      <div class="uk-accordion-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </li>
  </ul>
</template>
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare -w nuxt-uikit3

# Develop with the playground
npm run dev -w nuxt-uikit3

# Build the playground
npm run dev:build -w nuxt-uikit3

# Run ESLint
npm run lint -w nuxt-uikit3
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@samk_dev/nuxt-uikit3/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@samk_dev/nuxt-uikit3
[npm-downloads-src]: https://img.shields.io/npm/dm/@samk_dev/nuxt-uikit3.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@samk_dev/nuxt-uikit3
[license-src]: https://img.shields.io/npm/l/@samk_dev/nuxt-uikit3.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@samk_dev/nuxt-uikit3
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
[uikit-href]: https://getuikit.com
[uikit-src]: ../.github/assets/uikit-badge.svg
