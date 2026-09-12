import { ref } from 'vue'

const CACHE_TTL = 60 * 60 * 1000
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function useContributions(username) {
  const loading = ref(true)
  const error = ref(false)
  const weeks = ref([]) // array of { days: [{date, count, level}] }
  const monthLabels = ref([]) // [{ weekIndex, label }]
  const total = ref(0)

  function buildGrid(contributions) {
    if (!contributions.length) return

    const byDate = new Map(contributions.map((d) => [d.date, d]))
    const last = new Date(contributions[contributions.length - 1].date + 'T00:00:00')
    const first = new Date(contributions[0].date + 'T00:00:00')

    // Align the grid start to the Sunday on/before the first contribution.
    const gridStart = new Date(first)
    gridStart.setDate(gridStart.getDate() - gridStart.getDay())

    const grid = []
    let cursor = new Date(gridStart)
    let week = []
    const labels = []
    let lastMonth = -1

    while (cursor <= last) {
      const iso = cursor.toISOString().slice(0, 10)
      const entry = byDate.get(iso)
      const day = {
        date: iso,
        count: entry?.count ?? 0,
        level: entry?.level ?? 0,
      }
      if (cursor.getDay() === 0 && cursor.getMonth() !== lastMonth && cursor >= first) {
        labels.push({ weekIndex: grid.length, label: MONTH_NAMES[cursor.getMonth()] })
        lastMonth = cursor.getMonth()
      }
      week.push(day)
      if (cursor.getDay() === 6) {
        grid.push({ days: week })
        week = []
      }
      cursor.setDate(cursor.getDate() + 1)
    }
    if (week.length) grid.push({ days: week })

    weeks.value = grid
    monthLabels.value = labels
    total.value = contributions.reduce((s, d) => s + (d.count || 0), 0)
  }

  async function load() {
    const cacheKey = `contrib_${username}`
    try {
      const cached = localStorage.getItem(cacheKey)
      if (cached) {
        const parsed = JSON.parse(cached)
        if (Date.now() - parsed.timestamp < CACHE_TTL) {
          buildGrid(parsed.data)
          loading.value = false
          return
        }
      }

      const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      if (!res.ok) throw new Error('failed')
      const data = await res.json()
      const contributions = data.contributions || []

      localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data: contributions }))
      buildGrid(contributions)
      loading.value = false
    } catch (e) {
      error.value = true
      loading.value = false
    }
  }

  return { loading, error, weeks, monthLabels, total, load }
}
