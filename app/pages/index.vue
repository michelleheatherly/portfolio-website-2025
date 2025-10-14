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
  <!-- HERO -->
  <HeroSection />

  <!-- ABOUT -->
  <section id="about" class="relative transition-colors duration-300">
    <UContainer class="py-24">
      <div class="grid md:grid-cols-5 gap-10 items-center">
        <div class="md:col-span-3 space-y-4" v-motion-fade-visible-once>
          <h2 class="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">About</h2>
          <p class="text-zinc-600 dark:text-white/70 transition-colors duration-300">
            I love crafting performant UIs with gorgeous micro-interactions. My toolkit revolves
            around Nuxt, Vue, and TypeScript, with a sprinkle of design systems and accessibility.
          </p>
          <div class="flex gap-2">
            <UBadge
              class="border border-cyber-green/20 bg-cyber-green/10 text-cyber-green transition-colors duration-300
                     dark:border-cyber-green/30 dark:bg-cyber-green/25 dark:text-cyber-green/90"
              variant="soft"
            >
              Nuxt
            </UBadge>
            <UBadge
              class="border border-cyber-green/20 bg-cyber-green/10 text-cyber-green transition-colors duration-300
                     dark:border-cyber-green/30 dark:bg-cyber-green/25 dark:text-cyber-green/90"
              variant="soft"
            >
              Vue
            </UBadge>
            <UBadge
              class="border border-cyber-green/20 bg-cyber-green/10 text-cyber-green transition-colors duration-300
                     dark:border-cyber-green/30 dark:bg-cyber-green/25 dark:text-cyber-green/90"
              variant="soft"
            >
              Tailwind
            </UBadge>
            <UBadge
              class="border border-cyber-green/20 bg-cyber-green/10 text-cyber-green transition-colors duration-300
                     dark:border-cyber-green/30 dark:bg-cyber-green/25 dark:text-cyber-green/90"
              variant="soft"
            >
              Motion
            </UBadge>
          </div>
        </div>

        <UCard class="md:col-span-2 rounded-3xl transition-colors duration-300" v-motion-pop-visible-once>
          <div class="p-6">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
              alt="About photo"
              class="rounded-2xl w-full aspect-square object-cover"
            />
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>

  <!-- EDUCATION -->
  <section id="education" class="relative transition-colors duration-300">
    <UContainer class="py-24">
      <h2 class="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white transition-colors duration-300 mb-8">Education</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <UCard v-for="i in 3" :key="i" class="rounded-2xl transition-colors duration-300" v-motion-fade-visible-once>
          <div class="p-5 space-y-2">
            <h3 class="font-semibold text-zinc-900 dark:text-white transition-colors duration-300">Program / School</h3>
            <p class="text-sm text-zinc-600 dark:text-white/70 transition-colors duration-300">YYYY – YYYY</p>
            <p class="text-sm text-zinc-600 dark:text-white/70 transition-colors duration-300">
              A highlight or two about the coursework, focus, or accolades.
            </p>
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>

  <!-- SKILLS -->
  <section id="skills" class="relative transition-colors duration-300">
    <UContainer class="py-24">
      <h2 class="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white transition-colors duration-300 mb-8">Skills</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <UCard
          v-for="s in ['Nuxt / Vue', 'TypeScript', 'Tailwind / UI', 'Animations', 'A11y', 'Testing']"
          :key="s"
          class="group rounded-2xl transition-all duration-300
                 hover:-translate-y-1 hover:border-cyber-purple/30 hover:shadow-[0_20px_45px_-28px_rgba(165,180,252,0.55)]"
          v-motion-slide-visible-once-left
        >
          <div class="p-5 flex items-center justify-between">
            <span class="text-zinc-900 dark:text-white transition-colors duration-300">{{ s }}</span>
            <UIcon
              name="i-heroicons-sparkles-20-solid"
              class="h-5 w-5 text-cyber-green transition-transform duration-500 group-hover:rotate-12"
            />
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>

  <!-- PROJECTS -->
  <section id="projects" class="relative border-t transition-colors duration-300 border-black/10 dark:border-white/10">
    <UContainer class="py-24">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">Projects</h2>
        <UButton
          variant="soft"
          to="/resume.pdf"
          download
          class="group border border-cyber-green/25 bg-cyber-green/15 text-cyber-green transition-colors duration-300
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

  <!-- CONTACT -->
  <section id="contact" class="relative transition-colors duration-300">
    <UContainer class="py-24">
      <div
        class="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/70 shadow-[0_35px_60px_-30px_rgba(15,23,42,0.35)] transition-colors duration-500 dark:border-white/10 dark:bg-white/5"
        v-motion
        :initial="{ opacity: 0, y: 80, scale: 0.95 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.8, ease: 'easeOut' }
        }"
        :viewport="{ amount: 0.4 }"
      >
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyber-purple/5 via-transparent to-cyber-green/10"></div>
        <div class="pointer-events-none absolute -top-28 left-10 h-56 w-56 rounded-full bg-cyber-purple/15 blur-3xl"></div>
        <div class="pointer-events-none absolute -bottom-36 right-6 h-64 w-64 rounded-full bg-cyber-green/15 blur-[120px]"></div>
        <div class="relative grid gap-10 p-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:p-12">
          <ContactCollabPanel
            headline="Let's build a futuristic web experience"
            description="I partner with founders and creative teams to ship immersive products, bold interfaces, and smooth flows. If the brief needs motion, storytelling, or thoughtful UX, I am in."
          />
          <ContactForm />
        </div>
      </div>
    </UContainer>
  </section>
</template>
