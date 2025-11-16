<template>
  <footer
    ref="footerRef"
    class="relative overflow-hidden border-t border-black/10 py-16 transition-colors duration-700 bg-gradient-to-t from-[#f5f3ff] via-[#e4d8ff] to-[#c7b5ff] dark:border-white/10 dark:bg-gradient-to-t dark:from-[#241358] dark:via-[#3b1882] dark:to-[#5523a7]"
  >
    <div aria-hidden="true" class="absolute inset-0 z-0 opacity-90 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.65),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.4),transparent_55%)] dark:opacity-0 dark:bg-transparent" />
    <UContainer class="relative z-10 text-center text-zinc-600 transition-colors duration-300 text-sm dark:text-white/60">
      <div
        class="relative z-10 grid gap-12 text-left lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1.2fr)]"
      >
        <section class="flex flex-col gap-6">
          <div class="inline-flex items-center gap-3">
            <span class="h-3 w-3 animate-ping-slow rounded-full bg-[#4ade80] shadow-[0_0_18px_rgba(34,197,94,0.85)]" />
            <span class="text-xs uppercase tracking-[0.4em] text-zinc-500 dark:text-white/40">
              {{ t('footer.badge') }}
            </span>
          </div>
          <div class="space-y-2">
            <p class="text-lg font-semibold uppercase tracking-widest text-zinc-500 dark:text-white/50"> {{ siteName }} </p>
            <h2 class="text-3xl font-bold text-zinc-900 transition-colors duration-300 dark:text-white">
              {{ t('footer.headline') }}
            </h2>
            <p class="max-w-xl text-sm leading-relaxed text-zinc-600 transition-colors duration-300 dark:text-white/60">
              {{ siteDescription }}
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <NuxtLink
              v-for="link in socialLinks"
              :key="link.label"
              :aria-label="t('footer.social.visit', { label: link.label })"
              class="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white/50 text-zinc-500 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-cyber-green/60 hover:bg-cyber-green/10 hover:text-cyber-green/90 dark:border-white/10 dark:bg-white/5 dark:text-white/60 dark:hover:border-cyber-green/60 dark:hover:bg-cyber-green/15 dark:hover:text-cyber-green"
              :href="link.href"
              target="_blank"
              rel="noreferrer"
            >
              <span class="absolute inset-0 translate-y-full bg-gradient-to-br from-cyber-green/25 to-cyber-green/5 transition-transform duration-500 group-hover:translate-y-0" />
              <UIcon :name="link.icon" class="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-[-6deg]" />
            </NuxtLink>
          </div>
        </section>

        <section class="relative z-10 grid gap-10 sm:grid-cols-2">
          <div
            v-for="column in footerColumns"
            :key="column.title"
            class="relative flex flex-col gap-4 pl-6 group/column"
          >
            <span
              class="pointer-events-none absolute left-0 top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-cyber-green/50 via-cyber-green/10 to-transparent opacity-60 transition-opacity duration-300 group-hover/column:opacity-90"
            />
            <header class="flex items-center gap-3">
              <span class="h-2 w-2 animate-ping-slow rounded-full bg-[#4ade80] shadow-[0_0_12px_rgba(34,197,94,0.75)] transition-transform duration-300 group-hover/column:scale-125" />
              <h3 class="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500 transition-colors duration-300 dark:text-white/40">
                {{ column.title }}
              </h3>
            </header>
            <ul class="space-y-2 text-sm text-zinc-600 transition-colors duration-300 dark:text-white/60">
              <template v-if="column.type === 'links'">
                <li v-for="item in column.links" :key="item.label">
                  <NuxtLink
                    :href="item.href"
                    class="group relative inline-flex items-center gap-2 rounded-full px-2 py-1 text-zinc-600 transition-colors duration-300 ease-out hover:text-cyber-green focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-purple/40 dark:text-white/60 dark:hover:text-cyber-green"
                  >
                    <span
                      class="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-out dark:bg-white/90
                             group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:scale-x-100 group-focus-visible:opacity-100"
                    />
                    <span class="relative">
                      {{ item.label }}
                    </span>
                    <UIcon
                      name="i-heroicons-arrow-up-right-16-solid"
                      class="h-4 w-4 -translate-y-0.5 text-cyber-green opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                  </NuxtLink>
                </li>
              </template>
              <li v-else v-for="highlight in column.highlights" :key="highlight" class="text-zinc-500 dark:text-white/50">
                {{ highlight }}
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div
        class="relative z-10 mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500 transition-colors duration-300 dark:text-white/40 sm:flex-row sm:justify-between"
      >
        <span class="flex items-center gap-2">
          <span>{{ t('footer.bottom.crafted', { year: currentYear, site: siteName }) }}</span>
        </span>
        <span class="flex items-center gap-2">
          <!-- <NuxtLink href="#privacy" class="rounded-full px-3 py-1 text-zinc-500 transition hover:bg-white/30 hover:text-cyber-green dark:hover:bg-white/10">
            {{ t('footer.bottom.privacy') }}
          </NuxtLink>
          <NuxtLink href="#terms" class="rounded-full px-3 py-1 text-zinc-500 transition hover:bg-white/30 hover:text-cyber-green dark:hover:bg-white/10">
            {{ t('footer.bottom.terms') }}
          </NuxtLink> -->
          <LanguageToggle class="rounded-full px-3 py-1 text-zinc-500 transition hover:bg-white/30 hover:text-cyber-green dark:hover:bg-white/10" />
          <ThemeToggle class="rounded-full px-3 py-1 text-zinc-500 transition hover:bg-white/30 hover:text-cyber-green dark:hover:bg-white/10" />
        </span>
      </div>
    </UContainer>
    <ClientOnly>
      <ScrollToTop :footer-visible="footerVisible" />
    </ClientOnly>
  </footer>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'

const footerRef = ref<HTMLElement | null>(null)
const footerVisible = useState<boolean>('footer-visible', () => false)
const FOOTER_VISIBILITY_RATIO = 0.6
const currentYear = new Date().getFullYear()

const navItemsMeta = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'education', href: '#education' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'blog', href: '#blog' },
  { key: 'contact', href: '#contact' }

] as const

const { t, tm, rt } = useI18n()

const resolveLocaleValue = (value: unknown): any => {
  if (Array.isArray(value)) {
    return value.map(resolveLocaleValue)
  }

  if (value && typeof value === 'object') {
    if ('type' in value && 'loc' in value) {
      return rt(value as any)
    }

    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, val]) => [key, resolveLocaleValue(val)])
    )
  }

  return value
}

const footerMessages = computed(() => resolveLocaleValue(tm('footer')))

const siteName = computed(() => t('footer.siteName'))
const siteDescription = computed(() => t('footer.description'))

const primarySections = computed(() =>
  navItemsMeta.map((item) => ({
    label: t(`footer.columns.navigate.items.${item.key}`),
    href: item.href
  }))
)

const studioHighlights = computed(() => {
  const highlights = footerMessages.value?.columns?.expertise?.items
  return Array.isArray(highlights) ? highlights.map((item: unknown) => String(item)) : []
})

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: 'i-simple-icons-github'
  },
  {
    label: 'GitLab',
    href: 'https://gitlab.com/',
    icon: 'i-simple-icons-gitlab'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: 'i-simple-icons-linkedin'
  },
  {
    label: 'Blog',
    href: 'https://www.michelle-heatherly.com/blog',
    icon: 'i-heroicons-newspaper-20-solid'
  }
]

const footerColumns = computed(() => [
  {
    title: t('footer.columns.expertise.title'),
    highlights: studioHighlights.value,
    type: 'highlights' as const
  },
  {
    title: t('footer.columns.navigate.title'),
    links: primarySections.value,
    type: 'links' as const
  }
])

if (import.meta.client) {
  useIntersectionObserver(
    footerRef,
    ([entry]) => {
      if (!entry) {
        footerVisible.value = false
        return
      }

      const ratio = entry.intersectionRatio ?? 0
      footerVisible.value = entry.isIntersecting && ratio >= FOOTER_VISIBILITY_RATIO
    },
    {
      threshold: Array.from({ length: 11 }, (_, index) => index / 10),
      rootMargin: '0px 0px -40px 0px'
    }
  )
}
</script>


<style scoped>
.animate-ping-slow {
  animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping-slow {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  75% {
    transform: scale(1.4);
    opacity: 0;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}
</style>
