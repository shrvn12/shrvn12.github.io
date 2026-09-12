import { onMounted, onBeforeUnmount, ref } from 'vue'

/** Fades in elements with class="reveal" as they enter the viewport. */
export function useRevealOnScroll() {
  let observer
  onMounted(() => {
    const reveals = document.querySelectorAll('.reveal')
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    reveals.forEach((r) => observer.observe(r))
  })
  onBeforeUnmount(() => observer && observer.disconnect())
}

/** Shared across the app so the NavBar can highlight the section that's
 *  currently in view, even though only the Home view sets up the observer. */
export const activeSectionId = ref('')

/** Tracks which section id is active in the viewport, for nav highlighting.
 *  Call this from the view that actually renders the sections (Home). */
export function useActiveSection(sectionIds) {
  let observer
  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) activeSectionId.value = e.target.id
        })
      },
      { threshold: 0.3 }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  })
  onBeforeUnmount(() => {
    observer && observer.disconnect()
    activeSectionId.value = ''
  })
}

/** Top progress bar reflecting scroll position through the page. */
export function useScrollProgress() {
  const progress = ref(0)
  function onScroll() {
    const max = document.body.scrollHeight - window.innerHeight
    progress.value = max > 0 ? (window.scrollY / max) * 100 : 0
  }
  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
  return { progress }
}
