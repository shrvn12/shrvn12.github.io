<script setup>
import { onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'
import { useRevealOnScroll } from '../composables/useScrollEffects'

useRevealOnScroll()

onMounted(() => window.scrollTo({ top: 0 }))
</script>

<template>
  <section class="py-24">
    <div class="mb-12 reveal">
      <router-link
        to="/"
        class="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors mb-6"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M10 6H2M6 2L2 6l4 4" />
        </svg>
        back home
      </router-link>

      <h1 class="font-display font-semibold text-text mb-3" style="font-size: clamp(2rem, 4vw, 2.75rem)">
        All projects
      </h1>
      <p class="text-muted text-lg max-w-xl leading-relaxed">
        Everything I've built and shipped - full-stack apps, distributed systems, and a few things I made just to
        learn something new.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-5">
      <ProjectCard v-for="(p, i) in projects" :key="p.id" :project="p" :delay="i * 70" />
    </div>
  </section>
</template>
