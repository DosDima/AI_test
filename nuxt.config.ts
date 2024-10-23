// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxt/eslint", '@pinia/nuxt'],
  css: ["~/assets/css/main.css"],
  typescript: {
    typeCheck: true
  },
});
