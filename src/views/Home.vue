<script setup>
import { useRevealOnScroll, useActiveSection } from '../composables/useScrollEffects'
import ProjectCard from '../components/ProjectCard.vue'
import GithubStatsCard from '../components/GithubStatsCard.vue'
import LeetcodeStatsCard from '../components/LeetcodeStatsCard.vue'
import ContributionCalendar from '../components/ContributionCalendar.vue'
import CopyButton from '../components/CopyButton.vue'

const projects = [
  {
    id: 'at12',
    title: 'At12',
    description:
      'A full-stack music streaming platform with personalized feeds, distributed backend services, Redis caching, synced lyrics, and real-time playback.',
    image: '/images/at12.png',
    tags: ['Vue.js', 'Node.js', 'Youtube Data API', 'MongoDB'],
    links: {
      frontend: 'https://github.com/shrvn12/at12_v2',
      backend: 'https://github.com/shrvn12/at12_backend_v3',
      live: 'https://at12.duckdns.org',
    },
  },
  {
    id: 'sitepulse',
    title: 'Sitepulse',
    description:
      'A privacy-first website analytics platform with real-time telemetry and distributed event processing.',
    image: '/images/sitepulse.png',
    tags: ['TypeScript', 'Python', 'Next.Js', 'Clickhouse', 'Kafka'],
    links: {
      frontend: 'https://github.com/shrvn12/sitepulse_frontend_v2',
      backend: 'https://github.com/shrvn12/sitepulse',
      live: 'https://sitepulse.duckdns.org',
    },
  },
  {
    id: 'docscan-ocr',
    title: 'DocScan OCR',
    description:
      'An OCR-powered document processing platform that automates data extraction, review workflows, and record management. Includes offline capture, background processing, audit logs, and searchable document history.',
    image: '/images/ocr.png',
    tags: ['Vue.js', 'Node.js', 'IndexedDB', 'Neon DB', 'Cloudinary'],
    links: {
      frontend: 'https://github.com/shrvn12/ocr_frontend',
      backend: 'https://github.com/shrvn12/ocr_backend',
      live: 'https://ocr-frontend-efr1.onrender.com',
    },
  },
  {
    id: 'kings-messenger',
    title: 'Kings messenger',
    description:
      'A real-time messaging app with WebSockets, JWT authentication, and REST APIs, featuring live presence tracking, message status updates, and end-to-end encryption.',
    image: '/images/kings.png',
    tags: ['Angular', 'Node.js', 'WebSocket', 'MongoDB'],
    links: {
      frontend: 'https://github.com/shrvn12/kings_frontend',
      backend: 'https://github.com/shrvn12/kings_backend/',
      live: 'https://kings-messenger.vercel.app',
    },
  },
]

useRevealOnScroll()
useActiveSection(['home', 'about', 'experience', 'projects', 'stats', 'contact'])
</script>

<template>
  <!-- ═══════════════════════════════════════════
     HOME
  ═══════════════════════════════════════════ -->
  <section id="home" class="min-h-[85vh] flex flex-col justify-center pb-12 reveal">
    <div class="grid md:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
      <div class="flex flex-col justify-center">
        <!-- <div class="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-border bg-surface w-fit">
          <span class="status-dot"></span>
          <span class="font-mono text-xs text-muted font-medium">open to work</span>
        </div> -->

        <h1
          class="font-display font-bold text-text leading-[1.08] mb-6"
          style="font-size: clamp(2.8rem, 6vw, 4.8rem)"
        >
          hi, shravan<br />
          <span class="cursor">here</span>
        </h1>

        <p class="text-muted text-lg font-normal max-w-xl leading-relaxed mb-6">
          I build things for the web - from reliable backend systems to interfaces people enjoy using.
          <br />
          Shipping products that actually work.
        </p>

        <div class="flex flex-wrap gap-2 mb-10">
          <span class="font-mono text-xs text-muted border border-border rounded-full px-3 py-1.5">B.Tech CSE · '27</span>
          <span class="font-mono text-xs text-muted border border-border rounded-full px-3 py-1.5">Software Engineer</span>
          <span class="font-mono text-xs text-muted border border-border rounded-full px-3 py-1.5">New Delhi, IN</span>
        </div>

        <div class="flex flex-wrap gap-4">
          <a
            href="#projects"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-[rgb(var(--color-base))] font-display text-sm font-medium hover:brightness-110 transition-all duration-200"
          >
            View work
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" class="arrow-nudge">
              <path d="M2 6h8M6 2l4 4-4 4" />
            </svg>
          </a>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-muted font-display text-sm font-medium hover:border-accent hover:text-accent transition-all duration-200"
          >
            Get in touch
          </a>
        </div>
      </div>

      <!-- <div class="flex justify-center items-center relative">
        <div class="absolute w-72 h-72 rounded-full bg-accent/10 blur-2xl pointer-events-none"></div>
        <svg
          class="hero-ring absolute w-80 h-80 md:w-[22rem] md:h-[22rem] pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="rgb(var(--color-accent) / 0.25)"
            stroke-width="0.6"
            stroke-dasharray="1 5"
          />
        </svg>
        <div
          class="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-border bg-surface transition-colors duration-300 hover:border-accent"
        >
          <img src="/images/profile.png" alt="Shravan Singh" class="w-full h-full object-cover" />
        </div>
      </div> -->
      <div class="flex justify-center items-center relative">
        <div class="absolute w-72 h-72 rounded-full bg-accent/10 blur-2xl pointer-events-none"></div>
        <!-- Offset frame behind the photo — echoes the bordered-card language used
            for projects/stats elsewhere, instead of a standalone decorative motif -->
        <div
          class="absolute w-64 h-64 md:w-72 md:h-72 rounded-2xl border border-accent/25 translate-x-3.5 translate-y-3.5 pointer-events-none"
        ></div>
        <div
          class="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-border bg-surface transition-colors duration-300 hover:border-accent"
        >
          <img src="/images/profile.png" alt="Shravan Singh" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <button
      type="button"
      class="scroll-cue hidden sm:flex mx-auto mt-10 flex-col items-center gap-1 text-muted hover:text-accent transition-colors"
      @click="document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })"
      aria-label="Scroll to About section"
    >
      <!-- <span class="font-mono text-[10px] tracking-widest uppercase">scroll</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg> -->
    </button>
  </section>

  <div class="section-divider my-2"></div>

  <!-- ═══════════════════════════════════════════
     ABOUT & SKILLS
  ═══════════════════════════════════════════ -->
  <section id="about" class="py-24 reveal">
    <div class="grid md:grid-cols-[1fr_1.1fr] gap-16">
      <div class="space-y-6">
        <div>
          <h2 class="font-display font-semibold text-text text-xl mb-6">About Me</h2>
          <div class="space-y-8">
            <div>
              <p class="text-muted text-lg leading-8 mb-6 max-w-2xl">
                I build <span class="text-accent font-medium">full-stack web applications</span> and
                <span class="text-accent font-medium">distributed systems</span>, including projects that have won
                hackathons.
              </p>

              <p class="text-muted text-lg leading-8 max-w-2xl">
                Currently pursuing B.Tech in
                <span class="text-accent font-medium">Computer Science and Engineering</span>
                at
                <a
                  href="https://www.krmangalam.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-accent font-semibold hover:underline"
                >
                  K.R. Mangalam University
                </a>
                (2023-2027).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="font-display font-semibold text-text text-xl mb-8">Technologies i have been using</h2>

        <div class="grid sm:grid-cols-2 gap-x-8 gap-y-10">
          <div>
            <h3 class="font-mono text-xs text-accent uppercase tracking-wider font-semibold mb-4">Languages</h3>
            <ul class="space-y-3 text-sm text-muted">
              <li class="flex items-center gap-2.5 font-medium"><span class="text-accent font-semibold text-sm">/</span> TypeScript</li>
              <li class="flex items-center gap-2.5 font-medium"><span class="text-accent font-semibold text-sm">/</span> JavaScript</li>
              <li class="flex items-center gap-2.5 font-medium"><span class="text-accent font-semibold text-sm">/</span> Python</li>
              <li class="flex items-center gap-2.5 font-medium"><span class="text-accent font-semibold text-sm">/</span> C++</li>
            </ul>
          </div>

          <div>
            <h3 class="font-mono text-xs text-accent uppercase tracking-wider font-semibold mb-4">Frontend</h3>
            <ul class="space-y-3 text-sm text-muted">
              <li class="flex items-center gap-2.5 font-medium"><span class="text-accent font-semibold text-sm">/</span> Vue.js</li>
              <li class="flex items-center gap-2.5 font-medium"><span class="text-accent font-semibold text-sm">/</span> Angular</li>
              <li class="flex items-center gap-2.5 font-medium"><span class="text-accent font-semibold text-sm">/</span> Vite</li>
            </ul>
          </div>

          <div class="sm:col-span-2">
            <h3 class="font-mono text-xs text-accent uppercase tracking-wider font-semibold mb-4">Backend & Infrastructure</h3>
            <ul class="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted">
              <li class="flex items-center gap-2.5 font-medium"><span class="text-accent font-semibold text-sm">/</span> Node.js & Express</li>
              <li class="flex items-center gap-2.5 font-medium"><span class="text-accent font-semibold text-sm">/</span> WebSocket</li>
              <li class="flex items-center gap-2.5 font-medium"><span class="text-accent font-semibold text-sm">/</span> MongoDB</li>
              <li class="flex items-center gap-2.5 font-medium"><span class="text-accent font-semibold text-sm">/</span> PostgreSQL</li>
              <li class="flex items-center gap-2.5 font-medium"><span class="text-accent font-semibold text-sm">/</span> Clickhouse</li>
              <li class="flex items-center gap-2.5 font-medium"><span class="text-accent font-semibold text-sm">/</span> Redis</li>
              <li class="flex items-center gap-2.5 font-medium"><span class="text-accent font-semibold text-sm">/</span> Oracle / AWS</li>
              <li class="flex items-center gap-2.5 font-medium"><span class="text-accent font-semibold text-sm">/</span> Apache Kafka / RabbitMQ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- ═══════════════════════════════════════════
     EXPERIENCE
  ═══════════════════════════════════════════ -->
  <section id="experience" class="py-24 reveal">
    <h2 class="font-display font-semibold text-text text-xl mb-12">Experience</h2>

    <div class="timeline-track pl-7 space-y-10">
      <div class="flex gap-5">
        <div class="timeline-dot mt-1.5"></div>
        <div class="flex-1 pb-2">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
            <h3 class="font-display font-semibold text-text text-base">Associate Software Engineer</h3>
            <span class="font-mono text-sm text-muted">Jun 2023 – Feb 2025</span>
          </div>
          <p class="text-accent text-sm font-mono mb-3 font-medium">
            <a href="https://www.provakil.com" target="_blank" rel="noopener noreferrer" class="hover:underline">Provakil</a>
            · Full-time, Remote
          </p>
          <ul class="space-y-1.5">
            <li class="text-muted text-sm leading-relaxed flex gap-2">
              <span class="text-faint mt-1.5 shrink-0">-</span>
              Built and enhanced full-stack application features as part of a cross-functional development team.
            </li>
            <li class="text-muted text-sm leading-relaxed flex gap-2">
              <span class="text-faint mt-1.5 shrink-0">-</span>
              Worked on Vue.js frontend development and built backend services using Node.js, Python, and RabbitMQ.
            </li>
            <li class="text-muted text-sm leading-relaxed flex gap-2">
              <span class="text-faint mt-1.5 shrink-0">-</span>
              Handled database synchronization and migration between clients DB and organization DB.
            </li>
          </ul>
          <div class="flex flex-wrap gap-1.5 mt-4">
            <span class="font-mono text-xs text-muted border border-faint rounded px-2.5 py-1">Vue.js</span>
            <span class="font-mono text-xs text-muted border border-faint rounded px-2.5 py-1">Node.js</span>
            <span class="font-mono text-xs text-muted border border-faint rounded px-2.5 py-1">RabbitMQ</span>
            <span class="font-mono text-xs text-muted border border-faint rounded px-2.5 py-1">Python</span>
            <span class="font-mono text-xs text-muted border border-faint rounded px-2.5 py-1">SDLC</span>
          </div>
        </div>
      </div>

      <div class="flex gap-5">
        <div class="timeline-dot mt-1.5"></div>
        <div class="flex-1 pb-2">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
            <h3 class="font-display font-semibold text-text text-base">Software Development Trainee</h3>
            <span class="font-mono text-sm text-muted">Jun 2022 – May 2023</span>
          </div>
          <p class="text-accent text-sm font-mono mb-3 font-medium">
            <a href="https://www.masaischool.com/" target="_blank" rel="noopener noreferrer" class="hover:underline">Masai School</a>
            · Trainee
          </p>
          <ul class="space-y-1.5">
            <li class="text-muted text-sm leading-relaxed flex gap-2">
              <span class="text-faint mt-1.5 shrink-0">-</span>
              Completed a 7-month full-stack development program, accruing 1,200+ hours of practical coding and
              delivering 5 projects.
            </li>
            <li class="text-muted text-sm leading-relaxed flex gap-2">
              <span class="text-faint mt-1.5 shrink-0">-</span>
              Learnt advanced JavaScript, system design, CI/CD and solved 800+ algorithmic challenges.
            </li>
          </ul>
          <div class="flex flex-wrap gap-1.5 mt-4">
            <span class="font-mono text-xs text-muted border border-faint rounded px-2.5 py-1">Mongo DB</span>
            <span class="font-mono text-xs text-muted border border-faint rounded px-2.5 py-1">Express JS</span>
            <span class="font-mono text-xs text-muted border border-faint rounded px-2.5 py-1">React JS</span>
            <span class="font-mono text-xs text-muted border border-faint rounded px-2.5 py-1">Git</span>
            <span class="font-mono text-xs text-muted border border-faint rounded px-2.5 py-1">System Design</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- ═══════════════════════════════════════════
     PROJECTS (preview)
  ═══════════════════════════════════════════ -->
  <section id="projects" class="py-24">
    <div class="flex justify-between items-center mb-12 reveal">
      <h2 class="font-display font-semibold text-text text-xl">Projects</h2>
      <router-link
        to="/projects"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent text-accent font-display text-sm font-medium hover:bg-accent hover:text-[rgb(var(--color-base))] transition-all duration-200"
      >
        view all projects
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M2 6h8M6 2l4 4-4 4" />
        </svg>
      </router-link>
    </div>

    <div class="grid md:grid-cols-2 gap-5">
      <ProjectCard v-for="(p, i) in projects" :key="p.id" :project="p" :delay="i * 70" />
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- ═══════════════════════════════════════════
     STATS (GitHub + LeetCode + contribution calendar)
  ═══════════════════════════════════════════ -->
  <section id="stats" class="py-24 reveal">
    <h2 class="font-display font-semibold text-text text-xl mb-3">Stats</h2>

    <div class="grid md:grid-cols-2 gap-8">
      <GithubStatsCard />
      <LeetcodeStatsCard />
    </div>

    <ContributionCalendar username="shrvn12" />
  </section>

  <div class="section-divider"></div>

  <!-- ═══════════════════════════════════════════
     CONTACT
  ═══════════════════════════════════════════ -->
  <section id="contact" class="py-24 pb-32 reveal">
    <div class="max-w-lg">
      <h2 class="font-display font-semibold text-text text-xl mb-3">Get in touch</h2>
      <p class="text-muted text-sm mb-10 leading-relaxed">If you have something in mind, say hi.</p>

      <div class="space-y-1">
        <div class="contact-row flex items-center gap-4 px-3 py-3 group">
          <a href="mailto:singhshravan1208@gmail.com" class="flex items-center gap-4 flex-1 min-w-0">
            <div
              class="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all shrink-0"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <div class="font-mono text-xs text-muted mb-0.5 font-semibold">email</div>
              <div class="text-text text-sm link-line group-hover:text-accent transition-colors font-medium truncate">
                singhshravan1208@gmail.com
              </div>
            </div>
          </a>
          <CopyButton text="singhshravan1208@gmail.com" />
        </div>

        <a href="tel:+919311529750" class="contact-row flex items-center gap-4 px-3 py-3 group">
          <div
            class="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .9h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
              />
            </svg>
          </div>
          <div class="flex-1">
            <div class="font-mono text-xs text-muted mb-0.5 font-semibold">phone</div>
            <div class="text-text text-sm link-line group-hover:text-accent transition-colors font-medium">+91 9311529750</div>
          </div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" class="text-muted opacity-0 group-hover:opacity-100 transition-opacity">
            <path d="M2 6h8M6 2l4 4-4 4" />
          </svg>
        </a>

        <a href="https://linkedin.com/in/shrvn12" target="_blank" class="contact-row flex items-center gap-4 px-3 py-3 group">
          <div
            class="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </div>
          <div class="flex-1">
            <div class="font-mono text-xs text-muted mb-0.5 font-semibold">linkedin</div>
            <div class="text-text text-sm link-line group-hover:text-accent transition-colors font-medium">linkedin.com/in/shrvn12</div>
          </div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" class="text-muted opacity-0 group-hover:opacity-100 transition-opacity">
            <path d="M2 6h8M6 2l4 4-4 4" />
          </svg>
        </a>

        <a href="https://github.com/shrvn12" target="_blank" class="contact-row flex items-center gap-4 px-3 py-3 group">
          <div
            class="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted group-hover:border-accent group-hover:text-accent transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </div>
          <div class="flex-1">
            <div class="font-mono text-xs text-muted mb-0.5 font-semibold">github</div>
            <div class="text-text text-sm link-line group-hover:text-accent transition-colors font-medium">github.com/shrvn12</div>
          </div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" class="text-muted opacity-0 group-hover:opacity-100 transition-opacity">
            <path d="M2 6h8M6 2l4 4-4 4" />
          </svg>
        </a>

        <div class="contact-row flex items-center gap-4 px-3 py-3">
          <div class="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
          </div>
          <div class="flex-1">
            <div class="font-mono text-xs text-muted mb-0.5 font-semibold">resume</div>
            <div class="text-text text-sm font-medium">Software Engineer</div>
          </div>
          <div class="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1q2-ZcMYcWeQoXFp150dEw8LNWl83Ovwo/view"
              target="_blank"
              class="flex items-center gap-1 px-3 py-1.5 rounded-md border border-accent text-accent font-mono text-xs font-semibold hover:bg-accent hover:text-[rgb(var(--color-base))] transition-all duration-200"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              View
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1q2-ZcMYcWeQoXFp150dEw8LNWl83Ovwo"
              download
              class="flex items-center gap-1 px-3 py-1.5 rounded-md border border-border text-muted font-mono text-xs font-semibold hover:border-accent hover:text-accent transition-all duration-200"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
