<script setup lang="ts">
const colorMode = useColorMode()
const nextTheme = computed(() => (colorMode.value === 'dark' ? 'light' : 'dark'))

function switchTheme() {
  colorMode.preference = nextTheme.value
}

function startViewTransition(event: MouseEvent) {
  // Accessibility: no fancy motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    switchTheme()
    return
  }

  // Fallback if the API isn't supported
  // (Firefox/Safari as of now)
  // @ts-expect-error: experimental API
  if (!document.startViewTransition) {
    switchTheme()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  // @ts-expect-error: experimental API
  const transition = document.startViewTransition(() => {
    // The DOM update that differentiates old/new snapshots:
    switchTheme()
  })

  transition.ready.then(() => {
    const duration = 600
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration,
        easing: 'cubic-bezier(.76,.32,.29,.99)',
        // Animate only the NEW snapshot
        pseudoElement: '::view-transition-new(root)'
      }
    )
  })
}
</script>

<template>
  <ClientOnly>
    <UButton
      :aria-label="`Switch to ${nextTheme} mode`"
      :icon="`i-lucide-${nextTheme === 'dark' ? 'sun' : 'moon'}`"
      color="neutral"
      variant="ghost"
      size="sm"
      class="rounded-full"
      @click="startViewTransition"
    />
    <template #fallback>
      <UButton
        :aria-label="`Switch to ${nextTheme} mode`"
        :icon="`i-lucide-${nextTheme === 'dark' ? 'sun' : 'moon'}`"
        color="neutral"
        variant="ghost"
        size="sm"
        class="rounded-full"
        @click="switchTheme"
      />
    </template>
  </ClientOnly>
</template>

<style>
/* Keep default animations off and control with our clip-path animation */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

/* Ensure the new snapshot sits above everything */
::view-transition-new(root) { z-index: 9999; }
::view-transition-old(root) { z-index: 1; }

/* Optional: if any elements should NOT participate in the transition
   (e.g., fixed background layers), give them a view-transition-name of 'none'
   in their component styles. Example:
   .no-view-transition { view-transition-name: none; }
*/
</style>