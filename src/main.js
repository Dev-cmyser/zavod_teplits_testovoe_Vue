// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'
import YmapPlugin from 'vue-yandex-maps'

// const settings = {
//   apiKey: 'd76ea29f-f43f-471d-8124-45cf33f4afcf',
//   lang: 'ru_RU',
//   coordorder: 'latlong',
//   enterprise: false,
//   version: '2.1'
// }

createApp(App).use(YmapPlugin).mount('#app')
