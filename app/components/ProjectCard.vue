<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core'

defineProps<{
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    link: string
  }
}>()

const prefersReduced = usePreferredReducedMotion()
const pointerX = ref(50)
const pointerY = ref(110)

const spotlightBackground = computed(() => {
  if (prefersReduced.value === 'reduce')
    return 'radial-gradient(160px circle at 50% 120%, rgba(139, 92, 246, 0.12), transparent 66%)'

  return `radial-gradient(220px circle at ${pointerX.value}% ${pointerY.value}%,
    rgba(139, 92, 246, 0.35),
    transparent 70%)`
})

const hoveredMotion = computed(() =>
  prefersReduced.value === 'reduce'
    ? undefined
    : {
        scale: 1.02,
        y: -6,
        transition: {
          type: 'spring',
          stiffness: 180,
          damping: 18
        }
      }
)

const pressedMotion = computed(() =>
  prefersReduced.value === 'reduce'
    ? undefined
    : {
        scale: 0.99,
        transition: {
          duration: 0.15
        }
      }
)

function handlePointerMove(event: PointerEvent) {
  if (prefersReduced.value === 'reduce')
    return

  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 100
  const y = ((event.clientY - rect.top) / rect.height) * 100
  pointerX.value = Math.round(x)
  pointerY.value = Math.round(y)
}

function resetSpotlight() {
  pointerX.value = 50
  pointerY.value = 110
}
</script>

<template>
  <UCard
    class="group relative h-full overflow-hidden rounded-2xl transition-all duration-300
           border border-black/10 dark:border-white/10
           bg-white/70 dark:bg-white/5 backdrop-blur-xl
           hover:border-cyber-purple/30
           focus-within:ring-2 focus-within:ring-cyber-purple/40"
    v-motion
    :initial="{ opacity: 0, y: 24, scale: 0.98 }"
    :enter="{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 18 } }"
    :hovered="hoveredMotion"
    :pressed="pressedMotion"
    :visibleOnce="true"
    @pointermove="handlePointerMove"
    @pointerleave="resetSpotlight"
  >
    <span
      class="pointer-events-none absolute inset-px rounded-2xl
             opacity-0 transition-opacity duration-500 group-hover:opacity-80"
      :style="{ background: spotlightBackground }"
    />

    <span
      class="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyber-purple/0 via-cyber-purple/10 to-cyber-green/0
             opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-soft-light"
    />

    <img
      :src="project.image"
      alt=""
      class="h-44 w-full object-cover rounded-t-2xl transition-all duration-500 ease-out group-hover:scale-105"
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
          class="group/button transition-colors duration-300"
        >
          <UIcon
            name="i-heroicons-arrow-top-right-on-square-20-solid"
            class="h-5 w-5 transition-transform duration-500 group-hover/button:-translate-y-0.5 group-hover/button:rotate-12"
          />
          <span>View Project</span>
        </UButton>
      </div>
    </div>
  </UCard>
</template>
