import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export type SocialLink = {
  key?: string
  label?: string
  icon?: string
  href: string
  [key: string]: unknown
}

export function useSocialLinks() {
  const { tm, rt } = useI18n()

  const SOCIAL_LINK_FALLBACKS: Record<string, string> = {
    email: useRuntimeConfig().public.email
  }

  const resolveLocaleValue = (value: unknown): unknown => {
    if (Array.isArray(value)) {
      return value.map(resolveLocaleValue)
    }

    if (value && typeof value === 'object') {
      if ('type' in value && 'loc' in value) {
        return rt(value as any)
      }

      return Object.fromEntries(
        Object.entries(value as Record<string, unknown>).map(([key, val]) => [
          key,
          resolveLocaleValue(val)
        ])
      )
    }

    return value
  }

  return computed(() => {
    const links = resolveLocaleValue(tm('social.links') ?? [])
    if (!Array.isArray(links)) {
      return [] as SocialLink[]
    }

    return links
      .map((link) => {
        if (!link || typeof link !== 'object') {
          return null
        }

        const key = String((link as Record<string, unknown>).key ?? '').toLowerCase()
        const hrefValue = (link as Record<string, unknown>).href
        const fallbackHref = SOCIAL_LINK_FALLBACKS[key]
        const href =
          typeof hrefValue === 'string' && hrefValue.length
            ? hrefValue
            : fallbackHref

        if (!href) {
          return null
        }

        return {
          ...link,
          href
        } as SocialLink
      })
      .filter((link): link is SocialLink => link !== null)
  })
}
