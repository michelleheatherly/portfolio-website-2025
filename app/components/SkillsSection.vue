<script setup lang="ts">
type SkillSectionContent = {
  title: string
  blurb: string
  highlights: string[]
  peek: string
}

const skillSectionMeta = [
  {
    id: 'frontend',
    icon: 'i-heroicons-rocket-launch-20-solid',
    accentGradient: 'from-cyber-purple/0 via-cyber-purple/20 to-cyber-purple/35',
    accentGlow: 'bg-cyber-purple/30',
    motif: 'bg-[radial-gradient(circle_at_top,rgba(165,180,252,0.22),transparent_60%)]'
  },
  {
    id: 'designSystems',
    icon: 'i-heroicons-swatch-20-solid',
    accentGradient: 'from-cyan-400/0 via-cyan-400/20 to-cyan-400/35',
    accentGlow: 'bg-cyan-400/30',
    motif: 'bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.22),transparent_58%)]'
  },
  {
    id: 'motion',
    icon: 'i-heroicons-sparkles-20-solid',
    accentGradient: 'from-emerald-400/0 via-emerald-400/20 to-emerald-400/35',
    accentGlow: 'bg-emerald-400/30',
    motif: 'bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.24),transparent_55%)]'
  },
  {
    id: 'quality',
    icon: 'i-heroicons-eye-dropper-20-solid',
    accentGradient: 'from-amber-400/0 via-amber-400/20 to-amber-400/35',
    accentGlow: 'bg-amber-400/30',
    motif: 'bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.24),transparent_60%)]'
  },
  {
    id: 'collaboration',
    icon: 'i-heroicons-users-20-solid',
    accentGradient: 'from-rose-400/0 via-rose-400/20 to-rose-400/35',
    accentGlow: 'bg-rose-400/30',
    motif: 'bg-[radial-gradient(circle_at_bottom_left,rgba(251,113,133,0.22),transparent_60%)]'
  },
  {
    id: 'engineering',
    icon: 'i-heroicons-cog-8-tooth-20-solid',
    accentGradient: 'from-indigo-400/0 via-indigo-400/20 to-indigo-400/35',
    accentGlow: 'bg-indigo-400/30',
    motif: 'bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.22),transparent_58%)]'
  }
] as const

const { t, tm, rt } = useI18n()

const resolveLocaleValue = (value: unknown): any => {
  if (Array.isArray(value)) {
    return value.map(resolveLocaleValue)
  }

  if (value && typeof value === 'object') {
    if ('type' in value && 'loc' in value) {
      return rt(value as any)
    }

    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, val]) => [key, resolveLocaleValue(val)])
    )
  }

  return value
}

const skillSections = computed(() => {
  const localized = resolveLocaleValue(tm('skills.sections')) as Record<string, SkillSectionContent> | undefined

  return skillSectionMeta.map((meta) => ({
    ...meta,
    ...(localized?.[meta.id] ?? { title: '', blurb: '', highlights: [], peek: '' })
  }))
})

const skillDelays = {
  container: 0.08,
  badge: 0.16,
  heading: 0.24,
  description: 0.34,
  cards: 0.38
}
</script>

<template>
  <section id="skills" class="relative transition-colors duration-300">
    <UContainer class="py-24">
      <div
        class="max-w-2xl space-y-4 mb-10"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: { delay: skillDelays.container, duration: 0.5, ease: 'easeOut' }
        }"
      >
        <span
          class="inline-flex items-center gap-2 rounded-full border border-cyber-green/30 bg-cyber-green/10 px-4 py-1
                 text-xs font-semibold uppercase tracking-[0.28em] text-cyber-green transition-colors duration-300
                 dark:border-cyber-green/40 dark:bg-cyber-green/20 dark:text-cyber-green/90"
          v-motion
          :initial="{ opacity: 0, y: -12 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { delay: skillDelays.badge, type: 'spring', stiffness: 150, damping: 20 }
          }"
        >
          <UIcon name="i-heroicons-wrench-screwdriver-20-solid" class="h-4 w-4" />
          {{ t('skills.badge') }}
        </span>
        <h2
          class="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white transition-colors duration-300"
          v-motion
          :initial="{ opacity: 0, y: 18, scale: 0.96 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: skillDelays.heading, type: 'spring', stiffness: 110, damping: 24 }
          }"
        >
          {{ t('skills.title') }}
        </h2>
        <p
          class="text-zinc-600 dark:text-zinc-300 transition-colors duration-300"
          v-motion
          :initial="{ opacity: 0, y: 22, blur: 10 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            blur: 0,
            transition: { delay: skillDelays.description, type: 'spring', stiffness: 95, damping: 26 }
          }"
        >
          {{ t('skills.description') }}
        </p>
      </div>

      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <UCard
          v-for="(section, index) in skillSections"
          :key="section.title"
          class="group relative h-full overflow-hidden rounded-3xl border border-zinc-200/60 dark:border-zinc-800/80
                 bg-white/60 dark:bg-zinc-900/60 backdrop-blur transition-all duration-500
                 hover:-translate-y-1 hover:shadow-[0_22px_55px_-28px_rgba(165,180,252,0.55)] hover:border-cyber-purple/40"
          v-motion
          :initial="{ opacity: 0, x: -42, scale: 0.94 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              delay: skillDelays.cards + 0.08 * index,
              type: 'spring',
              stiffness: 120,
              damping: 24
            }
          }"
        >
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            :class="section.accentGradient"
          />
          <div
            class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 mix-blend-overlay group-hover:opacity-70"
            :class="section.motif"
          />
          <div
            class="pointer-events-none absolute -right-12 top-12 h-28 w-28 rounded-full blur-3xl opacity-0 transition duration-700 group-hover:opacity-80"
            :class="section.accentGlow"
          />
          <div class="relative p-6 h-full">
            <div class="flex h-full flex-col gap-6">
              <div class="flex items-start gap-4">
                <div class="relative">
                  <span
                    class="relative grid h-12 w-12 place-items-center rounded-2xl border border-zinc-200/70 dark:border-zinc-700/70
                           bg-white/70 dark:bg-zinc-900/70 transition-all duration-500
                           group-hover:border-transparent group-hover:bg-white dark:group-hover:bg-zinc-900 group-hover:shadow-[0_16px_40px_-30px_rgba(165,180,252,0.95)]"
                  >
                    <UIcon
                      :name="section.icon"
                      class="h-6 w-6 text-cyber-green transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
                    />
                  </span>
                  <span
                    class="pointer-events-none absolute -right-1 -top-1 h-3 w-3 rounded-full bg-cyber-green/80 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:animate-ping"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-zinc-900 dark:text-white transition-colors duration-300">
                    {{ section.title }}
                  </h3>
                  <p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
                    {{ section.blurb }}
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-2">
                <span
                  v-for="highlight in section.highlights"
                  :key="highlight"
                  class="text-xs font-medium tracking-wide uppercase px-3 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80
                         text-zinc-600 dark:text-zinc-200 bg-white/70 dark:bg-zinc-900/70 transition-colors duration-300
                         group-hover:border-cyber-purple/50 group-hover:text-cyber-purple"
                >
                  {{ highlight }}
                </span>
              </div>
              <div class="mt-auto">
                <div
                  class="overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-900/70 transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-28 group-hover:opacity-100"
                >
                  <p class="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">
                    {{ section.peek }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
