import { createRouter, createWebHistory } from 'vue-router'

import Beranda from '../Tampilan/Beranda.vue'
import Jurusan from '../Tampilan/Jurusan.vue'
import Dasar from '../Tampilan/Dasar.vue'
import Menengah from '../Tampilan/Menengah.vue'
import Lanjut from '../Tampilan/Lanjut.vue'
import Notifikasi from '../Tampilan/Notifikasi.vue'
import Profil from '../Tampilan/Profil.vue'
import Quiz from '../Tampilan/Quiz.vue'
import RencanaBelajar from '../Tampilan/RencanaBelajar.vue'

const routes = [
  { path: '/', component: Beranda },
  { path: '/jurusan', component: Jurusan },
  { path: '/dasar', component: Dasar },
  { path: '/menengah', component: Menengah },
  { path: '/lanjut', component: Lanjut },
  { path: '/notifikasi', component: Notifikasi },
  { path: '/profil', component: Profil },
  { path: '/quiz', component: Quiz },
  { path: '/rencanabelajar', component: RencanaBelajar }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
