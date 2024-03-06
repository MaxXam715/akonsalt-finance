import { createApp } from 'vue'
import router from './js/router.js'
import './css/reset.css'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.mount('#app')