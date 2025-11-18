<template>
  <section id="projects" class="relative transition-colors duration-300">
    <UContainer class="py-24">
      <div
        class="space-y-10 mb-12"
        v-motion
        :initial="{ opacity: 0, y: 26 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: { delay: projectDelays.container, duration: 0.55, ease: 'easeOut' }
        }"
      >
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div class="max-w-2xl space-y-4">
            <span
              class="inline-flex items-center gap-2 rounded-full border border-cyber-purple/30 bg-cyber-purple/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-cyber-purple"
              v-motion
              :initial="{ opacity: 0, y: -12 }"
              :visibleOnce="{
                opacity: 1,
                y: 0,
                transition: { delay: projectDelays.badge, type: 'spring', stiffness: 150, damping: 20 }
              }"
            >
              <UIcon name="i-heroicons-beaker-20-solid" class="h-4 w-4" />
              {{ t('projects.badge') }}
            </span>
            <div class="space-y-3">
              <h2
                class="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white transition-colors duration-300"
                v-motion
                :initial="{ opacity: 0, y: 20, scale: 0.96 }"
                :visibleOnce="{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { delay: projectDelays.heading, type: 'spring', stiffness: 110, damping: 24 }
                }"
              >
                {{ t('projects.title') }}
              </h2>
              <p
                class="text-base text-zinc-600 dark:text-zinc-300 transition-colors duration-300"
                v-motion
                :initial="{ opacity: 0, y: 24, blur: 10 }"
                :visibleOnce="{
                  opacity: 1,
                  y: 0,
                  blur: 0,
                  transition: { delay: projectDelays.description, type: 'spring', stiffness: 95, damping: 26 }
                }"
              >
                {{ t('projects.description') }}
              </p>
            </div>
          </div>
          <div
            v-motion
            :initial="{ opacity: 0, y: 18, scale: 0.95 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { delay: projectDelays.cta, type: 'spring', stiffness: 120, damping: 24 }
            }"
          >
            <UButton
              variant="soft"
              href="/resume.pdf"
              download
              class="justify-center group border border-cyber-green/25 bg-cyber-green/15 text-cyber-green transition-colors duration-300
                    hover:bg-cyber-green/20 hover:text-cyber-green
                    dark:border-cyber-green/35 dark:bg-cyber-green/25 dark:text-cyber-green/90 dark:hover:bg-cyber-green/35"
            >
              <UIcon
                name="i-heroicons-arrow-down-tray-20-solid"
                class="h-5 w-5 text-cyber-green transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
              />
              <span>{{ t('projects.resume') }}</span>
            </UButton>
          </div>
        </div>

        <div class="space-y-4 relative z-20">
          <div
            class="flex flex-wrap items-center gap-2"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { delay: projectDelays.filters, duration: 0.5, ease: 'easeOut' }
            }"
          >
            <button
              v-for="(category, index) in categoryFilters"
              :key="category.value"
              type="button"
              class="inline-flex cursor-pointer items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-purple/50 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_-20px_rgba(99,102,241,0.6)]"
              :class="[
                activeCategory === category.value
                  ? 'border-cyber-purple/60 bg-cyber-purple/15 text-cyber-purple dark:bg-cyber-purple/20'
                  : 'border-zinc-300/60 bg-white/70 text-zinc-600 hover:border-cyber-purple/40 hover:text-cyber-purple dark:border-zinc-700/60 dark:bg-white/5 dark:text-zinc-300'
              ]"
              v-motion
              :initial="{ opacity: 0, y: 16 }"
              :visibleOnce="{
                opacity: 1,
                y: 0,
                transition: {
                  delay: projectDelays.filters + index * 0.05,
                  duration: 0.4,
                  ease: 'easeOut'
                }
              }"
              @click="activeCategory = category.value"
            >
              {{ category.label }}
            </button>
          </div>

          <div
            class="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between"
            v-motion
            :initial="{ opacity: 0, y: 22 }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: { delay: projectDelays.filters + 0.08, duration: 0.5, ease: 'easeOut' }
            }"
          >
            <div class="flex w-full flex-wrap items-center gap-3 lg:w-auto">
              <UPopover
                v-model:open="tagMenuOpen"
                :content="{ side: 'bottom', align: 'start', sideOffset: 8, collisionPadding: 12 }"
                arrow
              >
                <!-- Trigger -->
                <UButton
                  color="gray"
                  variant="soft"
                  class="group inline-flex cursor-pointer items-center gap-3 rounded-full border px-4 py-1.5 text-sm font-medium
                        transition-all duration-300
                        border-zinc-300/60 bg-white/70 text-zinc-600
                        hover:-translate-y-0.5 hover:shadow-[0_14px_35px_-20px_rgba(99,102,241,0.6)]
                        hover:border-cyber-purple/40 hover:text-cyber-purple
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-purple/50
                        dark:border-zinc-700/60 dark:bg-white/5 dark:text-zinc-300 dark:hover:text-cyber-purple"
                >
                  <UIcon
                    name="i-heroicons-tag-20-solid"
                    class="h-5 w-5 text-zinc-400 group-hover:text-cyber-purple"
                  />

                  <span class="font-medium">
                    {{ t('projects.filters.tags.button') }}
                  </span>

                  <span
                    v-if="activeTags.length"
                    class="inline-flex items-center justify-center rounded-full bg-cyber-purple/15 px-2 text-xs font-semibold text-cyber-purple transition-colors duration-300 dark:bg-cyber-purple/20"
                  >
                    {{ activeTags.length }}
                  </span>

                  <UIcon
                    :name="tagMenuOpen ? 'i-heroicons-chevron-up-20-solid' : 'i-heroicons-chevron-down-20-solid'"
                    class="h-4 w-4 text-zinc-400 transition-transform duration-300 group-hover:text-cyber-purple"
                  />
                </UButton>

                <!-- Content -->
                <template #content>
                    <div class="space-y-4 p-4">
                      <div class="flex items-center justify-between gap-3">
                        <p class="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                          {{ t('projects.filters.tags.title') }}
                        </p>
                        <div class="flex items-center gap-3">
                          <button
                            v-if="activeTags.length"
                            type="button"
                            class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-cyber-green focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-green/40 cursor-pointer"
                            @click="activeTags = []"
                          >
                            {{ t('projects.filters.tags.clear') }}
                          </button>
                          <button
                            type="button"
                            class="text-xs font-semibold uppercase tracking-[0.18em] text-cyber-purple transition-all duration-300 hover:-translate-y-0.5 hover:text-cyber-green focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-green/40 cursor-pointer"
                            @click="tagMenuOpen = false; tagSearchQuery = ''"
                          >
                            {{ t('projects.filters.tags.done') }}
                          </button>
                        </div>
                      </div>

                      <!-- Search -->
                      <label class="relative block">
                        <span class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-400 dark:text-zinc-500">
                          <UIcon name="i-heroicons-magnifying-glass-20-solid" class="h-4 w-4" />
                        </span>
                        <input
                          v-model="tagSearchQuery"
                          type="search"
                          :placeholder="t('projects.filters.tags.searchPlaceholder')"
                          class="w-full rounded-2xl border border-zinc-200/60 bg-white/80 py-2 pl-10 pr-3 text-sm text-zinc-700 transition focus:border-cyber-purple/50 focus:outline-none focus:ring-2 focus:ring-cyber-purple/30 dark:border-zinc-600/60 dark:bg-white/10 dark:text-white"
                        />
                      </label>

                      <!-- Options -->
                      <div class="max-h-64 space-y-2 overflow-y-auto pr-1 pt-2">
                        <p v-if="filteredTagOptions.length === 0" class="text-sm text-zinc-500 dark:text-zinc-400">
                          {{ t('projects.filters.tags.empty') }}
                        </p>
                        <button
                          v-for="tag in filteredTagOptions"
                          :key="tag"
                          type="button"
                          class="flex w-full cursor-pointer items-center justify-between rounded-2xl border px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-green/40 hover:-translate-y-0.5"
                          :class="[
                            activeTags.includes(tag)
                              ? 'border-cyber-green/55 bg-cyber-green/15 text-cyber-green hover:border-cyber-green/70 hover:bg-cyber-green/25 dark:bg-cyber-green/20 dark:hover:bg-cyber-green/30'
                              : 'border-transparent bg-zinc-100/80 text-zinc-600 hover:border-cyber-green/55 hover:bg-cyber-green/15 hover:text-cyber-green dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-cyber-green/20'
                          ]"
                          @click="activeTags = activeTags.includes(tag) ? activeTags.filter(t => t !== tag) : [...activeTags, tag]"
                        >
                          <span class="capitalize">{{ tag }}</span>
                          <UIcon
                            :name="activeTags.includes(tag) ? 'i-heroicons-minus-circle-20-solid' : 'i-heroicons-plus-circle-20-solid'"
                            class="h-5 w-5 transition-transform duration-300"
                          />
                        </button>
                      </div>
                    </div>
                </template>
              </UPopover>

              <button
                v-if="hasActiveFilters"
                type="button"
                class="ml-auto inline-flex items-center gap-2 rounded-full border border-transparent px-3.5 py-1.5 text-sm font-medium text-cyber-purple transition-all duration-300 hover:-translate-y-0.5 hover:text-cyber-green hover:shadow-[0_16px_40px_-28px_rgba(59,130,246,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-green/40"
                v-motion
                :initial="{ opacity: 0, y: 26, scale: 0.96, blur: 6 }"
                :visibleOnce="{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  blur: 0,
                  transition: { delay: projectDelays.filters + 0.22, type: 'spring', stiffness: 120, damping: 24 }
                }"
                @click="clearFilters"
              >
                <UIcon name="i-heroicons-arrow-path-20-solid" class="h-4 w-4" />
                {{ t('projects.filters.reset') }}
              </button>
            </div>

            <div
              class="w-full lg:w-72"
              v-motion
              :initial="{ opacity: 0, x: 32, scale: 0.95, blur: 8 }"
              :visibleOnce="{
                opacity: 1,
                x: 0,
                scale: 1,
                blur: 0,
                transition: { delay: projectDelays.search, type: 'spring', stiffness: 120, damping: 26 }
              }"
            >
              <label class="relative block">
                <span class="pointer-events-none absolute inset-y-0 left-4 flex items-center text-zinc-400 dark:text-zinc-500">
                  <UIcon name="i-heroicons-magnifying-glass-20-solid" class="h-5 w-5" />
                </span>
                <input
                  v-model="searchQuery"
                  type="search"
                  :placeholder="t('projects.filters.searchPlaceholder')"
                  class="w-full rounded-2xl border border-zinc-200/60 bg-white/80 py-2.5 pl-12 pr-4 text-sm text-zinc-700 shadow-sm transition focus:border-cyber-purple/50 focus:outline-none focus:ring-2 focus:ring-cyber-purple/30 dark:border-zinc-700/60 dark:bg-white/10 dark:text-white"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredProjects.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(p, index) in filteredProjects"
          :key="p.title"
          v-motion
          :initial="{ opacity: 0, x: -42, scale: 0.94 }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              delay: projectDelays.grid + index * 0.1,
              type: 'spring',
              stiffness: 125,
              damping: 24
            }
          }"
        >
          <ProjectsCard :project="p" />
        </div>
      </div>
      <div
        v-else
        class="rounded-[2.5rem] border border-dashed border-zinc-300/70 bg-white/60 py-16 text-center transition-colors duration-300 dark:border-zinc-700/60 dark:bg-white/5"
      >
        <div class="mx-auto max-w-md space-y-4 px-6">
          <UIcon name="i-heroicons-face-frown-20-solid" class="mx-auto h-10 w-10 text-cyber-purple/70" />
          <p class="text-lg font-semibold text-zinc-900 dark:text-white">
            {{ t('projects.empty.title') }}
          </p>
          <p class="text-sm text-zinc-600 dark:text-zinc-300">
            {{ t('projects.empty.description') }}
          </p>
          <UButton variant="soft" class="mt-2" @click="clearFilters">
            <UIcon name="i-heroicons-sparkles-20-solid" class="h-5 w-5" />
            <span>{{ t('projects.empty.action') }}</span>
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const categoryFilterMeta = [
  { key: 'all', value: 'all' },
  { key: 'front-end', value: 'front-end' },
  { key: 'full-stack', value: 'full-stack' },
  { key: 'design', value: 'design' }
] as const

type CategoryFilter = (typeof categoryFilterMeta)[number]['value']
type ProjectCategory = Exclude<CategoryFilter, 'all'>

type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  codeLink?: string
  category: ProjectCategory
}

type LocalizedProjectEntry = Partial<Project> & { id?: string }

const projectCategoryValues = categoryFilterMeta
  .map((filter) => filter.value)
  .filter((value): value is ProjectCategory => value !== 'all')

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

const isProjectCategory = (value: unknown): value is ProjectCategory =>
  typeof value === 'string' && projectCategoryValues.includes(value as ProjectCategory)

const normalizeProjectEntries = (value: unknown): LocalizedProjectEntry[] => {
  if (!value) return []

  if (Array.isArray(value)) {
    return value as LocalizedProjectEntry[]
  }

  if (typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>).map(([id, entry]) => ({
      id,
      ...(entry as LocalizedProjectEntry)
    }))
  }

  return []
}

const projects = computed<Project[]>(() => {
  const localized = resolveLocaleValue(tm('projects.list'))
  const entries = normalizeProjectEntries(localized)

  return entries
    .map((entry) => {
      const id =
        typeof entry.id === 'string' && entry.id.length > 0
          ? entry.id
          : typeof entry.title === 'string' && entry.title.length > 0
            ? entry.title
            : null
      const title = typeof entry.title === 'string' && entry.title.length > 0 ? entry.title : null
      const description =
        typeof entry.description === 'string' && entry.description.length > 0 ? entry.description : null
      const image = typeof entry.image === 'string' && entry.image.length > 0 ? entry.image : null
      const link = typeof entry.link === 'string' && entry.link.length > 0 ? entry.link : null
      const codeLink =
        typeof entry.codeLink === 'string' && entry.codeLink.length > 0 ? entry.codeLink : undefined
      const category = isProjectCategory(entry.category) ? entry.category : null

      if (!id || !title || !description || !image || !link || !category) {
        return null
      }

      const tags = Array.isArray(entry.tags)
        ? entry.tags.filter((tag): tag is string => typeof tag === 'string' && tag.trim().length > 0)
        : []

      return {
        id,
        title,
        description,
        image,
        link,
        codeLink,
        category,
        tags
      }
    })
    .filter((project): project is Project => Boolean(project))
})

const categoryFilters = computed(() =>
  categoryFilterMeta.map((filter) => ({
    ...filter,
    label: t(`projects.filters.categories.${filter.key}`)
  }))
)

const searchQuery = ref('')
const activeCategory = ref<CategoryFilter>('all')
const activeTags = ref<string[]>([])
const tagMenuOpen = ref(false)
const tagSearchQuery = ref('')

const availableTags = computed(() => {
  const tags = new Set<string>()
  projects.value.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort((a, b) => a.localeCompare(b))
})

const filteredTagOptions = computed(() => {
  const query = tagSearchQuery.value.trim().toLowerCase()
  if (query.length === 0) return availableTags.value
  return availableTags.value.filter((tag) => tag.toLowerCase().includes(query))
})

const hasActiveFilters = computed(
  () => activeCategory.value !== 'all' || activeTags.value.length > 0 || searchQuery.value.trim().length > 0
)

const projectDelays = {
  container: 0.08,
  badge: 0.16,
  heading: 0.24,
  description: 0.34,
  cta: 0.42,
  filters: 0.5,
  search: 0.58,
  grid: 0.66
}

const filteredProjects = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return projects.value.filter((project) => {
    const matchesCategory = activeCategory.value === 'all' || project.category === activeCategory.value
    const matchesTags =
      activeTags.value.length === 0 || activeTags.value.every((tag) => project.tags.includes(tag))
    const haystack = `${project.title} ${project.description} ${project.tags.join(' ')}`.toLowerCase()
    const matchesQuery = query.length === 0 || haystack.includes(query)

    return matchesCategory && matchesTags && matchesQuery
  })
})

const closeTagMenu = () => {
  tagMenuOpen.value = false
  tagSearchQuery.value = ''
}

const clearTagFilters = () => {
  activeTags.value = []
}

const clearFilters = () => {
  searchQuery.value = ''
  activeCategory.value = 'all'
  clearTagFilters()
  closeTagMenu()
}
</script>
