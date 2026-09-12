import { ref } from 'vue'

const GH_USER = 'shrvn12'
const CACHE_TTL = 60 * 60 * 1000 // 1 hour
const CACHE_KEY = 'gh_data'

export function useGithubStats() {
  const loading = ref(true)
  const error = ref(false)
  const repos = ref(0)
  const followers = ref(0)
  const stars = ref(0)
  const topLangs = ref([]) // [{ lang, count, pct }]

  function apply({ user, repos: repoList }) {
    const starCount = repoList.reduce((s, r) => s + (r.stargazers_count || 0), 0)
    const langCount = {}
    repoList.forEach((r) => {
      if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1
    })
    const sorted = Object.entries(langCount).sort((a, b) => b[1] - a[1]).slice(0, 4)
    const maxLang = sorted[0]?.[1] || 1

    repos.value = user.public_repos
    followers.value = user.followers
    stars.value = starCount
    topLangs.value = sorted.map(([lang, count]) => ({
      lang,
      count,
      pct: Math.round((count / maxLang) * 100),
    }))
    loading.value = false
  }

  async function load() {
    try {
      const cached = localStorage.getItem(CACHE_KEY)
      if (cached) {
        const parsed = JSON.parse(cached)
        if (Date.now() - parsed.timestamp < CACHE_TTL) {
          apply(parsed.data)
          return
        }
      }

      const res = await fetch(`https://api.github.com/users/${GH_USER}`)
      if (!res.ok) throw new Error('failed')
      const user = await res.json()

      const repoRes = await fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100`)
      const repoList = repoRes.ok ? await repoRes.json() : []

      const payload = { user, repos: repoList }
      localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: payload }))
      apply(payload)
    } catch (e) {
      loading.value = false
      error.value = true
    }
  }

  return { loading, error, repos, followers, stars, topLangs, load }
}
