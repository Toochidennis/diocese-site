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
      meta: { title: 'Home' }
    },
    {
      path: '/parishes',
      name: 'parishes',
      component: ParishesView,
      meta: { title: 'Parishes' }
    },
    {
      path: '/bishops',
      name: 'bishops',
      component: BishopsView,
      meta: { title: 'Bishops' }
    },
    {
      path: '/clergy',
      name: 'clergy',
      component: ClergyView,
      meta: { title: 'Clergy' }
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      meta: { title: 'News' }
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView,
      meta: { title: 'Events' }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
      meta: { title: 'Gallery' }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { title: 'About' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { title: 'Contact' }
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
