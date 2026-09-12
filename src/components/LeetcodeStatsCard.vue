<script setup>
import { onMounted } from 'vue'
import { useLeetcodeStats } from '../composables/useLeetcodeStats'

const {
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
} = useLeetcodeStats()

onMounted(load)
</script>

<template>
  <div class="stat-card">
    <div class="flex items-center gap-2.5 mb-6">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" class="text-muted">
        <path
          d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
        />
      </svg>
      <a href="https://leetcode.com/shrvn12" target="_blank" rel="noopener noreferrer">
        <span class="font-mono text-sm text-muted font-semibold hover:underline">LeetCode</span>
      </a>
    </div>

    <div v-if="loading" class="animate-pulse">
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div v-for="n in 3" :key="n">
          <div class="skeleton h-7 w-10 mb-2"></div>
          <div class="skeleton h-3 w-14"></div>
        </div>
      </div>
      <div class="space-y-3">
        <div v-for="n in 3" :key="n">
          <div class="flex justify-between mb-1.5">
            <div class="skeleton h-2.5 w-12"></div>
            <div class="skeleton h-2.5 w-6"></div>
          </div>
          <div class="skeleton h-[3px] w-full"></div>
        </div>
      </div>
    </div>
    <div v-else-if="error" class="text-muted text-sm font-mono">could not load data - check username.</div>

    <div v-else>
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div>
          <div class="stat-num font-display font-bold text-text text-2xl">{{ total }}</div>
          <div class="font-mono text-xs text-muted mt-0.5 font-medium">solved</div>
        </div>
        <div>
          <div class="stat-num font-display font-bold text-text text-2xl">{{ totalSubmissions }}</div>
          <div class="font-mono text-xs text-muted mt-0.5 font-medium">submissions</div>
        </div>
        <div>
          <div class="stat-num font-display font-bold text-text text-2xl">{{ acSubmissions }}</div>
          <div class="font-mono text-xs text-muted mt-0.5 font-medium">Accepted</div>
        </div>
      </div>

      <div class="space-y-3">
        <div>
          <div class="flex justify-between mb-1.5">
            <span class="font-mono text-xs font-semibold" style="color: #4ade80">easy</span>
            <span class="font-mono text-xs text-muted">{{ easy }}</span>
          </div>
          <div class="contrib-bar">
            <div class="contrib-fill" :style="{ width: easyPct + '%', background: 'linear-gradient(90deg,#4ade80,#86efac)' }"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between mb-1.5">
            <span class="font-mono text-xs font-semibold" style="color: #fbbf24">medium</span>
            <span class="font-mono text-xs text-muted">{{ medium }}</span>
          </div>
          <div class="contrib-bar">
            <div class="contrib-fill" :style="{ width: medPct + '%', background: 'linear-gradient(90deg,#fbbf24,#fde68a)' }"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between mb-1.5">
            <span class="font-mono text-xs font-semibold" style="color: #f87171">hard</span>
            <span class="font-mono text-xs text-muted">{{ hard }}</span>
          </div>
          <div class="contrib-bar">
            <div class="contrib-fill" :style="{ width: hardPct + '%', background: 'linear-gradient(90deg,#f87171,#fca5a5)' }"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
