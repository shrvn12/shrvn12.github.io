<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
import { activeSectionId } from '../composables/useScrollEffects'

const route = useRoute()
const router = useRouter()
const menuOpen = ref(false)

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'stats', label: 'Stats' },
  { id: 'contact', label: 'Contact' },
]

watch(() => route.fullPath, () => (menuOpen.value = false))

function goToSection(id) {
  menuOpen.value = false
  if (route.path !== '/') {
    router.push({ path: '/', hash: '#' + id })
  } else {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function downloadResume() {
  window.open('https://drive.google.com/file/d/1q2-ZcMYcWeQoXFp150dEw8LNWl83Ovwo/view', "_blank")
  menuOpen.value = false
  const a = document.createElement('a')
  a.href = 'https://drive.google.com/uc?export=download&id=1q2-ZcMYcWeQoXFp150dEw8LNWl83Ovwo'
  a.download = 'Shravan-Resume.pdf'
  document.body.appendChild(a)
  a.click()
  a.remove()
}
</script>

<template>
  <nav class="navbar fixed top-0 left-0 right-0 z-50 border-b border-border">
    <div class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
      <router-link
        to="/"
        class="font-display font-semibold text-text text-sm tracking-wide hover:text-accent transition-colors"
      >
        Shravan singh<span class="text-accent">.</span>
      </router-link>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-7 text-sm font-mono text-muted">
        <div
          v-for="item in navItems"
          :key="item.id"
          class="nav-item flex flex-col items-center gap-1"
          :class="{ active: route.path === '/' && activeSectionId === item.id }"
        >
          <button type="button" class="hover:text-text transition-colors" @click="goToSection(item.id)">
            {{ item.label }}
          </button>
          <div class="nav-dot"></div>
        </div>
        <div class="nav-item flex flex-col items-center gap-1" :class="{ active: route.path === '/projects' }">
          <router-link to="/projects" class="hover:text-text transition-colors">Projects</router-link>
          <div class="nav-dot"></div>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <ThemeToggle />

        <!-- Socials + resume: desktop only -->
        <a href="mailto:singhshravan1208@gmail.com" aria-label="Email" class="hidden sm:inline-flex text-muted hover:text-accent transition-colors">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
        <a href="https://github.com/shrvn12" target="_blank" aria-label="GitHub" class="hidden sm:inline-flex text-muted hover:text-accent transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/shrvn12"
          target="_blank"
          aria-label="LinkedIn"
          class="hidden sm:inline-flex text-muted hover:text-accent transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>
        <button
          type="button"
          @click="downloadResume"
          class="hidden md:flex ml-1 items-center gap-1.5 px-3 py-1 rounded-md border border-accent text-accent font-mono text-xs font-semibold hover:bg-accent hover:text-[rgb(var(--color-base))] transition-all duration-200"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
          Resume
        </button>

        <!-- Hamburger: mobile only -->
        <button
          type="button"
          class="icon-btn md:hidden w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
          @click="menuOpen = !menuOpen"
        >
          <svg v-if="!menuOpen" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
          <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu panel -->
    <Transition name="mobile-menu">
      <div v-if="menuOpen" class="md:hidden border-t border-border bg-base">
        <div class="px-6 py-4 flex flex-col gap-1">
          <button
            v-for="item in navItems"
            :key="item.id"
            type="button"
            class="text-left font-mono text-sm text-muted hover:text-accent py-2.5 transition-colors"
            @click="goToSection(item.id)"
          >
            {{ item.label }}
          </button>
          <router-link
            to="/projects"
            class="font-mono text-sm text-muted hover:text-accent py-2.5 transition-colors"
          >
            Projects
          </router-link>

          <div class="section-divider my-2"></div>

          <div class="flex items-center gap-5 py-1">
            <a href="mailto:singhshravan1208@gmail.com" aria-label="Email" class="text-muted hover:text-accent transition-colors">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a href="https://github.com/shrvn12" target="_blank" aria-label="GitHub" class="text-muted hover:text-accent transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/shrvn12"
              target="_blank"
              aria-label="LinkedIn"
              class="text-muted hover:text-accent transition-colors"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
            <button
              type="button"
              @click="downloadResume"
              class="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-accent text-accent font-mono text-xs font-semibold hover:bg-accent hover:text-[rgb(var(--color-base))] transition-all duration-200"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
