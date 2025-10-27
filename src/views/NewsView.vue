<template>
  <section class="news-hero-bg min-h-96 flex items-center pt-20">
    <div class="max-w-7xl mx-auto px-6 w-full">
      <div class="text-center text-white scroll-reveal">
        <h1 class="font-playfair text-5xl lg:text-6xl font-bold mb-6">
          Diocese News & Updates
        </h1>
        <p class="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
          Stay informed with the latest news, announcements, and updates from the Catholic Diocese of Wukari
        </p>
      </div>
    </div>
  </section>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-12 scroll-reveal">
        <div class="max-w-2xl mx-auto mb-8">
          <div class="relative">
            <input type="text" placeholder="Search news articles..."
              class="w-full px-6 py-4 pr-12 text-lg border border-gray-200 !rounded-button focus:outline-none focus:search-focus transition-all">
            <button
              class="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
              <i class="ri-search-line text-xl"></i>
            </button>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <button
            class="category-btn category-active px-6 py-3 !rounded-button font-medium transition-colors whitespace-nowrap"
            data-category="all">
            All News
          </button>
          <button
            class="category-btn bg-gray-100 text-gray-700 hover:bg-primary hover:text-white px-6 py-3 !rounded-button font-medium transition-colors whitespace-nowrap"
            data-category="parish">
            Parish News
          </button>
          <button
            class="category-btn bg-gray-100 text-gray-700 hover:bg-primary hover:text-white px-6 py-3 !rounded-button font-medium transition-colors whitespace-nowrap"
            data-category="events">
            Diocese Events
          </button>
          <button
            class="category-btn bg-gray-100 text-gray-700 hover:bg-primary hover:text-white px-6 py-3 !rounded-button font-medium transition-colors whitespace-nowrap"
            data-category="community">
            Community Updates
          </button>
          <button
            class="category-btn bg-gray-100 text-gray-700 hover:bg-primary hover:text-white px-6 py-3 !rounded-button font-medium transition-colors whitespace-nowrap"
            data-category="announcements">
            Announcements
          </button>
          <button
            class="category-btn bg-gray-100 text-gray-700 hover:bg-primary hover:text-white px-6 py-3 !rounded-button font-medium transition-colors whitespace-nowrap"
            data-category="press">
            Press Releases
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="py-16" style="background-color: #f9f7f3;">
    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-16 scroll-reveal">
        <h2 class="font-playfair text-3xl font-bold text-primary mb-4 text-center">Featured News</h2>
      </div>
      <div class="bg-white rounded-3xl overflow-hidden shadow-lg card-hover scroll-reveal">
        <div class="lg:flex">
          <div class="lg:w-1/2 h-80 lg:h-auto">
            <img referrerpolicy="no-referrer"
              src="https://readdy.ai/api/search-image?query=Catholic%20bishop%20celebrating%20mass%20in%20Nigerian%20cathedral%2C%20beautiful%20liturgical%20ceremony%20with%20altar%20servers%20and%20congregation%2C%20ornate%20church%20interior%20with%20golden%20altar%20and%20religious%20artwork%2C%20solemn%20Catholic%20worship%20service%2C%20African%20Catholic%20bishop%20in%20ceremonial%20vestments&width=600&height=400&seq=featured-news&orientation=landscape"
              alt="Featured News" class="w-full h-full object-cover object-top">
          </div>
          <div class="lg:w-1/2 p-8 lg:p-12">
            <div class="flex items-center space-x-4 mb-4">
              <span class="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">Diocese
                Events</span>
              <span class="text-gray-500 text-sm">December 15, 2024</span>
            </div>
            <h3 class="font-playfair text-3xl font-bold text-primary mb-4">
              Bishop Announces New Pastoral Initiatives for 2025
            </h3>
            <p class="text-gray-600 mb-4 text-sm">By Rev. Fr. Michael Adamu</p>
            <p class="text-gray-700 mb-6 leading-relaxed">
              His Lordship, Bishop Emmanuel Badejo, has unveiled comprehensive pastoral initiatives aimed
              at strengthening evangelization efforts across all parishes in the Diocese of Wukari. The
              new programs focus on youth engagement, family ministry, and community outreach to enhance
              spiritual growth and social development.
            </p>
            <a href="https://readdy.ai/home/596364b0-1abe-4f0c-95b0-76ae3006c30d/f18f1c85-acdd-41bf-9057-a3bb25181cef"
              data-readdy="true"
              class="inline-block bg-primary text-white px-8 py-3 !rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap">
              Read Full Article
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col lg:flex-row gap-12">
        <div class="lg:w-2/3">
          <div class="mb-12 scroll-reveal">
            <h2 class="font-playfair text-3xl font-bold text-primary mb-4">Recent News</h2>
          </div>
          <div class="space-y-8">
            <article
              class="news-card bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm scroll-reveal"
              data-category="parish">
              <div class="md:flex">
                <div class="md:w-1/3 h-48 md:h-auto">
                  <img loading="lazy" decoding="async" referrerpolicy="no-referrer"
                    src="https://readdy.ai/api/search-image?query=Catholic%20church%20construction%20project%20in%20Nigeria%2C%20new%20parish%20church%20building%20under%20construction%2C%20modern%20church%20architecture%20with%20cross%20and%20bell%20tower%2C%20construction%20workers%20and%20community%20members%20celebrating%2C%20progress%20on%20new%20Catholic%20parish%20building&width=400&height=300&seq=church-construction&orientation=landscape"
                    alt="Church Construction" class="w-full h-full object-cover object-top">
                </div>
                <div class="md:w-2/3 p-6">
                  <div class="flex items-center space-x-4 mb-3">
                    <span class="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">Parish
                      News</span>
                    <span class="text-gray-500 text-sm">December 12, 2024</span>
                  </div>
                  <h3 class="font-playfair text-xl font-semibold text-primary mb-2">
                    New Parish Church Nears Completion in Takum
                  </h3>
                  <p class="text-gray-600 mb-3 text-sm">By Rev. Fr. James Onyeka</p>
                  <p class="text-gray-700 mb-4 text-sm leading-relaxed">
                    The construction of St. Peter's Parish Church in Takum is 85% complete, with the
                    blessing and dedication ceremony scheduled for early 2025. The new facility will
                    accommodate 500 worshippers and includes modern amenities.
                  </p>
                  <button class="text-primary hover:text-secondary font-medium text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
            <article
              class="news-card bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm scroll-reveal"
              data-category="community">
              <div class="md:flex">
                <div class="md:w-1/3 h-48 md:h-auto">
                  <img loading="lazy" decoding="async" referrerpolicy="no-referrer"
                    src="https://readdy.ai/api/search-image?query=Catholic%20charity%20outreach%20program%20in%20Nigerian%20community%2C%20volunteers%20distributing%20food%20and%20supplies%20to%20families%2C%20church%20members%20helping%20poor%20and%20needy%2C%20community%20service%20and%20social%20ministry%2C%20Catholic%20social%20action%20in%20rural%20Nigeria&width=400&height=300&seq=charity-outreach&orientation=landscape"
                    alt="Charity Outreach" class="w-full h-full object-cover object-top">
                </div>
                <div class="md:w-2/3 p-6">
                  <div class="flex items-center space-x-4 mb-3">
                    <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Community
                      Updates</span>
                    <span class="text-gray-500 text-sm">December 10, 2024</span>
                  </div>
                  <h3 class="font-playfair text-xl font-semibold text-primary mb-2">
                    Diocese Launches Christmas Charity Drive
                  </h3>
                  <p class="text-gray-600 mb-3 text-sm">By Mrs. Grace Okoro</p>
                  <p class="text-gray-700 mb-4 text-sm leading-relaxed">
                    The annual Christmas charity initiative has begun across all parishes, aiming to
                    provide food packages, clothing, and educational materials to over 2,000
                    families in need throughout the diocese.
                  </p>
                  <button class="text-primary hover:text-secondary font-medium text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
            <article
              class="news-card bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm scroll-reveal"
              data-category="events">
              <div class="md:flex">
                <div class="md:w-1/3 h-48 md:h-auto">
                  <img loading="lazy" decoding="async" referrerpolicy="no-referrer"
                    src="https://readdy.ai/api/search-image?query=Catholic%20youth%20conference%20in%20Nigeria%2C%20young%20people%20gathered%20for%20religious%20event%2C%20youth%20ministry%20program%20with%20speakers%20and%20activities%2C%20Catholic%20teenagers%20and%20young%20adults%20in%20church%20setting%2C%20vibrant%20youth%20gathering%20with%20banners&width=400&height=300&seq=youth-conference&orientation=landscape"
                    alt="Youth Conference" class="w-full h-full object-cover object-top">
                </div>
                <div class="md:w-2/3 p-6">
                  <div class="flex items-center space-x-4 mb-3">
                    <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Diocese
                      Events</span>
                    <span class="text-gray-500 text-sm">December 8, 2024</span>
                  </div>
                  <h3 class="font-playfair text-xl font-semibold text-primary mb-2">
                    Annual Youth Conference Set for January 2025
                  </h3>
                  <p class="text-gray-600 mb-3 text-sm">By Rev. Fr. Paul Nkomo</p>
                  <p class="text-gray-700 mb-4 text-sm leading-relaxed">
                    Registration is now open for the Diocese Youth Conference themed "Faith in
                    Action." The three-day event will feature workshops, spiritual talks, and
                    cultural activities for young Catholics aged 16-35.
                  </p>
                  <button class="text-primary hover:text-secondary font-medium text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
            <article
              class="news-card bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm scroll-reveal"
              data-category="announcements">
              <div class="md:flex">
                <div class="md:w-1/3 h-48 md:h-auto">
                  <img loading="lazy" decoding="async" referrerpolicy="no-referrer"
                    src="https://readdy.ai/api/search-image?query=Catholic%20priest%20ordination%20ceremony%20in%20Nigerian%20cathedral%2C%20bishop%20laying%20hands%20on%20new%20priest%2C%20solemn%20ordination%20liturgy%20with%20congregation%2C%20religious%20ceremony%20with%20altar%20servers%20and%20family%20members%2C%20sacred%20Catholic%20ordination%20ritual&width=400&height=300&seq=priest-ordination&orientation=landscape"
                    alt="Priest Ordination" class="w-full h-full object-cover object-top">
                </div>
                <div class="md:w-2/3 p-6">
                  <div class="flex items-center space-x-4 mb-3">
                    <span
                      class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Announcements</span>
                    <span class="text-gray-500 text-sm">December 5, 2024</span>
                  </div>
                  <h3 class="font-playfair text-xl font-semibold text-primary mb-2">
                    Three Deacons to be Ordained Priests in March
                  </h3>
                  <p class="text-gray-600 mb-3 text-sm">By Diocesan Communications</p>
                  <p class="text-gray-700 mb-4 text-sm leading-relaxed">
                    Bishop Emmanuel Badejo announces the upcoming ordination of three deacons to the
                    priesthood. The ceremony will take place at St. Augustine Cathedral on March 19,
                    2025, the Feast of St. Joseph.
                  </p>
                  <button class="text-primary hover:text-secondary font-medium text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
            <article
              class="news-card bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm scroll-reveal"
              data-category="press">
              <div class="md:flex">
                <div class="md:w-1/3 h-48 md:h-auto">
                  <img loading="lazy" decoding="async" referrerpolicy="no-referrer"
                    src="https://readdy.ai/api/search-image?query=Catholic%20education%20program%20in%20Nigerian%20school%2C%20students%20in%20classroom%20with%20teacher%2C%20diocesan%20education%20initiative%20with%20books%20and%20learning%20materials%2C%20Catholic%20school%20environment%20with%20cross%20and%20religious%20symbols%2C%20quality%20education%20in%20church%20setting&width=400&height=300&seq=education-program&orientation=landscape"
                    alt="Education Program" class="w-full h-full object-cover object-top">
                </div>
                <div class="md:w-2/3 p-6">
                  <div class="flex items-center space-x-4 mb-3">
                    <span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">Press
                      Releases</span>
                    <span class="text-gray-500 text-sm">December 3, 2024</span>
                  </div>
                  <h3 class="font-playfair text-xl font-semibold text-primary mb-2">
                    Diocese Partners with Government on Education Initiative
                  </h3>
                  <p class="text-gray-600 mb-3 text-sm">By Communications Office</p>
                  <p class="text-gray-700 mb-4 text-sm leading-relaxed">
                    The Diocese of Wukari has signed a memorandum of understanding with Taraba State
                    Government to improve educational infrastructure and provide scholarships for
                    underprivileged students across the region.
                  </p>
                  <button class="text-primary hover:text-secondary font-medium text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          </div>
          <div class="mt-12 text-center scroll-reveal">
            <button
              class="bg-primary text-white px-8 py-3 !rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap">
              Load More Articles
            </button>
          </div>
        </div>
        <div class="lg:w-1/3">
          <div class="space-y-8">
            <div class="bg-white rounded-2xl p-6 shadow-sm scroll-reveal">
              <h3 class="font-playfair text-xl font-semibold text-primary mb-6">News Categories</h3>
              <div class="space-y-3">
                <div class="flex justify-between items-center py-2 border-b border-gray-100">
                  <span class="text-gray-700">Parish News</span>
                  <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">12</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-gray-100">
                  <span class="text-gray-700">Diocese Events</span>
                  <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">8</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-gray-100">
                  <span class="text-gray-700">Community Updates</span>
                  <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">15</span>
                </div>
                <div class="flex justify-between items-center py-2 border-b border-gray-100">
                  <span class="text-gray-700">Announcements</span>
                  <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">6</span>
                </div>
                <div class="flex justify-between items-center py-2">
                  <span class="text-gray-700">Press Releases</span>
                  <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">4</span>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-sm scroll-reveal">
              <h3 class="font-playfair text-xl font-semibold text-primary mb-6">Recent Announcements</h3>
              <div class="space-y-4">
                <div class="pb-4 border-b border-gray-100">
                  <h4 class="font-medium text-gray-800 mb-2">Christmas Mass Schedule</h4>
                  <p class="text-sm text-gray-600 mb-2">Special Christmas liturgies announced for all
                    parishes</p>
                  <span class="text-xs text-gray-500">Dec 1, 2024</span>
                </div>
                <div class="pb-4 border-b border-gray-100">
                  <h4 class="font-medium text-gray-800 mb-2">Seminary Admission Open</h4>
                  <p class="text-sm text-gray-600 mb-2">Applications for 2025 seminary intake now
                    available</p>
                  <span class="text-xs text-gray-500">Nov 28, 2024</span>
                </div>
                <div class="pb-4 border-b border-gray-100">
                  <h4 class="font-medium text-gray-800 mb-2">Diocesan Pilgrimage</h4>
                  <p class="text-sm text-gray-600 mb-2">Holy Land pilgrimage registration begins
                    January</p>
                  <span class="text-xs text-gray-500">Nov 25, 2024</span>
                </div>
                <div>
                  <h4 class="font-medium text-gray-800 mb-2">Marriage Preparation</h4>
                  <p class="text-sm text-gray-600 mb-2">Pre-Cana courses scheduled for February</p>
                  <span class="text-xs text-gray-500">Nov 22, 2024</span>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-sm scroll-reveal">
              <h3 class="font-playfair text-xl font-semibold text-primary mb-6">Upcoming Events</h3>
              <div class="space-y-4">
                <div class="flex space-x-4">
                  <div class="bg-primary text-white rounded-lg p-3 text-center min-w-16">
                    <div class="text-lg font-bold">25</div>
                    <div class="text-xs">DEC</div>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800">Christmas Day Mass</h4>
                    <p class="text-sm text-gray-600">Special celebration at all parishes</p>
                  </div>
                </div>
                <div class="flex space-x-4">
                  <div class="bg-secondary text-white rounded-lg p-3 text-center min-w-16">
                    <div class="text-lg font-bold">01</div>
                    <div class="text-xs">JAN</div>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800">New Year Prayer Service</h4>
                    <p class="text-sm text-gray-600">Thanksgiving and blessing service</p>
                  </div>
                </div>
                <div class="flex space-x-4">
                  <div class="bg-primary text-white rounded-lg p-3 text-center min-w-16">
                    <div class="text-lg font-bold">15</div>
                    <div class="text-xs">JAN</div>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800">Youth Conference</h4>
                    <p class="text-sm text-gray-600">Three-day spiritual retreat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div class="scroll-reveal">
        <h2 class="font-playfair text-3xl font-bold text-primary mb-4">Stay Updated</h2>
        <p class="text-lg text-gray-600 mb-8">Subscribe to our newsletter for the latest diocesan news and
          updates</p>
        <div class="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
          <div class="max-w-md mx-auto">
            <div class="flex gap-3">
              <input type="email" placeholder="Enter your email address"
                class="flex-1 px-4 py-3 border border-gray-200 !rounded-button focus:outline-none focus:border-primary text-sm">
              <button
                class="bg-primary text-white px-6 py-3 !rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p class="text-xs text-gray-500 mt-3">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {

  // === category filter ===
  const categoryButtons = document.querySelectorAll<HTMLButtonElement>('.category-btn')
  const newsCards = document.querySelectorAll<HTMLElement>('.news-card')

  categoryButtons.forEach((button) => {
    button.addEventListener('click', function (this: HTMLButtonElement) {
      const category = this.getAttribute('data-category')

      categoryButtons.forEach((btn) => {
        btn.classList.remove('category-active')
        btn.classList.add('bg-gray-100', 'text-gray-700', 'hover:bg-primary', 'hover:text-white')
      })

      this.classList.add('category-active')
      this.classList.remove('bg-gray-100', 'text-gray-700', 'hover:bg-primary', 'hover:text-white')

      newsCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category')
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'block'
          setTimeout(() => {
            card.style.opacity = '1'
            card.style.transform = 'translateY(0)'
          }, 100)
        } else {
          card.style.opacity = '0'
          card.style.transform = 'translateY(20px)'
          setTimeout(() => {
            card.style.display = 'none'
          }, 300)
        }
      })
    })
  })

  // === search functionality ===
  const searchInput = document.querySelector<HTMLInputElement>(
    'input[placeholder="Search news articles..."]'
  )

  if (searchInput) {
    searchInput.addEventListener('focus', () => searchInput.classList.add('search-focus'))
    searchInput.addEventListener('blur', () => searchInput.classList.remove('search-focus'))

    searchInput.addEventListener('input', function (this: HTMLInputElement) {
      const term = this.value.toLowerCase()
      newsCards.forEach((card) => {
        const title = card.querySelector('h3')?.textContent?.toLowerCase() ?? ''
        const content = card.querySelector('p')?.textContent?.toLowerCase() ?? ''
        card.style.display = title.includes(term) || content.includes(term) ? 'block' : 'none'
      })
    })
  }
})
</script>
