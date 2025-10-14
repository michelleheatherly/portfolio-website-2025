<script setup lang="ts">
import { useWindowScroll, usePreferredReducedMotion } from '@vueuse/core'

const links = [
  { label: 'Home', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Education', to: '#education' },
  { label: 'Skills', to: '#skills' },
  { label: 'Projects', to: '#projects' },
  { label: 'Contact', to: '#contact' }
]

const prefersReduced = usePreferredReducedMotion()
const { y } = useWindowScroll()

const footerVisible = useState<boolean>('footer-visible', () => false)
const showElevation = computed(() => y.value > 24 && !footerVisible.value)
const shouldHideHeader = computed(() => footerVisible.value)

const navEnterVariant = (index: number) =>
  prefersReduced.value === 'reduce'
    ? {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0
        }
      }
    : {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          delay: 0.05 + index * 0.05
        }
      }
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b transition-all duration-300
           bg-white/90 dark:bg-black/30
           border-black/10 dark:border-white/10
           supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-black/20
           supports-[backdrop-filter]:backdrop-blur-xl transform-gpu"
    :class="[
      showElevation
        ? 'shadow-[0_18px_34px_-28px_rgba(124,58,237,0.55)] border-black/5 dark:border-white/5 bg-white/95 dark:bg-black/40'
        : '',
      shouldHideHeader ? '-translate-y-full opacity-0 pointer-events-none' : 'opacity-100'
    ]"
  >
    <UContainer class="flex items-center justify-between py-3">
      <!-- Brand -->
      <div
        class="flex items-center gap-3"
        v-motion
        :initial="{ opacity: 0, y: -6 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.4 } }"
      >
        <UIcon name="i-ph-code-bold" class="h-6 w-6 text-cyber-green" />
        <span class="font-semibold tracking-wide text-zinc-900 dark:text-white transition-colors duration-300">
          Your Name
        </span>
      </div>

      <!-- Desktop nav -->
      <nav class="hidden md:block">
        <ul class="flex gap-6 items-center">
          <li
            v-for="(l, index) in links"
            :key="l.to"
            v-motion
            :initial="{ opacity: prefersReduced === 'reduce' ? 1 : 0, y: prefersReduced === 'reduce' ? 0 : -6 }"
            :enter="navEnterVariant(index)"
          >
            <ULink
              :to="l.to"
              class="group relative text-sm transition-colors duration-300
                     text-zinc-700 hover:text-zinc-900
                     dark:text-white/80 dark:hover:text-white
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-purple/40 rounded-md px-1"
            >
              {{ l.label }}
              <!-- subtle underline accent -->
              <span
                class="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyber-purple to-cyber-green
                       transition-all duration-300 group-hover:w-full group-focus-visible:w-full"
              />
            </ULink>
          </li>
        </ul>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <ThemeToggle />
        <UButton
          class="md:hidden"
          variant="soft"
          icon="i-heroicons-bars-3-20-solid"
          aria-label="Menu"
        />
      </div>
    </UContainer>
  </header>
</template>
