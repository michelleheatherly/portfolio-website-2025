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
