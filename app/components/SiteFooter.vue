<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const footerRef = ref<HTMLElement | null>(null)
const footerVisible = useState<boolean>('footer-visible', () => false)
const FOOTER_VISIBILITY_RATIO = 0.6

if (import.meta.client) {
  useIntersectionObserver(
    footerRef,
    ([entry]) => {
      if (!entry) {
        footerVisible.value = false
        return
      }

      const ratio = entry.intersectionRatio ?? 0
      footerVisible.value = entry.isIntersecting && ratio >= FOOTER_VISIBILITY_RATIO
    },
    {
      threshold: Array.from({ length: 11 }, (_, index) => index / 10),
      rootMargin: '0px 0px -40px 0px'
    }
  )
}
</script>

<template>
  <footer
    ref="footerRef"
    class="border-t transition-colors duration-300 border-black/10 dark:border-white/10 py-10"
  >
    <UContainer class="text-center text-zinc-600 dark:text-white/60 transition-colors duration-300 text-sm">
      © {{ new Date().getFullYear() }} Your Name — Built with Nuxt, Vue, and Nuxt UI.
    </UContainer>
  </footer>
</template>
