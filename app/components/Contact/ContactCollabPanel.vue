<template>
  <div v-motion v-motion-pop-visible-once class="relative space-y-6">
    <span
      v-if="badgeText"
      class="inline-flex items-center gap-2 rounded-full border border-cyber-green/30 bg-cyber-green/10 px-4 py-1
             text-xs font-semibold uppercase tracking-[0.28em] text-cyber-green transition-colors duration-300
             dark:border-cyber-green/40 dark:bg-cyber-green/20 dark:text-cyber-green/90"
    >
      <UIcon name="i-heroicons-users-20-solid" class="h-4 w-4" />
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
        <UButton
          to="mailto:you@example.com"
          variant="soft"
          class="group rounded-lg border border-cyber-purple/30 bg-cyber-purple/10 text-cyber-purple hover:bg-cyber-purple/15 dark:border-white/10 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10 transition-colors duration-300"
        >
          <UIcon
            name="i-heroicons-envelope-20-solid"
            class="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
          />
          <span>{{ t('contact.actions.email') }}</span>
        </UButton>
        <UButton
          to="https://github.com/yourname"
          target="_blank"
          variant="soft"
          class="group rounded-lg border border-cyber-purple/30 bg-cyber-purple/10 text-cyber-purple hover:bg-cyber-purple/15 dark:border-white/10 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10 transition-colors duration-300"
        >
          <UIcon
            name="i-simple-icons-github"
            class="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
          />
          <span>{{ t('contact.actions.github') }}</span>
        </UButton>
        <UButton
          to="https://www.linkedin.com/in/yourname"
          target="_blank"
          variant="soft"
          class="group rounded-lg border border-cyber-purple/30 bg-cyber-purple/10 text-cyber-purple hover:bg-cyber-purple/15 dark:border-white/10 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10 transition-colors duration-300"
        >
          <UIcon
            name="i-simple-icons-linkedin"
            class="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-12"
          />
          <span>{{ t('contact.actions.linkedin') }}</span>
        </UButton>
        <UButton
          to="#projects"
          variant="soft"
          class="group rounded-lg border border-cyber-purple/30 bg-cyber-purple/10 text-cyber-purple hover:bg-cyber-purple/15 dark:border-white/10 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10 transition-colors duration-300"
        >
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

<script setup lang="ts">
const props = defineProps<{
  badge?: string
  headline: string
  description: string
}>()

const { t } = useI18n()

const badgeText = computed(() => props.badge ?? t('contact.badge'))
</script>
