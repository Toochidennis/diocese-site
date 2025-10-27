<template>
  <!-- ===== Hero Section ===== -->
  <section class="pt-24 pb-8 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12 scroll-reveal">
        <h1 class="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-4">Photo Gallery</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Capturing moments of faith, community, and celebration throughout our diocese. Browse through our
          collection of memorable events and parish activities.
        </p>
      </div>
    </div>
  </section>

  <!-- ===== Photo Grid ===== -->
  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <!-- No photos message (when gallery is empty) -->
      <div v-if="photos.length === 0" class="text-center py-16">
        <i class="ri-image-line text-6xl text-gray-300 mb-4"></i>
        <h3 class="text-2xl font-semibold text-gray-700 mb-2">No photos available</h3>
        <p class="text-gray-500">Please check back later.</p>
      </div>

      <div v-else class="photo-grid" id="photo-grid">
        <div v-for="(photo, index) in photos" :key="photo.src" class="photo-item scroll-reveal cursor-pointer"
          @click="openLightbox(index)">
          <div class="bg-white rounded-2xl overflow-hidden shadow-sm photo-hover">
            <div class="relative bg-gray-100">
              <!-- Shimmer skeleton overlay -->
              <div class="absolute inset-0 img-skeleton overflow-hidden pointer-events-none z-20">
                <div class="shimmer w-full h-full"></div>
              </div>
              <img :src="photo.src" :alt="photo.title"
                class="w-full h-80 object-cover relative z-10 opacity-0 transition-opacity duration-300"
                :loading="index < 6 ? 'eager' : 'lazy'" decoding="async" referrerpolicy="no-referrer" :fetchpriority="index < 6 ? 'high' : 'auto'"
                @error="handleImageError($event)" @load="handleImageLoad($event)" />
              <div
                class="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-300 flex items-center justify-center z-20 pointer-events-none">
                <i class="ri-eye-line text-white text-2xl opacity-0 hover:opacity-100 transition-opacity"></i>
              </div>
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-gray-800 mb-2">{{ photo.title }}</h3>
              <p class="text-sm text-gray-600 mb-2">{{ photo.date }}</p>
              <span class="inline-block px-3 py-1 rounded-full text-xs font-medium"
                :class="categoryColors[photo.category]">
                {{ photo.category }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 scroll-reveal">
        <button
          class="bg-primary text-white px-8 py-3 !rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap cursor-pointer disabled:cursor-not-allowed"
          @click="loadMore" :disabled="isLoading">
          {{ isLoading ? 'Loading...' : 'Load More Photos' }}
        </button>
      </div>
    </div>
  </section>

  <!-- ===== Lightbox ===== -->
  <div v-if="isLightboxActive" class="lightbox active" id="lightbox">
    <div class="flex items-center justify-center w-full h-full p-6">
      <button
        class="absolute top-6 right-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        @click="closeLightbox">
        <i class="ri-close-line text-2xl"></i>
      </button>

      <button
        class="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        @click="prevPhoto">
        <i class="ri-arrow-left-line text-2xl"></i>
      </button>

      <button
        class="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        @click="nextPhoto">
        <i class="ri-arrow-right-line text-2xl"></i>
      </button>

      <div class="max-w-6xl w-full flex flex-col lg:flex-row gap-6 max-h-full">
        <div class="flex-1 flex items-center justify-center bg-black/20">
          <img :src="photos[currentPhotoIndex]?.src" :alt="photos[currentPhotoIndex]?.title"
            class="max-w-full max-h-full object-contain" referrerpolicy="no-referrer"
            @error="handleImageError($event)" />
        </div>

        <div class="lg:w-80 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white overflow-y-auto">
          <h3 class="font-playfair text-2xl font-bold mb-4">{{ photos[currentPhotoIndex]?.title }}</h3>
          <div class="space-y-4">
            <div>
              <p class="text-sm opacity-80 mb-1">Date</p>
              <p class="font-medium">{{ photos[currentPhotoIndex]?.date }}</p>
            </div>
            <div>
              <p class="text-sm opacity-80 mb-1">Category</p>
              <span class="inline-block px-3 py-1 rounded-full text-sm font-medium"
                :class="categoryColors[photos[currentPhotoIndex]?.category || '']">
                {{ photos[currentPhotoIndex]?.category }}
              </span>
            </div>
            <div>
              <p class="text-sm opacity-80 mb-1">Description</p>
              <p class="text-sm leading-relaxed">{{ photos[currentPhotoIndex]?.description }}</p>
            </div>
            <div>
              <p class="text-sm opacity-80 mb-1">Location</p>
              <p class="text-sm">{{ photos[currentPhotoIndex]?.location }}</p>
            </div>
            <div>
              <p class="text-sm opacity-80 mb-1">Photographer</p>
              <p class="text-sm">{{ photos[currentPhotoIndex]?.photographer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const isLightboxActive = ref(false)
const currentPhotoIndex = ref(0)
const isLoading = ref(false)

interface Photo {
  src: string
  title: string
  date: string
  category: string
  description: string
  location: string
  photographer: string
}

const categoryColors: Record<string, string> = {
  'Diocese Events': 'bg-blue-100 text-blue-700',
  'Parish Life': 'bg-green-100 text-green-700',
  'Youth Ministry': 'bg-purple-100 text-purple-700',
  'Community Outreach': 'bg-orange-100 text-orange-700',
  Ceremonies: 'bg-red-100 text-red-700'
}


const photos = ref<Photo[]>([
  {
    src: "https://readdy.ai/api/search-image?query=Catholic%20bishop%20Emmanuel%20Badejo%20blessing%20congregation%20during%20solemn%20diocesan%20celebration%20at%20Nigerian%20cathedral%2C%20ornate%20liturgical%20vestments%20and%20golden%20ceremonial%20items%2C%20faithful%20gathered%20in%20prayer%2C%20beautiful%20church%20interior%20with%20stained%20glass%20windows%20and%20religious%20artwork&width=800&height=1000&seq=bishop-blessing-large&orientation=portrait",
    title: "Bishop's Annual Blessing Ceremony",
    date: "December 10, 2024",
    category: "Diocese Events",
    description: "His Lordship Bishop Emmanuel Badejo conducting the annual blessing ceremony at St. Augustine Cathedral, blessing the faithful and celebrating the diocesan community.",
    location: "St. Augustine Cathedral, Wukari",
    photographer: "Rev. Fr. Michael Adamu"
  },
  {
    src: "https://readdy.ai/api/search-image?query=Catholic%20Sunday%20mass%20celebration%20in%20Nigerian%20parish%20church%2C%20congregation%20singing%20hymns%20with%20choir%20and%20traditional%20African%20instruments%2C%20vibrant%20community%20worship%20with%20colorful%20traditional%20clothing%2C%20priest%20celebrating%20eucharist%20at%20altar%2C%20joyful%20parish%20life&width=800&height=600&seq=sunday-mass-large&orientation=landscape",
    title: "Sunday Mass at St. Augustine Cathedral",
    date: "December 8, 2024",
    category: "Parish Life",
    description: "Weekly Sunday mass celebration featuring the diocesan choir and active participation from parishioners in traditional and contemporary worship.",
    location: "St. Augustine Cathedral, Wukari",
    photographer: "Mrs. Grace Tarka"
  },
  {
    src: "https://readdy.ai/api/search-image?query=Catholic%20youth%20ministry%20retreat%20in%20Nigerian%20church%20hall%2C%20young%20people%20engaged%20in%20spiritual%20formation%20activities%20and%20group%20discussions%2C%20teenagers%20and%20young%20adults%20participating%20in%20faith%20development%20workshop%2C%20vibrant%20youth%20gathering%20with%20religious%20banners&width=800&height=900&seq=youth-retreat-large&orientation=portrait",
    title: "Youth Ministry Annual Retreat",
    date: "November 25, 2024",
    category: "Youth Ministry",
    description: "Annual youth retreat focusing on spiritual formation, leadership development, and community building among young Catholics aged 16-35.",
    location: "Diocesan Youth Center, Wukari",
    photographer: "Mr. Paul Nkomo"
  },
  {
    src: "https://readdy.ai/api/search-image?query=Catholic%20charity%20outreach%20program%20in%20Nigerian%20rural%20community%2C%20church%20volunteers%20distributing%20food%20packages%20and%20medical%20supplies%20to%20families%2C%20community%20health%20center%20with%20cross%20symbol%2C%20charitable%20work%20and%20social%20ministry%20activities&width=800&height=700&seq=charity-outreach-large&orientation=landscape",
    title: "Community Health Outreach",
    date: "December 5, 2024",
    category: "Community Outreach",
    description: "Monthly community health outreach program providing medical services, health education, and nutritional support to underserved communities.",
    location: "Takum Community Health Center",
    photographer: "Dr. Mary Okwu"
  },
  {
    src: "https://readdy.ai/api/search-image?query=Catholic%20ordination%20ceremony%20in%20Nigerian%20cathedral%2C%20new%20priests%20receiving%20holy%20orders%20from%20bishop%20in%20ornate%20liturgical%20vestments%2C%20solemn%20religious%20ceremony%20with%20congregation%20and%20altar%20servers%2C%20beautiful%20church%20interior%20with%20ceremonial%20decorations&width=800&height=1100&seq=ordination-ceremony-large&orientation=portrait",
    title: "Priestly Ordination Ceremony",
    date: "November 15, 2024",
    category: "Ceremonies",
    description: "Solemn ordination ceremony where three deacons received holy orders to become priests, marking a significant milestone in their spiritual journey.",
    location: "St. Augustine Cathedral, Wukari",
    photographer: "Rev. Fr. John Amos"
  },
  {
    src: "https://readdy.ai/api/search-image?query=Catholic%20diocesan%20conference%20in%20Nigerian%20church%20hall%2C%20priests%20and%20lay%20leaders%20attending%20pastoral%20meeting%2C%20bishop%20addressing%20clergy%20and%20parish%20representatives%2C%20formal%20church%20gathering%20with%20religious%20symbols%20and%20banners%2C%20modern%20conference%20room%20setting&width=800&height=320&seq=diocesan-conference&orientation=landscape",
    title: "Annual Diocesan Conference",
    date: "October 28, 2024",
    category: "Diocese Events",
    description:
      "Diocesan-wide pastoral conference where clergy and lay leaders discussed future strategies for community outreach and parish growth.",
    location: "Diocesan Secretariat, Wukari",
    photographer: "Sr. Angela Dogo"
  },
  {
    src: "https://readdy.ai/api/search-image?query=Catholic%20first%20communion%20celebration%20in%20Nigerian%20parish%2C%20children%20in%20white%20dresses%20and%20suits%20receiving%20sacrament%2C%20families%20celebrating%20with%20joy%20and%20traditional%20decorations%2C%20priest%20blessing%20young%20communicants%2C%20beautiful%20church%20ceremony%20with%20flowers&width=800&height=800&seq=first-communion&orientation=squarish",
    title: "First Holy Communion",
    date: "November 20, 2024",
    category: "Parish Life",
    description:
      "A beautiful First Communion ceremony celebrating young parishioners receiving the Holy Eucharist for the first time, surrounded by family and faith.",
    location: "Our Lady of Perpetual Help Parish, Wukari",
    photographer: "Mr. Samuel Terna"
  },
  {
    src: "https://readdy.ai/api/search-image?query=Catholic%20youth%20choir%20performance%20in%20Nigerian%20church%2C%20young%20singers%20in%20colorful%20robes%20performing%20during%20mass%2C%20teenagers%20leading%20worship%20with%20traditional%20African%20instruments%20and%20modern%20music%2C%20vibrant%20youth%20ministry%20musical%20celebration&width=800&height=600&seq=youth-choir&orientation=squarish",
    title: "Youth Choir Christmas Performance",
    date: "December 12, 2024",
    category: "Youth Ministry",
    description:
      "A joyful Christmas performance by the Diocesan Youth Choir, combining traditional carols with local instruments and choreography.",
    location: "St. Augustine Cathedral, Wukari",
    photographer: "Mrs. Victoria Agbo"
  },
  {
    src: "https://readdy.ai/api/search-image?query=Catholic%20Christmas%20charity%20distribution%20in%20Nigerian%20community%2C%20volunteers%20giving%20gifts%20and%20food%20packages%20to%20poor%20families%2C%20church%20members%20helping%20children%20and%20elderly%20during%20holiday%20season%2C%20charitable%20outreach%20program%20with%20Christmas%20decorations&width=800&height=600&seq=christmas-charity&orientation=landscape",
    title: "Christmas Charity Drive",
    date: "December 15, 2024",
    category: "Community Outreach",
    description:
      "Annual Christmas outreach event distributing gifts and food packages to families and children in need across the diocese.",
    location: "Diocesan Welfare Center, Wukari",
    photographer: "Mr. Peter Iyanda"
  }
])

// All photos are shown; filtering removed


function openLightbox(index: number) {
  currentPhotoIndex.value = index
  isLightboxActive.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  isLightboxActive.value = false
  document.body.style.overflow = 'auto'
}

function nextPhoto() {
  if (photos.value.length === 0) return
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % photos.value.length
}

function prevPhoto() {
  if (photos.value.length === 0) return
  currentPhotoIndex.value =
    (currentPhotoIndex.value - 1 + photos.value.length) % photos.value.length
}

function handleImageError(event: Event) {
  const img = event.target as HTMLImageElement
  const failedSrc = img.currentSrc || img.src
  const retried = img.dataset.retried === '1'

  // First failure: try once more with a cache-busting query param
  if (!retried && failedSrc && failedSrc.startsWith('http')) {
    try {
      const url = new URL(failedSrc)
      url.searchParams.set('cb', String(Date.now()))
      img.dataset.retried = '1'
      img.src = url.toString()
      return
    } catch {
      // fall through to placeholder
    }
  }

  // Second failure: show placeholder
  img.src = 'data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"800\" height=\"600\" viewBox=\"0 0 800 600\"%3E%3Crect fill=\"%23e5e7eb\" width=\"800\" height=\"600\"/%3E%3Ctext x=\"50%25\" y=\"50%25\" dominant-baseline=\"middle\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"24\" fill=\"%239ca3af\"%3EImage not available%3C/text%3E%3C/svg%3E'
  img.style.objectFit = 'contain'

  // Hide loading spinner
  const parent = img.parentElement
  if (parent) {
    const skeleton = parent.querySelector('.img-skeleton') as HTMLElement
    if (skeleton) skeleton.style.display = 'none'
  }
}

function handleImageLoad(event: Event) {
  const img = event.target as HTMLImageElement
  img.style.opacity = '1'
  img.classList.remove('opacity-0')
  // Hide loading spinner once image is loaded
  const parent = img.parentElement
  if (parent) {
    const skeleton = parent.querySelector('.img-skeleton') as HTMLElement
    if (skeleton) skeleton.style.display = 'none'
  }
}

function loadMore() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
}

onMounted(() => {
  useScrollReveal()

  document.addEventListener('keydown', (e) => {
    if (isLightboxActive.value) {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextPhoto()
      if (e.key === 'ArrowLeft') prevPhoto()
    }
  })
})
</script>

<style scoped>
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}

.shimmer {
  background: linear-gradient(90deg,
      rgba(229, 231, 235, 1) 25%,
      rgba(243, 244, 246, 1) 37%,
      rgba(229, 231, 235, 1) 63%);
  background-size: 400% 100%;
  animation: shimmer 1.2s ease-in-out infinite;
}
</style>
