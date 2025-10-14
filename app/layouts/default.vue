<script setup lang="ts">
</script>

<template>
  <div class="relative flex min-h-dvh flex-col">
    <ClientOnly>
      <ParallaxBackground />
    </ClientOnly>

    <SiteHeader />

    <main class="flex-1">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>
