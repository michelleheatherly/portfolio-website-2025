import { XMLParser } from 'fast-xml-parser'

type FeedItem = {
  title: string
  link: string
  date: string
  summary: string
  lang: string
}

function toText(val: any): string {
  if (!val) return ''
  if (typeof val === 'string') return val.trim()
  if (typeof val === 'object') {
    const maybeText =
      (val as any)['#text'] ||
      (val as any)['#cdata-section'] ||
      (val as any)._ ||
      ''
    return String(maybeText).trim()
  }
  return String(val).trim()
}

function extractLang(source: any, fallback = ''): string {
  return toText(
    source?.lang ??
      source?.['xml:lang'] ??
      source?.['language'] ??
      source?.['dc:language'] ??
      fallback ??
      ''
  )
}

function withLocaleBlogPath(link: string, blogUrl: string, locale: string): string {
  if (!link || !blogUrl || !locale) return link

  const normalizedBlog = blogUrl.replace(/\/+$/, '')
  if (!normalizedBlog) return link
  if (!link.startsWith(normalizedBlog)) return link

  const remainder = link.slice(normalizedBlog.length)
  const remainderWithSlash =
    remainder === '' ? '/' : remainder.startsWith('/') ? remainder : `/${remainder}`

  if (
    remainderWithSlash === `/${locale}` ||
    remainderWithSlash.startsWith(`/${locale}/`)
  ) {
    return `${normalizedBlog}${remainderWithSlash}`
  }

  return `${normalizedBlog}/${locale}${remainderWithSlash}`
}

function normalize(xml: any): FeedItem[] {
  // RSS 2.0
  if (xml?.rss?.channel?.item) {
    const items = Array.isArray(xml.rss.channel.item) ? xml.rss.channel.item : [xml.rss.channel.item]
    const channelLang = extractLang(xml?.rss?.channel)
    return items.map((it: any) => ({
      title: toText(it.title),
      link: it.link || it.guid || '#',
      date: it.pubDate ? new Date(it.pubDate).toISOString() : '',
      summary: toText(it['content:encoded'] || it.description || ''),
      lang: extractLang(it, channelLang)
    }))
  }
  // Atom
  if (xml?.feed?.entry) {
    const entries = Array.isArray(xml.feed.entry) ? xml.feed.entry : [xml.feed.entry]
    const feedLang = extractLang(xml?.feed)
    return entries.map((e: any) => ({
      title: toText(e.title),
      link:
        (Array.isArray(e.link)
          ? e.link.find((l: any) => l.rel === 'alternate')?.href
          : e.link?.href) || '#',
      date: e.updated || e.published || '',
      summary: toText(e.summary || e.content || ''),
      lang: extractLang(e, feedLang)
    }))
  }
  return []
}

export default cachedEventHandler(
  defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig(event).public
    const feedUrl = runtimeConfig.feedUrl
    const blogUrl = runtimeConfig.blogAltUrl

    const xmlText = await $fetch<string>(feedUrl, { responseType: 'text' })

    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '', trimValues: true })
    const xml = parser.parse(xmlText)

    const items = normalize(xml)
      .filter(i => i.title && i.link)
      .sort((a, b) => (new Date(b.date).getTime() || 0) - (new Date(a.date).getTime() || 0))
      .slice(0, 6)
      .map(i => {
        const normalizedLang = i.lang?.toLowerCase() || ''
        const link =
          normalizedLang.startsWith('de') && blogUrl
            ? withLocaleBlogPath(i.link, blogUrl, 'de')
            : i.link

        return {
          ...i,
          link,
          summary: i.summary.length > 220 ? i.summary.slice(0, 217).trimEnd() + '…' : i.summary
        }
      })

    return { items }
  }),
  { name: 'feed-cache-10m', maxAge: 60 * 10 }
)
