import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // Pinned so `pnpm build` does not depend on the local Node major; keep in sync with .nvmrc.
    adapter: adapter({ runtime: "nodejs22.x" }),
  },
};

export default config;
