<div align="center">

# Marquee <br> 🌬️

> A beautiful marquee component for Svelte ✨.

</div>

## Installation

```bash
npm install @selemondev/svelte-marquee
```
or you can skip the npm install, and just copy and paste the source code into your component like Shadcn Svelte (don't forget to also copy the tailwind config if you do this).


## Register it as a local component

```js
import { Marquee } from "@selemondev/svelte-marquee";
// import "@selemondev/svelte-marquee/dist/style.css"
```

## Usage

The library has a few props that are self-explanatory; you can get it running in no time. See the web examples for more details.

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

