<script setup lang="ts">
import { useScroll, usePreferredReducedMotion } from '@vueuse/core'

const { y } = useScroll(window)
const prefersReduced = usePreferredReducedMotion()
const k = computed(() => (prefersReduced.value === 'reduce' ? 0 : 1))

const layer1 = computed(() => `translateY(${(y.value * 0.10 * k.value).toFixed(2)}px)`)
const layer2 = computed(() => `translateY(${(y.value * 0.20 * k.value).toFixed(2)}px)`)
const layer3 = computed(() => `translateY(${(y.value * 0.35 * k.value).toFixed(2)}px)`)
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none transition-colors duration-500"
    :style="{ backgroundColor: 'var(--page-bg)' }"
    aria-hidden="true"
  >
    <!-- Conic gradient wash -->
    <div
      class="absolute -inset-40 blur-3xl opacity-60 md:opacity-70
             transition-opacity duration-500 will-change-transform
             mix-blend-multiply dark:mix-blend-normal"
      :style="{
        transform: layer1,
        background:
          'conic-gradient(from 220deg at 50% 50%, var(--conic-a), transparent 25%, var(--conic-b), transparent 60%)'
      }"
    />

    <!-- Cyber grid -->
    <svg
      class="absolute inset-0 opacity-25 dark:opacity-30 transition-opacity duration-500 will-change-transform"
      :style="{ transform: layer2 }"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M 48 0 L 0 0 0 48" fill="none" :stroke="`var(--bg-grid-stroke)`" stroke-width="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>

    <!-- Glow blobs -->
    <div
      class="absolute top-[-20%] left-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px]
             opacity-45 dark:opacity-55 transition-opacity duration-500 will-change-transform
             mix-blend-screen dark:mix-blend-normal"
      :style="{
        transform: layer3,
        background: 'radial-gradient(circle at 30% 30%, var(--glow-purple), transparent 60%)'
      }"
    />
    <div
      class="absolute bottom-[-20%] right-[5%] w-[55vw] h-[55vw] rounded-full blur-[120px]
             opacity-45 dark:opacity-55 transition-opacity duration-500 will-change-transform
             mix-blend-screen dark:mix-blend-normal"
      :style="{
        transform: layer2,
        background: 'radial-gradient(circle at 60% 60%, var(--glow-green), transparent 60%)'
      }"
    />

    <!-- Subtle vignette -->
    <div
      class="absolute inset-0 pointer-events-none transition-opacity duration-500
             opacity-20 dark:opacity-10"
      style="background: radial-gradient(120% 120% at 50% 10%, transparent 35%, rgba(0,0,0,0.35) 100%);"
    />
  </div>
</template>