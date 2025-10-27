import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import '@/assets/styles/main.css'
//import 'leaflet/dist/leaflet.css'
import 'remixicon/fonts/remixicon.css'

const app = createApp(App)
app.use(router)

// Dynamically update the page title based on route meta
const SITE_NAME = 'Catholic Diocese of Wukari'
router.afterEach((to) => {
	const meta = to.meta as Record<string, unknown>
	const page = typeof meta.title === 'string' ? meta.title : ''
	document.title = page ? `${page} | ${SITE_NAME}` : SITE_NAME
})

app.mount('#app')
