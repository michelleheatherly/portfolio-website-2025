<template>
  <section id="blog" class="relative overflow-hidden transition-colors duration-300">
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyber-purple/5 via-transparent to-cyber-green/10 dark:from-cyber-purple/15 dark:to-cyber-green/10" />
    <div class="pointer-events-none absolute -top-24 left-10 h-64 w-64 rounded-full bg-cyber-purple/15 blur-[120px]" />
    <div class="pointer-events-none absolute -bottom-32 right-8 h-60 w-60 rounded-full bg-cyber-green/15 blur-[120px]" />

    <UContainer class="relative py-24">
      <div class="grid items-start gap-14 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)]">
        <div
          class="space-y-6"
          v-motion
          :initial="{ opacity: 0, y: 32 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { delay: blogDelays.container, duration: 0.55, ease: 'easeOut' }
          }"
        >
          <span
            class="inline-flex items-center gap-2 rounded-full border border-cyber-purple/30 bg-cyber-purple/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-cyber-purple shadow-sm transition-colors duration-300"
            v-motion
            :initial="{ opacity: 0, y: -12 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { delay: blogDelays.badge, type: 'spring', stiffness: 150, damping: 20 }
            }"
          >
            <UIcon name="i-heroicons-newspaper-20-solid" class="h-4 w-4" />
            {{ t('blog.badge') }}
          </span>

          <div class="space-y-4">
            <h2
              class="text-3xl font-semibold leading-tight text-zinc-900 transition-colors duration-300 md:text-4xl dark:text-white"
              v-motion
              :initial="{ opacity: 0, y: 20, scale: 0.96 }"
              :visibleOnce="{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { delay: blogDelays.heading, type: 'spring', stiffness: 110, damping: 24 }
              }"
            >
              {{ t('blog.title') }}
            </h2>
            <p
              class="text-lg text-zinc-600 transition-colors duration-300 dark:text-white/70"
              v-motion
              :initial="{ opacity: 0, y: 24, blur: 10 }"
              :visibleOnce="{
                opacity: 1,
                y: 0,
                blur: 0,
                transition: { delay: blogDelays.description, type: 'spring', stiffness: 95, damping: 26 }
              }"
            >
              {{ t('blog.description') }}
            </p>
          </div>

          <div
            class="flex items-start gap-3 rounded-2xl border border-black/10 bg-white/60 p-4 text-sm text-zinc-600 shadow-sm backdrop-blur transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
            v-motion
            :initial="{ opacity: 0, y: 24, scale: 0.96 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { delay: blogDelays.note, type: 'spring', stiffness: 120, damping: 24 }
            }"
          >
            <UIcon name="i-heroicons-language-20-solid" class="mt-1 h-5 w-5 shrink-0 text-cyber-green" />
            <p>{{ t('blog.note') }}</p>
          </div>

          <div
            v-if="showFeedLink || showBlogLink"
            class="flex flex-wrap gap-3 pt-2"
            v-motion
            :initial="{ opacity: 0, y: 18 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { delay: blogDelays.buttons, duration: 0.45, ease: 'easeOut' }
            }"
          >
            <UButton
              v-if="showBlogLink"
              :href="blogUrl"
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              class="group border border-cyber-green/35 bg-cyber-green/15 text-cyber-green transition-colors duration-300 hover:bg-cyber-green/20 dark:border-cyber-green/40 dark:bg-cyber-green/25 dark:text-cyber-green/90 dark:hover:bg-cyber-green/35"
              v-motion
              :initial="{ opacity: 0, y: 18, scale: 0.95 }"
              :visibleOnce="{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { delay: blogDelays.buttons + 0.02, type: 'spring', stiffness: 130, damping: 24 }
              }"
            >
              <UIcon
                name="i-heroicons-arrow-top-right-on-square-20-solid"
                class="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
              />
              <span>{{ t('blog.actions.visit') }}</span>
            </UButton>

            <UButton
              v-if="showFeedLink"
              :href="feedUrl"
              target="_blank"
              rel="noopener noreferrer"
              variant="soft"
              size="md"
              class="group border border-cyber-purple/30 bg-cyber-purple/15 text-cyber-purple transition-colors duration-300 hover:bg-cyber-purple/20 dark:border-cyber-purple/35 dark:bg-cyber-purple/25 dark:text-cyber-purple/90 dark:hover:bg-cyber-purple/35"
              v-motion
              :initial="{ opacity: 0, y: 18, scale: 0.95 }"
              :visibleOnce="{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { delay: blogDelays.buttons + 0.12, type: 'spring', stiffness: 130, damping: 24 }
              }"
            >
              <UIcon
                name="i-heroicons-rss-20-solid"
                class="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
              />
              <span>{{ t('blog.actions.open') }}</span>
            </UButton>
          </div>
        </div>

        <div
          class="relative"
          v-motion
          :initial="{ opacity: 0, x: 32, scale: 0.95 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { delay: blogDelays.feed, type: 'spring', stiffness: 110, damping: 26 }
          }"
        >
          <FeedCards />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: 'global' })

const runtimeConfig = useRuntimeConfig()
const feedUrl = computed(() => runtimeConfig.public.feedUrl || '')
const rawBlogUrl = computed(() => runtimeConfig.public.blogUrl || '')
const blogUrl = computed(() => {
  const base = rawBlogUrl.value
  if (!base)
    return ''

  if (locale.value?.startsWith('de')) {
    const normalized = base.replace(/\/+$/, '')
    return `${normalized}/de`
  }

  return base
})

const showFeedLink = computed(() => feedUrl.value && !feedUrl.value.includes('example.com'))
const showBlogLink = computed(() => blogUrl.value && !blogUrl.value.includes('example.com'))

const blogDelays = {
  container: 0.08,
  badge: 0.16,
  heading: 0.24,
  description: 0.32,
  note: 0.42,
  buttons: 0.5,
  feed: 0.28
}
</script>
