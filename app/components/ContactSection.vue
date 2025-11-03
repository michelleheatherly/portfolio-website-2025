<template>
  <section id="contact" class="relative transition-colors duration-300">
    <UContainer class="py-24">
      <div
        class="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/70 shadow-[0_35px_60px_-30px_rgba(15,23,42,0.35)] transition-colors duration-500 dark:border-white/10 dark:bg-white/5"
        v-motion
        :initial="{ opacity: 0, y: 48, scale: 0.95 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            delay: contactDelays.container,
            type: 'spring',
            stiffness: 110,
            damping: 24
          }
        }"
      >
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyber-purple/5 via-transparent to-cyber-green/10"></div>
        <div class="pointer-events-none absolute -top-28 left-10 h-56 w-56 rounded-full bg-cyber-purple/15 blur-3xl"></div>
        <div class="pointer-events-none absolute -bottom-36 right-6 h-64 w-64 rounded-full bg-cyber-green/15 blur-[120px]"></div>

        <div class="relative grid gap-10 p-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:p-12">
          <div
            v-motion
            :initial="{ opacity: 0, y: 28 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                delay: contactDelays.panel,
                type: 'spring',
                stiffness: 120,
                damping: 24
              }
            }"
          >
            <ContactCollabPanel
              :headline="t('contact.headline')"
              :description="t('contact.description')"
            />
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 32, scale: 0.96 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                delay: contactDelays.form,
                type: 'spring',
                stiffness: 125,
                damping: 26
              }
            }"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const contactDelays = {
  container: 0.12,
  panel: 0.24,
  form: 0.34
}
</script>