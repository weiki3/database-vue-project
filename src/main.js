import './assets/main.css'

import { createApp } from 'vue'
import pinia from './stores'
import App from './App.vue'
import router from './router'
import axios from 'axios'



// 配置 axios baseurl 和 credentials
axios.defaults.baseURL = 'https://8.134.198.180:8080'
axios.defaults.withCredentials = true


const app = createApp(App)
app.use(pinia)
app.use(router)

app.mount('#app')
