<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggle = () => { colorMode.preference = isDark.value ? 'light' : 'dark' }
</script>

<template>
  <UButton variant="soft" size="sm" class="rounded-2xl" @click="toggle" aria-label="Toggle color mode">
    <UIcon v-if="isDark" name="i-heroicons-sun-20-solid" class="h-5 w-5" />
    <UIcon v-else name="i-heroicons-moon-20-solid" class="h-5 w-5" />
  </UButton>
</template>