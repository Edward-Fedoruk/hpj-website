import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import compressor from "astro-compressor";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://screwfast.uk",
  image: {
    domains: ["images.unsplash.com"],
  },
  prefetch: true,
  integrations: [
    // sitemap({
    //   i18n: {
    //     defaultLocale: "en", // All urls that don't contain language prefix will be treated as default locale
    //     locales: {
    //       en: "en", // The `defaultLocale` value must present in `locales` keys
    //     },
    //   },
    // }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    mdx(),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp", // or "squoosh" if you don't want native deps
    },
    domains: ["localhost:1337", "authentic-cheese-38040455f0.strapiapp.com"], // WITHOUT protocol; your Strapi host
  },
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
