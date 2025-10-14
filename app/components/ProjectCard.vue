<script setup lang="ts">
defineProps<{
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    link: string
  }
}>()
</script>

<template>
  <UCard
    class="h-full overflow-hidden rounded-2xl transition-all duration-300
           border border-black/10 dark:border-white/10
           bg-white/70 dark:bg-white/5 backdrop-blur-xl
           hover:-translate-y-0.5 hover:border-cyber-purple/30
           focus-within:ring-2 focus-within:ring-cyber-purple/40"
    v-motion
    :initial="{ opacity: 0, y: 24, scale: 0.98 }"
    :enter="{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 18 } }"
    :visibleOnce="true"
  >
    <img
      :src="project.image"
      alt=""
      class="h-44 w-full object-cover rounded-t-2xl transition-opacity duration-300"
    />

    <div class="p-4 space-y-3">
      <h3 class="text-lg font-semibold text-zinc-900 dark:text-white transition-colors duration-300">
        {{ project.title }}
      </h3>

      <p class="text-sm leading-relaxed text-zinc-600 dark:text-white/70 transition-colors duration-300">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <UBadge
          v-for="t in project.tags"
          :key="t"
          variant="soft"
          class="text-xs border border-black/10 dark:border-white/10 transition-colors duration-300"
          :ui="{ rounded: 'rounded-full' }"
        >
          {{ t }}
        </UBadge>
      </div>

      <div class="pt-2">
        <UButton
          :to="project.link"
          target="_blank"
          icon="i-heroicons-arrow-top-right-on-square-20-solid"
          class="transition-colors duration-300"
        >
          View Project
        </UButton>
      </div>
    </div>
  </UCard>
</template>