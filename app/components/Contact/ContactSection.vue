<template>
  <section id="contact" class="relative transition-colors duration-300">
    <UContainer class="py-24">
      <div
        class="relative overflow-hidden"
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

  <div class="relative grid gap-10 px-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
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