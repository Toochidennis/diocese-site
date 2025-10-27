import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ParishesView from '@/views/ParishesView.vue'
import BishopsView from '@/views/BishopsView.vue'
import ClergyView from '@/views/ClergyView.vue'
import EventsView from '@/views/EventsView.vue'
import NewsView from '@/views/NewsView.vue'
import GalleryView from '@/views/GalleryView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/parishes',
      name: 'parishes',
      component: ParishesView,
    },
    {
      path: '/bishops',
      name: 'bishops',
      component: BishopsView,
    },
    {
      path: '/clergy',
      name: 'clergy',
      component: ClergyView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
