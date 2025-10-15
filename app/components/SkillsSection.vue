<script setup lang="ts">
const skillSections = [
  {
    title: 'Product-Focused Frontend',
    blurb: 'Nuxt-powered experiences that stay fast, inclusive, and easy to iterate on.',
    highlights: ['Nuxt 3', 'Vue', 'TypeScript', 'Pinia', 'Tailwind CSS'],
  },
  {
    title: 'Design Systems & UI Kits',
    blurb: 'Reusable UI that feels cohesive across devices without sacrificing personality.',
    highlights: ['Component architecture', 'Design tokens', 'Storybook', 'Responsive layouts'],
  },
  {
    title: 'Motion & Micro-Interactions',
    blurb: 'Thoughtful transitions that guide attention and make interfaces feel alive.',
    highlights: ['VueUse Motion', 'Framer Motion', 'GSAP basics', 'Hardware-accelerated CSS'],
  },
  {
    title: 'Accessibility & Quality',
    blurb: 'Ship features that work for everyone with a tight feedback loop.',
    highlights: ['Semantic HTML', 'Keyboard flows', 'Lighthouse', 'Vitest + Playwright'],
  },
  {
    title: 'Collaboration',
    blurb: 'Partner with designers and product teams to launch user-facing outcomes.',
    highlights: ['Design handoff', 'Docs & RFCs', 'Agile rituals', 'Mentorship'],
  },
  {
    title: 'Engineering Habits',
    blurb: 'Maintainable codebases with modern tooling and DevOps awareness.',
    highlights: ['CI/CD', 'GitHub Actions', 'API integration', 'Edge deployments'],
  },
]
</script>

<template>
  <section id="skills" class="relative transition-colors duration-300">
    <UContainer class="py-24">
      <div class="max-w-2xl space-y-4 mb-10">
        <p class="text-sm uppercase tracking-widest text-cyber-purple/70 font-medium">
          Capabilities
        </p>
        <h2 class="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white transition-colors duration-300">
          Crafting interfaces that balance polish, performance, and accessibility
        </h2>
        <p class="text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
          Here’s what I lean on day-to-day to ship resilient products. The mix covers technical depth,
          interaction design, and the collaborative habits that keep teams shipping.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <UCard
          v-for="section in skillSections"
          :key="section.title"
          class="group relative h-full overflow-hidden rounded-3xl border border-zinc-200/60 dark:border-zinc-800/80
                 bg-white/60 dark:bg-zinc-900/60 backdrop-blur transition-all duration-500
                 hover:-translate-y-1 hover:shadow-[0_22px_55px_-28px_rgba(165,180,252,0.55)] hover:border-cyber-purple/40"
          v-motion-slide-visible-once-left
        >
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyber-purple/0 via-transparent to-cyber-purple/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div class="relative p-6 flex flex-col gap-4 h-full">
            <div class="flex items-start justify-between gap-3">
              <div>
                <h3 class="text-lg font-semibold text-zinc-900 dark:text-white transition-colors duration-300">
                  {{ section.title }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
                  {{ section.blurb }}
                </p>
              </div>
              <UIcon
                name="i-heroicons-arrow-up-right-20-solid"
                class="mt-1 h-5 w-5 text-cyber-green transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
            <div class="flex flex-wrap gap-2 mt-auto">
              <span
                v-for="highlight in section.highlights"
                :key="highlight"
                class="text-xs font-medium tracking-wide uppercase px-3 py-1 rounded-full border border-zinc-200/80 dark:border-zinc-800/80
                       text-zinc-600 dark:text-zinc-300 bg-white/60 dark:bg-zinc-900/80 transition-colors duration-300
                       group-hover:border-cyber-purple/50 group-hover:text-cyber-purple"
              >
                {{ highlight }}
              </span>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
