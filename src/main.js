import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './plugins/vuetify'
import { VProgressCircular } from 'vuetify/components'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import Vue3TouchEvents from "vue3-touch-events"
const app = createApp(App)

app.use(createPinia())

app.use(router)
app.use(vuetify) // ✅ Vuetify properly applied
app.use(VProgressCircular)
app.use(Vue3TouchEvents)
app.mount('#app')
