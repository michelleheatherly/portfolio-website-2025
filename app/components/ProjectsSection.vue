<script setup lang="ts">
import { computed, ref } from 'vue'

const categoryFilters = [
  { label: 'All', value: 'all' },
  { label: 'Front-end', value: 'front-end' },
  { label: 'Full-stack', value: 'full-stack' },
  { label: 'Design', value: 'design' }
] as const

type CategoryFilter = typeof categoryFilters[number]['value']
type ProjectCategory = Exclude<CategoryFilter, 'all'>

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  category: ProjectCategory
}

const projects = [
  {
    title: 'Neon Nodes',
    description: 'Real-time graph editor with collaborative cursors and a reactive plugin system.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Vue 3', 'WebRTC', 'Pinia'],
    link: 'https://example.com/neon-nodes',
    category: 'front-end'
  },
  {
    title: 'Pulse UI',
    description: 'Design system built on Nuxt UI with token-driven theming and charts.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    tags: ['Nuxt UI', 'Design Tokens', 'D3'],
    link: 'https://example.com/pulse-ui',
    category: 'design'
  },
  {
    title: 'GreenTrace',
    description: 'Sustainability insights dashboard with AI summaries and map layers.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    tags: ['Nuxt', 'AI', 'Maps'],
    link: 'https://example.com/greentrace',
    category: 'full-stack'
  }
] as const satisfies ReadonlyArray<Project>

const searchQuery = ref('')
const activeCategory = ref<CategoryFilter>('all')
const activeTags = ref<string[]>([])

const availableTags = computed(() => {
  const tags = new Set<string>()
  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort((a, b) => a.localeCompare(b))
})

const hasActiveFilters = computed(
  () => activeCategory.value !== 'all' || activeTags.value.length > 0 || searchQuery.value.trim().length > 0
)

const filteredProjects = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return projects.filter((project) => {
    const matchesCategory = activeCategory.value === 'all' || project.category === activeCategory.value
    const matchesTags =
      activeTags.value.length === 0 || activeTags.value.every((tag) => project.tags.includes(tag))
    const haystack = `${project.title} ${project.description} ${project.tags.join(' ')}`.toLowerCase()
    const matchesQuery = query.length === 0 || haystack.includes(query)

    return matchesCategory && matchesTags && matchesQuery
  })
})

const toggleTag = (tag: string) => {
  if (activeTags.value.includes(tag)) {
    activeTags.value = activeTags.value.filter((t) => t !== tag)
  } else {
    activeTags.value = [...activeTags.value, tag]
  }
}

const clearFilters = () => {
  searchQuery.value = ''
  activeCategory.value = 'all'
  activeTags.value = []
}
</script>

<template>
  <section id="projects" class="relative border-t transition-colors duration-300 border-black/10 dark:border-white/10">
    <UContainer class="py-24">
      <div class="space-y-10 mb-12">
        <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div class="max-w-2xl space-y-4">
            <span class="inline-flex items-center gap-2 rounded-full border border-cyber-purple/30 bg-cyber-purple/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-cyber-purple">
              <UIcon name="i-heroicons-beaker-20-solid" class="h-4 w-4" />
              Selected Work
            </span>
            <div class="space-y-3">
              <h2 class="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">
                Projects
              </h2>
              <p class="text-base text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
                Interfaces and digital systems built end-to-end — from exploratory prototyping to polished handoff — with a focus on realtime collaboration, design systems, and measurable product impact.
              </p>
            </div>
          </div>
          <UButton
            variant="soft"
            to="/resume.pdf"
            download
            class="w-full md:w-auto justify-center group border border-cyber-green/25 bg-cyber-green/15 text-cyber-green transition-colors duration-300
                   hover:bg-cyber-green/20 hover:text-cyber-green
                   dark:border-cyber-green/35 dark:bg-cyber-green/25 dark:text-cyber-green/90 dark:hover:bg-cyber-green/35"
          >
            <UIcon
              name="i-heroicons-arrow-down-tray-20-solid"
              class="h-5 w-5 text-cyber-green transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
            />
            <span>Resume</span>
          </UButton>
        </div>

        <div class="space-y-4">
          <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div class="flex flex-wrap items-center gap-2">
              <button
                v-for="category in categoryFilters"
                :key="category.value"
                type="button"
                class="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-purple/50"
                :class="[
                  activeCategory === category.value
                    ? 'border-cyber-purple/60 bg-cyber-purple/15 text-cyber-purple dark:bg-cyber-purple/20'
                    : 'border-zinc-300/60 bg-white/70 text-zinc-600 hover:border-cyber-purple/40 hover:text-cyber-purple dark:border-zinc-700/60 dark:bg-white/5 dark:text-zinc-300'
                ]"
                @click="activeCategory = category.value"
              >
                {{ category.label }}
              </button>
            </div>
            <div class="w-full lg:w-72">
              <label class="relative block">
                <span class="pointer-events-none absolute inset-y-0 left-4 flex items-center text-zinc-400 dark:text-zinc-500">
                  <UIcon name="i-heroicons-magnifying-glass-20-solid" class="h-5 w-5" />
                </span>
                <input
                  v-model="searchQuery"
                  type="search"
                  placeholder="Search projects"
                  class="w-full rounded-2xl border border-zinc-200/60 bg-white/80 py-2.5 pl-12 pr-4 text-sm text-zinc-700 shadow-sm transition focus:border-cyber-purple/50 focus:outline-none focus:ring-2 focus:ring-cyber-purple/30 dark:border-zinc-700/60 dark:bg-white/10 dark:text-white"
                />
              </label>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <button
              v-for="tag in availableTags"
              :key="tag"
              type="button"
              class="group inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-green/40"
              :class="[
                activeTags.includes(tag)
                  ? 'border-cyber-green/60 bg-cyber-green/15 text-cyber-green dark:bg-cyber-green/20'
                  : 'border-zinc-300/60 bg-white/70 text-zinc-600 hover:border-cyber-green/40 hover:text-cyber-green dark:border-zinc-700/60 dark:bg-white/5 dark:text-zinc-300'
              ]"
              @click="toggleTag(tag)"
            >
              <UIcon
                v-if="activeTags.includes(tag)"
                name="i-heroicons-check-20-solid"
                class="h-4 w-4 text-cyber-green transition-transform duration-300 group-hover:scale-110"
              />
              <span class="capitalize">{{ tag }}</span>
            </button>

            <button
              v-if="hasActiveFilters"
              type="button"
              class="inline-flex items-center gap-2 rounded-full border border-transparent px-3.5 py-1.5 text-sm font-medium text-cyber-purple transition-colors duration-300 hover:text-cyber-green focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-green/40"
              @click="clearFilters"
            >
              <UIcon name="i-heroicons-arrow-path-20-solid" class="h-4 w-4" />
              Reset
            </button>
          </div>
        </div>
      </div>

      <div v-if="filteredProjects.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="p in filteredProjects" :key="p.title" :project="p" />
      </div>
      <div
        v-else
        class="rounded-[2.5rem] border border-dashed border-zinc-300/70 bg-white/60 py-16 text-center transition-colors duration-300 dark:border-zinc-700/60 dark:bg-white/5"
      >
        <div class="mx-auto max-w-md space-y-4 px-6">
          <UIcon name="i-heroicons-face-frown-20-solid" class="mx-auto h-10 w-10 text-cyber-purple/70" />
          <p class="text-lg font-semibold text-zinc-900 dark:text-white">No projects matched your filters</p>
          <p class="text-sm text-zinc-600 dark:text-zinc-300">
            Try adjusting the category, removing a tag, or clearing your search to discover more of the work.
          </p>
          <UButton variant="soft" class="mt-2" @click="clearFilters">
            <UIcon name="i-heroicons-sparkles-20-solid" class="h-5 w-5" />
            <span>Clear filters</span>
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>
