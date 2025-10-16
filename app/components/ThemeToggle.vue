<script setup lang="ts">
const colorMode = useColorMode()
const nextTheme = computed(() => (colorMode.value === 'dark' ? 'light' : 'dark'))
const { t } = useI18n()
const modeLabel = computed(() => t(`common.modes.${nextTheme.value}`))
const ariaLabel = computed(() => t('theme.switch', { mode: modeLabel.value }))

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
      :aria-label="ariaLabel"
      color="neutral"
      variant="ghost"
      size="sm"
      class="group/theme-toggle rounded-full transition-colors duration-300"
      @click="startViewTransition"
    >
      <UIcon
        :name="`i-lucide-${nextTheme === 'dark' ? 'sun' : 'moon'}`"
        class="h-5 w-5 transition-transform duration-500 group-hover/theme-toggle:-translate-y-0.5 group-hover/theme-toggle:rotate-12"
      />
    </UButton>
    <template #fallback>
      <UButton
        :aria-label="ariaLabel"
        color="neutral"
        variant="ghost"
        size="sm"
        class="group/theme-toggle rounded-full transition-colors duration-300"
        @click="switchTheme"
      >
        <UIcon
          :name="`i-lucide-${nextTheme === 'dark' ? 'sun' : 'moon'}`"
          class="h-5 w-5 transition-transform duration-500 group-hover/theme-toggle:-translate-y-0.5 group-hover/theme-toggle:rotate-12"
        />
      </UButton>
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
