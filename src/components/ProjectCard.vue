<script setup>
const props = defineProps({
  project: { type: Object, required: true },
  delay: { type: Number, default: 0 },
})

const linkMeta = {
  frontend: { label: 'Frontend' },
  backend: { label: 'Backend' },
  live: { label: 'Live' },
}

function openLive() {
  if (props.project.links.live) window.open(props.project.links.live, '_blank', 'noopener')
}

function onKeydown(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    openLive()
  }
}
</script>

<template>
  <div
    class="project-card reveal border border-border rounded-2xl overflow-hidden bg-surface flex flex-col"
    :class="project.links.live ? 'cursor-pointer' : ''"
    :style="{ '--reveal-delay': delay + 'ms' }"
    :role="project.links.live ? 'link' : undefined"
    :tabindex="project.links.live ? 0 : undefined"
    @click="openLive"
    @keydown="onKeydown"
  >
    <!-- Image -->
    <div class="project-image-wrap w-full aspect-[16/9] relative overflow-hidden bg-faint">
      <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" loading="lazy" />
    </div>

    <!-- Body -->
    <div class="p-6 flex flex-col flex-1">
      <h3 class="font-display font-semibold text-text text-lg mb-2">{{ project.title }}</h3>
      <p class="text-muted text-sm leading-relaxed mb-4 flex-1">{{ project.description }}</p>

      <div class="flex flex-wrap gap-1.5 mb-5">
        <span v-for="tag in project.tags" :key="tag" class="project-tag font-mono text-xs rounded px-2.5 py-1">
          {{ tag }}
        </span>
      </div>

      <!-- Links row: always visible, never hidden behind hover -->
      <div class="flex flex-wrap gap-2 mt-auto" @click.stop @keydown.stop>
        <a
          v-for="(url, key) in project.links"
          :key="key"
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs font-medium"
        >
          <svg
            v-if="key === 'live'"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
          </svg>
          <svg v-else width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
          {{ linkMeta[key]?.label ?? key }}
        </a>
      </div>
    </div>
  </div>
</template>
