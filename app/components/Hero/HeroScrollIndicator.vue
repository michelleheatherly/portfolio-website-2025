<template>
  <div
    class="flex text-sm text-zinc-500 dark:text-white/60 transition-colors duration-300"
    v-motion
    :initial="{ opacity: 0, y: 8 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.5 } }"
  >
    <div
      class="scroll-indicator relative flex items-center gap-3"
      :class="{ 'prefers-reduce': prefersReduced === 'reduce' }"
    >
      <span
        class="scroll-orb relative flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/70 text-cyber-purple shadow-[0_16px_30px_-24px_rgba(99,102,241,0.7)] dark:border-white/20 dark:bg-white/10"
      >
        <UIcon
          name="i-heroicons-arrow-down-20-solid"
          class="scroll-buddy-arrow h-5 w-5"
        />
      </span>

      <div class="flex flex-col">
        <span class="text-sm font-medium text-zinc-500 dark:text-white/60">{{ t('scrollIndicator.title') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core'

const prefersReduced = usePreferredReducedMotion()
const { t } = useI18n()
</script>

<style scoped>
.scroll-orb {
  animation: floaty 5s ease-in-out infinite;
}

.scroll-orb::after {
  content: '';
  position: absolute;
  inset: -10px;
  border-radius: 9999px;
  background: radial-gradient(circle at center, rgba(155, 92, 255, 0.48), rgba(155, 92, 255, 0));
  opacity: 0.75;
  filter: blur(8px);
  animation: neon-pulse 4.5s ease-in-out infinite;
  z-index: -1;
}

.scroll-buddy-arrow {
  animation: arrow-bounce 1.9s ease-in-out infinite;
}

.scroll-indicator.prefers-reduce .scroll-orb,
.scroll-indicator.prefers-reduce .scroll-buddy-arrow {
  animation: none;
  opacity: 1;
  transform: none;
}

.scroll-indicator.prefers-reduce .scroll-orb::after {
  animation: none;
  opacity: 0.7;
  transform: none;
}

@keyframes floaty {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes arrow-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}

@keyframes neon-pulse {
  0%,
  100% {
    opacity: 0.6;
    transform: scale(0.96);
  }
  45% {
    opacity: 0.95;
    transform: scale(1.05);
  }
  70% {
    opacity: 0.7;
    transform: scale(1);
  }
}
</style>
