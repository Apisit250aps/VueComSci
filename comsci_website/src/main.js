import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/style.css'
// import './assets/css/owl.carousel.css'
// import './assets/css/owl.theme.css'
// import './assets/css/owl.transitions.css'
import './assets/css/ResponsiveCSS/responsive.css'
import router from './router'

createApp(App).use(router).mount('#app')
