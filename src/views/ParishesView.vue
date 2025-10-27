<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

type Region = 'central' | 'northern' | 'southern'
type Parish = {
  id: number
  name: string
  region: Region
  address: string
  phone: string
  priest: string
  mass: { sunday: string; weekdays: string }
  desc: string
  img: string
  coords?: { lat: number; lng: number } | null
}

/** Data: converted from your HTML 1:1 */
const parishes = ref<Parish[]>([
  {
    id: 1,
    name: 'St. Augustine Cathedral Parish',
    region: 'central',
    address: 'Cathedral Road, Wukari',
    phone: '+234 803 456 7890',
    priest: 'Rev. Fr. Michael Adamu',
    mass: { sunday: '7:00 AM, 9:00 AM, 11:00 AM', weekdays: '6:30 AM, 6:00 PM' },
    desc: 'The Cathedral parish serves as the mother church of the diocese, hosting major liturgical celebrations and diocesan events.',
    img: 'https://readdy.ai/api/search-image?query=beautiful%20Catholic%20cathedral%20exterior%20with%20twin%20towers%20and%20large%20cross%2C%20modern%20church%20architecture%20in%20Nigerian%20setting%2C%20red%20brick%20and%20white%20stone%20construction%2C%20peaceful%20cathedral%20grounds%20with%20green%20landscaping%2C%20spiritual%20sanctuary%20with%20welcoming%20entrance&width=400&height=300&seq=cathedral-parish&orientation=landscape',
    coords: { lat: 7.8711, lng: 9.7800 }
  },
  {
    id: 2,
    name: 'Sacred Heart Parish',
    region: 'central',
    address: 'Hospital Road, Wukari',
    phone: '+234 806 123 4567',
    priest: 'Rev. Fr. Peter Ogbonna',
    mass: { sunday: '7:30 AM, 10:00 AM', weekdays: '6:00 AM, 6:30 PM' },
    desc: 'A vibrant parish community known for its strong youth ministry and active involvement in healthcare apostolate.',
    img: 'https://readdy.ai/api/search-image?query=charming%20Catholic%20parish%20church%20with%20single%20bell%20tower%20and%20wooden%20cross%2C%20traditional%20Nigerian%20church%20architecture%2C%20cream%20colored%20walls%20with%20red%20roof%2C%20peaceful%20church%20surrounded%20by%20palm%20trees%2C%20welcoming%20parish%20community%20church&width=400&height=300&seq=sacred-heart-parish&orientation=landscape',
    coords: { lat: 7.8705, lng: 9.7705 }
  },
  {
    id: 3,
    name: 'St. Mary Queen of Peace',
    region: 'northern',
    address: 'Takum Road, Wukari',
    phone: '+234 807 890 1234',
    priest: 'Rev. Fr. James Onyeka',
    mass: { sunday: '8:00 AM, 10:30 AM', weekdays: '6:00 AM, 6:00 PM' },
    desc: 'Dedicated to promoting peace and reconciliation in the community through various interfaith dialogue programs.',
    img: 'https://readdy.ai/api/search-image?query=rustic%20Catholic%20church%20in%20rural%20Nigerian%20village%20setting%2C%20simple%20church%20architecture%20with%20metal%20roof%20and%20wooden%20cross%2C%20brick%20walls%20with%20arched%20windows%2C%20peaceful%20village%20church%20surrounded%20by%20farmland%2C%20community%20gathering%20place&width=400&height=300&seq=mary-queen-parish&orientation=landscape',
    coords: { lat: 7.9300, lng: 9.7800 }
  },
  {
    id: 4,
    name: 'St. Joseph the Worker',
    region: 'southern',
    address: 'Industrial Layout, Wukari',
    phone: '+234 808 567 8901',
    priest: 'Rev. Fr. Emmanuel Kalu',
    mass: { sunday: '7:00 AM, 9:30 AM', weekdays: '6:30 AM, 6:30 PM' },
    desc: 'Focuses on the dignity of work and social justice, serving the working-class community with various support programs.',
    img: 'https://readdy.ai/api/search-image?query=modern%20Catholic%20church%20with%20contemporary%20architecture%2C%20white%20walls%20and%20large%20windows%2C%20distinctive%20bell%20tower%20with%20cross%2C%20Nigerian%20parish%20church%20with%20beautiful%20landscaping%2C%20welcoming%20entrance%20with%20steps%2C%20peaceful%20church%20grounds&width=400&height=300&seq=joseph-parish&orientation=landscape',
    coords: { lat: 7.8300, lng: 9.7600 }
  },
  {
    id: 5,
    name: 'St. Francis of Assisi',
    region: 'northern',
    address: 'Rafin Kada, Wukari',
    phone: '+234 809 234 5678',
    priest: 'Rev. Fr. Paul Nkomo',
    mass: { sunday: '8:30 AM, 11:00 AM', weekdays: '6:00 AM, 6:00 PM' },
    desc: 'Emphasizes care for creation and service to the poor, following the Franciscan tradition of simplicity and compassion.',
    img: 'https://readdy.ai/api/search-image?query=small%20Catholic%20chapel%20in%20Nigerian%20village%2C%20simple%20church%20with%20corrugated%20iron%20roof%20and%20wooden%20cross%2C%20humble%20parish%20church%20with%20brick%20walls%2C%20rural%20community%20church%20surrounded%20by%20trees%2C%20peaceful%20village%20worship%20center&width=400&height=300&seq=francis-parish&orientation=landscape',
    coords: { lat: 7.9500, lng: 9.8000 }
  },
  {
    id: 6,
    name: 'St. Anthony of Padua',
    region: 'southern',
    address: 'Kente Road, Wukari',
    phone: '+234 810 345 6789',
    priest: 'Rev. Fr. Daniel Okoro',
    mass: { sunday: '7:30 AM, 10:00 AM', weekdays: '6:30 AM, 6:30 PM' },
    desc: 'Known for its devotion to St. Anthony and strong family ministry programs, supporting marriages and family life.',
    img: 'https://readdy.ai/api/search-image?query=Catholic%20church%20with%20distinctive%20architecture%2C%20white%20painted%20walls%20and%20red%20tile%20roof%2C%20church%20with%20arched%20entrance%20and%20bell%20tower%2C%20Nigerian%20parish%20church%20with%20beautiful%20stained%20glass%20windows%2C%20peaceful%20church%20courtyard%20with%20flowers&width=400&height=300&seq=anthony-parish&orientation=landscape',
    coords: { lat: 7.8400, lng: 9.7400 }
  }
])

/** Filters */
const regions: Array<'all' | Region> = ['all', 'central', 'northern', 'southern']
const filter = ref<'all' | Region>('all')
const filteredParishes = computed(() => {
  return filter.value === 'all'
    ? parishes.value
    : parishes.value.filter(p => p.region === filter.value)
})
const setFilter = (r: 'all' | Region) => (filter.value = r)

/** Leaflet map (dynamic import so SSR/builds don’t choke) */
const mapEl = ref<HTMLDivElement | null>(null)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let map: any = null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let markersLayer: any = null
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let Lref: any | null = null

const initMap = async () => {
  if (!mapEl.value) return
  const leafletMod = await import('leaflet')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const L: any = (leafletMod as any).default ?? leafletMod
  // leaflet css (Vite handles this import side-effect)
  await import('leaflet/dist/leaflet.css')
  Lref = L

  // Fix default marker icon paths in bundlers
  delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)['_getIconUrl']
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).toString(),
    iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).toString(),
    shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).toString()
  })

  map = L.map(mapEl.value).setView([7.8711, 9.7800], 11)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map)

  markersLayer = L.layerGroup().addTo(map)
  renderMarkers()
}

const renderMarkers = () => {
  if (!map || !markersLayer || !Lref) return
  markersLayer.clearLayers()

  const withCoords = filteredParishes.value.filter(p => p.coords)
  if (!withCoords.length) return

  withCoords.forEach(p => {
    const marker = Lref!.marker([p!.coords!.lat, p!.coords!.lng])
      .bindPopup(`<strong>${p.name}</strong><br/>${p.address}`)
    markersLayer.addLayer(marker)
  })

  // fit bounds
  const bounds = Lref!.latLngBounds(
    withCoords.map(p => [p!.coords!.lat, p!.coords!.lng])
  )
  map.fitBounds(bounds, { padding: [30, 30] })
}

/** Keep map markers in sync with filter */
watch(filteredParishes, async () => {
  await nextTick()
  renderMarkers()
})

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

<template>
  <div class="parishes-page">
    <!-- Hero -->
    <section class="parish-hero-bg min-h-96 flex items-center pt-20">
      <div class="max-w-7xl mx-auto px-6 w-full">
        <div class="text-center text-white scroll-reveal">
          <h1 class="font-playfair text-5xl lg:text-6xl font-bold mb-6">Our Parishes</h1>
          <p class="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            Discover the vibrant Catholic communities throughout the Diocese of Wukari
          </p>
        </div>
      </div>
    </section>

    <!-- Locations + Filters + Map -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12 scroll-reveal">
          <h2 class="font-playfair text-3xl font-bold text-primary mb-4">Parish Locations</h2>
          <p class="text-lg text-gray-600">Explore our parishes across different regions and deaneries</p>
        </div>

        <div class="mb-8 scroll-reveal">
          <div class="flex flex-wrap justify-center gap-4">
            <button
              v-for="r in regions"
              :key="r"
              @click="setFilter(r)"
              class="filter-btn px-6 py-3 rounded-button font-medium transition-colors whitespace-nowrap"
              :class="{
                'parish-filter-active bg-primary text-white': filter === r,
                'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white': filter !== r
              }"
              :data-filter="r"
            >
              <template v-if="r === 'all'">All Parishes</template>
              <template v-else-if="r === 'central'">Central Deanery</template>
              <template v-else>{{ r.charAt(0).toUpperCase() + r.slice(1) }} Region</template>
            </button>
          </div>
        </div>

        <div class="map-container h-96 rounded-3xl shadow-lg scroll-reveal">
          <div ref="mapEl" class="w-full h-full rounded-3xl overflow-hidden"></div>
        </div>
      </div>
    </section>

    <!-- Directory -->
    <section class="py-20" style="background-color: #f9f7f3;">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="font-playfair text-4xl font-bold text-primary mb-4">Parish Directory</h2>
          <p class="text-xl text-gray-600">Connect with our parish communities</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="p in filteredParishes"
            :key="p.id"
            class="parish-card bg-white rounded-3xl overflow-hidden shadow-lg card-hover scroll-reveal"
            :data-region="p.region"
          >
            <div class="h-48 overflow-hidden">
              <img :src="p.img" :alt="p.name" loading="lazy" decoding="async" referrerpolicy="no-referrer" class="w-full h-full object-cover object-top" />
            </div>
            <div class="p-6">
              <h3 class="font-playfair text-xl font-semibold text-primary mb-2">{{ p.name }}</h3>

              <div class="flex items-center text-gray-600 mb-3">
                <i class="ri-map-pin-line text-secondary mr-2"></i>
                <span class="text-sm">{{ p.address }}</span>
              </div>

              <div class="flex items-center text-gray-600 mb-3">
                <i class="ri-phone-line text-secondary mr-2"></i>
                <span class="text-sm">{{ p.phone }}</span>
              </div>

              <div class="flex items-center text-gray-600 mb-4">
                <i class="ri-user-line text-secondary mr-2"></i>
                <span class="text-sm">{{ p.priest }}</span>
              </div>

              <div class="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 class="font-semibold text-gray-800 mb-2">Mass Schedule</h4>
                <p class="text-sm text-gray-600">Sunday: {{ p.mass.sunday }}</p>
                <p class="text-sm text-gray-600">Weekdays: {{ p.mass.weekdays }}</p>
              </div>

              <p class="text-gray-600 text-sm mb-4">
                {{ p.desc }}
              </p>

              <button
                class="w-full bg-primary text-white py-2 rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap"
              >
                Visit Parish
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="font-playfair text-4xl font-bold text-primary mb-4">Parish Statistics</h2>
          <p class="text-xl text-gray-600">Our growing Catholic community</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 card-hover scroll-reveal">
            <div class="text-4xl font-bold text-primary mb-2">15</div>
            <div class="text-gray-600 font-medium">Active Parishes</div>
          </div>
          <div class="text-center bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 card-hover scroll-reveal">
            <div class="text-4xl font-bold text-secondary mb-2">25,000+</div>
            <div class="text-gray-600 font-medium">Registered Parishioners</div>
          </div>
          <div class="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 card-hover scroll-reveal">
            <div class="text-4xl font-bold text-primary mb-2">18</div>
            <div class="text-gray-600 font-medium">Parish Priests</div>
          </div>
          <div class="text-center bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 card-hover scroll-reveal">
            <div class="text-4xl font-bold text-secondary mb-2">4</div>
            <div class="text-gray-600 font-medium">Deaneries</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Parishes -->
    <section class="py-20" style="background-color: #f9f7f3;">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="font-playfair text-4xl font-bold text-primary mb-4">Featured Parishes</h2>
          <p class="text-xl text-gray-600">Highlighting our special parish communities</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <div class="bg-white rounded-3xl overflow-hidden shadow-lg card-hover scroll-reveal">
            <div class="h-64 overflow-hidden">
              <img loading="lazy" decoding="async" referrerpolicy="no-referrer"
                src="https://readdy.ai/api/search-image?query=magnificent%20Catholic%20cathedral%20interior%20with%20high%20vaulted%20ceilings%2C%20beautiful%20altar%20with%20golden%20tabernacle%2C%20wooden%20pews%20arranged%20in%20rows%2C%20stained%20glass%20windows%20casting%20colorful%20light%2C%20sacred%20atmosphere%20with%20religious%20artwork%2C%20Nigerian%20cathedral%20sanctuary&width=600&height=400&seq=cathedral-interior&orientation=landscape"
                alt="Cathedral Interior"
                class="w-full h-full object-cover object-top"
              />
            </div>
            <div class="p-8">
              <h3 class="font-playfair text-2xl font-bold text-primary mb-4">
                St. Augustine Cathedral - Mother Church
              </h3>
              <p class="text-gray-700 mb-6">
                As the Cathedral of the Diocese of Wukari, St. Augustine serves as the mother church where the Bishop celebrates major
                liturgical events. The cathedral hosts ordinations, confirmations, and special diocesan celebrations throughout the year.
              </p>
              <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">Special Celebrations</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Easter Vigil</li>
                    <li>• Christmas Midnight Mass</li>
                    <li>• Ordination Ceremonies</li>
                    <li>• Diocesan Confirmations</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">Facilities</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Seating for 800 people</li>
                    <li>• Adoration Chapel</li>
                    <li>• Parish Hall</li>
                    <li>• Pastoral Center</li>
                  </ul>
                </div>
              </div>
              <button class="bg-primary text-white px-6 py-3 rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap">
                Learn More About Cathedral
              </button>
            </div>
          </div>

          <div class="bg-white rounded-3xl overflow-hidden shadow-lg card-hover scroll-reveal">
            <div class="h-64 overflow-hidden">
              <img loading="lazy" decoding="async" referrerpolicy="no-referrer"
                src="https://readdy.ai/api/search-image?query=historic%20Catholic%20mission%20church%20in%20Nigeria%2C%20old%20colonial%20architecture%20with%20stone%20walls%20and%20wooden%20beams%2C%20traditional%20church%20with%20bell%20tower%20and%20cross%2C%20heritage%20church%20surrounded%20by%20mature%20trees%2C%20historic%20religious%20building%20with%20character&width=600&height=400&seq=historic-mission&orientation=landscape"
                alt="Historic Mission Church"
                class="w-full h-full object-cover object-top"
              />
            </div>
            <div class="p-8">
              <h3 class="font-playfair text-2xl font-bold text-primary mb-4">
                Holy Cross Mission - Historic Foundation
              </h3>
              <p class="text-gray-700 mb-6">
                Established in 1952, Holy Cross Mission holds the distinction of being one of the first Catholic churches in the region.
                This historic parish played a crucial role in the evangelization of the area and continues to serve as a testament to our rich Catholic heritage.
              </p>
              <div class="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">Historical Significance</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Founded in 1952</li>
                    <li>• First Catholic school site</li>
                    <li>• Original missionary center</li>
                    <li>• Heritage preservation</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">Current Ministry</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Rural evangelization</li>
                    <li>• Agricultural programs</li>
                    <li>• Elder care ministry</li>
                    <li>• Cultural preservation</li>
                  </ul>
                </div>
              </div>
              <button class="bg-secondary text-white px-6 py-3 rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap">
                Discover Our History
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visiting Info -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16 scroll-reveal">
          <h2 class="font-playfair text-4xl font-bold text-primary mb-4">Visiting Our Parishes</h2>
          <p class="text-xl text-gray-600">Information for visitors and new parishioners</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16">
          <div class="scroll-reveal">
            <div class="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
              <h3 class="font-playfair text-2xl font-semibold text-primary mb-6">General Mass Times</h3>
              <div class="space-y-6">
                <div>
                  <h4 class="font-semibold text-gray-800 mb-3">Weekend Masses</h4>
                  <div class="space-y-2">
                    <div class="flex justify-between items-center">
                      <span class="text-gray-700">Saturday Evening</span>
                      <span class="text-gray-600">6:00 PM</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-700">Sunday Morning</span>
                      <span class="text-gray-600">7:00 AM, 9:00 AM, 11:00 AM</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800 mb-3">Weekday Masses</h4>
                  <div class="space-y-2">
                    <div class="flex justify-between items-center">
                      <span class="text-gray-700">Monday - Friday</span>
                      <span class="text-gray-600">6:30 AM, 6:00 PM</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-700">Saturday</span>
                      <span class="text-gray-600">7:00 AM</span>
                    </div>
                  </div>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h4 class="font-semibold text-gray-800 mb-2">Special Services</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Adoration: Fridays 7:00 PM - 8:00 PM</li>
                    <li>• Confession: Saturdays 4:00 PM - 5:30 PM</li>
                    <li>• Rosary: Daily 6:00 PM</li>
                    <li>• Novenas: Wednesdays 7:00 PM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="scroll-reveal">
            <div class="bg-white rounded-3xl p-8 shadow-lg">
              <h3 class="font-playfair text-2xl font-semibold text-primary mb-6">New Parishioner Information</h3>
              <div class="space-y-6">
                <div>
                  <h4 class="font-semibold text-gray-800 mb-3">Registration Process</h4>
                  <ol class="text-gray-700 space-y-2">
                    <li class="flex items-start space-x-3">
                      <span class="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                      <span>Visit the parish office during office hours</span>
                    </li>
                    <li class="flex items-start space-x-3">
                      <span class="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                      <span>Complete the registration form</span>
                    </li>
                    <li class="flex items-start space-x-3">
                      <span class="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                      <span>Meet with the parish priest</span>
                    </li>
                    <li class="flex items-start space-x-3">
                      <span class="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                      <span>Receive your parish welcome packet</span>
                    </li>
                  </ol>
                </div>

                <div class="bg-gray-50 p-4 rounded-lg">
                  <h4 class="font-semibold text-gray-800 mb-3">What to Bring</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Valid identification</li>
                    <li>• Baptismal certificate (if available)</li>
                    <li>• Marriage certificate (if applicable)</li>
                    <li>• Previous parish letter (if transferring)</li>
                  </ul>
                </div>

                <div>
                  <h4 class="font-semibold text-gray-800 mb-3">Parish Office Hours</h4>
                  <div class="space-y-2 text-gray-700">
                    <div class="flex justify-between"><span>Monday - Friday</span><span>9:00 AM - 4:00 PM</span></div>
                    <div class="flex justify-between"><span>Saturday</span><span>10:00 AM - 2:00 PM</span></div>
                    <div class="flex justify-between"><span>Sunday</span><span>After Masses</span></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

