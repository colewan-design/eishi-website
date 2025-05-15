import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './plugins/vuetify'
import { VProgressCircular } from 'vuetify/components'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import Vue3TouchEvents from "vue3-touch-events"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ObserveVisibility } from 'vue-observe-visibility'
const app = createApp(App)

app.use(createPinia())

app.use(router)
app.use(vuetify) // ✅ Vuetify properly applied
app.use(VProgressCircular)
app.use(Vue3TouchEvents)
app.directive('observe-visibility', ObserveVisibility)
app.mount('#app')

// Initialize AOS after mounting
AOS.init({
    once: false, // Animation will fire every time element scrolls into view
    duration: 1000, // Duration in milliseconds
    easing: 'ease-in-out',
})
