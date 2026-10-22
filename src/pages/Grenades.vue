<script setup lang="ts">
import { computed, ref } from 'vue'
import grenades from '../data/grenades.json'
import maps from '../data/maps.json'
import GuideCard from '../components/GuideCard.vue'
const q = ref('')
const mapFilter = ref('全部地图')
const sideFilter = ref('全部阵营')
const typeFilter = ref('全部类型')
const difficultyFilter = ref('全部难度')
const filtered = computed(() => grenades.filter((g:any) => {
 const hay = `${g.title} ${g.map} ${g.purpose} ${g.type}`.toLowerCase()
 return hay.includes(q.value.toLowerCase()) && (mapFilter.value==='全部地图'||g.map===mapFilter.value) && (sideFilter.value==='全部阵营'||g.side===sideFilter.value) && (typeFilter.value==='全部类型'||g.type===typeFilter.value) && (difficultyFilter.value==='全部难度'||g.difficulty===difficultyFilter.value)
}))
</script>
<template>
  <div class="page-wrap inner-page">
    <div class="page-heading"><p class="eyebrow">UTILITY DATABASE</p><h1>投掷物数据库<span class="orange"> /</span></h1><p>按地图、阵营、类型和难度筛选。发布前请补充并验证真实站位与落点素材。</p></div>
    <div class="toolbar multi">
      <input v-model="q" placeholder="搜索投掷物名称、用途..." />
      <select v-model="mapFilter"><option>全部地图</option><option v-for="m in maps" :key="m.slug">{{m.name}}</option></select>
      <select v-model="sideFilter"><option>全部阵营</option><option>T 方</option><option>CT 方</option></select>
      <select v-model="typeFilter"><option>全部类型</option><option>烟雾弹</option><option>闪光弹</option><option>燃烧弹</option><option>手雷</option></select>
      <select v-model="difficultyFilter"><option>全部难度</option><option>简单</option><option>中等</option><option>困难</option></select>
    </div>
    <p class="result-count standalone">找到 {{ filtered.length }} 条攻略</p>
    <div class="guide-grid"><GuideCard v-for="g in filtered" :key="g.slug" :item="g" kind="grenade"/></div>
    <div v-if="!filtered.length" class="empty-state">没有匹配的投掷物攻略，请尝试其他筛选条件。</div>
  </div>
</template>