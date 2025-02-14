// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://astronaut.github.io',
  base: 'my-repo',
  integrations: [tailwind()],
  output: "server",
  adapter: node({
    mode: "standalone", // or 'middleware' if you're using with Express/Fastify
  }),
});
