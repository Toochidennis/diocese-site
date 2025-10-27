  <template>
  <footer class="bg-primary text-white py-16">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <div class="flex items-center space-x-3 mb-6">
            <div
              class="w-12 h-12 bg-secondary rounded-full flex items-center justify-center"
            >
              <i class="ri-church-line text-white text-xl"></i>
            </div>
            <div>
              <h3 class="font-['Pacifico'] text-xl">Diocese</h3>
              <p class="text-sm opacity-80">of Wukari</p>
            </div>
          </div>
          <p class="text-gray-300 mb-4">
            Serving the Catholic community of Wukari with faith, hope, and love since 1996.
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <i class="ri-facebook-fill"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <i class="ri-twitter-fill"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <i class="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 class="font-playfair text-lg font-semibold mb-6">Quick Links</h4>
          <ul class="space-y-3">
            <li><router-link to="/parishes" class="text-gray-300 hover:text-white transition-colors">Parishes</router-link></li>
            <li><router-link to="/gallery" class="text-gray-300 hover:text-white transition-colors">Galleries</router-link></li>
            <li><router-link to="/events" class="text-gray-300 hover:text-white transition-colors">Events</router-link></li>
            <li><router-link to="/news" class="text-gray-300 hover:text-white transition-colors">News</router-link></li>
            <li><router-link to="/about" class="text-gray-300 hover:text-white transition-colors">About Us</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="font-playfair text-lg font-semibold mb-6">Contact Info</h4>
          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <i class="ri-map-pin-line text-secondary mt-1"></i>
              <div class="text-gray-300">
                <p>Diocesan Secretariat</p>
                <p>PMB 1002, Wukari</p>
                <p>Taraba State, Nigeria</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <i class="ri-phone-line text-secondary"></i>
              <span class="text-gray-300">+234 803 123 4567</span>
            </div>
            <div class="flex items-center space-x-3">
              <i class="ri-mail-line text-secondary"></i>
              <span class="text-gray-300">info@dioceseofwukari.org</span>
            </div>
          </div>
        </div>

        <div>
          <h4 class="font-playfair text-lg font-semibold mb-6">Newsletter</h4>
          <p class="text-gray-300 mb-4">Stay updated with our latest news and events.</p>
          <div class="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              v-model="email"
              class="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
            />
            <button
              @click="subscribe"
              class="bg-secondary text-white px-4 py-2 !rounded-button hover:bg-opacity-90 transition-colors whitespace-nowrap"
            >
              <i class="ri-send-plane-line"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="border-t border-white/20 pt-8 text-center">
        <p class="text-gray-300">
          &copy; {{ new Date().getFullYear() }} Catholic Diocese of Wukari. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

function subscribe() {
  if (!email.value) {
    alert('Please enter your email address.')
    return
  }
  alert(`Subscribed with: ${email.value}`)
  email.value = ''
}
</script>
