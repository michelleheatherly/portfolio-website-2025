<script setup lang="ts">
const skillSections = [
  {
    title: 'Product-Focused Frontend',
    blurb: 'Nuxt-powered experiences that stay fast, inclusive, and easy to iterate on.',
    highlights: ['Nuxt 3', 'Vue', 'TypeScript'],
    peek: 'Led a commerce redesign that shaved 38% off page weight while lifting conversions.',
    icon: 'i-heroicons-rocket-launch-20-solid',
    accentGradient: 'from-cyber-purple/0 via-cyber-purple/20 to-cyber-purple/35',
    accentGlow: 'bg-cyber-purple/30',
    motif: 'bg-[radial-gradient(circle_at_top,rgba(165,180,252,0.22),transparent_60%)]',
  },
  {
    title: 'Design Systems & UI Kits',
    blurb: 'Reusable UI that feels cohesive across devices without sacrificing personality.',
    highlights: ['Design tokens', 'Storybook', 'Responsive layouts'],
    peek: 'Shipped a token-driven kit that powered 3 product squads with zero divergence.',
    icon: 'i-heroicons-swatch-20-solid',
    accentGradient: 'from-cyan-400/0 via-cyan-400/20 to-cyan-400/35',
    accentGlow: 'bg-cyan-400/30',
    motif: 'bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.22),transparent_58%)]',
  },
  {
    title: 'Motion & Micro-Interactions',
    blurb: 'Thoughtful transitions that guide attention and make interfaces feel alive.',
    highlights: ['VueUse Motion', 'GSAP basics', 'CSS timelines'],
    peek: 'Elevated onboarding completion to 92% with contextual nudges and micro-animations.',
    icon: 'i-heroicons-sparkles-20-solid',
    accentGradient: 'from-emerald-400/0 via-emerald-400/20 to-emerald-400/35',
    accentGlow: 'bg-emerald-400/30',
    motif: 'bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.24),transparent_55%)]',
  },
  {
    title: 'Accessibility & Quality',
    blurb: 'Ship features that work for everyone with a tight feedback loop.',
    highlights: ['Semantic HTML', 'Keyboard flows', 'Vitest + Playwright'],
    peek: 'Audited core flows to WCAG AA and automated a11y checks inside CI.',
    icon: 'i-heroicons-eye-dropper-20-solid',
    accentGradient: 'from-amber-400/0 via-amber-400/20 to-amber-400/35',
    accentGlow: 'bg-amber-400/30',
    motif: 'bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.24),transparent_60%)]',
  },
  {
    title: 'Collaboration',
    blurb: 'Partner with designers and product teams to launch user-facing outcomes.',
    highlights: ['Design handoff', 'Docs & RFCs', 'Mentorship'],
    peek: 'Facilitated weekly design crits and sprint alignment across three squads.',
    icon: 'i-heroicons-users-20-solid',
    accentGradient: 'from-rose-400/0 via-rose-400/20 to-rose-400/35',
    accentGlow: 'bg-rose-400/30',
    motif: 'bg-[radial-gradient(circle_at_bottom_left,rgba(251,113,133,0.22),transparent_60%)]',
  },
  {
    title: 'Engineering Habits',
    blurb: 'Maintainable codebases with modern tooling and DevOps awareness.',
    highlights: ['CI/CD', 'GitHub Actions', 'Edge deployments'],
    peek: 'Automated release gates saved the team ~4 hours each week on regression checks.',
    icon: 'i-heroicons-cog-8-tooth-20-solid',
    accentGradient: 'from-indigo-400/0 via-indigo-400/20 to-indigo-400/35',
    accentGlow: 'bg-indigo-400/30',
    motif: 'bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.22),transparent_58%)]',
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
