export const npmInstallCmd = `npm install @selemondev/svelte-marquee`;
export const yarnInstallCmd = `yarn add @selemondev/svelte-marquee`;
export const pnpmInstallCmd = `pnpm install @selemondev/svelte-marquee`;
export const bunInstallCmd = `bun add @selemondev/svelte-marquee`;
export const localImportSnippet = `import { Marquee } from "@selemondev/svelte-marquee";
// If you are using TailwindCss, you don't need to import the styles below.
import "@selemondev/svelte-marquee/dist/style.css";`;

export const fadeCodeSnippet = `<Marquee fade={true}>
<div>Content 1</div>
<div>Content 2</div>
<div>Content 3</div>
</Marquee>`;

export const reverseCodeSnippet = `<Marquee reverse={true} fade={true}>
<div>Content 1</div>
<div>Content 2</div>
<div>Content 3</div>
</Marquee>`;

export const pauseOnHoverSnippet = `<Marquee pauseOnHover={true} fade={true}>
<div>Content 1</div>
<div>Content 2</div>
<div>Content 3</div>
</Marquee>`;
export const verticalCodeSnippet = `<Marquee direction="up" fade={true}>
<div>Content 1</div>
<div>Content 2</div>
<div>Content 3</div>
</Marquee>`;
export const customGapAndSpeedSnippet = `<Marquee class="gap-[3rem] [--duration:5s] [--gap:3rem]" innerClassName="gap-[3rem]" fade={true}>
<div>Content 1</div>
<div>Content 2</div>
<div>Content 3</div>
</Marquee>`;
export const reducedMotionSnippet = `<Marquee class="py-4 motion-reduce:overflow-auto" innerClassName="motion-reduce:animate-none motion-reduce:first:hidden">
<div>Content 1</div>
<div>Content 2</div>
<div>Content 3</div>
</Marquee>`;
export const tailwindConfig = `
import animate from 'tailwindcss-animate';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
      // the rest of your content goes here
      './node_modules/@selemondev/svelte-marquee/dist/*.svelte'
  ],
  theme: {
      extend: {
          keyframes: {
              'marquee-left': {
                  from: { transform: 'translateX(0)' },
                  to: { transform: 'translateX(calc(-100% - var(--gap)))' }
              },
              'marquee-up': {
                  from: { transform: 'translateY(0)' },
                  to: { transform: 'translateY(calc(-100% - var(--gap)))' }
              }
          },
          animation: {
              'marquee-left': 'marquee-left var(--duration, 40s) linear infinite',
              'marquee-up': 'marquee-up var(--duration, 40s) linear infinite'
          }
      }
  },
  plugins: [animate]
};`;