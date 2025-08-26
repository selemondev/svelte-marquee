import { F as sanitize_props, G as spread_attributes, J as attr, z as escape_html, K as bind_props, N as rest_props, O as ensure_array_like, P as attr_class, Q as attr_style, T as clsx$1, x as slot, w as pop, u as push, V as head } from "../../chunks/index.js";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { j as fallback } from "../../chunks/utils2.js";
import { transformerCopyButton } from "@selemondev/shiki-transformer-copy-button";
function html(value) {
  var html2 = String(value);
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function StarIcon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$payload.out.push(`<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...$$sanitized_props
    },
    null,
    void 0,
    void 0,
    3
  )}><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"></path></svg>`);
}
function FiveStar($$payload) {
  $$payload.out.push(`<div class="flex items-center text-amber-400">`);
  StarIcon($$payload, { class: "size-5" });
  $$payload.out.push(`<!----> `);
  StarIcon($$payload, { class: "size-5" });
  $$payload.out.push(`<!----> `);
  StarIcon($$payload, { class: "size-5" });
  $$payload.out.push(`<!----> `);
  StarIcon($$payload, { class: "size-5" });
  $$payload.out.push(`<!----> `);
  StarIcon($$payload, { class: "size-5" });
  $$payload.out.push(`<!----></div>`);
}
function Card($$payload, $$props) {
  let name = $$props["name"];
  let avatar = $$props["avatar"];
  let title = $$props["title"];
  let content = $$props["content"];
  $$payload.out.push(`<div class="h-56 px-5 py-3 space-y-3 text-sm bg-white rounded-lg shadow-sm w-80"><div class="flex items-center gap-2"><img${attr("src", avatar)}${attr("alt", title)} class="rounded-full size-8"/> <div><div class="font-medium">${escape_html(name)}</div> <div class="text-xs text-stone-600">${escape_html(title)}</div></div></div> `);
  FiveStar($$payload);
  $$payload.out.push(`<!----> <div class="whitespace-pre-line text-stone-600">${escape_html(content)}</div></div>`);
  bind_props($$props, { name, avatar, title, content });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Marquee($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "direction",
    "pauseOnHover",
    "reverse",
    "fade",
    "innerClassName",
    "numberOfCopies"
  ]);
  push();
  let direction = fallback($$props["direction"], "left");
  let pauseOnHover = fallback($$props["pauseOnHover"], false);
  let reverse = fallback($$props["reverse"], false);
  let fade = fallback($$props["fade"], false);
  let innerClassName = fallback($$props["innerClassName"], "");
  let numberOfCopies = fallback($$props["numberOfCopies"], 2);
  const each_array = ensure_array_like(Array(numberOfCopies).fill(0));
  $$payload.out.push(`<div${attr_class(clsx$1(cn(`group flex gap-[1rem] overflow-hidden ${$$restProps.class}`, {
    "flex-row": direction === "left",
    "flex-col": direction !== "left"
  })))}${attr_style(`mask-image: ${fade ? `linear-gradient(${direction === "left" ? "to right" : "to bottom"}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)` : "none"};
	  -webkit-mask-image: ${fade ? `linear-gradient(${direction === "left" ? "to right" : "to bottom"}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)` : "none"};
	  `)}><!--[-->`);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out.push(`<div${attr_class(clsx$1(cn(
      "flex justify-around gap-[1rem] [--gap:1rem] shrink-0",
      direction === "left" ? "animate-marquee-left flex-row" : "animate-marquee-up flex-col",
      pauseOnHover && "group-hover:[animation-play-state:paused]",
      reverse && "direction-reverse",
      innerClassName
    )))}><!---->`);
    slot($$payload, $$props, "default", {});
    $$payload.out.push(`<!----></div>`);
  }
  $$payload.out.push(`<!--]--></div>`);
  bind_props($$props, {
    direction,
    pauseOnHover,
    reverse,
    fade,
    innerClassName,
    numberOfCopies
  });
  pop();
}
function GithubIcon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$payload.out.push(`<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      ...$$sanitized_props
    },
    null,
    void 0,
    void 0,
    3
  )}><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>`);
}
function CodeBlock($$payload, $$props) {
  push();
  let codeToHtml = "";
  let { code, lang, theme, transformers } = $$props;
  $$payload.out.push(`<div role="region" aria-labelledby="codeLabel"${attr("tabindex", 0)} aria-live="polite" aria-roledescription="code block" lang="en" class="shiki--code--block">${html(codeToHtml)}</div>`);
  pop();
}
function Multi_tab_code_block($$payload, $$props) {
  push();
  const packageManagers = ["bun", "pnpm", "yarn", "npm"];
  let selectedPackageManager = "bun";
  let { lang, bun, pnpm, yarn, npm } = $$props;
  const getInstallCmd = () => {
    switch (selectedPackageManager) {
      case "bun":
        return bun;
      case "pnpm":
        return pnpm;
      case "yarn":
        return yarn;
      case "npm":
        return npm;
      default:
        return npm;
    }
  };
  const each_array = ensure_array_like(packageManagers);
  $$payload.out.push(`<section class="bg-white rounded-md"><div class="flex flex-col space-y-1"><div class="flex items-center space-x-2 py-2 px-4"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let packageManager = each_array[$$index];
    $$payload.out.push(`<button type="button"${attr_class(clsx$1([
      "rounded-md text-sm text-black py-0.5 px-1 border-2 border-transparent",
      selectedPackageManager === packageManager ? "outline bg-gray-100 outline-gray-200" : "outline-none"
    ]))}>${escape_html(packageManager)}</button>`);
  }
  $$payload.out.push(`<!--]--></div> <span class="bg-gray-200 w-full h-[1px]"></span> `);
  CodeBlock($$payload, {
    lang,
    theme: {},
    code: getInstallCmd(),
    transformers: [
      transformerCopyButton({
        duration: 2e3,
        display: "ready",
        successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
        copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`
      })
    ]
  });
  $$payload.out.push(`<!----></div></section>`);
  pop();
}
const npmInstallCmd = `npm install @selemondev/svelte-marquee`;
const yarnInstallCmd = `yarn add @selemondev/svelte-marquee`;
const pnpmInstallCmd = `pnpm install @selemondev/svelte-marquee`;
const bunInstallCmd = `bun add @selemondev/svelte-marquee`;
const localImportSnippet = `import { Marquee } from "@selemondev/svelte-marquee";
// If you are using TailwindCss, you don't need to import the styles below.
import "@selemondev/svelte-marquee/dist/style.css";`;
const fadeCodeSnippet = `<Marquee fade={true}>
<div>Content 1</div>
<div>Content 2</div>
<div>Content 3</div>
</Marquee>`;
const reverseCodeSnippet = `<Marquee reverse={true} fade={true}>
<div>Content 1</div>
<div>Content 2</div>
<div>Content 3</div>
</Marquee>`;
const pauseOnHoverSnippet = `<Marquee pauseOnHover={true} fade={true}>
<div>Content 1</div>
<div>Content 2</div>
<div>Content 3</div>
</Marquee>`;
const verticalCodeSnippet = `<Marquee direction="up" fade={true}>
<div>Content 1</div>
<div>Content 2</div>
<div>Content 3</div>
</Marquee>`;
const customGapAndSpeedSnippet = `<Marquee class="gap-[3rem] [--duration:5s] [--gap:3rem]" innerClassName="gap-[3rem]" fade={true}>
<div>Content 1</div>
<div>Content 2</div>
<div>Content 3</div>
</Marquee>`;
const reducedMotionSnippet = `<Marquee class="py-4 motion-reduce:overflow-auto" innerClassName="motion-reduce:animate-none motion-reduce:first:hidden">
<div>Content 1</div>
<div>Content 2</div>
<div>Content 3</div>
</Marquee>`;
const tailwindConfig = `
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
function _page($$payload, $$props) {
  push();
  const testimonials = [
    {
      name: "Selemondev",
      title: "Senior Frontend Developer",
      avatar: "https://github.com/selemondev.png",
      content: "Marquee Library has been a game-changer for our TypeScript projects. Its seamless integration and robust features have significantly improved our UI's dynamic capabilities."
    },
    {
      name: "Raj Patel",
      title: "Tech Lead",
      avatar: "https://i.pravatar.cc/150?img=18",
      content: "I'm thoroughly impressed with Marquee's performance and ease of use. It made implementing complex scrolling texts a breeze, and the support for TypeScript is top-notch."
    },
    {
      name: "Sofia Garcia",
      title: "UI/UX Designer",
      avatar: "https://i.pravatar.cc/150?img=45",
      content: "As a designer, I appreciate how Marquee enhances the visual appeal of our applications. The flexibility it offers in styling and animation is fantastic."
    },
    {
      name: "John Mack",
      title: "Full Stack Developer",
      avatar: "https://i.pravatar.cc/150?img=60",
      content: "Integrating Marquee into our full-stack TypeScript projects has been incredibly efficient. Its compatibility and ease of customization are ideal for our diverse project needs."
    },
    {
      name: "Isabella Smith",
      title: "Project Manager",
      avatar: "https://i.pravatar.cc/150?img=32",
      content: "Marquee Library has consistently delivered beyond our expectations. It's not just a tool; it's an asset that enhances productivity and creativity in our TypeScript applications."
    }
  ];
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Svelte Marquee Component</title>`;
    $$payload2.out.push(`<meta name="description" content="A Beautiful Marquee component for Svelte ✨"/>`);
  });
  $$payload.out.push(`<div class="min-h-screen w-full bg-[#eee]"><div class="max-w-screen-lg px-4 py-6 mx-auto space-y-4"><div class="space-y-2 md:flex md:justify-between"><div><h1 class="text-2xl font-semibold">Marquee</h1> <div class="text-stone-600">A beautiful marquee component for Svelte.</div></div> <div class="flex items-center gap-1"><a href="https://x.com/selemondev" target="_blank" class="bg-black text-xs font-semibold text-white px-2.5 py-1 rounded-md inline-flex items-center hover:bg-black/80 transition-all duration-200 ease-in"><svg class="mr-1 size-4 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"></path></svg> @selemondev</a> <a href="https://github.com/selemondev/svelte-marquee" target="_blank" class="bg-black text-xs font-semibold text-white px-2.5 py-1 rounded-md inline-flex items-center hover:bg-black/80 transition-all duration-200 ease-in">`);
  GithubIcon($$payload, { class: "mr-1 size-4" });
  $$payload.out.push(`<!----> Github</a></div></div> <div class="flex flex-col space-y-4">`);
  Marquee($$payload, {
    fade: true,
    children: ($$payload2) => {
      const each_array = ensure_array_like(testimonials);
      $$payload2.out.push(`<!--[-->`);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let testimonial = each_array[$$index];
        Card($$payload2, {
          avatar: testimonial.avatar,
          name: testimonial.name,
          title: testimonial.title,
          content: testimonial.content
        });
      }
      $$payload2.out.push(`<!--]-->`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----> `);
  Marquee($$payload, {
    reverse: true,
    fade: true,
    children: ($$payload2) => {
      const each_array_1 = ensure_array_like(testimonials);
      $$payload2.out.push(`<!--[-->`);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let testimonial = each_array_1[$$index_1];
        Card($$payload2, {
          avatar: testimonial.avatar,
          name: testimonial.name,
          title: testimonial.title,
          content: testimonial.content
        });
      }
      $$payload2.out.push(`<!--]-->`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div> <div class="space-y-1 w-full"><h2 class="text-lg font-semibold">Installation</h2> `);
  Multi_tab_code_block($$payload, {
    lang: "bash",
    bun: bunInstallCmd,
    pnpm: pnpmInstallCmd,
    yarn: yarnInstallCmd,
    npm: npmInstallCmd
  });
  $$payload.out.push(`<!----> <div class="text-sm">or you can skip npm install, and just copy and paste the source code
				into your component like <a class="underline" href="https://www.shadcn-svelte.com/">Shadcn Svelte</a> (don't forget to also copy the tailwind config if you do this).</div></div> <div class="space-y-1"><h2 class="text-lg font-semibold">Using TailwindCss</h2> <div class="text-sm"><p>If you are using TailwindCss, it is recommended to do as shown below:</p></div> `);
  CodeBlock($$payload, {
    lang: "javascript",
    theme: {},
    code: tailwindConfig,
    transformers: [
      transformerCopyButton({
        duration: 2e3,
        display: "ready",
        successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
        copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`
      })
    ]
  });
  $$payload.out.push(`<!----> <div class="pt-1 text-sm"><p>The reason for doing the above is because of a bug that we are facing
					when bundling the component. You can checkout the discussion <a class="text-blue-500 underline transition-all duration-200 ease-in hover:text-blue-600" href="https://github.com/selemondev/svelte-marquee/issues/6">here.</a></p></div></div> <div class="space-y-1"><h3 class="font-semibold">Register it as a local component</h3> `);
  CodeBlock($$payload, {
    lang: "javascript",
    theme: {},
    code: localImportSnippet,
    transformers: [
      transformerCopyButton({
        duration: 2e3,
        display: "ready",
        successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
        copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`
      })
    ]
  });
  $$payload.out.push(`<!----></div> <hr class="border-stone-200"/> <div class="space-y-1"><h3 class="font-semibold">Fade</h3> `);
  Marquee($$payload, {
    fade: true,
    children: ($$payload2) => {
      const each_array_2 = ensure_array_like(testimonials);
      $$payload2.out.push(`<!--[-->`);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let testimonial = each_array_2[$$index_2];
        Card($$payload2, {
          avatar: testimonial.avatar,
          name: testimonial.name,
          title: testimonial.title,
          content: testimonial.content
        });
      }
      $$payload2.out.push(`<!--]-->`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div> <div class="space-y-1"><h3 class="font-semibold">Code</h3> `);
  CodeBlock($$payload, {
    lang: "javascript",
    theme: {},
    code: fadeCodeSnippet,
    transformers: [
      transformerCopyButton({
        duration: 2e3,
        display: "ready",
        successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
        copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`
      })
    ]
  });
  $$payload.out.push(`<!----></div> <hr class="border-stone-200"/> <div class="space-y-1"><h3 class="font-semibold">Reverse direction</h3> `);
  Marquee($$payload, {
    reverse: true,
    fade: true,
    children: ($$payload2) => {
      const each_array_3 = ensure_array_like(testimonials);
      $$payload2.out.push(`<!--[-->`);
      for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
        let testimonial = each_array_3[$$index_3];
        Card($$payload2, {
          avatar: testimonial.avatar,
          name: testimonial.name,
          title: testimonial.title,
          content: testimonial.content
        });
      }
      $$payload2.out.push(`<!--]-->`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div> <div class="space-y-1"><h3 class="font-semibold">Code</h3> `);
  CodeBlock($$payload, {
    lang: "javascript",
    theme: {},
    code: reverseCodeSnippet,
    transformers: [
      transformerCopyButton({
        duration: 2e3,
        display: "ready",
        successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
        copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`
      })
    ]
  });
  $$payload.out.push(`<!----></div> <hr class="border-stone-200"/> <div><h3 class="font-semibold">Pause on hover</h3> `);
  Marquee($$payload, {
    pauseOnHover: true,
    fade: true,
    children: ($$payload2) => {
      const each_array_4 = ensure_array_like(testimonials);
      $$payload2.out.push(`<!--[-->`);
      for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
        let testimonial = each_array_4[$$index_4];
        Card($$payload2, {
          avatar: testimonial.avatar,
          name: testimonial.name,
          title: testimonial.title,
          content: testimonial.content
        });
      }
      $$payload2.out.push(`<!--]-->`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div> <div><h3 class="font-semibold">Code</h3> `);
  CodeBlock($$payload, {
    lang: "javascript",
    theme: {},
    code: pauseOnHoverSnippet,
    transformers: [
      transformerCopyButton({
        duration: 2e3,
        display: "ready",
        successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
        copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`
      })
    ]
  });
  $$payload.out.push(`<!----></div> <hr class="border-stone-200"/> <div class="space-y-1"><h3 class="font-semibold">Vertical</h3> <div class="flex h-[400px] justify-center">`);
  Marquee($$payload, {
    direction: "up",
    fade: true,
    children: ($$payload2) => {
      const each_array_5 = ensure_array_like(testimonials);
      $$payload2.out.push(`<!--[-->`);
      for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
        let testimonial = each_array_5[$$index_5];
        Card($$payload2, {
          avatar: testimonial.avatar,
          name: testimonial.name,
          title: testimonial.title,
          content: testimonial.content
        });
      }
      $$payload2.out.push(`<!--]-->`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div></div> <div class="space-y-1"><h3 class="font-semibold">Code</h3> `);
  CodeBlock($$payload, {
    lang: "javascript",
    theme: {},
    code: verticalCodeSnippet,
    transformers: [
      transformerCopyButton({
        duration: 2e3,
        display: "ready",
        successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
        copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`
      })
    ]
  });
  $$payload.out.push(`<!----></div> <hr class="border-stone-200"/> <div class="space-y-1"><h3 class="font-semibold">Custom gap and speed</h3> `);
  Marquee($$payload, {
    class: "gap-[3rem] [--duration:5s] [--gap:3rem]",
    innerClassName: "gap-[3rem]",
    fade: true,
    children: ($$payload2) => {
      $$payload2.out.push(`<img alt="Logo" src="https://www.vectorlogo.zone/logos/google/google-ar21.svg"/> <img alt="Logo" src="https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg"/> <img alt="Logo" src="https://www.vectorlogo.zone/logos/apple/apple-ar21.svg"/> <img alt="Logo" src="https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg"/> <img alt="Logo" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"/>`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div> <div class="space-y-1"><h3 class="font-semibold">Code</h3> `);
  CodeBlock($$payload, {
    lang: "javascript",
    theme: {},
    code: customGapAndSpeedSnippet,
    transformers: [
      transformerCopyButton({
        duration: 2e3,
        display: "ready",
        successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
        copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`
      })
    ]
  });
  $$payload.out.push(`<!----></div> <hr class="border-stone-200"/> <div class="space-y-1"><h3 class="font-semibold">Reduced motion</h3> <div>Disable animation when user device prefers reduced motion.</div> `);
  Marquee($$payload, {
    class: "py-4 motion-reduce:overflow-auto",
    innerClassName: "motion-reduce:animate-none motion-reduce:first:hidden",
    children: ($$payload2) => {
      const each_array_6 = ensure_array_like(testimonials);
      $$payload2.out.push(`<!--[-->`);
      for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
        let testimonial = each_array_6[$$index_6];
        Card($$payload2, {
          avatar: testimonial.avatar,
          name: testimonial.name,
          title: testimonial.title,
          content: testimonial.content
        });
      }
      $$payload2.out.push(`<!--]-->`);
    },
    $$slots: { default: true }
  });
  $$payload.out.push(`<!----></div> <div class="space-y-1"><h3 class="font-semibold">Code</h3> `);
  CodeBlock($$payload, {
    lang: "html",
    theme: {},
    code: reducedMotionSnippet,
    transformers: [
      transformerCopyButton({
        duration: 2e3,
        display: "ready",
        successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
        copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`
      })
    ]
  });
  $$payload.out.push(`<!----></div></div></div>`);
  pop();
}
export {
  _page as default
};
