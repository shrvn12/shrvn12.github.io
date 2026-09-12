<script setup>
import { useScrollProgress } from '../composables/useScrollEffects'

const { progress } = useScrollProgress()
</script>

<template>
  <div id="scroll-progress" :style="{ width: progress + '%' }"></div>
</template>
