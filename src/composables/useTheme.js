import { ref, watchEffect } from 'vue'

const theme = ref(
  (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) || 'light'
)

function applyTheme(value) {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', value === 'dark')
}

// apply immediately + whenever it changes
watchEffect(() => {
  applyTheme(theme.value)
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', theme.value)
  }
})

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  function setTheme(value) {
    theme.value = value
  }
  return { theme, toggleTheme, setTheme }
}
