<script lang="ts">
    import { onMount } from "svelte";
    import { Marquee } from "$lib/index.js";
    import pkg from "../../package.json" with { type: "json" };
    import Card from "../components/Card.svelte";
    import CodeSnippet from "../components/CodeSnippet.svelte";
    import Example from "../components/Example.svelte";
    import GithubIcon from "../components/icons/GithubIcon.svelte";
    import MultiTabCodeBlock from "../components/multi-tab-code-block.svelte";
    import Section from "../components/Section.svelte";
    import {
        customGapAndSpeedSnippet,
        fadeCodeSnippet,
        installCommands,
        localImportSnippet,
        pauseOnHoverSnippet,
        reducedMotionSnippet,
        reverseCodeSnippet,
        verticalCodeSnippet,
    } from "../utils/snippets/index.js";

    const repo = "https://github.com/selemondev/svelte-marquee";

    onMount(() => {
        const handler = (e: MouseEvent) => {
            const btn = (e.target as Element).closest<HTMLElement>(".shiki-transformer-button-copy");
            if (!btn) return;
            navigator.clipboard.writeText(btn.dataset.code ?? "");
            btn.classList.add("shiki-transformer-button-copied");
            btn.setAttribute("aria-pressed", "true");
            setTimeout(() => {
                btn.classList.remove("shiki-transformer-button-copied");
                btn.setAttribute("aria-pressed", "false");
            }, 2000);
        };
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    });

    const testimonials = [
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

    const logos = ["google", "microsoft", "apple", "oracle", "reactjs", "github", "vercel", "stripe"];

    const props = [
        { name: "direction", type: '"left" | "up"', def: '"left"', desc: "Axis the content travels along." },
        { name: "reverse", type: "boolean", def: "false", desc: "Play the animation backwards." },
        { name: "fade", type: "boolean", def: "false", desc: "Mask both edges with a soft gradient." },
        { name: "pauseOnHover", type: "boolean", def: "false", desc: "Freeze the track while the pointer is over it." },
        { name: "numberOfCopies", type: "number", def: "2", desc: "How many times the children are repeated to fill the track." },
        { name: "innerClassName", type: "string", def: '""', desc: "Classes applied to each scrolling track." },
        { name: "class", type: "string", def: '""', desc: "Classes for the outer container. Set --duration and --gap here." },
    ];
</script>

<svelte:head>
    <title>Svelte Marquee</title>
    <meta name="description" content="A Beautiful Marquee component for Svelte." />
    <meta name="theme-color" content="#0a0a0b" />
</svelte:head>

{#snippet testimonialCards()}
    {#each testimonials as t (t.name)}
        <Card avatar={t.avatar} name={t.name} title={t.title} content={t.content} />
    {/each}
{/snippet}

<div class="relative isolate min-h-screen overflow-x-clip">
    <!-- Column rails: two dashed hairlines framing the content column for the full page height. -->
    <div class="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-full max-w-6xl -translate-x-1/2" aria-hidden="true">
        <div class="hairline-y absolute inset-y-0 left-0"></div>
        <div class="hairline-y absolute inset-y-0 right-0"></div>
    </div>

    <header class="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
        <div class="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
            <a href="#top" class="flex items-center gap-2.5 font-semibold tracking-tight">
                <svg class="size-5 text-accent" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M2 5h12M6 10h12M2 15h12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
                svelte-marquee
            </a>
            <nav class="hidden items-center gap-7 text-sm text-muted md:flex" aria-label="Sections">
                <a class="transition-colors hover:text-fg" href="#install">Install</a>
                <a class="transition-colors hover:text-fg" href="#examples">Examples</a>
                <a class="transition-colors hover:text-fg" href="#api">API</a>
            </nav>
            <div class="flex items-center gap-2">
                <a
                    href="https://www.npmjs.com/package/@selemondev/svelte-marquee"
                    target="_blank"
                    rel="noreferrer"
                    class="hidden rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-white/25 hover:text-fg sm:inline-block"
                >
                    v{pkg.version}
                </a>
                <a
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub repository"
                    class="inline-flex size-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-white/25 hover:text-fg"
                >
                    <GithubIcon class="size-4" />
                </a>
            </div>
        </div>
    </header>

    <main id="top">
        <!-- Hero -->
        <div class="relative mx-auto max-w-6xl px-6 pt-24 pb-16 text-center md:pt-36 md:pb-20">
            <a
                href="{repo}/releases"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1 pr-3 pl-1.5 font-mono text-xs text-muted transition-colors hover:border-white/25 hover:text-fg"
            >
                <span class="rounded-full bg-accent/15 px-2 py-0.5 text-accent">v{pkg.version}</span>
                Svelte 5 · Tailwind v4
            </a>
            <h1 class="mx-auto mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.03em] text-balance md:text-7xl">
                Svelte Marquee
            </h1>
            <p class="mx-auto mt-6 max-w-2xl text-lg text-muted md:text-xl">
                A Beautiful Marquee component for Svelte.
            </p>
            <div class="mx-auto mt-10 max-w-md text-left">
                <CodeSnippet code={installCommands.bun} lang="bash" />
            </div>
        </div>

        <!-- Live demo -->
        <div class="relative border-y border-line">
            <div class="relative mx-auto max-w-6xl">
                <span class="handle top-0 left-0"></span>
                <span class="handle top-0 left-full"></span>
                <span class="handle top-full left-0"></span>
                <span class="handle top-full left-full"></span>
                <div class="space-y-4 py-10">
                    <Marquee fade pauseOnHover>
                        {@render testimonialCards()}
                    </Marquee>
                    <Marquee fade reverse pauseOnHover>
                        {@render testimonialCards()}
                    </Marquee>
                </div>
            </div>
        </div>


        <Section id="install" title="Installation">
            <ol class="divide-y divide-line border-t border-line">
                <li class="grid gap-6 py-10 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-12 md:py-12">
                    <div class="space-y-3 md:pt-1">
                        <span class="font-mono text-xs text-accent">01</span>
                        <h3 class="text-xl font-semibold tracking-tight">Install the package</h3>
                        <p class="text-sm text-muted">
                            Or copy
                            <a class="text-fg underline decoration-white/30 underline-offset-4 hover:decoration-white" href="{repo}/blob/master/src/lib/Marquee.svelte" target="_blank" rel="noreferrer">Marquee.svelte</a>
                            into your project.
                        </p>
                    </div>
                    <div class="min-w-0">
                        <MultiTabCodeBlock commands={installCommands} />
                    </div>
                </li>
                <li class="grid gap-6 py-10 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-12 md:py-12">
                    <div class="space-y-3 md:pt-1">
                        <span class="font-mono text-xs text-accent">02</span>
                        <h3 class="text-xl font-semibold tracking-tight">Import the component</h3>
                        <p class="text-sm text-muted">Import the stylesheet once, then use the component.</p>
                    </div>
                    <div class="min-w-0">
                        <CodeSnippet code={localImportSnippet} />
                    </div>
                </li>
            </ol>
        </Section>

        <Section id="examples" title="Examples">
            <Example
                id="fade"
                prop="fade"
                title="Fade"
                description="Masks both edges of the marquee with a gradient."
                code={fadeCodeSnippet}
            >
                <Marquee fade>{@render testimonialCards()}</Marquee>
            </Example>

            <Example
                id="reverse"
                prop="reverse"
                title="Reverse"
                description="Plays the animation in the opposite direction."
                code={reverseCodeSnippet}
            >
                <Marquee reverse fade>{@render testimonialCards()}</Marquee>
            </Example>

            <Example
                id="pause-on-hover"
                prop="pauseOnHover"
                title="Pause on hover"
                description="Pauses the animation while the pointer is over the marquee."
                code={pauseOnHoverSnippet}
            >
                <Marquee pauseOnHover fade>{@render testimonialCards()}</Marquee>
            </Example>

            <Example
                id="vertical"
                prop='direction="up"'
                title="Vertical"
                description="Scrolls vertically. The container needs a fixed height."
                code={verticalCodeSnippet}
            >
                <div class="flex h-[400px] justify-center">
                    <Marquee direction="up" fade>{@render testimonialCards()}</Marquee>
                </div>
            </Example>

            <Example
                id="gap-and-speed"
                prop="--duration · --gap"
                title="Custom gap and speed"
                description="Set --duration and --gap on the container to change speed and spacing."
                code={customGapAndSpeedSnippet}
            >
                <Marquee class="gap-[3rem] [--duration:12s] [--gap:3rem]" innerClassName="gap-[3rem] items-center" fade>
                    {#each logos as logo (logo)}
                        <img
                            alt={logo}
                            src="https://www.vectorlogo.zone/logos/{logo}/{logo}-ar21.svg"
                            class="h-12 w-auto opacity-60 brightness-0 invert transition-opacity hover:opacity-100"
                            loading="lazy"
                        />
                    {/each}
                </Marquee>
            </Example>

            <Example
                id="reduced-motion"
                prop="prefers-reduced-motion"
                title="Reduced motion"
                description="Disables the animation when the device prefers reduced motion."
                code={reducedMotionSnippet}
            >
                <Marquee class="py-1 motion-reduce:overflow-auto" innerClassName="motion-reduce:animate-none motion-reduce:first:hidden">
                    {@render testimonialCards()}
                </Marquee>
            </Example>
        </Section>

        <Section id="api" eyebrow="API" title="Props" description="Other attributes are forwarded to the outer container.">
            <div class="overflow-x-auto rounded-lg border border-line">
                <table class="w-full min-w-[40rem] text-left text-sm">
                    <thead class="bg-surface font-mono text-xs text-muted">
                        <tr>
                            <th class="px-4 py-3 font-medium">Prop</th>
                            <th class="px-4 py-3 font-medium">Type</th>
                            <th class="px-4 py-3 font-medium">Default</th>
                            <th class="px-4 py-3 font-medium">Description</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-line">
                        {#each props as prop (prop.name)}
                            <tr>
                                <td class="px-4 py-3 font-mono text-accent">{prop.name}</td>
                                <td class="px-4 py-3 font-mono text-xs text-muted">{prop.type}</td>
                                <td class="px-4 py-3 font-mono text-xs text-muted">{prop.def}</td>
                                <td class="px-4 py-3 text-muted">{prop.desc}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </Section>
    </main>

    <footer class="relative border-t border-line">
        <div class="relative mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
            <span class="handle top-0 left-0"></span>
            <span class="handle top-0 left-full"></span>
            <p>
                MIT licensed. Built by
                <a class="text-fg hover:underline" href="https://x.com/selemondev" target="_blank" rel="noreferrer">@selemondev</a>.
            </p>
            <p>
                Inspired by
                <a class="text-fg hover:underline" href="https://github.com/devnomic" target="_blank" rel="noreferrer">devnomic</a>'s
                React marquee.
            </p>
        </div>
    </footer>
</div>
