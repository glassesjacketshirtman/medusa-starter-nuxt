// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@pinia/nuxt", "@nuxt/image-edge"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
  image: {
    domains: ["nuxtjs.org"],
  },
  imports: {
    dirs: ["composables/**"],
  },
  runtimeConfig: {
    public: {
      medusaBackendUrl: "",
    },
  },
});
