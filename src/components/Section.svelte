<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        id,
        eyebrow,
        title,
        description,
        children,
    }: {
        id?: string;
        eyebrow?: string;
        title?: string;
        description?: string;
        children: Snippet;
    } = $props();
</script>

<section {id} class="relative scroll-mt-14 border-t border-line">
    <div class="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <span class="handle top-0 left-0"></span>
        <span class="handle top-0 left-full"></span>
        {#if title}
            <header class="mb-6 max-w-2xl">
                {#if eyebrow}
                    <p class="mb-3 font-mono text-xs tracking-widest text-accent uppercase">
                        {eyebrow}
                    </p>
                {/if}
                <h2 class="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                    {title}
                </h2>
                {#if description}
                    <p class="mt-4 text-base text-muted text-pretty md:text-lg">
                        {description}
                    </p>
                {/if}
            </header>
        {/if}
        {@render children()}
    </div>
</section>
