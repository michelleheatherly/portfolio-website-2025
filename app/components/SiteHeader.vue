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
  <header class="sticky top-0 z-40 backdrop-blur-xl bg-black/10 border-b border-cyber-line">
    <UContainer class="flex items-center justify-between py-3">
      <div class="flex items-center gap-3">
        <UIcon name="i-ph-code-bold" class="h-6 w-6 text-cyber-green" />
        <span class="font-semibold tracking-wide text-white">Your Name</span>
      </div>
      <nav class="hidden md:flex gap-6">
        <ULink
          v-for="l in links" :key="l.to" :to="l.to"
          class="text-sm text-white/80 hover:text-white transition-colors"
        >{{ l.label }}</ULink>
      </nav>
      <div class="flex items-center gap-2">
        <ThemeToggle />
        <UButton class="md:hidden" variant="soft" icon="i-heroicons-bars-3-20-solid" label="Menu" />
      </div>
    </UContainer>
  </header>
</template>