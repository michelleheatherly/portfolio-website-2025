<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    badge?: string
    headline: string
    description: string
  }>(),
  {
    badge: 'Collaborations'
  }
)
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 24 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 0.05, duration: 0.6, ease: 'easeOut' } }"
    :hovered="{ scale: 1.01, transition: { duration: 0.4 } }"
    class="relative space-y-6 group"
  >
    <span
      v-if="props.badge"
      class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-600 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-22px_rgba(129,140,248,0.8)] dark:border-white/10 dark:bg-white/10 dark:text-white/60"
    >
      <span class="h-1.5 w-1.5 rounded-full bg-cyber-green animate-pulse"></span>
      {{ props.badge }}
    </span>

    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-zinc-900 transition-colors duration-300 md:text-3xl dark:text-white">
        {{ props.headline }}
      </h2>
      <p class="text-zinc-600 transition-colors duration-300 dark:text-white/70">
        {{ props.description }}
      </p>
    </div>

    <div class="grid gap-3 pt-2 sm:grid-cols-2">
      <slot name="actions">
        <UButton to="mailto:you@example.com" icon="i-heroicons-envelope-20-solid" variant="soft">Email</UButton>
        <UButton to="https://github.com/yourname" target="_blank" icon="i-simple-icons-github" variant="soft">GitHub</UButton>
        <UButton to="https://www.linkedin.com/in/yourname" target="_blank" icon="i-simple-icons-linkedin" variant="soft">LinkedIn</UButton>
        <UButton to="#projects" variant="soft" icon="i-heroicons-bolt-20-solid" class="justify-start">
          View latest builds
        </UButton>
      </slot>
    </div>
  </div>
</template>
