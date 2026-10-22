<script setup lang="ts">
import { computed, ref } from 'vue'
import maps from '../data/maps.json'
import MapCard from '../components/MapCard.vue'
import SectionTitle from '../components/SectionTitle.vue'
const q = ref('')
const level = ref('全部难度')
const filtered = computed(() => maps.filter((m:any) => `${m.name} ${m.nameZh} ${m.summary}`.toLowerCase().includes(q.value.toLowerCase()) && (level.value === '全部难度' || m.difficulty === level.value)))
</script>
<template>
  <div class="page-wrap inner-page">
    <div class="page-heading"><p class="eyebrow">MAP INTELLIGENCE</p><h1>地图攻略<span class="orange"> /</span></h1><p>地图理解是战术的起点。查看关键区域、攻防思路和常见失误。</p></div>
    <div class="toolbar"><input v-model="q" placeholder="搜索地图名称或关键词..." /><select v-model="level"><option>全部难度</option><option>新手友好</option><option>入门到进阶</option><option>进阶</option></select><span class="result-count">{{ filtered.length }} 张地图</span></div>
    <div class="map-grid large"><MapCard v-for="map in filtered" :key="map.slug" :map="map"/></div>
    <div v-if="!filtered.length" class="empty-state">没有匹配的地图，请调整搜索条件。</div>
  </div>
</template>