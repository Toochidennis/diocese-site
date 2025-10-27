<template>
  <section class="pt-24 pb-8 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12 scroll-reveal">
        <h1 class="font-playfair text-4xl lg:text-5xl font-bold text-primary mb-4">Contact Us</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          We're here to serve you and answer any questions you may have. Reach out to us through any
          of the channels below, and we'll respond as soon as possible.
        </p>
      </div>
    </div>
  </section>

  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 mb-16">
      <div class="scroll-reveal">
        <h2 class="font-playfair text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input v-model="form.name" type="text" required
                class="form-input w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none text-sm"
                placeholder="Enter your full name" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input v-model="form.email" type="email" required
                class="form-input w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none text-sm"
                placeholder="Enter your email" />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input v-model="form.phone" type="tel"
              class="form-input w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none text-sm"
              placeholder="Enter your phone number" />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
            <select v-model="form.subject" required
              class="form-input w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none text-sm pr-8">
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="pastoral">Pastoral Care</option>
              <option value="youth">Youth Ministry</option>
              <option value="marriage">Marriage Preparation</option>
              <option value="baptism">Baptism & Confirmation</option>
              <option value="funeral">Funeral Services</option>
              <option value="volunteer">Volunteer Opportunities</option>
              <option value="donation">Donations & Tithing</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
            <textarea v-model="form.message" required rows="5"
              class="form-input w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none text-sm resize-none"
              placeholder="Enter your message"></textarea>
          </div>

          <button type="submit" :disabled="isSending"
            class="w-full bg-primary text-white py-3 px-6 rounded-xl font-medium hover:bg-opacity-90 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
            <span v-if="isSending">Sending...</span>
            <span v-else-if="sent" class="text-green-400">Message Sent!</span>
            <span v-else>Send Message</span>
          </button>
        </form>
      </div>

      <div class="scroll-reveal">
        <h2 class="font-playfair text-3xl font-bold text-primary mb-6">Find Us</h2>
        <div class="rounded-2xl overflow-hidden mb-6 shadow-lg">
          <div ref="mapEl" class="w-full h-[400px]"></div>
        </div>
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 class="font-playfair text-lg font-semibold text-gray-800 mb-4">Directions & Landmarks</h3>
          <div class="space-y-3 text-sm text-gray-600">
            <div class="flex items-start space-x-3">
              <i class="ri-navigation-line text-primary mt-1"></i>
              <p>Located near Wukari Central Market, opposite Government Secondary School</p>
            </div>
            <div class="flex items-start space-x-3">
              <i class="ri-car-line text-primary mt-1"></i>
              <p>Parking available within the diocesan compound</p>
            </div>
            <div class="flex items-start space-x-3">
              <i class="ri-bus-line text-primary mt-1"></i>
              <p>Accessible by public transport - Wukari town buses stop nearby</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSending = ref(false)
const sent = ref(false)

function handleSubmit(e: Event) {
  e.preventDefault()
  if (!form.value.name || !form.value.email || !form.value.subject || !form.value.message) return
  isSending.value = true
  setTimeout(() => {
    isSending.value = false
    sent.value = true
    setTimeout(() => (sent.value = false), 2000)
    form.value = { name: '', email: '', phone: '', subject: '', message: '' }
  }, 1500)
}

// newsletter logic removed (unused)

// --- Live map (Leaflet), same center as Parishes page ---
const mapEl = ref<HTMLDivElement | null>(null)
let map: { remove: () => void } | null = null

const initMap = async () => {
  if (!mapEl.value) return
  const leafletMod = await import('leaflet')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const L: any = (leafletMod as any).default ?? leafletMod
  await import('leaflet/dist/leaflet.css')

  // Fix default marker icon paths in Vite
  delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)['_getIconUrl']
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).toString(),
    iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).toString(),
    shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).toString()
  })

  const center: [number, number] = [7.8711, 9.7800]
  map = L.map(mapEl.value).setView(center, 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map)

  L.marker(center)
    .addTo(map)
    .bindPopup('<strong>Diocese of Wukari</strong><br/>PMB 1002, Wukari, Taraba State')
}

onMounted(async () => {
  await nextTick()
  initMap()
})

onBeforeUnmount(() => {
  if (map) {
    map.remove()
    map = null
  }
})

</script>
