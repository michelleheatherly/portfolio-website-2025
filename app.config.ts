export default defineAppConfig({
  ui: {
    primary: 'violet',
    gray: 'slate',
    icons: {
      // Uses Iconify via <UIcon />
      dynamic: true
    },
    card: {
      base: 'backdrop-blur-xl bg-cyber-glass/60 dark:bg-cyber-glass/60 border border-cyber-line shadow-glass'
    },
    button: {
      variant: {
        // soft buttons look nice on glass
        soft: 'bg-white/5 hover:bg-white/10 border border-white/10'
      }
    }
  }
})