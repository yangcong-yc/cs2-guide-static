<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import maps from '../data/maps.json'
import grenades from '../data/grenades.json'
import SectionTitle from '../components/SectionTitle.vue'
import GuideCard from '../components/GuideCard.vue'
const route = useRoute()
const map = computed(() => maps.find((m:any) => m.slug === route.params.slug))
const related = computed(() => grenades.filter((g:any) => g.map === map.value?.name))
</script>
<template>
  <div v-if="map" class="page-wrap inner-page">
    <RouterLink to="/maps" class="back-link">← 返回地图列表</RouterLink>
    <section class="detail-hero"><img :src="map.image" :alt="map.name"/><div class="detail-hero-shade"></div><div class="detail-hero-copy"><p class="eyebrow">{{ map.nameZh }} / MAP GUIDE</p><h1>{{ map.name }}</h1><p>{{ map.summary }}</p><span class="tag">{{ map.difficulty }}</span></div></section>
    <div class="detail-layout">
      <article class="article-content">
        <div class="article-intro"><p class="eyebrow">OVERVIEW</p><h2>地图要点</h2><ul class="highlight-list"><li v-for="h in map.highlights" :key="h">{{ h }}</li></ul></div>
        <section v-for="section in map.sections" :key="section.title" class="article-section"><h2>{{ section.title }}</h2><p>{{ section.body }}</p></section>
        <div class="notice"><b>训练提示</b><p>攻略用于建立思路。实际战术需要根据对手站位、经济、队友沟通和游戏版本调整。</p></div>
      </article>
      <aside class="detail-aside"><div class="aside-panel"><p class="eyebrow">QUICK LINKS</p><h3>快速入口</h3><RouterLink to="/grenades">投掷物数据库 <span>↗</span></RouterLink><RouterLink to="/videos">视频攻略 <span>↗</span></RouterLink><RouterLink to="/maps">其他地图 <span>↗</span></RouterLink></div><div class="aside-panel"><p class="eyebrow">RELATED UTILITY</p><h3>相关投掷物</h3><RouterLink v-for="g in related" :key="g.slug" :to="`/grenades/${g.slug}`">{{ g.title }} <span>↗</span></RouterLink><p v-if="!related.length" class="muted-text">相关内容正在整理中。</p></div></aside>
    </div>
  </div>
  <div v-else class="page-wrap inner-page"><h1>没有找到这张地图</h1><RouterLink to="/maps" class="btn btn-primary">返回地图列表</RouterLink></div>
</template>