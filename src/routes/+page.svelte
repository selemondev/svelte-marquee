<script lang="ts">
	import Card from '../components/Card.svelte';
	import { Marquee } from '$lib/index.js';
	import GithubIcon from "../components/icons/GithubIcon.svelte"
	import { CodeBlock } from 'svhighlight';
	import 'highlight.js/styles/base16/dracula.css';
	
	interface TestimonialProps {
		name: string;
		title: string;
		avatar: string;
		content: string;
	}
	const testimonials: TestimonialProps[] = [
		{
			name: 'Selemondev',
			title: 'Senior Frontend Developer',
			avatar: 'https://github.com/selemondev.png',
			content:
				"Marquee Library has been a game-changer for our TypeScript projects. Its seamless integration and robust features have significantly improved our UI's dynamic capabilities.",
		},
		{
			name: 'Raj Patel',
			title: 'Tech Lead',
			avatar: 'https://i.pravatar.cc/150?img=18',
			content:
				"I'm thoroughly impressed with Marquee's performance and ease of use. It made implementing complex scrolling texts a breeze, and the support for TypeScript is top-notch.",
		},
		{
			name: 'Sofia Garcia',
			title: 'UI/UX Designer',
			avatar: 'https://i.pravatar.cc/150?img=45',
			content:
				'As a designer, I appreciate how Marquee enhances the visual appeal of our applications. The flexibility it offers in styling and animation is fantastic.',
		},
		{
			name: 'John Mack',
			title: 'Full Stack Developer',
			avatar: 'https://i.pravatar.cc/150?img=60',
			content:
				'Integrating Marquee into our full-stack TypeScript projects has been incredibly efficient. Its compatibility and ease of customization are ideal for our diverse project needs.',
		},
		{
			name: 'Isabella Smith',
			title: 'Project Manager',
			avatar: 'https://i.pravatar.cc/150?img=32',
			content:
				"Marquee Library has consistently delivered beyond our expectations. It's not just a tool; it's an asset that enhances productivity and creativity in our TypeScript applications.",
		},
	];
	let installCmd = `npm install @selemondev/svelte-marquee`;

	const localImportSnippet = `import { Marquee } from "@selemondev/svelte-marquee";
import "@selemondev/svelte-marquee/dist/style.css"`;

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
	const customGapAndSpeedSnippet = `<Marquee innerClassName="gap-[3rem] [--duration:5s] [--gap:3rem]" fade={true}>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>`;
	const reducedMotionSnippet = `<Marquee class="py-4 motion-reduce:overflow-auto" innerClassName="motion-reduce:animate-none motion-reduce:first:hidden">
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>`;
</script>

<svelte:head>
  <title>Svelte Marquee Component</title>
  <meta name="description" content="A Beautiful Marquee component for Svelte ✨" />
</svelte:head>

<div class="w-screen min-h-screen bg-stone-100/90">
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
		<div class="space-y-1">
			<h2 class="text-lg font-semibold">Installation</h2>
			<CodeBlock
				code={installCmd}
				showHeader={false}
				codeTextClasses="text-black"
				showLineNumbers={false}
				background="bg-white"
				language="bash"
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
			<h3 class="font-semibold">Register it as a local component</h3>
			<CodeBlock
				code={localImportSnippet}
				showHeader={false}
				codeTextClasses="text-black"
				showLineNumbers={false}
				background="bg-white"
				language="javascript"
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
				code={fadeCodeSnippet}
				showHeader={false}
				codeTextClasses="text-black"
				showLineNumbers={false}
				background="bg-white"
				language="html"
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
				code={reverseCodeSnippet}
				showHeader={false}
				codeTextClasses="text-black"
				showLineNumbers={false}
				background="bg-white"
				language="html"
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
				code={pauseOnHoverSnippet}
				showHeader={false}
				codeTextClasses="text-black"
				showLineNumbers={false}
				background="bg-white"
				language="html"
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
				code={verticalCodeSnippet}
				showHeader={false}
				codeTextClasses="text-black"
				showLineNumbers={false}
				background="bg-white"
				language="html"
			/>
		</div>
		<hr class="border-stone-200" />
		<div class="space-y-1">
			<h3 class="font-semibold">Custom gap and speed</h3>
			<Marquee
				innerClassName="gap-[3rem] [--duration:5s] [--gap:3rem]"
				fade={true}
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
				code={customGapAndSpeedSnippet}
				showHeader={false}
				codeTextClasses="text-black"
				showLineNumbers={false}
				background="bg-white"
				language="html"
			/>
		</div>
		<hr class="border-stone-200" />
		<div class="space-y-1">
			<h3 class="font-semibold">Reduced motion</h3>
			<div>Disable animation when user device prefers reduced motion.</div>
			<Marquee
				class="py-4 motion-reduce:overflow-auto"
				innerclass="motion-reduce:animate-none motion-reduce:first:hidden"
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
				code={reducedMotionSnippet}
				showHeader={false}
				codeTextClasses="text-black"
				showLineNumbers={false}
				background="bg-white"
				language="html"
			/>
		</div>
	</div>
</div>