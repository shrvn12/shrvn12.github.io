<script setup>
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import { useContributions } from '../composables/useContributions'

const props = defineProps({
  username: { type: String, default: 'shrvn12' },
})

const { loading, error, weeks, monthLabels, total, load } = useContributions(props.username)

const wrapEl = ref(null)
const containerWidth = ref(0)
let resizeObserver

onMounted(() => {
  load()
  if (wrapEl.value) {
    containerWidth.value = wrapEl.value.clientWidth
    resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) containerWidth.value = entry.contentRect.width
    })
    resizeObserver.observe(wrapEl.value)
  }
})

onBeforeUnmount(() => resizeObserver && resizeObserver.disconnect())

// Fit the whole grid exactly inside the container — cell + gap size shrink
// together on small screens instead of overflowing or needing a scrollbar.
const weekCount = computed(() => weeks.value.length || 53)
const colWidth = computed(() => {
  const w = containerWidth.value || 320
  return Math.max(4, Math.floor(w / weekCount.value))
})
const cellPx = computed(() => Math.max(3, Math.floor(colWidth.value * 0.78)))
const gapPx = computed(() => Math.max(1, colWidth.value - cellPx.value))
const gridWidth = computed(() => weekCount.value * colWidth.value)

// Thin out month labels on narrow screens so consecutive labels never overlap.
const visibleMonthLabels = computed(() => {
  const minGap = 26 // px needed to render a 3-letter month label without overlap
  let lastShownX = -Infinity
  return monthLabels.value.filter((m) => {
    const x = m.weekIndex * colWidth.value
    if (x - lastShownX < minGap) return false
    lastShownX = x
    return true
  })
})

function levelStyle(level) {
  const opacity = [0, 0.28, 0.5, 0.72, 1][level] ?? 0
  return level === 0
    ? { background: 'rgb(var(--color-faint))' }
    : { background: `rgb(var(--color-accent) / ${opacity})` }
}

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
</script>

<template>
  <div class="mt-8 border border-border rounded-xl p-5 bg-surface">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-2">
      <p class="font-mono text-sm text-muted font-semibold">contribution activity</p>
      <p v-if="!loading && !error" class="font-mono text-xs text-muted">
        <span class="text-text font-semibold">{{ total }}</span> contributions in the last year
      </p>
    </div>

    <div ref="wrapEl">
      <!-- Skeleton -->
      <div v-if="loading" class="animate-pulse">
        <div class="skeleton h-3 w-full mb-2" style="max-width: 220px"></div>
        <div class="skeleton w-full" style="height: 70px"></div>
      </div>

      <div v-else-if="error" class="text-muted text-sm font-mono">could not load contribution data.</div>

      <div v-else>
        <!-- Month labels -->
        <div class="relative h-4 mb-1" :style="{ width: gridWidth + 'px' }">
          <span
            v-for="m in visibleMonthLabels"
            :key="m.weekIndex + m.label"
            class="absolute font-mono text-[10px] text-muted"
            :style="{ left: m.weekIndex * colWidth + 'px' }"
          >
            {{ m.label }}
          </span>
        </div>

        <div class="flex" :style="{ gap: gapPx + 'px', width: gridWidth + 'px' }">
          <div v-for="(week, wi) in weeks" :key="wi" class="flex flex-col" :style="{ gap: gapPx + 'px' }">
            <div
              v-for="day in week.days"
              :key="day.date"
              class="contrib-cell rounded-[2px]"
              :style="{ width: cellPx + 'px', height: cellPx + 'px', ...levelStyle(day.level) }"
              :title="`${day.count} contribution${day.count === 1 ? '' : 's'} on ${formatDate(day.date)}`"
            />
          </div>
        </div>

        <!-- Legend -->
        <div class="flex items-center justify-end gap-1.5 mt-3">
          <span class="font-mono text-[10px] text-muted mr-1">Less</span>
          <div
            v-for="lvl in [0, 1, 2, 3, 4]"
            :key="lvl"
            class="rounded-[2px]"
            :style="{ width: '10px', height: '10px', ...levelStyle(lvl) }"
          />
          <span class="font-mono text-[10px] text-muted ml-1">More</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contrib-cell {
  transition: outline-color 0.15s ease;
  outline: 1.5px solid transparent;
  outline-offset: 1px;
}
.contrib-cell:hover {
  outline-color: rgb(var(--color-accent));
}
</style>
