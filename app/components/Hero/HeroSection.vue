<template>
    <section id="home" class="hero-section relative transition-colors duration-300">
    <UContainer class="pt-16 pb-20 md:pt-20 md:pb-28 lg:py-36">
      <div
        class="grid lg:grid-cols-2 gap-10 items-center"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } }"
      >
        <div
          class="space-y-6"
          v-motion
          :initial="{ opacity: 0, y: 18, blur: 8 }"
          :enter="{
            opacity: 1,
            y: 0,
            blur: 0,
            transition: {
              delay: 0.1,
              type: 'spring',
              stiffness: 70,
              damping: 26
            }
          }"
        >
          <span
            class="availability-pill group cursor-pointer inline-flex items-center rounded-full border px-4 py-1
                   text-xs font-semibold uppercase tracking-[0.28em] transition-colors duration-300"
            :aria-label="t('hero.availability')"
            v-motion
            :initial="{ opacity: 0, y: -8 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { delay: heroDelays.badge, type: 'spring', stiffness: 150, damping: 18 }
            }"
          >
            <UIcon
              name="i-heroicons-rocket-launch-20-solid"
              class="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
            />
            <span class="availability-pill__text" aria-hidden="true">
              {{ t('hero.availability') }}
            </span>
          </span>

          <h1
            class="hero-headline text-4xl md:text-6xl font-extrabold leading-tight
                   text-zinc-900 dark:text-white transition-colors duration-300"
            v-motion
            :initial="{ opacity: 0, y: 28, scale: 0.96 }"
            :enter="{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                delay: heroDelays.heading,
                type: 'spring',
                stiffness: 85,
                damping: 26
              }
            }"
          >
            {{ t('hero.headline.start') }}
            <span class="hero-headline__accent">
              {{ t('hero.accent') }}
            </span>
            {{ t('hero.headline.end') }}
          </h1>

          <p
            class="max-w-prose text-zinc-600 dark:text-white/70 transition-colors duration-300"
            v-motion
            :initial="{ opacity: 0, y: 24, blur: 10 }"
            :enter="{
              opacity: 1,
              y: 0,
              blur: 0,
              transition: {
                delay: heroDelays.description,
                type: 'spring',
                stiffness: 80,
                damping: 28
              }
            }"
          >
            {{ t('hero.description') }}
          </p>

          <div
            class="flex flex-wrap gap-3"
            v-motion
            :initial="{ opacity: 0, y: 20, scale: 0.95 }"
            :enter="{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                delay: heroDelays.ctas,
                type: 'spring',
                stiffness: 95,
                damping: 28
              }
            }"
          >
            <UButton size="lg" to="#projects" class="group">
              <UIcon
                name="i-heroicons-bolt-20-solid"
                class="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
              />
              <span>{{ t('hero.cta.projects') }}</span>
            </UButton>
            <UButton
              size="lg"
              color="neutral"
              variant="soft"
              to="#contact"
              class="group border transition-colors duration-300 bg-transparent"
            >
              <UIcon
                name="i-heroicons-envelope-20-solid"
                class="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
              />
              <span>{{ t('hero.cta.contact') }}</span>
            </UButton>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 16, blur: 8 }"
            :enter="{
              opacity: 1,
              y: 0,
              blur: 0,
              transition: {
                delay: heroDelays.indicator,
                type: 'spring',
                stiffness: 85,
                damping: 26
              }
            }"
          >
            <HeroScrollIndicator />
          </div>
        </div>

        <div
          class="group rounded-3xl overflow-hidden"
          v-motion
          :initial="{ opacity: 0, y: 28, scale: 0.94 }"
          :enter="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              delay: heroDelays.portrait,
              type: 'spring',
              stiffness: 85,
              damping: 26
            }
          }"
        >
          <img
            src="~/assets/images/WerkIt-©LaurenRoberts2024-56.jpg"
            :alt="t('hero.portraitAlt')"
            class="block w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const heroDelays = {
  badge: 0.15,
  heading: 0.3,
  description: 0.42,
  ctas: 0.55,
  indicator: 0.7,
  portrait: 0.35,
}
</script>

<style scoped>
.hero-section .hero-headline {
  position: relative;
  text-shadow:
    1px 1px 0 rgba(124, 58, 237, 0.28),
    2px 2px 0 rgba(91, 33, 182, 0.22),
    6px 10px 24px rgba(16, 185, 129, 0.2);
}

:global(.dark) .hero-section .hero-headline {
  text-shadow:
    1px 1px 0 rgba(196, 181, 253, 0.32),
    2px 2px 0 rgba(124, 58, 237, 0.28),
    8px 14px 28px rgba(34, 197, 94, 0.35);
}

.hero-section .hero-headline__accent {
  display: inline-block;
  background: linear-gradient(120deg, #c6a7ff, #8c5cf7 55%, #4ade80);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow:
    1px 1px 0 rgba(76, 29, 149, 0.28),
    3px 6px 18px rgba(74, 222, 128, 0.26);
}

:global(.dark) .hero-section .hero-headline__accent {
  background: linear-gradient(120deg, #b892ff, #7c3aed 55%, #22c55e);
  text-shadow:
    1px 1px 0 rgba(76, 29, 149, 0.38),
    4px 8px 22px rgba(34, 197, 94, 0.32);
}

.hero-section .availability-pill {
  gap: 0;
}

.hero-section .availability-pill__text {
  display: inline-block;
  max-width: 0;
  opacity: 0;
  margin-left: 0;
  overflow: hidden;
  white-space: nowrap;
  transition:
    max-width 0.35s ease,
    opacity 0.35s ease,
    margin-left 0.35s ease,
    padding-left 0.35s ease;
}

.hero-section .availability-pill:hover .availability-pill__text {
  max-width: 999px;
  opacity: 1;
  margin-left: 1.5rem;
  padding-left: 0.25rem;
}
</style>
