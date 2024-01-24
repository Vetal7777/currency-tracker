import App from '@/App.vue'
import '@/assets/style/tailwind.css'
import router from '@/router'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
// @ts-ignore
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

const pinia = createPinia()
const app = createApp(App)

app.component('VueTailwindDatepicker', VueTailwindDatepicker)
app.use(router)
app.use(pinia)
app.mount('#app')
