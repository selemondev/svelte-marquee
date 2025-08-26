<script lang="ts">
	import { transformerCopyButton } from '@selemondev/shiki-transformer-copy-button';
	import CodeBlock from 'shiki-code-block-svelte';

	const packageManagers = ['bun', 'pnpm', 'yarn', 'npm'];
	let selectedPackageManager = $state('pnpm');
	let { lang, bun, pnpm, yarn, npm } = $props();
	const getInstallCmd = () => {
		switch (selectedPackageManager) {
			case 'bun':
				return bun;

			case 'pnpm':
				return pnpm;

			case 'yarn':
				return yarn;

			case 'npm':
				return npm;

			default:
				return npm;
		}
	};
</script>

<section class="bg-white rounded-md">
	<div class="flex flex-col space-y-1">
		<div class="flex items-center space-x-2 py-2 px-4">
			{#each packageManagers as packageManager}
				<button
					type="button"
					onclick={() => (selectedPackageManager = packageManager)}
					class={[
						'rounded-md text-sm text-black py-0.5 px-1 border-2 border-transparent',
						selectedPackageManager === packageManager
							? 'outline bg-gray-100 outline-gray-200'
							: 'outline-none',
					]}
				>
					{packageManager}
				</button>
			{/each}
		</div>
		<span class="bg-gray-200 w-full h-[1px]"></span>
		<CodeBlock
			{lang}
			theme={{
				light: 'vitesse-light',
				dark: 'vitesse-light',
			}}
			code={getInstallCmd()}
			transformers={[
				transformerCopyButton({
					duration: 2000,
					display: 'ready',
					successIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E`,
					copyIcon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgba(128,128,128,1)' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' viewBox='0 0 24 24'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3C/svg%3E`,
				}),
			]}
		/>
	</div>
</section>
