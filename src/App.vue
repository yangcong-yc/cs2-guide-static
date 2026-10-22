<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, RouterLink, RouterView } from 'vue-router'
import maps from './data/maps.json'
import grenades from './data/grenades.json'
import videos from './data/videos.json'

const route = useRoute()
const search = ref('')
const menuOpen = ref(false)
const results = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return []
  return [
    ...maps.map((x:any) => ({ title: x.name, subtitle: '地图攻略', url: `/maps/${x.slug}`, text: `${x.name} ${x.summary}` })),
    ...grenades.map((x:any) => ({ title: x.title, subtitle: '投掷物', url: `/grenades/${x.slug}`, text: `${x.title} ${x.map} ${x.type} ${x.side}` })),
    ...videos.map((x:any) => ({ title: x.title, subtitle: '视频攻略', url: `/videos/${x.slug}`, text: `${x.title} ${x.map} ${x.category}` })),
  ].filter(x => x.text.toLowerCase().includes(q)).slice(0, 7)
})
watch(() => route.fullPath, () => {
  menuOpen.value = false
  search.value = ''
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
watch(() => route.meta.title, (title) => {
  if (title) document.title = String(title)
}, { immediate: true })
</script>

<template>
  <div class="site-shell">
    <header class="topbar">
      <RouterLink class="brand" to="/">
        <span class="brand-mark">CS<span>2</span></span>
        <span class="brand-copy"><b>攻略站</b><small>COUNTER-STRIKE 2 GUIDE</small></span>
      </RouterLink>
      <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="切换导航">☰</button>
      <nav :class="{ open: menuOpen }">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/maps">地图攻略</RouterLink>
        <RouterLink to="/grenades">投掷物数据库</RouterLink>
        <RouterLink to="/videos">视频攻略</RouterLink>
      </nav>
      <div class="search-wrap">
        <input v-model="search" placeholder="搜索地图、投掷物、攻略..." aria-label="搜索攻略" />
        <span class="search-icon">⌕</span>
        <div v-if="search.trim()" class="search-results">
          <RouterLink v-for="item in results" :key="item.url" :to="item.url" class="search-result">
            <span><b>{{ item.title }}</b><small>{{ item.subtitle }}</small></span><span>↗</span>
          </RouterLink>
          <p v-if="!results.length" class="no-results">没有找到相关攻略</p>
        </div>
      </div>
    </header>
    <main><RouterView /></main>
    <footer class="footer">
      <RouterLink class="footer-brand" to="/">CS<span>2</span> 攻略站</RouterLink>
      <p>为每一回合准备更好的策略。</p>
      <small>非官方玩家攻略项目，与 Valve / Counter-Strike 官方无隶属关系。游戏名称及相关商标归其各自权利人所有。</small>
    </footer>
  </div>
</template>