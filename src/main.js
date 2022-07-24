import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();
import './Libary/tailwind/tailwind.css'
createApp(App).use(store).use(router).mount('#app')
