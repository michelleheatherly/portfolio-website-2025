<script setup lang="ts">
import { usePreferredReducedMotion } from '@vueuse/core'

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

const prefersReduced = usePreferredReducedMotion()
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
            v-motion
            :initial="{ opacity: 0, y: -8 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.15, type: 'spring', stiffness: 150, damping: 18 } }"
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

          <div
            class="hidden md:flex text-sm text-zinc-500 dark:text-white/60 transition-colors duration-300"
            v-motion
            :initial="{ opacity: 0, y: 8 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.5 } }"
          >
            <div
              class="scroll-indicator relative flex items-center gap-3"
              :class="{ 'prefers-reduce': prefersReduced === 'reduce' }"
            >
              <span
                class="scroll-orb relative flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/70 text-cyber-purple shadow-[0_16px_30px_-24px_rgba(99,102,241,0.7)] dark:border-white/20 dark:bg-white/10"
              >
                <UIcon
                  name="i-heroicons-arrow-down-20-solid"
                  class="scroll-buddy-arrow h-5 w-5"
                />
              </span>

              <div class="flex flex-col">
                <span class="font-medium text-zinc-700 dark:text-white/80">Scroll to explore</span>
                <span class="text-xs text-zinc-500 dark:text-white/60">There's more magic below</span>
              </div>
            </div>
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

<style scoped>
.scroll-orb {
  animation: floaty 5s ease-in-out infinite;
}

.scroll-orb::after {
  content: '';
  position: absolute;
  inset: -10px;
  border-radius: 9999px;
  background: radial-gradient(circle at center, rgba(155, 92, 255, 0.48), rgba(155, 92, 255, 0));
  opacity: 0.75;
  filter: blur(8px);
  animation: neon-pulse 4.5s ease-in-out infinite;
  z-index: -1;
}

.scroll-buddy-arrow {
  animation: arrow-bounce 1.9s ease-in-out infinite;
}

.scroll-indicator.prefers-reduce .scroll-orb,
.scroll-indicator.prefers-reduce .scroll-buddy-arrow {
  animation: none;
  opacity: 1;
  transform: none;
}

.scroll-indicator.prefers-reduce .scroll-orb::after {
  animation: none;
  opacity: 0.7;
  transform: none;
}

@keyframes floaty {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes arrow-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}

@keyframes neon-pulse {
  0%,
  100% {
    opacity: 0.6;
    transform: scale(0.96);
  }
  45% {
    opacity: 0.95;
    transform: scale(1.05);
  }
  70% {
    opacity: 0.7;
    transform: scale(1);
  }
}
</style>
