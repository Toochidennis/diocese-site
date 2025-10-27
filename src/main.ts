import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import '@/assets/styles/main.css'
//import 'leaflet/dist/leaflet.css'
import 'remixicon/fonts/remixicon.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
