import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import compress from "astro-compress";
import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://atakanoz.com',
  experimental: {
    integrations: true
  },
  integrations: [tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), compress(), sitemap(), robotsTxt()]
});
