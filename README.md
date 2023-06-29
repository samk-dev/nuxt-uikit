# Nuxt Uikit 3 Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]
[![UIkit][uikit-src]][uikit-href]

UIkit is a lightweight and modular front-end framework for developing fast and powerful web interfaces

Nuxt compatibility: `^3.0.0` Bridge: `false`

[![nuxt-uikit-screenshot.jpg](https://i.postimg.cc/hvgjzgHP/nuxt-uikit-screenshot.jpg)](https://postimg.cc/N9JYZhsW)

[📖 &nbsp;Documentation](https://nuxt-uikit.astratto.dev)

[📖 UIkit Docs](https://getuikit.com/docs/introduction)

[📖 Nuxt Docs](https://nuxt.com/docs/getting-started/introduction)

[✨ &nbsp;Release Notes](/nuxt-uikit3/CHANGELOG.md)

[🏀 Online playground](https://stackblitz.com/edit/nuxt-uikit3-example?file=app.vue)

## Features

- Zero cofig, just plug && play
- Customize UIkit default theme with scss/less
- Share scss/less variables && mixins everywhere
- Use all UIKit JS components without writing any JS
- Access UIkit JS components api with `useUIkit3` composable
- Use UIKit default icons pack
- UIkit documentation in Nuxt Devtools

## Quick Setup

Add `@samk-dev/nuxt-uikit3` dependency to your project

```bash
# Using npm
npm install --save-dev @samk-dev/nuxt-uikit3

# Using pnpm
pnpm add -D @samk-dev/nuxt-uikit3

# Using yarn
yarn add --dev @samk-dev/nuxt-uikit3
```

Add `@samk-dev/nuxt-uikit3` to the `modules` section of `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: ['@samk-dev/nuxt-uikit3']
})
```

That's it! You can now use Nuxt Uikit 3 in your Nuxt app ✨

For additional configuration please refer to module [docs](https://nuxt-uikit.astratto.dev)

## Development

```bash
# stub
pnpm uikit:dev:prep
# dev
pnpm uikit:dev
# docs dev
pnpm docs:dev
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@samk-dev/nuxt-uikit3/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@samk-dev/nuxt-uikit3
[npm-downloads-src]: https://img.shields.io/npm/dm/@samk-dev/nuxt-uikit3.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@samk-dev/nuxt-uikit3
[license-src]: https://img.shields.io/npm/l/@samk-dev/nuxt-uikit3.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@samk-dev/nuxt-uikit3
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
[uikit-href]: https://getuikit.com
[uikit-src]: https://img.shields.io/badge/UIkit-1E87F0?style=plastic&logo=uikit
