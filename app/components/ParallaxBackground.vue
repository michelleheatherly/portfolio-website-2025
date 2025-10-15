<script setup lang="ts">
import { useScroll, usePreferredReducedMotion } from '@vueuse/core'

const { y } = useScroll(window)
const prefersReduced = usePreferredReducedMotion()
const k = computed(() => (prefersReduced.value === 'reduce' ? 0 : 1))

const layer1 = computed(() => `translateY(${(y.value * 0.10 * k.value).toFixed(2)}px)`)
const layer1BgPos = computed(() => `center calc(50% + ${(y.value * 0.08 * k.value).toFixed(2)}px)`)
const layer2 = computed(() => `translateY(${(y.value * 0.20 * k.value).toFixed(2)}px)`)
const layer3 = computed(() => `translateY(${(y.value * 0.35 * k.value).toFixed(2)}px)`)
const layer4 = computed(() => `translateY(${(y.value * 0.50 * k.value).toFixed(2)}px)`)
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none transition-colors duration-500 parallax-root"
    aria-hidden="true"
  >
    <!-- Conic gradient wash -->
    <div
      class="absolute -inset-40 blur-3xl opacity-60 md:opacity-70
             transition-opacity duration-500 will-change-transform
             mix-blend-multiply dark:mix-blend-normal parallax-conic"
      :style="{ transform: layer1 }"
    />

    <!-- Nebula starfield -->
    <div
      class="absolute -top-[120vh] -bottom-[80vh] -left-24 -right-24 opacity-90 dark:opacity-10
             transition-opacity duration-500 will-change-transform mix-blend-multiply dark:mix-blend-screen parallax-nebula"
      :style="{ backgroundPosition: layer1BgPos }"
    />

    <!-- Orbit arcs -->
    <svg
      class="absolute inset-0 opacity-55 dark:opacity-45 transition-opacity duration-500 will-change-transform
             mix-blend-multiply dark:mix-blend-luminosity"
      :style="{ transform: layer2 }"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="orbitStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="var(--orbit-stroke-start)" />
          <stop offset="45%" stop-color="var(--orbit-stroke-mid)" />
          <stop offset="100%" stop-color="var(--orbit-stroke-end)" />
        </linearGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="var(--node-glow-inner)" />
          <stop offset="100%" stop-color="var(--node-glow-outer)" />
        </radialGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="12" result="blurred" />
          <feMerge>
            <feMergeNode in="blurred" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#softGlow)" stroke="url(#orbitStroke)" stroke-width="1.6" fill="none" stroke-linecap="round">
        <path d="M -120 190 Q 320 40 860 200" opacity="0.55" />
        <path d="M -100 330 Q 340 270 840 360" opacity="0.65" stroke-dasharray="8 14" />
        <path d="M -80 480 Q 420 560 820 400" opacity="0.45" />
      </g>
      <g fill="url(#nodeGlow)" opacity="0.85">
        <circle cx="140" cy="180" r="16" />
        <circle cx="520" cy="120" r="20" />
        <circle cx="680" cy="340" r="14" />
        <circle cx="320" cy="420" r="18" />
      </g>
    </svg>

    <!-- Floating facets -->
    <div
      class="absolute left-[58%] top-[16%] w-[30vw] max-w-[420px] aspect-[4/3] rounded-[35%]
             opacity-35 dark:opacity-45 transition-opacity duration-500 will-change-transform
             mix-blend-multiply dark:mix-blend-luminosity parallax-facet-primary"
      :style="{ transform: `${layer3} rotate(12deg)` }"
    />
    <div
      class="absolute right-[62%] bottom-[12%] w-[36vw] max-w-[460px] aspect-square rounded-[40%]
             opacity-30 dark:opacity-40 transition-opacity duration-500 will-change-transform
             mix-blend-multiply dark:mix-blend-luminosity parallax-facet-secondary"
      :style="{ transform: `${layer4} rotate(-18deg)` }"
    />

    <!-- Glow blobs -->
    <div
      class="absolute top-[-20%] left-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px]
             opacity-45 dark:opacity-55 transition-opacity duration-500 will-change-transform
             mix-blend-multiply dark:mix-blend-normal parallax-glow-primary"
      :style="{ transform: layer3 }"
    />
    <div
      class="absolute bottom-[-20%] right-[5%] w-[55vw] h-[55vw] rounded-full blur-[120px]
             opacity-45 dark:opacity-55 transition-opacity duration-500 will-change-transform
             mix-blend-multiply dark:mix-blend-normal parallax-glow-secondary"
      :style="{ transform: layer2 }"
    />

    <!-- Subtle vignette -->
    <div
      class="absolute inset-0 pointer-events-none transition-opacity duration-500
             opacity-20 dark:opacity-10 parallax-vignette"
    />
  </div>
</template>

<style scoped>
.parallax-root {
  background-color: var(--page-bg);
}

.parallax-conic {
  background: conic-gradient(
    from 220deg at 50% 50%,
    var(--conic-a),
    transparent 25%,
    var(--conic-b),
    transparent 60%
  );
}

.parallax-nebula {
  background-image:
    linear-gradient(
      to bottom,
      rgba(15, 23, 42, 0.2) 0%,
      rgba(15, 23, 42, 0.12) 24%,
      transparent 58%,
      rgba(15, 23, 42, 0.28) 100%
    ),
    radial-gradient(circle at 12% 16%, rgba(99, 102, 241, 0.42) 0, transparent 46%),
    radial-gradient(circle at 84% 18%, rgba(129, 140, 248, 0.36) 0, transparent 48%),
    radial-gradient(circle at 66% 78%, rgba(56, 189, 248, 0.32) 0, transparent 58%),
    radial-gradient(circle at 20% 80%, rgba(96, 165, 250, 0.3) 0, transparent 62%),
    radial-gradient(circle at 52% 54%, rgba(236, 254, 255, 0.25) 0, transparent 48%),
    radial-gradient(circle at 36% 38%, rgba(226, 232, 240, 0.22) 0, transparent 44%);
  background-size: 150% 190%;
  background-repeat: no-repeat;
  filter: saturate(1.05) contrast(1.05);
}

.parallax-facet-primary {
  background: linear-gradient(140deg, var(--facet-primary), transparent 70%);
  border: 1px solid var(--facet-primary-border);
  box-shadow: 0 0 120px var(--facet-primary-shadow);
}

.parallax-facet-secondary {
  background: linear-gradient(200deg, var(--facet-secondary), transparent 60%);
  border: 1px solid var(--facet-secondary-border);
  box-shadow: 0 0 140px var(--facet-secondary-shadow);
}

.parallax-glow-primary {
  background: radial-gradient(circle at 30% 30%, var(--glow-purple), transparent 60%);
}

.parallax-glow-secondary {
  background: radial-gradient(circle at 60% 60%, var(--glow-green), transparent 60%);
}

.parallax-vignette {
  background: radial-gradient(120% 120% at 50% 10%, transparent 35%, rgba(0, 0, 0, 0.35) 100%);
}
</style>
