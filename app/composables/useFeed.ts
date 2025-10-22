export function useFeed() {
  const { data, pending, error, refresh } = useFetch('/api/feed', { key: 'feed' })
  return { data, pending, error, refresh }
}