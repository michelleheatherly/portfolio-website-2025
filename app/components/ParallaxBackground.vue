<script setup lang="ts">
import { useScroll } from '@vueuse/core'

const target = ref<HTMLElement | null>(null)
const { y } = useScroll(window, { behavior: 'smooth' })

const layer1 = computed(() => `translateY(${(y.value * 0.1).toFixed(2)}px)`)
const layer2 = computed(() => `translateY(${(y.value * 0.2).toFixed(2)}px)`)
const layer3 = computed(() => `translateY(${(y.value * 0.35).toFixed(2)}px)`)
</script>

<template>
  <div ref="target" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <!-- Conic gradient wash -->
    <div
      class="absolute -inset-40 opacity-60 blur-3xl"
      :style="{ transform: layer1, background: 'conic-gradient(from 220deg at 50% 50%, rgba(155,92,255,.35), transparent 25%, rgba(43,245,160,.2), transparent 60%)' }"
    />
    <!-- Cyber grid -->
    <svg
      class="absolute inset-0 opacity-30"
      :style="{ transform: layer2 }"
      xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(155,92,255,0.25)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    <!-- Glow blobs -->
    <div class="absolute top-[-20%] left-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-40"
         :style="{ transform: layer3, background: 'radial-gradient(circle at 30% 30%, rgba(155,92,255,0.45), transparent 60%)' }" />
    <div class="absolute bottom-[-20%] right-[5%] w-[55vw] h-[55vw] rounded-full blur-[120px] opacity-40"
         :style="{ transform: layer2, background: 'radial-gradient(circle at 60% 60%, rgba(43,245,160,0.35), transparent 60%)' }" />
  </div>
</template>