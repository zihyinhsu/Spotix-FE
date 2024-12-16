export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
        },
      ],
    },
  },
  css: ['@/assets/scss/app.scss'],
  runtimeConfig: {
    public: {
      apiBase: '/',
    },
  },
  compatibilityDate: '2024-12-16',
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: false,
        quotes: 'single',
      },
      // standalone: false
    },
    checker: true,
  },
})
