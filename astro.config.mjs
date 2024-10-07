import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  build: {
    // Configura el caché aquí
    cache: {
      'Cache-Control': 'no-store',
    },
  },
  integrations: [tailwind(), sanity({
    projectId: 'hm9h78ua',
    dataset: 'production',
    useCdn: false, // See note on using the CDN
    apiVersion: "2024-10-04",
    studioBasePath: '/studio' // insert the current date to access the latest version of the API
  }),
  react(),]
});