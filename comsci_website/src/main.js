import { createApp } from 'vue'
import App from './App.vue'

import Flicking from "@egjs/vue3-flicking/dist/flicking.esm";
import "@egjs/vue3-flicking/dist/flicking.css";
import "@egjs/vue3-flicking/dist/flicking-inline.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";


import './assets/css/style.css'
// import './assets/css/owl.carousel.css'
// import './assets/css/owl.theme.css'
// import './assets/css/owl.transitions.css'
import './assets/css/ResponsiveCSS/responsive.css'
import router from './router'



const app = createApp(App)
app.component("FlickingComponent", Flicking)
app.use(router)
app.mount('#app')

