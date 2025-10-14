// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',           // Nuxt UI (Tailwind + UI components)
    '@nuxtjs/color-mode', // Dark/light mode
    '@vueuse/nuxt',       // VueUse core
    '@vueuse/motion/nuxt' // VueUse Motion directives & composables
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark', // default mode
    fallback: 'dark'
  },
  ui: {
    // Fine-tune theme tokens (Nuxt UI)
    primary: 'violet',
  },
  tailwindcss: {
    viewer: false
  },
  app: {
    head: {
      title: 'Dev Portfolio',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  },
  css: ['@/assets/css/main.css']
})
