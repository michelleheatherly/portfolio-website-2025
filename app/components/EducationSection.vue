<script setup lang="ts">
type EducationEntry = {
  title: string
  org: string
  period: string
  highlight: string
}

type EducationCategoryContent = {
  label: string
  description: string
  entries: EducationEntry[]
}

const educationCategoryMeta = [
  {
    id: 'college',
    icon: 'i-heroicons-academic-cap-20-solid',
    accent: 'bg-cyber-purple/30',
    gradient: 'from-cyber-purple/40 via-cyber-purple/20 to-cyber-green/20'
  },
  {
    id: 'certifications',
    icon: 'i-heroicons-check-badge-20-solid',
    accent: 'bg-cyber-green/30',
    gradient: 'from-cyber-green/40 via-cyber-green/25 to-cyber-purple/20'
  },
  {
    id: 'trainings',
    icon: 'i-heroicons-light-bulb-20-solid',
    accent: 'bg-cyber-purple/20',
    gradient: 'from-cyber-purple/35 via-cyber-green/25 to-cyber-purple/15'
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

const educationCategories = computed(() => {
  const localized = resolveLocaleValue(tm('education.categories')) as Record<string, EducationCategoryContent> | undefined
  return educationCategoryMeta.map((meta) => {
    const content = localized?.[meta.id]

    return {
      ...meta,
      label: content?.label ?? '',
      description: content?.description ?? '',
      entries: Array.isArray(content?.entries) ? content.entries : []
    }
  })
})
</script>

<template>
  <section
    id="education"
    class="relative overflow-hidden transition-colors duration-500"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyber-purple/5 via-transparent to-cyber-green/10"
    ></div>
    <div class="pointer-events-none absolute -top-32 right-24 h-64 w-64 rounded-full bg-cyber-purple/20 blur-[140px]"></div>
    <div class="pointer-events-none absolute -bottom-24 left-16 h-72 w-72 rounded-full bg-cyber-green/15 blur-[160px]"></div>

    <UContainer class="relative py-24">
      <div class="space-y-12">
        <div class="space-y-5 max-w-2xl">
          <span class="inline-flex items-center gap-2 rounded-full border border-cyber-green/30 bg-cyber-green/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-cyber-green">
            <UIcon name="i-heroicons-academic-cap-20-solid" class="h-4 w-4" />
            {{ t('education.badge') }}
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">
            {{ t('education.title') }}
          </h2>
          <p class="text-base text-zinc-600 dark:text-white/70 transition-colors duration-300">
            {{ t('education.description') }}
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          <UCard
            v-for="(category, index) in educationCategories"
            :key="category.id"
            class="group relative h-full overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyber-green/30 hover:shadow-[0_30px_60px_-40px_rgba(99,102,241,0.55)] dark:border-white/10 dark:bg-white/10"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.12 }
            }"
          >
            <div class="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full blur-3xl" :class="category.accent"></div>
            <div class="pointer-events-none absolute inset-x-12 top-10 h-28 bg-gradient-to-br blur-3xl" :class="category.gradient"></div>

            <div class="relative flex h-full flex-col gap-5 p-6">
              <div class="flex items-start gap-4">
                <div
                  class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyber-purple/20 via-cyber-purple/10 to-cyber-green/20 text-cyber-green/90 shadow-inner"
                >
                  <UIcon :name="category.icon" class="h-6 w-6" />
                </div>
                <div class="space-y-2">
                  <h3 class="text-lg font-semibold text-zinc-900 dark:text-white transition-colors duration-300">
                    {{ category.label }}
                  </h3>
                  <p class="text-sm text-zinc-500 dark:text-white/60 transition-colors duration-300">
                    {{ category.description }}
                  </p>
                </div>
              </div>

              <ul class="timeline flex-1 space-y-6">
                <li
                  v-for="entry in category.entries"
                  :key="entry.title"
                  class="timeline-item relative"
                >
                  <span class="timeline-bullet"></span>
                  <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p class="font-medium text-zinc-900 dark:text-white transition-colors duration-300">
                      {{ entry.title }}
                    </p>
                    <span class="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyber-green">
                      {{ entry.period }}
                    </span>
                  </div>
                  <p class="text-sm text-zinc-500 dark:text-white/60 transition-colors duration-300">
                    {{ entry.org }}
                  </p>
                  <p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-white/70 transition-colors duration-300">
                    {{ entry.highlight }}
                  </p>
                </li>
              </ul>
            </div>
          </UCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0.5rem;
  bottom: 0.5rem;
  left: 1rem;
  width: 1px;
  background: var(--timeline-rail);
}

.timeline-item {
  position: relative;
  padding-left: 2.5rem;
}

.timeline-bullet {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: inline-flex;
  width: 0.65rem;
  height: 0.65rem;
  transform: translate(-50%, -50%);
  border-radius: 9999px;
  background: #179d68;
  box-shadow: 0 0 0 6px rgba(23, 157, 104, 0.18);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

:global(.dark) .timeline-bullet {
  box-shadow: 0 0 0 6px rgba(23, 157, 104, 0.12);
}

.timeline-item:hover .timeline-bullet {
  transform: translate(-50%, -50%) scale(1.08);
  box-shadow: 0 0 0 8px rgba(23, 157, 104, 0.22);
}
</style>
