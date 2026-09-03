export const installCommands = {
    pnpm: "pnpm add @selemondev/svelte-marquee",
    npm: "npm install @selemondev/svelte-marquee",
    yarn: "yarn add @selemondev/svelte-marquee",
    bun: "bun add @selemondev/svelte-marquee",
};

export const localImportSnippet = `<script>
  import { Marquee } from "@selemondev/svelte-marquee";
  import "@selemondev/svelte-marquee/dist/style.css";
</script>

<Marquee fade pauseOnHover>
  <img src="/logos/acme.svg" alt="Acme" />
  <img src="/logos/globex.svg" alt="Globex" />
  <img src="/logos/initech.svg" alt="Initech" />
</Marquee>`;

const items = `  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>`;

export const fadeCodeSnippet = `<Marquee fade={true}>
${items}
</Marquee>`;

export const reverseCodeSnippet = `<Marquee reverse={true} fade={true}>
${items}
</Marquee>`;

export const pauseOnHoverSnippet = `<Marquee pauseOnHover={true} fade={true}>
${items}
</Marquee>`;

export const verticalCodeSnippet = `<Marquee direction="up" fade={true}>
${items}
</Marquee>`;

export const customGapAndSpeedSnippet = `<Marquee
  class="gap-[3rem] [--duration:5s] [--gap:3rem]"
  innerClassName="gap-[3rem]"
  fade={true}
>
${items}
</Marquee>`;

export const reducedMotionSnippet = `<Marquee
  class="py-4 motion-reduce:overflow-auto"
  innerClassName="motion-reduce:animate-none motion-reduce:first:hidden"
>
${items}
</Marquee>`;
