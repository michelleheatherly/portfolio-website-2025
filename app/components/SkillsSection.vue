<script setup lang="ts">
const skills = ['Nuxt / Vue', 'TypeScript', 'Tailwind / UI', 'Animations', 'A11y', 'Testing']
</script>

<template>
  <section id="skills" class="relative transition-colors duration-300">
    <UContainer class="py-24">
      <h2 class="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white transition-colors duration-300 mb-8">
        Skills
      </h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <UCard
          v-for="skill in skills"
          :key="skill"
          class="group rounded-2xl transition-all duration-300
                 hover:-translate-y-1 hover:border-cyber-purple/30 hover:shadow-[0_20px_45px_-28px_rgba(165,180,252,0.55)]"
          v-motion-slide-visible-once-left
        >
          <div class="p-5 flex items-center justify-between">
            <span class="text-zinc-900 dark:text-white transition-colors duration-300">{{ skill }}</span>
            <UIcon
              name="i-heroicons-sparkles-20-solid"
              class="h-5 w-5 text-cyber-green transition-transform duration-500 group-hover:rotate-12"
            />
          </div>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
