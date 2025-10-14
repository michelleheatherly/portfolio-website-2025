<script setup lang="ts">
import { useWindowScroll, usePreferredReducedMotion, useEventListener } from '@vueuse/core'

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
const isMenuOpen = ref(false)
const rippleOrigin = ref({ x: 0, y: 0 })
const menuId = 'site-navigation'

const showElevation = computed(() => y.value > 24 && !footerVisible.value && !isMenuOpen.value)
const shouldHideHeader = computed(() => footerVisible.value && !isMenuOpen.value)
const allowMenuRipple = computed(() => prefersReduced.value !== 'reduce')
const rippleStyle = computed(() => ({
  '--ripple-x': `${rippleOrigin.value.x}px`,
  '--ripple-y': `${rippleOrigin.value.y}px`
}))

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

const mobileNavEnterVariant = (index: number) =>
  prefersReduced.value === 'reduce'
    ? {
        opacity: 1,
        y: 0,
        scale: 1
      }
    : {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.45,
          delay: 0.18 + index * 0.06,
          easing: 'easeOut'
        }
      }

function toggleMenu(event?: MouseEvent) {
  const next = !isMenuOpen.value

  if (next && import.meta.client) {
    if (event) {
      rippleOrigin.value = { x: event.clientX, y: event.clientY }
    } else {
      rippleOrigin.value = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    }
  }

  isMenuOpen.value = next
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleMobileNavigate() {
  closeMenu()
}

if (import.meta.client) {
  watch(isMenuOpen, (open) => {
    document.body.classList.toggle('overflow-hidden', open)
  })
}

let removeEscapeListener: (() => void) | undefined

if (import.meta.client) {
  removeEscapeListener = useEventListener(document, 'keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenu()
    }
  })
}

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.classList.remove('overflow-hidden')
  }

  removeEscapeListener?.()
})
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
          :icon="isMenuOpen ? 'i-heroicons-x-mark-20-solid' : 'i-heroicons-bars-3-20-solid'"
          :aria-expanded="isMenuOpen"
          :aria-controls="menuId"
          aria-label="Menu"
          @click="toggleMenu"
        />
      </div>
    </UContainer>

    <Teleport to="body">
      <Transition name="menu-overlay">
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 z-[70] flex flex-col md:hidden"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`${menuId}-title`"
          @click.self="closeMenu"
        >
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyber-purple/80 via-cyber-green/30 to-black/90 backdrop-blur-[38px]" />
          <UButton
            class="absolute right-4 top-4 z-20 text-cyber-green transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-purple/40"
            color="neutral"
            variant="ghost"
            size="lg"
            square
            icon="i-heroicons-x-mark-20-solid"
            aria-label="Close menu"
            type="button"
            @click.stop="closeMenu"
          />
          <div
            class="menu-ripple"
            :class="{ 'menu-ripple--active': allowMenuRipple }"
            :style="rippleStyle"
          />
          <div class="relative z-10 flex h-full flex-col items-center justify-center gap-10 px-8 text-center">
            <span
              :id="`${menuId}-title`"
              class="text-xs uppercase tracking-[0.5em] text-white/70"
            >
              Navigate
            </span>
            <nav :id="menuId">
              <ul class="space-y-6">
                <li
                  v-for="(l, index) in links"
                  :key="l.to"
                  v-motion
                  :initial="prefersReduced === 'reduce' ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 18, scale: 0.96 }"
                  :enter="mobileNavEnterVariant(index)"
                >
                  <ULink
                    :to="l.to"
                    class="group menu-link relative inline-block transform-gpu text-3xl font-semibold tracking-tight text-white/90 transition-all duration-300 ease-out
                           hover:text-cyber-green hover:drop-shadow-[0_0_25px_rgba(43,245,160,0.45)]
                           focus-visible:text-cyber-green focus-visible:drop-shadow-[0_0_25px_rgba(43,245,160,0.45)] focus-visible:ring-2 focus-visible:ring-cyber-purple/50 focus-visible:outline-none
                           dark:hover:text-cyber-green"
                    @click="handleMobileNavigate"
                  >
                    <span
                      class="pointer-events-none absolute inset-x-0 -bottom-8 -z-10 h-16 transform-gpu scale-95 rounded-full bg-cyber-purple/25 blur-[60px] opacity-0 transition-all duration-500 ease-out
                             group-hover:opacity-80 group-hover:scale-110 group-focus-visible:opacity-80 group-focus-visible:scale-110"
                    />
                    {{ l.label }}
                    <span
                      class="pointer-events-none absolute -bottom-2 left-0 block h-0.5 w-full overflow-hidden rounded-full bg-white/10 opacity-30 transition-opacity duration-200 ease-out
                             group-hover:opacity-100 group-focus-visible:opacity-100"
                    >
                      <span
                        class="line-draw block h-full w-full origin-left scale-x-0 bg-gradient-to-r from-cyber-green via-cyber-purple to-cyber-green transition-transform duration-500 ease-out
                               group-hover:scale-x-100 group-focus-visible:scale-x-100"
                      />
                    </span>
                  </ULink>
                </li>
              </ul>
            </nav>
            <p class="text-sm text-white/60 max-w-xs">
              Curated projects, thoughtful motion, and a touch of neon romance.
            </p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
.menu-overlay-enter-active,
.menu-overlay-leave-active {
  transition: opacity 0.32s ease;
}

.menu-overlay-enter-from,
.menu-overlay-leave-to {
  opacity: 0;
}

.menu-ripple {
  position: fixed;
  width: 120vmax;
  height: 120vmax;
  left: var(--ripple-x);
  top: var(--ripple-y);
  border-radius: 9999px;
  transform: translate(-50%, -50%) scale(0.05);
  background: radial-gradient(circle at center, rgba(155, 92, 255, 0.72) 0%, rgba(43, 245, 160, 0.28) 45%, rgba(12, 10, 16, 0) 70%);
  opacity: 0;
  pointer-events: none;
}

.menu-ripple--active {
  animation: menu-ripple-open 0.6s cubic-bezier(.76, .32, .29, .99) forwards;
}

@keyframes menu-ripple-open {
  0% {
    transform: translate(-50%, -50%) scale(0.05);
    opacity: 0.75;
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}
</style>
