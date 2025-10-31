<script setup lang="ts">
import { reactive, ref } from 'vue'

const focusPanelRef = ref<HTMLElement | null>(null)
const glow = reactive({
  x: 50,
  y: 50,
  active: false
})

const { t, tm, rt, locale } = useI18n()

const aboutBadges = computed(() => {
  const raw = tm('about.badges')
  if (!Array.isArray(raw))
    return []

  return raw.map((badge) => (typeof badge === 'string' ? badge : rt(badge)))
})

const updateGlow = (event: PointerEvent) => {
  if (!focusPanelRef.value) {
    return
  }

  const rect = focusPanelRef.value.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 100
  const y = ((event.clientY - rect.top) / rect.height) * 100

  glow.x = Math.min(100, Math.max(0, x))
  glow.y = Math.min(100, Math.max(0, y))
  glow.active = true
}

const resetGlow = () => {
  glow.active = false
}
</script>

<template>
  <section id="about" class="relative overflow-hidden transition-colors duration-300">
    <UContainer class="relative py-24">
      <div class="grid items-start gap-12 lg:grid-cols-12">
        <div
          ref="focusPanelRef"
          class="relative space-y-10 pb-6 sm:pb-8 lg:col-span-7"
          v-motion-fade-visible-once
          @pointerenter="updateGlow"
          @pointermove="updateGlow"
          @pointerleave="resetGlow"
          @pointercancel="resetGlow"
        >
          <div
            class="pointer-events-none absolute -inset-x-6 -top-6 -bottom-8 rounded-[3rem] opacity-0 transition-opacity duration-500
                   sm:-inset-x-8 sm:-top-8 sm:-bottom-10 md:-inset-x-10 lg:-inset-x-12"
            :class="{ 'opacity-100': glow.active }"
            :style="{
              background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(125, 211, 252, 0.22), transparent 72%)`
            }"
          />

          <div class="relative space-y-8">
            <span
              class="inline-flex items-center gap-2 rounded-full border border-cyber-green/30 bg-cyber-green/10 px-4 py-1
                     text-xs font-semibold uppercase tracking-[0.28em] text-cyber-green transition-colors duration-300
                     dark:border-cyber-green/40 dark:bg-cyber-green/20 dark:text-cyber-green/90"
            >
              <UIcon name="i-heroicons-sparkles-20-solid" class="h-4 w-4" />
              {{ t('about.badge') }}
            </span>

            <div class="space-y-4">
              <h2
                class="text-3xl font-semibold leading-tight text-zinc-900 transition-colors duration-300
                       md:text-4xl dark:text-white"
              >
                {{ t('about.heading') }}
              </h2>
              <p class="text-lg text-zinc-600 transition-colors duration-300 dark:text-white/70">
                {{ t('about.description') }}
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <div
                v-motion
                :initial="{ y: 24, opacity: 0 }"
                :enter="{ y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.5, ease: 'easeOut' } }"
                class="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/80 p-5 transition-all duration-500
                       shadow-sm hover:-translate-y-1 hover:border-cyber-green/40 hover:shadow-[0_35px_65px_-48px_rgba(16,185,129,0.55)]
                       dark:border-white/10 dark:bg-white/10"
              >
                <div
                  class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500
                         group-hover:opacity-100"
                  style="background: radial-gradient(120% 120% at 0% 0%, rgba(34,197,94,0.18), transparent 55%)"
                ></div>
                <div class="relative">
                  <p class="text-xs font-semibold uppercase tracking-wide text-cyber-green">
                    {{ t('about.cards.superpower.title') }}
                  </p>
                  <p class="mt-2 text-sm text-zinc-600 transition-colors duration-300 dark:text-white/70">
                    {{ t('about.cards.superpower.body') }}
                  </p>
                </div>
              </div>
              <div
                v-motion
                :initial="{ y: 24, opacity: 0 }"
                :enter="{ y: 0, opacity: 1, transition: { delay: 0.18, duration: 0.5, ease: 'easeOut' } }"
                class="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/80 p-5 transition-all duration-500
                       shadow-sm hover:-translate-y-1 hover:border-cyber-green/40 hover:shadow-[0_35px_65px_-48px_rgba(59,130,246,0.55)]
                       dark:border-white/10 dark:bg-white/10"
              >
                <div
                  class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500
                         group-hover:opacity-100"
                  style="background: radial-gradient(120% 120% at 90% 10%, rgba(59,130,246,0.2), transparent 55%)"
                ></div>
                <div class="relative">
                  <p class="text-xs font-semibold uppercase tracking-wide text-cyber-green">
                    {{ t('about.cards.approach.title') }}
                  </p>
                  <p class="mt-2 text-sm text-zinc-600 transition-colors duration-300 dark:text-white/70">
                    {{ t('about.cards.approach.body') }}
                  </p>
                </div>
              </div>
              <div
                v-motion
                :initial="{ y: 24, opacity: 0 }"
                :enter="{ y: 0, opacity: 1, transition: { delay: 0.26, duration: 0.5, ease: 'easeOut' } }"
                class="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/80 p-5 transition-all duration-500
                       shadow-sm hover:-translate-y-1 hover:border-cyber-green/40 hover:shadow-[0_35px_65px_-48px_rgba(168,85,247,0.55)]
                       dark:border-white/10 dark:bg-white/10"
              >
                <div
                  class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500
                         group-hover:opacity-100"
                  style="background: radial-gradient(120% 120% at 10% 90%, rgba(168,85,247,0.2), transparent 55%)"
                ></div>
                <div class="relative">
                  <p class="text-xs font-semibold uppercase tracking-wide text-cyber-green">
                    {{ t('about.cards.toolkit.title') }}
                  </p>
                  <p class="mt-2 text-sm text-zinc-600 transition-colors duration-300 dark:text-white/70">
                    {{ t('about.cards.toolkit.body') }}
                  </p>
                </div>
              </div>
              <div
                v-motion
                :initial="{ y: 24, opacity: 0 }"
                :enter="{ y: 0, opacity: 1, transition: { delay: 0.34, duration: 0.5, ease: 'easeOut' } }"
                class="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/80 p-5 transition-all duration-500
                       shadow-sm hover:-translate-y-1 hover:border-cyber-green/40 hover:shadow-[0_35px_65px_-48px_rgba(244,114,182,0.55)]
                       dark:border-white/10 dark:bg-white/10"
              >
                <div
                  class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500
                         group-hover:opacity-100"
                  style="background: radial-gradient(120% 120% at 90% 90%, rgba(236,72,153,0.18), transparent 55%)"
                ></div>
                <div class="relative">
                  <p class="text-xs font-semibold uppercase tracking-wide text-cyber-green">
                    {{ t('about.cards.focus.title') }}
                  </p>
                  <p class="mt-2 text-sm text-zinc-600 transition-colors duration-300 dark:text-white/70">
                    {{ t('about.cards.focus.body') }}
                  </p>
                </div>
              </div>
            </div>

            <div
              class="flex flex-wrap gap-3"
              v-motion
              :initial="{ opacity: 0, y: 12 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.45, ease: 'easeOut' } }"
            >
              <UBadge
                v-for="badge in aboutBadges"
                :key="badge"
                class="border border-cyber-green/30 bg-cyber-green/15 text-cyber-green transition-all duration-500
                       hover:-translate-y-1 hover:shadow-[0_18px_35px_-22px_rgba(129,140,248,0.65)]
                       dark:border-cyber-green/40 dark:bg-cyber-green/25 dark:text-cyber-green/90"
                variant="soft"
              >
                {{ badge }}
              </UBadge>
            </div>
          </div>

        </div>

        <div class="lg:col-span-5 lg:pl-6 xl:pl-10 lg:flex lg:items-center lg:justify-center">
          <div
            class="group relative overflow-hidden rounded-[2.75rem] bg-transparent transition-colors duration-300"
            v-motion-pop-visible-once
          >
            <div class="relative overflow-hidden rounded-[2.75rem]">
              <img
                src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1200&auto=format&fit=crop"
                :alt="t('about.portraitAlt')"
                class="block h-auto w-full rounded-[2.75rem] object-cover transition-transform duration-700 group-hover:scale-105 lg:h-[34rem] lg:max-h-[34rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
