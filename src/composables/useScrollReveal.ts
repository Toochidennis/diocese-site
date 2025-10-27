import { nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

export function useScrollReveal() {
  const router = useRouter()
  let observer: IntersectionObserver | null = null

  const reveal = (el: HTMLElement) => el.classList.add('revealed')

  const createObserver = () =>
    new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          reveal(entry.target as HTMLElement)
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  const init = async () => {
    if (observer) observer.disconnect()
    observer = createObserver()
    await nextTick()
    document.querySelectorAll<HTMLElement>('.scroll-reveal').forEach(el => {
      el.classList.remove('revealed')
      observer!.observe(el)
    })
  }

  onMounted(init)

  // run after route navigation completes and new view DOM is ready
  router.afterEach(async () => {
    await nextTick()
    setTimeout(init, 50) // small delay lets <router-view> finish rendering
  })

  onBeforeUnmount(() => observer?.disconnect())
}
