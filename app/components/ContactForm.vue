<script setup lang="ts">
import { reactive, ref } from 'vue'

const formRef = ref<HTMLElement | null>(null)
const spotlight = reactive({
  x: 50,
  y: 50,
  active: false
})

const updateSpotlight = (event: PointerEvent) => {
  if (!formRef.value) {
    return
  }

  const rect = formRef.value.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 100
  const y = ((event.clientY - rect.top) / rect.height) * 100

  spotlight.x = Math.min(100, Math.max(0, x))
  spotlight.y = Math.min(100, Math.max(0, y))
  spotlight.active = true
}

const resetSpotlight = () => {
  spotlight.active = false
}

const fieldClasses =
  'w-full rounded-xl border border-black/10 bg-white/90 px-4 py-3 text-base text-zinc-900 placeholder:text-zinc-400 backdrop-blur focus:outline-none focus:ring-2 focus:ring-cyber-purple/50 focus:border-transparent focus:shadow-[0_20px_45px_-28px_rgba(148,163,235,0.8)] transition-all duration-300 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/50';
const textareaClasses = fieldClasses + ' min-h-[160px] resize-none align-top';
</script>

<template>
  <form
    ref="formRef"
    class="group/contact relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-[0_45px_85px_-45px_rgba(14,20,48,0.55)] backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-zinc-900/70 md:p-8"
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :enter="{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.6, ease: 'easeOut' } }"
    :hovered="{ scale: 1.01, transition: { duration: 0.45 } }"
    @submit.prevent
    @pointermove="updateSpotlight"
    @pointerleave="resetSpotlight"
    @pointercancel="resetSpotlight"
  >
    <div
      class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
      :class="{ 'opacity-100': spotlight.active }"
      :style="{
        background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(165,180,252,0.28), transparent 60%)`
      }"
    ></div>
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-12 -top-24 h-48 w-48 rounded-full bg-gradient-to-br from-cyber-purple/50 via-cyber-green/40 to-transparent blur-3xl"
    ></div>
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -bottom-28 -left-16 h-56 w-56 rounded-full bg-gradient-to-tr from-cyber-green/35 via-sky-400/20 to-transparent blur-3xl"
    ></div>

    <div class="relative z-[1] space-y-6">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div class="space-y-2">
          <span class="text-xs font-semibold uppercase tracking-[0.45em] text-zinc-500 dark:text-white/40">Contact</span>
          <h3 class="text-2xl font-semibold text-zinc-900 transition-colors duration-300 dark:text-white">
            Start something bold
          </h3>
          <p class="text-sm text-zinc-600 transition-colors duration-300 dark:text-white/70">
            Share the vibe, timeline, and what you dream of building. I will reply with ideas and next steps.
          </p>
        </div>
        <div class="hidden sm:flex">
          <div
            class="relative h-14 w-14 overflow-hidden rounded-full border border-white/40 bg-gradient-to-br from-cyber-purple/60 via-cyber-green/40 to-teal-300/30 shadow-[0_18px_35px_-18px_rgba(124,58,237,0.65)]"
          >
            <div class="absolute inset-2 rounded-full border border-white/40"></div>
            <div class="absolute inset-0 flex items-center justify-center text-white">
              <UIcon name="i-heroicons-paper-airplane-20-solid" class="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <label class="space-y-2 sm:col-span-1">
          <span class="text-xs font-medium uppercase tracking-wide text-zinc-500 transition-colors duration-300 dark:text-white/50">
            Name
          </span>
          <input type="text" name="name" autocomplete="name" placeholder="Ashley Cyber" :class="fieldClasses" />
        </label>
        <label class="space-y-2 sm:col-span-1">
          <span class="text-xs font-medium uppercase tracking-wide text-zinc-500 transition-colors duration-300 dark:text-white/50">
            Email
          </span>
          <input type="email" name="email" autocomplete="email" placeholder="hello@youremail.com" :class="fieldClasses" />
        </label>
        <label class="space-y-2 sm:col-span-2">
          <span class="text-xs font-medium uppercase tracking-wide text-zinc-500 transition-colors duration-300 dark:text-white/50">
            Project notes
          </span>
          <textarea
            name="message"
            placeholder="Drop a quick brief, moodboard, or wild idea..."
            :class="textareaClasses"
          ></textarea>
        </label>
      </div>

      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span class="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500 transition-colors duration-300 dark:text-white/40">
          Response within 2 days
        </span>
        <UButton
          type="submit"
          size="lg"
          icon="i-heroicons-sparkles-20-solid"
          class="group overflow-hidden"
          v-motion
          :initial="{ y: 12, opacity: 0 }"
          :enter="{ y: 0, opacity: 1, transition: { delay: 0.3, duration: 0.5, ease: 'easeOut' } }"
        >
          Send the vision
          <span class="relative ml-2 flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
          </span>
        </UButton>
      </div>
    </div>
  </form>
</template>
