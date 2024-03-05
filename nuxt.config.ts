// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    ["@nuxtjs/google-fonts", { families: { Jost: true } }],
    "@pinia/nuxt",
  ],
  components: [{ path: "~/shared/icons", prefix: "Icon" }, "~/components"],
  runtimeConfig: {
    baseUrl: "https://meowfacts.herokuapp.com/",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
