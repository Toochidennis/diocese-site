<template>
  <section class="events-hero-bg pt-32 pb-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center">
        <nav class="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-8">
          <a href="https://readdy.ai/home/596364b0-1abe-4f0c-95b0-76ae3006c30d/b80eee6a-2b58-4e89-9d55-f85493551747"
            data-readdy="true" class="hover:text-primary transition-colors">Home</a>
          <i class="ri-arrow-right-s-line text-gray-400"></i>
          <span class="text-primary font-medium">Events</span>
        </nav>
        <h1 class="font-playfair text-5xl lg:text-6xl font-bold text-primary mb-6">Diocesan Events</h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">Join us in worship, fellowship, and community
          service. Discover upcoming masses, youth activities, educational programs, and special celebrations
          throughout our diocese.</p>
      </div>
    </div>
  </section>
  <section class="py-12 bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-4 gap-6">
        <div class="lg:col-span-3">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
              <div class="relative">
                <input type="text" placeholder="Search events..."
                  class="w-full pl-12 pr-4 py-3 border border-gray-300 !rounded-button focus:outline-none focus:border-primary text-sm">
                <i class="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
            <div class="flex gap-2">
              <div class="relative">
                <button
                  class="flex items-center gap-2 px-4 py-3 border border-gray-300 !rounded-button hover:border-primary transition-colors text-sm whitespace-nowrap"
                  @click="toggleDropdown('categoryDropdown')">
                  <span>All Categories</span>
                  <i class="ri-arrow-down-s-line"></i>
                </button>
                <div id="categoryDropdown"
                  class="hidden absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    @click="selectCategory('All Events')">All Events</a>
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    @click="selectCategory('Masses')">Masses</a>
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    @click="selectCategory('Youth Activities')">Youth Activities</a>
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    @click="selectCategory('Community Outreach')">Community Outreach</a>
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    @click="selectCategory('Education')">Education</a>
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    @click="selectCategory('Retreats')">Retreats</a>
                </div>
              </div>
              <div class="relative">
                <button
                  class="flex items-center gap-2 px-4 py-3 border border-gray-300 !rounded-button hover:border-primary transition-colors text-sm whitespace-nowrap"
                  @click="toggleDropdown('locationDropdown')">
                  <span>All Locations</span>
                  <i class="ri-arrow-down-s-line"></i>
                </button>
                <div id="locationDropdown"
                  class="hidden absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors">All
                    Locations</a>
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors">Cathedral of
                    St. Augustine</a>
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors">St.
                    Mary's Parish</a>
                  <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors">Diocesan
                    Pastoral Center</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button
            class="flex items-center gap-2 px-4 py-3 bg-primary text-white !rounded-button hover:bg-opacity-90 transition-colors text-sm whitespace-nowrap"
            @click="toggleView('calendar')" id="calendarBtn">
            <i class="ri-calendar-line"></i>
            <span>Calendar</span>
          </button>
          <button
            class="flex items-center gap-2 px-4 py-3 border border-gray-300 !rounded-button hover:border-primary transition-colors text-sm whitespace-nowrap"
            @click="toggleView('list')" id="listBtn">
            <i class="ri-list-unordered"></i>
            <span>List</span>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-4 gap-8">
        <div class="lg:col-span-3">
          <div id="calendarView">
            <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div class="flex items-center justify-between mb-6">
                <h2 class="font-playfair text-2xl font-semibold text-primary">December
                  {{ new Date().getFullYear() }}
                </h2>
                <div class="flex items-center gap-2">
                  <button
                    class="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:border-primary transition-colors">
                    <i class="ri-arrow-left-s-line"></i>
                  </button>
                  <button
                    class="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:border-primary transition-colors">
                    <i class="ri-arrow-right-s-line"></i>
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-7 gap-1 mb-4">
                <div class="text-center text-sm font-medium text-gray-500 py-2">Sun</div>
                <div class="text-center text-sm font-medium text-gray-500 py-2">Mon</div>
                <div class="text-center text-sm font-medium text-gray-500 py-2">Tue</div>
                <div class="text-center text-sm font-medium text-gray-500 py-2">Wed</div>
                <div class="text-center text-sm font-medium text-gray-500 py-2">Thu</div>
                <div class="text-center text-sm font-medium text-gray-500 py-2">Fri</div>
                <div class="text-center text-sm font-medium text-gray-500 py-2">Sat</div>
              </div>
              <div class="grid grid-cols-7 gap-1">
                <div
                  class="calendar-day h-16 flex flex-col items-center justify-center text-gray-400 cursor-pointer rounded-lg">
                  1</div>
                <div
                  class="calendar-day h-16 flex flex-col items-center justify-center text-gray-400 cursor-pointer rounded-lg">
                  2</div>
                <div
                  class="calendar-day h-16 flex flex-col items-center justify-center text-gray-400 cursor-pointer rounded-lg">
                  3</div>
                <div
                  class="calendar-day h-16 flex flex-col items-center justify-center text-gray-400 cursor-pointer rounded-lg">
                  4</div>
                <div
                  class="calendar-day h-16 flex flex-col items-center justify-center text-gray-400 cursor-pointer rounded-lg">
                  5</div>
                <div
                  class="calendar-day h-16 flex flex-col items-center justify-center text-gray-400 cursor-pointer rounded-lg">
                  6</div>
                <div
                  class="calendar-day h-16 flex flex-col items-center justify-center text-gray-400 cursor-pointer rounded-lg">
                  7</div>
                <div
                  class="calendar-day has-event h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  <span class="text-sm font-medium">8</span>
                  <div class="flex gap-1 mt-1">
                    <div class="event-dot education"></div>
                  </div>
                </div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  9</div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  10</div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  11</div>
                <div
                  class="calendar-day has-event h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  <span class="text-sm font-medium">12</span>
                  <div class="flex gap-1 mt-1">
                    <div class="event-dot outreach"></div>
                  </div>
                </div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  13</div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  14</div>
                <div
                  class="calendar-day has-event h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  <span class="text-sm font-medium">15</span>
                  <div class="flex gap-1 mt-1">
                    <div class="event-dot youth"></div>
                  </div>
                </div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  16</div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  17</div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  18</div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  19</div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  20</div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  21</div>
                <div
                  class="calendar-day has-event h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  <span class="text-sm font-medium">22</span>
                  <div class="flex gap-1 mt-1">
                    <div class="event-dot retreats"></div>
                  </div>
                </div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  23</div>
                <div
                  class="calendar-day has-event h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  <span class="text-sm font-medium">24</span>
                  <div class="flex gap-1 mt-1">
                    <div class="event-dot masses"></div>
                    <div class="event-dot celebrations"></div>
                  </div>
                </div>
                <div
                  class="calendar-day has-event h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  <span class="text-sm font-medium">25</span>
                  <div class="flex gap-1 mt-1">
                    <div class="event-dot masses"></div>
                  </div>
                </div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  26</div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  27</div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  28</div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  29</div>
                <div class="calendar-day h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  30</div>
                <div
                  class="calendar-day has-event h-16 flex flex-col items-center justify-center cursor-pointer rounded-lg">
                  <span class="text-sm font-medium">31</span>
                  <div class="flex gap-1 mt-1">
                    <div class="event-dot masses"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="listView" class="hidden space-y-6">
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div class="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Christmas%20midnight%20mass%20preparation%2C%20beautifully%20decorated%20church%20altar%20with%20candles%20and%20flowers%2C%20festive%20religious%20decorations%2C%20Christmas%20liturgy%20setup%2C%20sacred%20Christmas%20celebration%2C%20peaceful%20church%20interior%2C%20warm%20golden%20lighting&width=600&height=300&seq=christmas-mass&orientation=landscape"
                  alt="Christmas Eve Mass" class="w-full h-full object-cover object-top">
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Masses</div>
                    <div class="bg-primary text-white px-4 py-2 rounded-lg text-center">
                      <div class="text-xs font-medium">DEC</div>
                      <div class="text-lg font-bold">24</div>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-sm text-gray-500">7:00 PM - 9:00 PM</div>
                    <div class="flex items-center gap-1 text-green-600 text-sm font-medium">
                      <i class="ri-check-line"></i>
                      <span>Available</span>
                    </div>
                  </div>
                </div>
                <h3 class="font-playfair text-xl font-semibold text-primary mb-3">Christmas Eve Midnight
                  Mass</h3>
                <p class="text-gray-600 mb-4">Celebrate the birth of our Lord Jesus Christ with a
                  beautiful midnight mass filled with carols, prayers, and the joy of Christmas. Join
                  our diocesan community for this sacred celebration.</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center text-gray-500 text-sm">
                    <i class="ri-map-pin-line mr-2"></i>
                    <span>Cathedral of St. Augustine</span>
                  </div>
                  <button
                    class="bg-primary text-white px-6 py-2 !rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div class="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Catholic%20youth%20retreat%20gathering%2C%20young%20people%20in%20prayer%20circle%2C%20spiritual%20formation%20activities%2C%20outdoor%20retreat%20setting%2C%20faith%20community%20building%2C%20religious%20education%20program%2C%20peaceful%20natural%20environment&width=600&height=300&seq=youth-retreat&orientation=landscape"
                  alt="Youth Retreat" class="w-full h-full object-cover object-top">
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Youth Activities</div>
                    <div class="bg-primary text-white px-4 py-2 rounded-lg text-center">
                      <div class="text-xs font-medium">DEC</div>
                      <div class="text-lg font-bold">15</div>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-sm text-gray-500">9:00 AM - 5:00 PM</div>
                    <div class="flex items-center gap-1 text-orange-600 text-sm font-medium">
                      <i class="ri-time-line"></i>
                      <span>Limited Spots</span>
                    </div>
                  </div>
                </div>
                <h3 class="font-playfair text-xl font-semibold text-primary mb-3">Annual Youth Retreat
                  2024</h3>
                <p class="text-gray-600 mb-4">Join us for three days of spiritual growth, fellowship,
                  and faith formation as we gather young Catholics from across the diocese for prayer,
                  workshops, and community building.</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center text-gray-500 text-sm">
                    <i class="ri-map-pin-line mr-2"></i>
                    <span>Diocesan Retreat Center</span>
                  </div>
                  <button
                    class="bg-primary text-white px-6 py-2 !rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div class="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Catholic%20charity%20food%20distribution%20event%2C%20volunteers%20helping%20families%2C%20community%20outreach%20program%2C%20charitable%20giving%2C%20social%20service%20ministry%2C%20helping%20the%20needy%2C%20Christian%20compassion%20in%20action&width=600&height=300&seq=charity-drive&orientation=landscape"
                  alt="Charity Drive" class="w-full h-full object-cover object-top">
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Community Outreach</div>
                    <div class="bg-primary text-white px-4 py-2 rounded-lg text-center">
                      <div class="text-xs font-medium">DEC</div>
                      <div class="text-lg font-bold">12</div>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-sm text-gray-500">8:00 AM - 4:00 PM</div>
                    <div class="flex items-center gap-1 text-green-600 text-sm font-medium">
                      <i class="ri-check-line"></i>
                      <span>Open to All</span>
                    </div>
                  </div>
                </div>
                <h3 class="font-playfair text-xl font-semibold text-primary mb-3">Christmas Charity
                  Drive</h3>
                <p class="text-gray-600 mb-4">Help us spread Christmas joy by volunteering for our
                  annual charity drive. We'll be distributing food packages, clothing, and gifts to
                  families in need throughout our diocese.</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center text-gray-500 text-sm">
                    <i class="ri-map-pin-line mr-2"></i>
                    <span>Multiple Parish Locations</span>
                  </div>
                  <button
                    class="bg-primary text-white px-6 py-2 !rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap">
                    Volunteer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-1">
          <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h3 class="font-playfair text-xl font-semibold text-primary mb-6">Event Categories</h3>
            <div class="space-y-4">
              <div
                class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <i class="ri-church-line text-secondary"></i>
                  </div>
                  <span class="font-medium text-gray-700">Masses & Liturgy</span>
                </div>
                <span class="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">12</span>
              </div>
              <div
                class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i class="ri-group-line text-blue-600"></i>
                  </div>
                  <span class="font-medium text-gray-700">Youth Activities</span>
                </div>
                <span class="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">8</span>
              </div>
              <div
                class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <i class="ri-heart-line text-red-600"></i>
                  </div>
                  <span class="font-medium text-gray-700">Community Outreach</span>
                </div>
                <span class="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">6</span>
              </div>
              <div
                class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <i class="ri-book-line text-green-600"></i>
                  </div>
                  <span class="font-medium text-gray-700">Education</span>
                </div>
                <span class="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">4</span>
              </div>
              <div
                class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <i class="ri-hand-heart-line text-purple-600"></i>
                  </div>
                  <span class="font-medium text-gray-700">Retreats</span>
                </div>
                <span class="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">3</span>
              </div>
              <div
                class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <i class="ri-celebration-line text-yellow-600"></i>
                  </div>
                  <span class="font-medium text-gray-700">Celebrations</span>
                </div>
                <span class="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">5</span>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <h3 class="font-playfair text-xl font-semibold text-primary mb-6">Quick Registration</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text"
                  class="w-full px-4 py-2 border border-gray-300 !rounded-button focus:outline-none focus:border-primary text-sm">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email"
                  class="w-full px-4 py-2 border border-gray-300 !rounded-button focus:outline-none focus:border-primary text-sm">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel"
                  class="w-full px-4 py-2 border border-gray-300 !rounded-button focus:outline-none focus:border-primary text-sm">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Interest</label>
                <div class="relative">
                  <button
                    class="w-full flex items-center justify-between px-4 py-2 border border-gray-300 !rounded-button text-sm text-left"
                    @click="toggleDropdown('eventInterest')">
                    <span>Select Event Type</span>
                    <i class="ri-arrow-down-s-line"></i>
                  </button>
                  <div id="eventInterest"
                    class="hidden absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors">Masses &
                      Liturgy</a>
                    <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors">Youth
                      Activities</a>
                    <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors">Community
                      Outreach</a>
                  </div>
                </div>
              </div>
              <button
                class="w-full bg-primary text-white py-3 !rounded-button font-medium hover:bg-opacity-90 transition-colors whitespace-nowrap">
                Register Interest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-16" style="background-color: #f9f7f3;">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="font-playfair text-4xl font-bold text-primary mb-4">Past Events Archive</h2>
        <p class="text-xl text-gray-600">Relive the memorable moments from our recent diocesan events</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
          <div class="h-48 overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Catholic%20confirmation%20ceremony%20completed%2C%20bishop%20with%20newly%20confirmed%20young%20adults%2C%20religious%20sacrament%20celebration%2C%20white%20robes%2C%20spiritual%20milestone%2C%20sacred%20ritual%2C%20faith%20community%20gathering%2C%20joyful%20celebration&width=400&height=300&seq=past-confirmation&orientation=landscape"
              alt="Past Confirmation" class="w-full h-full object-cover object-top">
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">Sacrament</span>
              <span class="text-gray-500 text-sm">Nov 15, 2024</span>
            </div>
            <h3 class="font-playfair text-xl font-semibold text-primary mb-3">Confirmation Ceremony</h3>
            <p class="text-gray-600 mb-4">45 young adults received the sacrament of Confirmation,
              strengthening their faith journey.</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">120 Participants</span>
              <a href="#" class="text-secondary font-medium hover:underline">View Gallery →</a>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
          <div class="h-48 overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Catholic%20harvest%20festival%20celebration%2C%20community%20gathering%20with%20food%20and%20thanksgiving%2C%20parish%20festival%20atmosphere%2C%20families%20celebrating%20together%2C%20religious%20community%20event%2C%20joyful%20celebration%2C%20cultural%20traditions&width=400&height=300&seq=past-harvest&orientation=landscape"
              alt="Past Harvest Festival" class="w-full h-full object-cover object-top">
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">Festival</span>
              <span class="text-gray-500 text-sm">Oct 28, 2024</span>
            </div>
            <h3 class="font-playfair text-xl font-semibold text-primary mb-3">Harvest Festival</h3>
            <p class="text-gray-600 mb-4">A wonderful celebration of God's blessings with traditional foods,
              music, and fellowship.</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">300+ Attendees</span>
              <a href="#" class="text-secondary font-medium hover:underline">View Gallery →</a>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
          <div class="h-48 overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Catholic%20pilgrimage%20group%20at%20shrine%2C%20faithful%20in%20prayer%20at%20sacred%20site%2C%20spiritual%20journey%20completed%2C%20religious%20pilgrimage%20experience%2C%20devotional%20travel%2C%20sacred%20destination%2C%20group%20prayer%20gathering&width=400&height=300&seq=past-pilgrimage&orientation=landscape"
              alt="Past Pilgrimage" class="w-full h-full object-cover object-top">
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">Pilgrimage</span>
              <span class="text-gray-500 text-sm">Sep 20, 2024</span>
            </div>
            <h3 class="font-playfair text-xl font-semibold text-primary mb-3">Annual Pilgrimage</h3>
            <p class="text-gray-600 mb-4">Spiritual journey to the National Shrine brought together pilgrims
              from across the diocese.</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">85 Pilgrims</span>
              <a href="#" class="text-secondary font-medium hover:underline">View Gallery →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { onMounted } from 'vue'

// === Dropdown functionality ===
const dropdowns = document.querySelectorAll<HTMLElement>('[id$="Dropdown"]')

const toggleDropdown = (dropdownId: string) => {
  const dropdown = document.getElementById(dropdownId)
  dropdowns.forEach((d) => {
    if (d.id !== dropdownId) d.classList.add('hidden')
  })
  dropdown?.classList.toggle('hidden')
}

const selectCategory = (category: string) => {
  const button = document.querySelector<HTMLSpanElement>(
    '[data-category-button] span'
  )
  if (button) button.textContent = category
  document.getElementById('categoryDropdown')?.classList.add('hidden')
}

// === View toggle ===
const calendarView = document.getElementById('calendarView')
const listView = document.getElementById('listView')
const calendarBtn = document.getElementById('calendarBtn')
const listBtn = document.getElementById('listBtn')

const toggleView = (view: 'calendar' | 'list') => {
  if (!calendarView || !listView || !calendarBtn || !listBtn) return

  const active = ['bg-primary', 'text-white']
  const inactive = ['border', 'border-gray-300']

  if (view === 'calendar') {
    calendarView.classList.remove('hidden')
    listView.classList.add('hidden')
    calendarBtn.classList.add(...active)
    calendarBtn.classList.remove(...inactive)
    listBtn.classList.remove(...active)
    listBtn.classList.add(...inactive)
  } else {
    listView.classList.remove('hidden')
    calendarView.classList.add('hidden')
    listBtn.classList.add(...active)
    listBtn.classList.remove(...inactive)
    calendarBtn.classList.remove(...active)
    calendarBtn.classList.add(...inactive)
  }
}

onMounted(() => {


  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('[data-dropdown-toggle]') && !target.closest('[id$="Dropdown"]')) {
      dropdowns.forEach((d) => d.classList.add('hidden'))
    }
  })


  // expose for DOM @click fallback (optional)
  Object.assign(window, { toggleDropdown, selectCategory, toggleView })
})
</script>
