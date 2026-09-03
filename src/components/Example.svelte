<script lang="ts">
    import type { Snippet } from "svelte";
    import CodeSnippet from "./CodeSnippet.svelte";

    let {
        id,
        title,
        description,
        prop,
        code,
        children,
    }: {
        id: string;
        title: string;
        description: string;
        prop: string;
        code: string;
        children: Snippet;
    } = $props();
</script>

<article {id} class="grid scroll-mt-20 gap-6 border-t border-line py-12 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-12 md:py-16">
    <header class="space-y-3 md:pt-1">
        <code class="inline-block rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-xs text-accent">
            {prop}
        </code>
        <h3 class="text-xl font-semibold tracking-tight">{title}</h3>
        <p class="text-sm text-muted text-pretty">{description}</p>
    </header>
    <div class="min-w-0 space-y-4">
        <div class="relative overflow-hidden rounded-lg border border-line bg-surface py-6">
            {@render children()}
        </div>
        <CodeSnippet {code} />
    </div>
</article>
