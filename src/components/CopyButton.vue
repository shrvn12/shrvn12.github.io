<script setup>
import { ref } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
})

const copied = ref(false)

async function copy() {
  try {
    await navigator.clipboard.writeText(props.text)
  } catch (e) {
    // fallback for older browsers
    const el = document.createElement('textarea')
    el.value = props.text
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}
</script>

<template>
  <button
    type="button"
    @click.stop.prevent="copy"
    class="copy-btn w-8 h-8 rounded-lg border border-border flex items-center justify-center shrink-0"
    :class="copied ? 'border-accent text-accent' : 'text-muted hover:border-accent hover:text-accent'"
    :aria-label="copied ? 'Copied' : 'Copy email address'"
    :title="copied ? 'Copied!' : 'Copy email address'"
  >
    <svg v-if="!copied" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
    <svg v-else width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </button>
</template>
