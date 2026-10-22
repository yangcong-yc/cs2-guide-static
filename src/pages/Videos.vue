<script setup lang="ts">
import { computed, ref } from 'vue'
import videos from '../data/videos.json'
import GuideCard from '../components/GuideCard.vue'
const q = ref('')
const category = ref('全部分类')
const filtered = computed(() => videos.filter((v:any) => `${v.title} ${v.summary} ${v.map}`.toLowerCase().includes(q.value.toLowerCase()) && (category.value==='全部分类'||v.category===category.value)))
const categories = ['全部分类', ...new Set(videos.map((v:any)=>v.category))]
</script>
<template>
  <div class="page-wrap inner-page">
    <div class="page-heading"><p class="eyebrow">WATCH & LEARN</p><h1>视频攻略<span class="orange"> /</span></h1><p>战术讲解、投掷物思路与枪法训练。添加真实视频地址即可启用播放。</p></div>
    <div class="toolbar"><input v-model="q" placeholder="搜索视频标题或关键词..." /><select v-model="category"><option v-for="c in categories" :key="c">{{c}}</option></select><span class="result-count">{{filtered.length}} 个视频</span></div>
    <div class="guide-grid"><GuideCard v-for="v in filtered" :key="v.slug" :item="v" kind="video"/></div>
    <div v-if="!filtered.length" class="empty-state">没有找到匹配的视频。</div>
  </div>
</template>