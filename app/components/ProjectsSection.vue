<script setup lang="ts">
const projects = [
  {
    title: 'Neon Nodes',
    description: 'Real-time graph editor with collaborative cursors and a reactive plugin system.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Vue 3', 'WebRTC', 'Pinia'],
    link: 'https://example.com/neon-nodes'
  },
  {
    title: 'Pulse UI',
    description: 'Design system built on Nuxt UI with token-driven theming and charts.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    tags: ['Nuxt UI', 'Design Tokens', 'D3'],
    link: 'https://example.com/pulse-ui'
  },
  {
    title: 'GreenTrace',
    description: 'Sustainability insights dashboard with AI summaries and map layers.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    tags: ['Nuxt', 'AI', 'Maps'],
    link: 'https://example.com/greentrace'
  }
]
</script>

<template>
  <section id="projects" class="relative border-t transition-colors duration-300 border-black/10 dark:border-white/10">
    <UContainer class="py-24">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
        <div class="max-w-2xl space-y-4">
          <span class="inline-flex items-center gap-2 rounded-full border border-cyber-purple/30 bg-cyber-purple/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-cyber-purple">
            <UIcon name="i-heroicons-beaker-20-solid" class="h-4 w-4" />
            Selected Work
          </span>
          <div class="space-y-3">
            <h2 class="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">
              Projects
            </h2>
            <p class="text-base text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
              Interfaces and digital systems built end-to-end — from exploratory prototyping to polished handoff — with a focus on realtime collaboration, design systems, and measurable product impact.
            </p>
          </div>
        </div>
        <UButton
          variant="soft"
          to="/resume.pdf"
          download
          class="w-full md:w-auto justify-center group border border-cyber-green/25 bg-cyber-green/15 text-cyber-green transition-colors duration-300
                 hover:bg-cyber-green/20 hover:text-cyber-green
                 dark:border-cyber-green/35 dark:bg-cyber-green/25 dark:text-cyber-green/90 dark:hover:bg-cyber-green/35"
        >
          <UIcon
            name="i-heroicons-arrow-down-tray-20-solid"
            class="h-5 w-5 text-cyber-green transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
          />
          <span>Resume</span>
        </UButton>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="p in projects" :key="p.title" :project="p" />
      </div>
    </UContainer>
  </section>
</template>
