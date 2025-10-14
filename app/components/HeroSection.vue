<template>
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
            class="hero-headline text-4xl md:text-6xl font-extrabold leading-tight
                   text-zinc-900 dark:text-white transition-colors duration-300"
          >
            Building elegant interfaces with a <span class="hero-headline__accent">cyber-femme</span> vibe.
          </h1>

          <p class="max-w-prose text-zinc-600 dark:text-white/70 transition-colors duration-300">
            I’m a web developer specializing in Nuxt, Vue, and delightful motion. Let’s craft
            fast, accessible, and stylish experiences.
          </p>

          <div class="flex flex-wrap gap-3">
            <UButton size="lg" to="#projects" class="group">
              <UIcon
                name="i-heroicons-bolt-20-solid"
                class="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
              />
              <span>See Projects</span>
            </UButton>
            <UButton size="lg" variant="soft" to="#contact" class="group">
              <UIcon
                name="i-heroicons-envelope-20-solid"
                class="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
              />
              <span>Contact</span>
            </UButton>
          </div>

          <HeroScrollIndicator />
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
</template>

<style scoped>
.hero-headline {
  position: relative;
  text-shadow:
    1px 1px 0 rgba(124, 58, 237, 0.28),
    2px 2px 0 rgba(91, 33, 182, 0.22),
    6px 10px 24px rgba(16, 185, 129, 0.2);
}

:global(.dark) .hero-headline {
  text-shadow:
    1px 1px 0 rgba(196, 181, 253, 0.32),
    2px 2px 0 rgba(124, 58, 237, 0.28),
    8px 14px 28px rgba(34, 197, 94, 0.35);
}

.hero-headline__accent {
  display: inline-block;
  background: linear-gradient(120deg, #c6a7ff, #8c5cf7 55%, #4ade80);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow:
    1px 1px 0 rgba(76, 29, 149, 0.28),
    3px 6px 18px rgba(74, 222, 128, 0.26);
}

:global(.dark) .hero-headline__accent {
  background: linear-gradient(120deg, #b892ff, #7c3aed 55%, #22c55e);
  text-shadow:
    1px 1px 0 rgba(76, 29, 149, 0.38),
    4px 8px 22px rgba(34, 197, 94, 0.32);
}
</style>
