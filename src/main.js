import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import { vfmPlugin } from 'vue-final-modal'

import "./assets/styles/index.css"

createApp(App).use(router).use(vfmPlugin).mount('#app')
