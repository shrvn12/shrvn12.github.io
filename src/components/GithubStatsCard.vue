<script setup>
import { onMounted } from 'vue'
import { useGithubStats } from '../composables/useGithubStats'

const { loading, error, repos, followers, stars, topLangs, load } = useGithubStats()

onMounted(load)
</script>

<template>
  <div class="stat-card">
    <div class="flex items-center gap-2.5 mb-6">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-muted">
        <path
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
      <a href="https://github.com/shrvn12" target="_blank" rel="noopener noreferrer">
        <span class="font-mono text-sm text-muted font-semibold hover:underline">GitHub</span>
      </a>
    </div>

    <div v-if="loading" class="animate-pulse">
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div v-for="n in 3" :key="n">
          <div class="skeleton h-7 w-10 mb-2"></div>
          <div class="skeleton h-3 w-12"></div>
        </div>
      </div>
      <div class="space-y-3">
        <div v-for="n in 3" :key="n">
          <div class="flex justify-between mb-1.5">
            <div class="skeleton h-2.5 w-16"></div>
            <div class="skeleton h-2.5 w-10"></div>
          </div>
          <div class="skeleton h-[3px] w-full"></div>
        </div>
      </div>
    </div>
    <div v-else-if="error" class="text-muted text-sm font-mono">could not load data - check username.</div>

    <div v-else>
      <div class="grid grid-cols-3 gap-4 mb-6">
        <div>
          <div class="stat-num font-display font-bold text-text text-2xl">{{ repos }}</div>
          <div class="font-mono text-xs text-muted mt-0.5 font-medium">repos</div>
        </div>
        <div>
          <div class="stat-num font-display font-bold text-text text-2xl">{{ followers }}</div>
          <div class="font-mono text-xs text-muted mt-0.5 font-medium">followers</div>
        </div>
        <div>
          <div class="stat-num font-display font-bold text-text text-2xl">{{ stars }}</div>
          <div class="font-mono text-xs text-muted mt-0.5 font-medium">stars</div>
        </div>
      </div>

      <div class="space-y-3">
        <div v-for="l in topLangs" :key="l.lang">
          <div class="flex justify-between mb-1.5">
            <span class="font-mono text-[10px] text-muted">{{ l.lang }}</span>
            <span class="font-mono text-[10px] text-muted">{{ l.count }} repos</span>
          </div>
          <div class="contrib-bar"><div class="contrib-fill" :style="{ width: l.pct + '%' }"></div></div>
        </div>
      </div>
    </div>
  </div>
</template>
