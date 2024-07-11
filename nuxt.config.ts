// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@pinia/nuxt"],
  i18n: {
    strategy: "prefix",
    langDir: "locales",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en.js",
      },
      {
        code: "zh",
        iso: "zh-TW",
        file: "zh.js",
      },
    ],
    defaultLocale: "zh",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  css: ["~/assets/scss/main.scss"],
  components: true,
  devServer: {
    port: 8000,
  },
});
