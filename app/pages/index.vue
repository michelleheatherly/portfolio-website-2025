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
  <section id="home" class="relative transition-colors duration-300">
    <UContainer class="py-28 md:py-36">
      <div
        class="grid md:grid-cols-2 gap-10 items-center"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
      >
        <div class="space-y-6">
          <div
            class="inline-flex items-center gap-2 rounded-full px-3 py-1 transition-colors duration-300
                   border bg-black/5 border-black/10
                   dark:bg-white/5 dark:border-white/10"
          >
            <span class="h-2 w-2 rounded-full bg-cyber-green animate-pulse"></span>
            <span class="text-xs text-zinc-700 dark:text-white/70 transition-colors duration-300">Available for freelance</span>
          </div>

          <h1
            class="text-4xl md:text-6xl font-extrabold leading-tight
                   text-zinc-900 dark:text-white transition-colors duration-300"
          >
            Building elegant interfaces with a <span class="text-cyber-purple">cyber-femme</span> vibe.
          </h1>

          <p class="max-w-prose text-zinc-600 dark:text-white/70 transition-colors duration-300">
            I’m a web developer specializing in Nuxt, Vue, and delightful motion. Let’s craft
            fast, accessible, and stylish experiences.
          </p>

          <div class="flex flex-wrap gap-3">
            <UButton size="lg" icon="i-heroicons-bolt-20-solid" to="#projects">See Projects</UButton>
            <UButton size="lg" variant="soft" to="#contact" icon="i-heroicons-envelope-20-solid">Contact</UButton>
          </div>
        </div>

        <UCard
          class="rounded-3xl transition-colors duration-300"
          v-motion
          :initial="{ opacity: 0, scale: .95 }"
          :enter="{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 16 } }"
        >
          <div class="p-6">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
              alt="Developer portrait"
              class="rounded-2xl w-full aspect-[4/3] object-cover"
            />
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>

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
            <UBadge class="border border-black/10 dark:border-white/10 transition-colors duration-300" variant="soft">Nuxt</UBadge>
            <UBadge class="border border-black/10 dark:border-white/10 transition-colors duration-300" variant="soft">Vue</UBadge>
            <UBadge class="border border-black/10 dark:border-white/10 transition-colors duration-300" variant="soft">Tailwind</UBadge>
            <UBadge class="border border-black/10 dark:border-white/10 transition-colors duration-300" variant="soft">Motion</UBadge>
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
          class="rounded-2xl transition-colors duration-300"
          v-motion-slide-visible-once-left
        >
          <div class="p-5 flex items-center justify-between">
            <span class="text-zinc-900 dark:text-white transition-colors duration-300">{{ s }}</span>
            <UIcon name="i-heroicons-sparkles-20-solid" class="h-5 w-5 text-cyber-green" />
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
        <UButton variant="soft" icon="i-heroicons-arrow-down-tray-20-solid" to="/resume.pdf" download>Resume</UButton>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="p in projects" :key="p.title" :project="p" />
      </div>
    </UContainer>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="relative transition-colors duration-300">
    <UContainer class="py-24">
      <UCard class="rounded-3xl transition-colors duration-300" v-motion-fade-visible-once>
        <div class="p-6 grid md:grid-cols-2 gap-6">
          <div class="space-y-3">
            <h2 class="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">
              Let’s work together
            </h2>
            <p class="text-zinc-600 dark:text-white/70 transition-colors duration-300">
              Looking for a developer for your next project? Drop a message and I’ll get back to you.
            </p>
            <div class="flex gap-3 pt-2">
              <UButton to="mailto:you@example.com" icon="i-heroicons-envelope-20-solid" variant="soft">Email</UButton>
              <UButton to="https://github.com/yourname" target="_blank" icon="i-simple-icons-github" variant="soft">GitHub</UButton>
              <UButton to="https://www.linkedin.com/in/yourname" target="_blank" icon="i-simple-icons-linkedin" variant="soft">LinkedIn</UButton>
            </div>
          </div>
          <form class="space-y-4">
            <UInput placeholder="Your name" />
            <UInput placeholder="Your email" type="email" />
            <UTextarea :rows="5" placeholder="Tell me about your project..." />
            <div class="flex justify-end">
              <UButton icon="i-heroicons-paper-airplane-20-solid">Send</UButton>
            </div>
          </form>
        </div>
      </UCard>
    </UContainer>
  </section>

  <!-- FOOTER -->
  <footer class="border-t transition-colors duration-300 border-black/10 dark:border-white/10 py-10">
    <UContainer class="text-center text-zinc-600 dark:text-white/60 transition-colors duration-300 text-sm">
      © {{ new Date().getFullYear() }} Your Name — Built with Nuxt, Vue, and Nuxt UI.
    </UContainer>
  </footer>
</template>