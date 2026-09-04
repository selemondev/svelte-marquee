<script lang="ts">
    import CodeSnippet from "./CodeSnippet.svelte";

    let { commands }: { commands: Record<string, string> } = $props();
    const managers = $derived(Object.keys(commands));
    let selected = $state<string | null>(null);
    const active = $derived(selected ?? managers[0]);
</script>

<div class="overflow-hidden rounded-lg border border-line bg-code">
    <div class="flex items-center gap-1 border-b border-line px-2 py-1.5" role="tablist" aria-label="Package manager">
        {#each managers as manager (manager)}
            <button
                type="button"
                role="tab"
                aria-selected={active === manager}
                onclick={() => (selected = manager)}
                class={[
                    "rounded-md px-2.5 py-1 font-mono text-xs transition-colors",
                    active === manager ? "bg-fg/8 text-fg" : "text-muted hover:bg-fg/5 hover:text-fg",
                ]}
            >
                {manager}
            </button>
        {/each}
    </div>
    <div class="[&>div]:rounded-none [&>div]:border-0">
        <CodeSnippet code={commands[active]} lang="bash" />
    </div>
</div>
