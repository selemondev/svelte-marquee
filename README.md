<script lang="ts">
	import Card from '../components/Card.svelte';
	import Marquee from '$lib/Marquee.svelte';
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

	const localImportSnippet = `import { Marquee } from "@selemondev/svelte-marquee;
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


<div align="center">

# Marquee <br> 🌬️

> A beautiful marquee component for Svelte ✨.

</div>

## Installation

```bash
npm install @selemondev/svelte-marquee
```
or you can skip npm install, and just copy and paste the source code into your component like Shadcn Svelte (don't forget to also copy the tailwind config if you do this).


## Register it as a local component

```js
import { Marquee } from "@selemondev/svelte-marquee;
import "@selemondev/svelte-marquee/dist/style.css"
```

## Usage

The library has a few props that are self-explanatory; you can get it running in no time. See the web examples for more details.

```js
<Marquee 
direction="left" 
fade={true}
reverse={false}
pauseOnHover={false}
innerClassName="" // pass class to change gap or speed
>
  <div>Content 1</div>
  <div>Content 2</div>
  <div>Content 3</div>
</Marquee>
```

This library is made specifically for Tailwind users, however you can also use vanilla CSS classes to override the gap.

## Credits

- Inspired by [@devnomic's](https://github.com/devnomic) React Marquee component.

- Inspired by [@selemondev's](https://github.com/selemondev) Vue Marquee component.

## License

Released under [MIT](/LICENSE) by [@selemondev](https://github.com/selemondev).

