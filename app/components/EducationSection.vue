<template>
  <section id="education" class="relative transition-colors duration-300">
    <UContainer class="py-24">
      <h2 class="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white transition-colors duration-300 mb-8">
        Education
      </h2>
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
</template>
