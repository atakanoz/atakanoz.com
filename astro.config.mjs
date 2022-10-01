import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import compress from "astro-compress";
import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";
import turbolinks from'@astrojs/turbolinks';

// https://astro.build/config
export default defineConfig({
  site: 'https://atakanoz.com',
  experimental: {
    integrations: true
  },
  integrations: [tailwind(), turbolinks(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), compress(), sitemap(), robotsTxt()]
});
