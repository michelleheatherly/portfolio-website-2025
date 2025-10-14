<script setup lang="ts">
</script>

<template>
  <UApp
    class="min-h-dvh transition-colors duration-300
           bg-zinc-50 text-zinc-900
           dark:bg-cyber-bg dark:text-zinc-100"
  >
    <ClientOnly>
      <ParallaxBackground />
    </ClientOnly>

    <SiteHeader />
    <NuxtPage />
  </UApp>
</template>