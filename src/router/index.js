import { createRouter, createWebHashHistory } from 'vue-router'
import Cuaca from '../components/WidgetCuaca.vue'
import Stopwatch from '../components/WidgetStopwatch.vue'
import Lokasi from '../components/WidgetLokasi.vue'
import KlikCepat from '../components/WidgetKlikCepat.vue'
import Foto from '../components/WidgetFoto.vue'

const routes = [
  {
    path: '/',
    name: 'cuaca',
    component: Cuaca
  },
  {
    path: '/stopwatch',
    name: 'stopwatch',
    component: Stopwatch
  },
  {
    path: '/lokasi',
    name: 'lokasi',
    component: Lokasi
  },
  {
    path: '/klikcepat',
    name: 'KlikCepat',
    component: KlikCepat
  },
  {
    path: '/foto',
    name: 'foto',
    component: Foto
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
