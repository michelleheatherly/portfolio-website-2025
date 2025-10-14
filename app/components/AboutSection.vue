<template>
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
</template>
