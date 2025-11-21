<template>
  <section id="blog" class="relative overflow-hidden transition-colors duration-300">
    <UContainer class="relative py-24">
      <div class="grid items-start gap-14 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)]">
        <div
          :key="motionKey"
          class="space-y-6"
          ref="leftColRef"
          v-motion
          :initial="isClient ? { opacity: 0, y: 32 } : { opacity: 1, y: 0 }"
          :visibleOnce="isClient ? { opacity: 1, y: 0, transition: { delay: blogDelays.container, duration: 0.55, ease: 'easeOut' } } : false"
        >
          <span
            class="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs uppercase tracking-[0.28em] shadow-sm transition-colors duration-300"
            v-motion
            :initial="isClient ? { opacity: 0, y: -12 } : { opacity: 1, y: 0 }"
            :visibleOnce="isClient ? { opacity: 1, y: 0, transition: { delay: blogDelays.badge, type: 'spring', stiffness: 150, damping: 20 } } : false"
          >
            <UIcon name="i-heroicons-newspaper-20-solid" class="h-4 w-4" />
            {{ t('blog.badge') }}
          </span>

          <div class="space-y-4">
            <h2
              v-motion
              :initial="isClient ? { opacity: 0, y: 20, scale: 0.96 } : { opacity: 1, y: 0, scale: 1 }"
              :visibleOnce="isClient ? { opacity: 1, y: 0, scale: 1, transition: { delay: blogDelays.heading, type: 'spring', stiffness: 110, damping: 24 } } : false"
              class="text-3xl font-semibold leading-tight text-zinc-900 transition-colors duration-300 md:text-4xl dark:text-white"
            >
              {{ t('blog.title') }}
            </h2>

            <p
              v-motion
              :initial="isClient ? { opacity: 0, y: 24, blur: 10 } : { opacity: 1, y: 0, blur: 0 }"
              :visibleOnce="isClient ? { opacity: 1, y: 0, blur: 0, transition: { delay: blogDelays.description, type: 'spring', stiffness: 95, damping: 26 } } : false"
              class="text-lg text-zinc-600 transition-colors duration-300 dark:text-white/70"
            >
              {{ t('blog.description') }}
            </p>
          </div>

          <div
            ref="noteRef"
            v-motion
            :initial="isClient ? { opacity: 0, y: 24, scale: 0.96 } : { opacity: 1, y: 0, scale: 1 }"
            :visibleOnce="isClient ? { opacity: 1, y: 0, scale: 1, transition: { delay: blogDelays.note, type: 'spring', stiffness: 120, damping: 24 } } : false"
            class="flex items-start gap-3 rounded-2xl border border-black/10 bg-white/60 p-4 text-sm text-zinc-600 shadow-sm backdrop-blur transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
          >
            <UIcon name="i-heroicons-language-20-solid" class="mt-1 h-5 w-5 shrink-0 text-cyber-purple" />
            <p>{{ t('blog.note') }}</p>
          </div>

          <div
            v-if="showFeedLink || showBlogLink"
            :key="motionKey + '-btns'"
            class="flex flex-wrap gap-3 pt-2"
            v-motion
            :initial="isClient ? { opacity: 0, y: 18 } : { opacity: 1, y: 0 }"
            :visibleOnce="isClient ? { opacity: 1, y: 0, transition: { delay: blogDelays.buttons, duration: 0.45, ease: 'easeOut' } } : false"
          >
            <UButton
              v-if="showBlogLink"
              :href="blogUrl"
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              class="group border transition-colors duration-300 bg-transparent"
              variant="soft"
              color="neutral"
              v-motion
              :initial="isClient ? { opacity: 0, y: 18, scale: 0.95 } : { opacity: 1, y: 0, scale: 1 }"
              :visibleOnce="isClient ? { opacity: 1, y: 0, scale: 1, transition: { delay: blogDelays.buttons + 0.02, type: 'spring', stiffness: 130, damping: 24 } } : false"
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
              size="md"
              class="group border transition-colors duration-300 bg-transparent"
              variant="soft"
              color="neutral"
              v-motion
              :initial="isClient ? { opacity: 0, y: 18, scale: 0.95 } : { opacity: 1, y: 0, scale: 1 }"
              :visibleOnce="isClient ? { opacity: 1, y: 0, scale: 1, transition: { delay: blogDelays.buttons + 0.12, type: 'spring', stiffness: 130, damping: 24 } } : false"
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
          :key="motionKey + '-right'"
          class="relative min-h-0 overflow-hidden pt-2"
          :style="feedHeight ? { height: feedHeight + 'px' } : undefined"
          v-motion
          :initial="isClient ? { opacity: 0, x: 32, scale: 0.95 } : { opacity: 1, x: 0, scale: 1 }"
          :visibleOnce="isClient ? { opacity: 1, x: 0, scale: 1, transition: { delay: blogDelays.feed, type: 'spring', stiffness: 110, damping: 26 } } : false"
        >
          <BlogFeedCards :max-height="feedHeight" />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: 'global' })
const config = useRuntimeConfig()

const isClient = ref(false)
const motionKey = computed(() => (isClient.value ? 'client' : 'server'))
onMounted(() => { isClient.value = true })

const leftColRef = ref<HTMLElement | null>(null)
const noteRef = ref<HTMLElement | null>(null)
const feedHeight = ref<number | null>(null)

function calcHeights() {
  if (typeof window === 'undefined' || window.innerWidth < 1024) {
    // Still add headroom in the child, but don't fix height on mobile
    feedHeight.value = null
    return
  }
  const left = leftColRef.value
  const note = noteRef.value
  if (!left || !note) {
    feedHeight.value = null
    return
  }
  const leftTop = left.getBoundingClientRect().top + window.scrollY
  const noteBottom = note.getBoundingClientRect().bottom + window.scrollY
  feedHeight.value = Math.max(0, Math.round(noteBottom - leftTop))
}

onMounted(() => {
  calcHeights()
  window.addEventListener('resize', calcHeights, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', calcHeights)
})

const feedUrlState = useState('feedUrl', () => (config.public.feedUrl ?? '').trim())
const blogBaseState = useState('blogUrl', () => (config.public.blogUrl ?? '').trim())

const blogUrl = computed(() => {
  const base = blogBaseState.value.replace(/\/+$/, '')
  if (!base) return ''
  return locale.value?.startsWith('de') ? `${base}/de` : base
})

const feedUrl = computed(() => feedUrlState.value)
const showFeedLink = computed(() => !!feedUrl.value)
const showBlogLink = computed(() => !!blogUrl.value)
const blogDelays = {
  container: 0.08,
  badge: 0.16,
  heading: 0.24,
  description: 0.32,
  note: 0.42,
  buttons: 0.5,
  feed: 0.28,
}
</script>