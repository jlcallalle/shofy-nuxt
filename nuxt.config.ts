// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-01-27",
  devtools: { enabled: process.env.NUXT_DEVTOOLS_ENABLED !== 'false' },
  dir: {
    public: 'app/public',
  },
  nitro: {
    logLevel: process.env.NODE_ENV === 'development' ? 1 : 3
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],

  app: {
    head: {
      title: "Boot Training Peru - Tienda de zapatillas",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'es-PE',
      },
      meta: [
        {
          name: 'description',
          content: 'Zapatillas Boot Training Peru para entrenamiento. Modelos de calidad, durables y cómodos para tus rutinas.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Boot Training Peru' },
        { property: 'og:title', content: 'Boot Training Peru' },
        {
          property: 'og:description',
          content: 'Zapatillas Boot Training Peru para entrenamiento. Modelos de calidad, durables y cómodos para tus rutinas.',
        },
        { property: 'og:url', content: 'https://www.boottrainingperu.com/' },
        { property: 'og:image', content: 'https://www.boottrainingperu.com/img/logo/logo_peru.jpeg' },
        { property: 'og:image:secure_url', content: 'https://www.boottrainingperu.com/img/logo/logo_peru.jpeg' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1280' },
        { property: 'og:image:height', content: '453' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Boot Training Peru' },
        {
          name: 'twitter:description',
          content: 'Zapatillas Boot Training Peru para entrenamiento. Modelos de calidad, durables y cómodos para tus rutinas.',
        },
        { name: 'twitter:image', content: 'https://www.boottrainingperu.com/img/logo/logo_peru.jpeg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/img/logo/favicon.png' },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
        },
      ],
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
        },
      },
    },
  },

  css: [
    "~/assets/css/font-awesome-pro.css",
    "~/assets/css/flaticon_shofy.css",
    "~/assets/scss/main.scss",
  ]
})
