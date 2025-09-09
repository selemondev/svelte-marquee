<div align="center">

# Marquee <br> 🌬️

> A beautiful marquee component for Svelte ✨.

</div>


<!-- automd:badges color="green" license name="@selemondev/svelte-marquee" codecov bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/@selemondev/svelte-marquee?color=green)](https://npmjs.com/package/@selemondev/svelte-marquee)
[![npm downloads](https://img.shields.io/npm/dm/@selemondev/svelte-marquee?color=green)](https://npm.chart.dev/@selemondev/svelte-marquee)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@selemondev/svelte-marquee?color=green)](https://bundlephobia.com/package/@selemondev/svelte-marquee)
[![install size](https://badgen.net/packagephobia/install/@selemondev/svelte-marquee?color=green)](https://packagephobia.com/result?p=@selemondev/svelte-marquee)
[![codecov](https://img.shields.io/codecov/c/gh/selemondev/svelte-marquee?color=green)](https://codecov.io/gh/selemondev/svelte-marquee)
[![license](https://img.shields.io/github/license/selemondev/svelte-marquee?color=green)](https://github.com/selemondev/svelte-marquee/blob/main/LICENSE)

<!-- /automd -->

## Installation

<!-- automd:pm-install name="@selemondev/svelte-marquee" -->

```sh
# ✨ Auto-detect
npx nypm install @selemondev/svelte-marquee

# npm
npm install @selemondev/svelte-marquee

# yarn
yarn add @selemondev/svelte-marquee

# pnpm
pnpm install @selemondev/svelte-marquee

# bun
bun install @selemondev/svelte-marquee

# deno
deno install @selemondev/svelte-marquee
```

<!-- /automd -->

or you can skip the npm install, and just copy and paste the source code into your component like Shadcn Svelte (don't forget to also copy the tailwind config if you do this).


## Register it as a local component

```js
import { Marquee } from "@selemondev/svelte-marquee";
```

## Usage

The library has a few props that are self-explanatory; you can get it running in no time. See the web examples for more details. Check out the [documentation](https://svelte-marquee.vercel.app) for more information.

```js
<Marquee
direction="left"
fade={true}
reverse={false}
pauseOnHover={false}
innerClassName="" // pass class to change gap or speed
>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
```

This library is made specifically for Tailwind users, however you can also use vanilla CSS classes to override the gap.

## Credits

- Inspired by [@devnomic's](https://github.com/devnomic) React Marquee component.

- Inspired by [@selemondev's](https://github.com/selemondev) Vue Marquee component.

## License

Released under [MIT](/LICENSE) by [@selemondev](https://github.com/selemondev).
