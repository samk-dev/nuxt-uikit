# Nuxt Uikit 3 Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]
[![UIkit][uikit-src]][uikit-href]

Nuxt compatibility: `^3.0.0` Bridge: `false`

![cover image](.github/assets/nuxt-uikit3.jpg)

UIkit 3 Nuxt module

UIkit is a lightweight and modular front-end framework for developing fast and powerful web interfaces

- [✨ &nbsp;Release Notes](/nuxt-uikit3/CHANGELOG.md)
- [UIkit 3 Docs](https://getuikit.com/docs/introduction)
- [Nuxt Docs](https://nuxt.com/docs/getting-started/introduction)
- [📖 &nbsp;Documentation](https://nuxt-uikit3-docs.vercel.app)
- [🏀 Online playground](https://stackblitz.com/edit/nuxt-uikit3-example?file=app.vue)

## Features

- Injects UIkit 3 into Nuxt ✅
- scss/less to customize UIkit 3 theme ✅
- Use all UIKit 3 JS components without writing any JS ✅
- Use UIKit 3 icons pack ✅
- UIkit 3 documentation in Nuxt Devtools ✅

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
});
```

That's it! You can now use Nuxt Uikit 3 in your Nuxt app ✨

For additional configuration please refer to [module docs](https://nuxt-uikit3-docs.vercel.app)

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
npm run lint

# Release new version
npm run release -w nuxt-uikit3
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

[uikit-src]: .github/assets/uikit-badge.svg
