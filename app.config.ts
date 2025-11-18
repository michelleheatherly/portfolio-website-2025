// app.config.ts (Nuxt UI theme overrides)
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      secondary: 'purple',
      success: 'green',
      info: 'purple',
    }
    card: {
      base: [
        // light surface
        'bg-white/70 border border-black/5 text-zinc-900',
        'backdrop-blur-xl shadow-glass',
        // dark surface
        'dark:bg-white/5 dark:border-white/10 dark:text-zinc-100'
      ].join(' ')
    },
    button: {
      variant: {
        soft: [
          'bg-black/[0.04] hover:bg-black/[0.08] border border-black/10 text-zinc-900',
          'dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-zinc-100'
        ].join(' ')
      }
    },
    input: {
      base: 'bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10'
    }
  }
})