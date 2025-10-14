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
    class="h-full overflow-hidden rounded-2xl"
    v-motion
    :initial="{ opacity: 0, y: 24, scale: 0.98 }"
    :enter="{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 18 } }"
    :visibleOnce="true"
  >
    <img :src="project.image" alt="" class="h-44 w-full object-cover" />
    <div class="p-4 space-y-3">
      <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
      <p class="text-white/70 text-sm leading-relaxed">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2">
        <UBadge
          v-for="t in project.tags"
          :key="t"
          variant="soft"
          class="border border-white/10 text-xs"
          :ui="{ rounded: 'rounded-full' }"
        >
          {{ t }}
        </UBadge>
      </div>
      <div class="pt-2">
        <UButton :to="project.link" target="_blank" icon="i-heroicons-arrow-top-right-on-square-20-solid">
          View Project
        </UButton>
      </div>
    </div>
  </UCard>
</template>