import { ref } from 'vue'

const LC_USER = 'shrvn12'
const CACHE_TTL = 60 * 60 * 1000
const CACHE_KEY = 'lc_data'
const EASY_TOTAL = 850
const MED_TOTAL = 1800
const HARD_TOTAL = 800

export function useLeetcodeStats() {
  const loading = ref(true)
  const error = ref(false)
  const total = ref(0)
  const totalSubmissions = ref(0)
  const acSubmissions = ref(0)
  const easy = ref(0)
  const medium = ref(0)
  const hard = ref(0)

  const easyPct = ref(0)
  const medPct = ref(0)
  const hardPct = ref(0)

  function apply(data) {
    easy.value = data.easySolved || 0
    medium.value = data.mediumSolved || 0
    hard.value = data.hardSolved || 0
    total.value = data.solvedProblem || easy.value + medium.value + hard.value
    totalSubmissions.value = data?.totalSubmissionNum?.[0]?.submissions ?? 0
    acSubmissions.value = data?.acSubmissionNum?.[0]?.submissions ?? 0

    easyPct.value = Math.min((easy.value / EASY_TOTAL) * 100, 100)
    medPct.value = Math.min((medium.value / MED_TOTAL) * 100, 100)
    hardPct.value = Math.min((hard.value / HARD_TOTAL) * 100, 100)
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

      const res = await fetch(`https://alfa-leetcode-api.onrender.com/${LC_USER}/solved`)
      if (!res.ok) throw new Error('failed')
      const data = await res.json()

      localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data }))
      apply(data)
    } catch (e) {
      loading.value = false
      error.value = true
    }
  }

  return {
    loading,
    error,
    total,
    totalSubmissions,
    acSubmissions,
    easy,
    medium,
    hard,
    easyPct,
    medPct,
    hardPct,
    load,
  }
}
