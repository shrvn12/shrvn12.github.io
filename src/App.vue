<script setup>
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import SiteHorizon from './components/SiteHorizon.vue'
</script>

<template>
  <ScrollProgress />
  <NavBar />
  <main class="max-w-5xl mx-auto px-6 pt-28">
    <router-view />
  </main>
  <SiteFooter />
  <SiteHorizon />
</template>
