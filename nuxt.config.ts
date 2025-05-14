// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    injectPosition: 0,
  },
});
