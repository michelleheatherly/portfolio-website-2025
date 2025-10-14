<script setup lang="ts">
const links = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Education', to: '#education' },
  { label: 'Skills', to: '#skills' },
  { label: 'Projects', to: '#projects' },
  { label: 'Contact', to: '#contact' }
]
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b transition-all duration-300
           bg-white/90 dark:bg-black/30
           border-black/10 dark:border-white/10
           supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-black/20
           supports-[backdrop-filter]:backdrop-blur-xl"
  >
    <UContainer class="flex items-center justify-between py-3">
      <!-- Brand -->
      <div class="flex items-center gap-3">
        <UIcon name="i-ph-code-bold" class="h-6 w-6 text-cyber-green" />
        <span class="font-semibold tracking-wide text-zinc-900 dark:text-white transition-colors duration-300">
          Your Name
        </span>
      </div>

      <!-- Desktop nav -->
      <nav class="hidden md:flex gap-6">
        <ULink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="relative text-sm transition-colors duration-300
                 text-zinc-700 hover:text-zinc-900
                 dark:text-white/80 dark:hover:text-white
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-purple/40 rounded-md px-1"
        >
          {{ l.label }}
          <!-- subtle underline accent -->
          <span
            class="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyber-purple to-cyber-green
                   transition-all duration-300 group-hover:w-full"
          />
        </ULink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <ThemeToggle />
        <UButton
          class="md:hidden"
          variant="soft"
          icon="i-heroicons-bars-3-20-solid"
          aria-label="Menu"
        />
      </div>
    </UContainer>
  </header>
</template>