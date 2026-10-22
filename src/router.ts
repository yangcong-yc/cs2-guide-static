import type { RouteRecordRaw } from 'vue-router'
import Home from './pages/Home.vue'
import Maps from './pages/Maps.vue'
import MapDetail from './pages/MapDetail.vue'
import Grenades from './pages/Grenades.vue'
import GrenadeDetail from './pages/GrenadeDetail.vue'
import Videos from './pages/Videos.vue'
import VideoDetail from './pages/VideoDetail.vue'
import NotFound from './pages/NotFound.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Home, meta: { title: 'CS2 攻略站｜首页' } },
  { path: '/maps', component: Maps, meta: { title: '地图攻略｜CS2 攻略站' } },
  { path: '/maps/:slug', component: MapDetail, meta: { title: '地图详情｜CS2 攻略站' } },
  { path: '/grenades', component: Grenades, meta: { title: '投掷物数据库｜CS2 攻略站' } },
  { path: '/grenades/:slug', component: GrenadeDetail, meta: { title: '投掷物攻略｜CS2 攻略站' } },
  { path: '/videos', component: Videos, meta: { title: '视频攻略｜CS2 攻略站' } },
  { path: '/videos/:slug', component: VideoDetail, meta: { title: '视频详情｜CS2 攻略站' } },
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: '页面不存在｜CS2 攻略站' } },
]