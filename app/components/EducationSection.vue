<script setup lang="ts">
const educationCategories = [
  {
    id: 'college',
    label: 'College',
    icon: 'i-heroicons-academic-cap-20-solid',
    description: 'Formal study that grounded my approach to product thinking, research, and storytelling.',
    accent: 'bg-cyber-purple/30',
    gradient: 'from-cyber-purple/40 via-cyber-purple/20 to-cyber-green/20',
    entries: [
      {
        title: 'B.S. Interactive Media & UX',
        org: 'Futurewave University',
        period: '2014-2018',
        highlight:
          'Studio-led program blending interface design, creative coding, and motion graphics with a capstone in immersive web.'
      },
      {
        title: 'Global Design Residency',
        org: 'HyperIsland Stockholm',
        period: 'Summer 2017',
        highlight: 'Selected for a four-week residency exploring speculative futures, design sprints, and service prototyping.'
      }
    ]
  },
  {
    id: 'certifications',
    label: 'Certifications',
    icon: 'i-heroicons-check-badge-20-solid',
    description: 'Focused credentials that keep my practice accountable and standards driven.',
    accent: 'bg-cyber-green/30',
    gradient: 'from-cyber-green/40 via-cyber-green/25 to-cyber-purple/20',
    entries: [
      {
        title: 'Certified Web Accessibility Specialist (CPACC)',
        org: 'IAAP',
        period: '2023',
        highlight: 'Validated inclusive design practices and accessibility audits for complex web ecosystems.'
      },
      {
        title: 'Design Systems Professional',
        org: 'Figma Academy',
        period: '2022',
        highlight: 'Advanced component governance, token orchestration, and multi-brand theming workflows.'
      }
    ]
  },
  {
    id: 'trainings',
    label: 'Additional Trainings',
    icon: 'i-heroicons-light-bulb-20-solid',
    description: 'Short-form labs, workshops, and experiments that keep the toolbox inventive.',
    accent: 'bg-cyber-purple/20',
    gradient: 'from-cyber-purple/35 via-cyber-green/25 to-cyber-purple/15',
    entries: [
      {
        title: 'AI Storytelling for Product Teams',
        org: 'Runway Research Lab',
        period: '2024',
        highlight: 'Explored multi-modal narrative prototyping and prompt choreography for interactive experiences.'
      },
      {
        title: 'Design Sprint Facilitator',
        org: 'AJ&Smart',
        period: '2021',
        highlight: 'Certified to lead compressed discovery-to-prototype cycles with cross-functional startup teams.'
      },
      {
        title: 'Creative Coding Meetups',
        org: 'SF Generative Collective',
        period: '2019-2020',
        highlight: 'Monthly workshops on shaders, motion design, and WebGL art installations.'
      }
    ]
  }
] as const
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
            <UIcon name="i-heroicons-sparkles-20-solid" class="h-4 w-4" />
            Learning Journey
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">
            Education & Continuous Growth
          </h2>
          <p class="text-base text-zinc-600 dark:text-white/70 transition-colors duration-300">
            A curated mix of formal study, industry certifications, and experimental labs that keep design,
            development, and storytelling aligned with the future of the web.
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
