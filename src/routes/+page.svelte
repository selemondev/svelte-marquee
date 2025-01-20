<script lang="ts">
  import Card from "../components/Card.svelte";
  import { Marquee } from "$lib/index.js";
  import GithubIcon from "../components/icons/GithubIcon.svelte";
  import CodeBlock from "shiki-code-block-svelte";
  import { transformerCopyButton } from "@selemondev/shiki-transformer-copy-button";
  import {
    installCmd,
    localImportSnippet,
    fadeCodeSnippet,
    reverseCodeSnippet,
    pauseOnHoverSnippet,
    verticalCodeSnippet,
    customGapAndSpeedSnippet,
    reducedMotionSnippet,
    tailwindConfig,
  } from "../utils/snippets/index.js";

  interface TestimonialProps {
    name: string;
    title: string;
    avatar: string;
    content: string;
  }
  const testimonials: TestimonialProps[] = [
    {
      name: "Selemondev",
      title: "Senior Frontend Developer",
      avatar: "https://github.com/selemondev.png",
      content:
        "Marquee Library has been a game-changer for our TypeScript projects. Its seamless integration and robust features have significantly improved our UI's dynamic capabilities.",
    },
    {
      name: "Raj Patel",
      title: "Tech Lead",
      avatar: "https://i.pravatar.cc/150?img=18",
      content:
        "I'm thoroughly impressed with Marquee's performance and ease of use. It made implementing complex scrolling texts a breeze, and the support for TypeScript is top-notch.",
    },

    {
      name: "Sofia Garcia",
      title: "UI/UX Designer",
      avatar: "https://i.pravatar.cc/150?img=45",
      content:
        "As a designer, I appreciate how Marquee enhances the visual appeal of our applications. The flexibility it offers in styling and animation is fantastic.",
    },
    {
      name: "John Mack",
      title: "Full Stack Developer",
      avatar: "https://i.pravatar.cc/150?img=60",
      content:
        "Integrating Marquee into our full-stack TypeScript projects has been incredibly efficient. Its compatibility and ease of customization are ideal for our diverse project needs.",
    },
    {
      name: "Isabella Smith",
      title: "Project Manager",
      avatar: "https://i.pravatar.cc/150?img=32",
      content:
        "Marquee Library has consistently delivered beyond our expectations. It's not just a tool; it's an asset that enhances productivity and creativity in our TypeScript applications.",
    },
  ];
</script>

<svelte:head>
  <title>Svelte Marquee Component</title>
  <meta
    name="description"
    content="A Beautiful Marquee component for Svelte ✨"
  />
</svelte:head>

<div class="min-h-screen w-full bg-[#eee]">
  <div class="max-w-screen-lg px-4 py-6 mx-auto space-y-4">
    <div class="space-y-2 md:flex md:justify-between">
      <div>
        <h1 class="text-2xl font-semibold">Marquee</h1>
        <div class="text-stone-600">
          A beautiful marquee component for Svelte.
        </div>
      </div>
      <div class="flex items-center gap-1">
        <a
          href="https://x.com/selemondev"
          target="_blank"
          class="bg-black text-xs font-semibold text-white px-2.5 py-1 rounded-md inline-flex items-center hover:bg-black/80 transition-all duration-200 ease-in"
        >
          <svg
            class="mr-1 size-4 shrink-0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"
            />
          </svg>
          @selemondev
        </a>
        <a
          href="https://github.com/selemondev/svelte-marquee"
          target="_blank"
          class="bg-black text-xs font-semibold text-white px-2.5 py-1 rounded-md inline-flex items-center hover:bg-black/80 transition-all duration-200 ease-in"
        >
          <GithubIcon class="mr-1 size-4" />
          Github
        </a>
      </div>
    </div>
    <div class="flex flex-col space-y-4">
      <Marquee fade={true}>
        {#each testimonials as testimonial (testimonial.name)}
          <Card
            avatar={testimonial.avatar}
            name={testimonial.name}
            title={testimonial.title}
            content={testimonial.content}
          />
        {/each}
      </Marquee>
      <Marquee reverse={true} fade={true}>
        {#each testimonials as testimonial (testimonial.name)}
          <Card
            avatar={testimonial.avatar}
            name={testimonial.name}
            title={testimonial.title}
            content={testimonial.content}
          />
        {/each}
      </Marquee>
    </div>
    <div class="space-y-1 w-full">
      <h2 class="text-lg font-semibold">Installation</h2>
      <CodeBlock
        lang="bash"
        theme={{
          light: "vitesse-light",
          dark: "vitesse-dark",
        }}
        code={installCmd}
        transformers={[
          transformerCopyButton({
            duration: 2000,
            display: "ready",
            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
          }),
        ]}
      />
      <div class="text-sm">
        or you can skip npm install, and just copy and paste the source code
        into your component like
        <a class="underline" href="https://www.shadcn-svelte.com/">
          Shadcn Svelte
        </a>
        (don't forget to also copy the tailwind config if you do this).
      </div>
    </div>

    <div class="space-y-1">
      <h2 class="text-lg font-semibold">Using TailwindCss</h2>
      <div class="text-sm">
        <p>
          If you are using TailwindCss, it is recommended to do as shown below:
        </p>
      </div>
      <CodeBlock
        lang="javascript"
        theme={{
          light: "vitesse-light",
          dark: "vitesse-dark",
        }}
        code={tailwindConfig}
        transformers={[
          transformerCopyButton({
            duration: 2000,
            display: "ready",
            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
          }),
        ]}
      />
      <div class="pt-1 text-sm">
        <p>
          The reason for doing the above is because of a bug that we are facing
          when bundling the component. You can checkout the discussion <a
            class="text-blue-500 underline transition-all duration-200 ease-in hover:text-blue-600"
            href="https://github.com/selemondev/svelte-marquee/issues/6"
          >
            here.
          </a>
        </p>
      </div>
    </div>

    <div class="space-y-1">
      <h3 class="font-semibold">Register it as a local component</h3>
      <CodeBlock
        lang="javascript"
        theme={{
          light: "vitesse-light",
          dark: "vitesse-dark",
        }}
        code={localImportSnippet}
        transformers={[
          transformerCopyButton({
            duration: 2000,
            display: "ready",
            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
          }),
        ]}
      />
    </div>

    <hr class="border-stone-200" />
    <div class="space-y-1">
      <h3 class="font-semibold">Fade</h3>
      <Marquee fade={true}>
        {#each testimonials as testimonial (testimonial.name)}
          <Card
            avatar={testimonial.avatar}
            name={testimonial.name}
            title={testimonial.title}
            content={testimonial.content}
          />
        {/each}
      </Marquee>
    </div>
    <div class="space-y-1">
      <h3 class="font-semibold">Code</h3>
      <CodeBlock
        lang="javascript"
        theme={{
          light: "vitesse-light",
          dark: "vitesse-dark",
        }}
        code={fadeCodeSnippet}
        transformers={[
          transformerCopyButton({
            duration: 2000,
            display: "ready",
            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
          }),
        ]}
      />
    </div>
    <hr class="border-stone-200" />
    <div class="space-y-1">
      <h3 class="font-semibold">Reverse direction</h3>
      <Marquee reverse={true} fade={true}>
        {#each testimonials as testimonial (testimonial.name)}
          <Card
            avatar={testimonial.avatar}
            name={testimonial.name}
            title={testimonial.title}
            content={testimonial.content}
          />
        {/each}
      </Marquee>
    </div>
    <div class="space-y-1">
      <h3 class="font-semibold">Code</h3>
      <CodeBlock
        lang="javascript"
        theme={{
          light: "vitesse-light",
          dark: "vitesse-dark",
        }}
        code={reverseCodeSnippet}
        transformers={[
          transformerCopyButton({
            duration: 2000,
            display: "ready",
            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
          }),
        ]}
      />
    </div>
    <hr class="border-stone-200" />
    <div>
      <h3 class="font-semibold">Pause on hover</h3>
      <Marquee pauseOnHover={true} fade={true}>
        {#each testimonials as testimonial (testimonial.name)}
          <Card
            avatar={testimonial.avatar}
            name={testimonial.name}
            title={testimonial.title}
            content={testimonial.content}
          />
        {/each}
      </Marquee>
    </div>
    <div>
      <h3 class="font-semibold">Code</h3>
      <CodeBlock
        lang="javascript"
        theme={{
          light: "vitesse-light",
          dark: "vitesse-dark",
        }}
        code={pauseOnHoverSnippet}
        transformers={[
          transformerCopyButton({
            duration: 2000,
            display: "ready",
            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
          }),
        ]}
      />
    </div>
    <hr class="border-stone-200" />
    <div class="space-y-1">
      <h3 class="font-semibold">Vertical</h3>
      <div class="flex h-[400px] justify-center">
        <Marquee direction="up" fade={true}>
          {#each testimonials as testimonial (testimonial.name)}
            <Card
              avatar={testimonial.avatar}
              name={testimonial.name}
              title={testimonial.title}
              content={testimonial.content}
            />
          {/each}
        </Marquee>
      </div>
    </div>
    <div class="space-y-1">
      <h3 class="font-semibold">Code</h3>
      <CodeBlock
        lang="javascript"
        theme={{
          light: "vitesse-light",
          dark: "vitesse-dark",
        }}
        code={verticalCodeSnippet}
        transformers={[
          transformerCopyButton({
            duration: 2000,
            display: "ready",
            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
          }),
        ]}
      />
    </div>
    <hr class="border-stone-200" />
    <div class="space-y-1">
      <h3 class="font-semibold">Custom gap and speed</h3>
      <Marquee
        class="gap-[3rem] [--duration:5s] [--gap:3rem]"
        innerClassName="gap-[3rem]"
        fade={true}
      >
        <img
          alt="Logo"
          src="https://www.vectorlogo.zone/logos/google/google-ar21.svg"
        />
        <img
          alt="Logo"
          src="https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg"
        />
        <img
          alt="Logo"
          src="https://www.vectorlogo.zone/logos/apple/apple-ar21.svg"
        />
        <img
          alt="Logo"
          src="https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg"
        />
        <img
          alt="Logo"
          src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"
        />
      </Marquee>
    </div>
    <div class="space-y-1">
      <h3 class="font-semibold">Code</h3>
      <CodeBlock
        lang="javascript"
        theme={{
          light: "vitesse-light",
          dark: "vitesse-dark",
        }}
        code={customGapAndSpeedSnippet}
        transformers={[
          transformerCopyButton({
            duration: 2000,
            display: "ready",
            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
          }),
        ]}
      />
    </div>
    <hr class="border-stone-200" />
    <div class="space-y-1">
      <h3 class="font-semibold">Reduced motion</h3>
      <div>Disable animation when user device prefers reduced motion.</div>
      <Marquee
        class="py-4 motion-reduce:overflow-auto"
        innerClassName="motion-reduce:animate-none motion-reduce:first:hidden"
      >
        {#each testimonials as testimonial (testimonial.name)}
          <Card
            avatar={testimonial.avatar}
            name={testimonial.name}
            title={testimonial.title}
            content={testimonial.content}
          />
        {/each}
      </Marquee>
    </div>
    <div class="space-y-1">
      <h3 class="font-semibold">Code</h3>
      <CodeBlock
        lang="html"
        theme={{
          light: "vitesse-light",
          dark: "vitesse-dark",
        }}
        code={reducedMotionSnippet}
        transformers={[
          transformerCopyButton({
            duration: 2000,
            display: "ready",
            successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
            copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
          }),
        ]}
      />
    </div>
  </div>
</div>

<style>
  @media (prefers-color-scheme: dark) {
    :global(.shiki),
    :global(.shiki span) {
      color: var(--shiki-dark) !important;
      background-color: var(--shiki-dark-bg) !important;
      /* Optional, if you also want font styles */
      font-style: var(--shiki-dark-font-style) !important;
      font-weight: var(--shiki-dark-font-weight) !important;
      text-decoration: var(--shiki-dark-text-decoration) !important;
    }
  }
  :global(html.dark .shiki),
  :global(html.dark .shiki span) {
    color: var(--shiki-dark) !important;
    background-color: var(--shiki-dark-bg) !important;
    font-style: var(--shiki-dark-font-style) !important;
    font-weight: var(--shiki-dark-font-weight) !important;
    text-decoration: var(--shiki-dark-text-decoration) !important;
  }

  :global(.shiki--code--block) {
    width: 100%;
  }
  :global(pre) {
    z-index: 1;
    padding: 15px 24px;
    border-radius: 10px;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    position: relative;
    background-color: #f9f9f9 !important;
  }
  :global(code) {
    display: block;
    line-height: 1.7;
    font-size: 15px;
  }
</style>
