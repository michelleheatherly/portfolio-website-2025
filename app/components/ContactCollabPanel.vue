<script setup lang="ts">
const props = defineProps<{
  badge?: string
  headline: string
  description: string
}>()

const { t } = useI18n()

const badgeText = computed(() => props.badge ?? t('contact.badge'))
</script>

<template>
  <div v-motion v-motion-pop-visible-once :hovered="{ scale: 1.01, transition: { duration: 0.35 } }" class="relative space-y-6">
    <span
      v-if="badgeText"
      class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-600 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-22px_rgba(129,140,248,0.8)] dark:border-white/10 dark:bg-white/10 dark:text-white/60"
    >
      <span class="h-1.5 w-1.5 rounded-full bg-cyber-green animate-pulse"></span>
      {{ badgeText }}
    </span>

    <div class="space-y-4">
      <h2 class="text-2xl font-bold text-zinc-900 transition-colors duration-300 md:text-3xl dark:text-white">
        {{ props.headline }}
      </h2>
      <p class="text-zinc-600 transition-colors duration-300 dark:text-white/70">
        {{ props.description }}
      </p>
    </div>

    <div class="grid gap-3 pt-2 sm:grid-cols-2">
      <slot name="actions">
        <UButton to="mailto:you@example.com" variant="soft" class="group">
          <UIcon
            name="i-heroicons-envelope-20-solid"
            class="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
          />
          <span>{{ t('contact.actions.email') }}</span>
        </UButton>
        <UButton to="https://github.com/yourname" target="_blank" variant="soft" class="group">
          <UIcon
            name="i-simple-icons-github"
            class="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
          />
          <span>{{ t('contact.actions.github') }}</span>
        </UButton>
        <UButton to="https://www.linkedin.com/in/yourname" target="_blank" variant="soft" class="group">
          <UIcon
            name="i-simple-icons-linkedin"
            class="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
          />
          <span>{{ t('contact.actions.linkedin') }}</span>
        </UButton>
        <UButton to="#projects" variant="soft" class="group justify-start">
          <UIcon
            name="i-heroicons-bolt-20-solid"
            class="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
          />
          <span>{{ t('contact.actions.projects') }}</span>
        </UButton>
      </slot>
    </div>
  </div>
</template>
