<template>
  <header>
    <nav ref="navbar" class="fixed top-0 w-full z-50 navbar-blur border-b border-gray-200/20"
      @mouseenter="handleHover(true)" @mouseleave="handleHover(false)">
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Catholic Diocese of Wukari logo"
              class="h-12 w-auto select-none"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
            <div>
              <h1 class="font-['Pacifico'] text-xl text-primary">Catholic Diocese</h1>
              <p class="text-xs text-gray-600">of Wukari</p>
            </div>
          </div>

          <!-- Desktop Links -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link to="/" class="font-medium transition-colors" :class="isActive('/')">Home</router-link>

            <div class="relative dropdown-container">
              <button class="text-gray-700 hover:text-primary font-medium flex items-center space-x-1 dropdown-trigger">
                <span>Diocese</span>
                <i class="ri-arrow-down-s-line text-sm transition-transform duration-200"></i>
              </button>
              <div
                class="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200/20 opacity-0 invisible transform translate-y-2 transition-all duration-300 ease-out dropdown-menu z-50">
                <div class="py-2">
                  <router-link to="/parishes" class="block px-4 py-3 font-medium transition-colors"
                    :class="isActive('/parishes')">Parishes</router-link>
                  <router-link to="/bishops" class="block px-4 py-3 font-medium transition-colors"
                    :class="isActive('/bishops')">Bishops</router-link>
                  <router-link to="/clergy" class="block px-4 py-3 font-medium transition-colors"
                    :class="isActive('/clergy')">Clergy</router-link>
                </div>
              </div>
            </div>

            <router-link to="/news" class="font-medium transition-colors" :class="isActive('/news')">News</router-link>
            <router-link to="/events" class="font-medium transition-colors"
              :class="isActive('/events')">Events</router-link>
            <router-link to="/gallery" class="font-medium transition-colors"
              :class="isActive('/gallery')">Gallery</router-link>
            <router-link to="/about" class="font-medium transition-colors"
              :class="isActive('/about')">About</router-link>
            <router-link to="/contact" class="font-medium transition-colors"
              :class="isActive('/contact')">Contact</router-link>
          </div>

          <!-- Right Side -->
          <div class="flex items-center space-x-4">
            <button
              class="bg-secondary text-white px-6 py-2 !rounded-button font-medium hover:bg-opacity-90 cursor-pointer transition-colors whitespace-nowrap">
              Donate Now
            </button>

            <!-- Mobile Hamburger -->
            <button @click="toggleMenu" class="md:hidden w-8 h-8 flex items-center justify-center">
              <i class="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <transition name="fade">
        <div v-if="open"
          class="md:hidden bg-white shadow-lg border-t border-gray-200 py-4 px-6 flex flex-col space-y-4">
          <router-link to="/" class="font-medium transition-colors hover:text-primary" :class="isActive('/')"
            @click="closeMenu">Home</router-link>
          <router-link to="/parishes" class="font-medium transition-colors hover:text-primary"
            :class="isActive('/parishes')" @click="closeMenu">Parishes</router-link>
          <router-link to="/bishops" class="font-medium transition-colors hover:text-primary"
            :class="isActive('/bishops')" @click="closeMenu">Bishops</router-link>
          <router-link to="/clergy" class="font-medium transition-colors hover:text-primary"
            :class="isActive('/clergy')" @click="closeMenu">Clergy</router-link>
          <router-link to="/news" class="font-medium transition-colors hover:text-primary" :class="isActive('/news')"
            @click="closeMenu">News</router-link>
          <router-link to="/events" class="font-medium transition-colors hover:text-primary"
            :class="isActive('/events')" @click="closeMenu">Events</router-link>
          <router-link to="/gallery" class="font-medium transition-colors hover:text-primary"
            :class="isActive('/gallery')" @click="closeMenu">Gallery</router-link>
          <router-link to="/about" class="font-medium transition-colors hover:text-primary" :class="isActive('/about')"
            @click="closeMenu">About</router-link>
          <router-link to="/contact" class="font-medium transition-colors hover:text-primary"
            :class="isActive('/contact')" @click="closeMenu">Contact</router-link>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const open = ref(false)
const showMobileMenu = ref(false)
const navbar = ref<HTMLElement | null>(null)

function isActive(path: string) {
  return route.path === path ? 'text-primary' : 'text-gray-700 hover:text-primary'
}

function handleHover(state: boolean) {
  // only apply hover on desktop
  if (window.innerWidth >= 768) {
    showMobileMenu.value = state
  }
}

function toggleMenu() {
  open.value = !open.value
}

function closeMenu() {
  open.value = false
  showMobileMenu.value = false
}

onMounted(() => {
  if (!navbar.value) return
  let lastScrollY = window.scrollY
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY
    navbar.value!.style.transform =
      currentScrollY > 100 && currentScrollY > lastScrollY
        ? 'translateY(-100%)'
        : 'translateY(0)'
    lastScrollY = currentScrollY
  })
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
