<template>
  <section id="about" class="relative overflow-hidden transition-colors duration-300">
    <UContainer class="relative py-24">
      <div class="space-y-12">
        <!-- Badge -->
        <div class="flex justify-start">
          <span
            class="inline-flex items-center gap-2 rounded-full border px-4 py-1
                   text-xs font-semibold uppercase tracking-[0.28em] transition-colors duration-300"
            v-motion
            :initial="{ opacity: 0, y: -8 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                delay: aboutDelays.badge,
                type: 'spring',
                stiffness: 150,
                damping: 20
              }
            }"
          >
            <UIcon name="i-heroicons-sparkles-20-solid" class="h-4 w-4" />
            {{ t('about.badge') }}
          </span>
        </div>

        <div class="grid items-start gap-12 lg:grid-cols-12">
          <!-- Left column: heading, description, cards, badges -->
          <div
            class="relative space-y-10 pb-6 sm:pb-8 lg:col-span-7"
            v-motion
            :initial="{ opacity: 0, y: 18 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                delay: aboutDelays.container,
                type: 'spring',
                stiffness: 120,
                damping: 22
              }
            }"
          >
            <div class="space-y-8">
              <!-- Heading + description -->
              <div class="space-y-4">
                <h2
                  class="text-3xl font-semibold leading-tight text-zinc-900 transition-colors duration-300
                         md:text-4xl dark:text-white"
                  v-motion
                  :initial="{ opacity: 0, y: 14, scale: 0.97 }"
                  :visibleOnce="{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      delay: aboutDelays.heading,
                      type: 'spring',
                      stiffness: 140,
                      damping: 22
                    }
                  }"
                >
                  {{ t('about.heading') }}
                </h2>

                <p
                  class="text-lg text-zinc-600 transition-colors duration-300 dark:text-white/70"
                  v-motion
                  :initial="{ opacity: 0, y: 16, blur: 6 }"
                  :visibleOnce="{
                    opacity: 1,
                    y: 0,
                    blur: 0,
                    transition: {
                      delay: aboutDelays.description,
                      type: 'spring',
                      stiffness: 120,
                      damping: 24
                    }
                  }"
                >
                  {{ t('about.description') }}
                </p>
              </div>

              <!-- Cards grid (all 4 are slightly staggered) -->
              <div class="grid gap-4 sm:grid-cols-2">
                <!-- Card 1 -->
                <div
                  v-motion
                  :initial="{ y: 10, opacity: 0, scale: 0.98 }"
                  :visibleOnce="{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: aboutDelays.cards + 0 * 0.05,
                      type: 'spring',
                      stiffness: 150,
                      damping: 20
                    }
                  }"
                  class="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/80 p-5 transition-all duration-300
                         shadow-sm hover:-translate-y-1 hover:shadow-[0_35px_65px_-48px_rgba(16,185,129,0.55)]
                         dark:border-white/10 dark:bg-white/10"
                >
                  <div
                    class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500
                           group-hover:opacity-100"
                    style="background: radial-gradient(120% 120% at 0% 0%, rgba(34,197,94,0.18), transparent 55%)"
                  ></div>
                  <div class="relative">
                    <p class="text-xs font-semibold uppercase tracking-wide">
                      {{ t('about.cards.superpower.title') }}
                    </p>
                    <p class="mt-2 text-sm text-zinc-600 transition-colors duration-300 dark:text-white/70">
                      {{ t('about.cards.superpower.body') }}
                    </p>
                  </div>
                </div>

                <!-- Card 2 -->
                <div
                  v-motion
                  :initial="{ y: 10, opacity: 0, scale: 0.98 }"
                  :visibleOnce="{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: aboutDelays.cards + 1 * 0.05,
                      type: 'spring',
                      stiffness: 150,
                      damping: 20
                    }
                  }"
                  class="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/80 p-5 transition-all duration-300
                         shadow-sm hover:-translate-y-1 hover:shadow-[0_35px_65px_-48px_rgba(59,130,246,0.55)]
                         dark:border-white/10 dark:bg-white/10"
                >
                  <div
                    class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500
                           group-hover:opacity-100"
                    style="background: radial-gradient(120% 120% at 90% 10%, rgba(59,130,246,0.2), transparent 55%)"
                  ></div>
                  <div class="relative">
                    <p class="text-xs font-semibold uppercase tracking-wide">
                      {{ t('about.cards.approach.title') }}
                    </p>
                    <p class="mt-2 text-sm text-zinc-600 transition-colors duration-300 dark:text-white/70">
                      {{ t('about.cards.approach.body') }}
                    </p>
                  </div>
                </div>

                <!-- Card 3 -->
                <div
                  v-motion
                  :initial="{ y: 10, opacity: 0, scale: 0.98 }"
                  :visibleOnce="{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: aboutDelays.cards + 2 * 0.05,
                      type: 'spring',
                      stiffness: 150,
                      damping: 20
                    }
                  }"
                  class="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/80 p-5 transition-all duration-300
                         shadow-sm hover:-translate-y-1 hover:shadow-[0_35px_65px_-48px_rgba(168,85,247,0.55)]
                         dark:border-white/10 dark:bg-white/10"
                >
                  <div
                    class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500
                           group-hover:opacity-100"
                    style="background: radial-gradient(120% 120% at 10% 90%, rgba(168,85,247,0.2), transparent 55%)"
                  ></div>
                  <div class="relative">
                    <p class="text-xs font-semibold uppercase tracking-wide">
                      {{ t('about.cards.toolkit.title') }}
                    </p>
                    <p class="mt-2 text-sm text-zinc-600 transition-colors duration-300 dark:text-white/70">
                      {{ t('about.cards.toolkit.body') }}
                    </p>
                  </div>
                </div>

                <!-- Card 4 -->
                <div
                  v-motion
                  :initial="{ y: 10, opacity: 0, scale: 0.98 }"
                  :visibleOnce="{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: aboutDelays.cards + 3 * 0.05,
                      type: 'spring',
                      stiffness: 150,
                      damping: 20
                    }
                  }"
                  class="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/80 p-5 transition-all duration-300
                         shadow-sm hover:-translate-y-1 hover:shadow-[0_35px_65px_-48px_rgba(244,114,182,0.55)]
                         dark:border-white/10 dark:bg-white/10"
                >
                  <div
                    class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500
                           group-hover:opacity-100"
                    style="background: radial-gradient(120% 120% at 90% 90%, rgba(236,72,153,0.18), transparent 55%)"
                  ></div>
                  <div class="relative">
                    <p class="text-xs font-semibold uppercase tracking-wide">
                      {{ t('about.cards.focus.title') }}
                    </p>
                    <p class="mt-2 text-sm text-zinc-600 transition-colors duration-300 dark:text-white/70">
                      {{ t('about.cards.focus.body') }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Badges -->
              <div
                class="flex flex-wrap gap-3"
                v-motion
                :initial="{ opacity: 0, y: 10 }"
                :visibleOnce="{
                  opacity: 1,
                  y: 0,
                  transition: { delay: aboutDelays.badges - 0.04, duration: 0.35, ease: 'easeOut' }
                }"
              >
                <UBadge
                  v-for="(badge, index) in aboutBadges"
                  :key="badge"
                  class="border transition-all duration-300
                         hover:-translate-y-1 hover:shadow-[0_18px_35px_-22px_rgba(129,140,248,0.65)] bg-transparent"
                  color="neutral"
                  variant="soft"
                  v-motion
                  :initial="{ opacity: 0, y: 6 }"
                  :visibleOnce="{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: aboutDelays.badges + index * 0.04,
                      duration: 0.28,
                      ease: 'easeOut'
                    }
                  }"
                >
                  {{ badge }}
                </UBadge>
              </div>
            </div>
          </div>

          <!-- Right column: portrait -->
          <div
            class="lg:col-span-5 lg:pl-6 xl:pl-10 lg:flex lg:items-start lg:justify-center"
            v-motion
            :initial="{ opacity: 0, y: 18 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                delay: aboutDelays.portrait - 0.04,
                type: 'spring',
                stiffness: 110,
                damping: 22
              }
            }"
          >
            <div
              class="group relative overflow-hidden rounded-[2.75rem] bg-transparent transition-colors duration-300"
              v-motion
              :initial="{ opacity: 0, y: 20, scale: 0.95 }"
              :visibleOnce="{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: aboutDelays.portrait,
                  type: 'spring',
                  stiffness: 120,
                  damping: 24
                }
              }"
            >
              <div class="relative overflow-hidden rounded-[2.75rem]">
                 <NuxtImg 
                  src="/WerkIt-©LaurenRoberts2024-53.jpg"
                  width="569"
                  height="850"
                  :alt="t('about.portraitAlt')"
                  class="block h-auto w-full rounded-[2.75rem] object-cover transition-transform duration-700 group-hover:scale-105 lg:h-[34rem] lg:max-h-[34rem]"
                  format="webp"
                  loading="lazy"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()

const aboutBadges = computed(() => {
  const raw = tm('about.badges')
  if (!Array.isArray(raw))
    return []

  return raw.map((badge) => (typeof badge === 'string' ? badge : rt(badge)))
})

const aboutDelays = {
  container: 0.0,
  badge: 0.04,
  heading: 0.08,
  description: 0.14,
  cards: 0.18,
  badges: 0.30,
  portrait: 0.20
}
</script>