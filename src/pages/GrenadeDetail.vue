<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import grenades from '../data/grenades.json'
import SectionTitle from '../components/SectionTitle.vue'
const route = useRoute()
const item = computed(() => grenades.find((g:any) => g.slug === route.params.slug))
</script>
<template>
  <div v-if="item" class="page-wrap inner-page">
    <RouterLink to="/grenades" class="back-link">← 返回投掷物数据库</RouterLink>
    <div class="detail-layout grenade-detail">
      <article class="article-content">
        <p class="eyebrow">UTILITY / FIELD GUIDE</p><h1 class="article-title">{{ item.title }}</h1>
        <div class="tag-row"><span class="tag">{{ item.map }}</span><span class="tag">{{ item.side }}</span><span class="tag">{{ item.type }}</span><span class="tag muted">难度：{{ item.difficulty }}</span></div>
        <img class="article-cover" :src="item.image" :alt="item.title"/>
        <div class="notice warning"><b>内容验证说明</b><p>{{ item.note }}</p></div>
        <section class="article-section"><h2>战术用途</h2><p>{{ item.purpose }}</p></section>
        <section class="article-section"><h2>参考站位</h2><p>{{ item.position }}</p><div class="placeholder-diagram"><div class="diagram-cross">＋</div><span>站位 / 准星示意素材待补充</span></div></section>
        <section class="article-section"><h2>操作步骤</h2><ol class="step-list"><li v-for="(step, i) in item.steps" :key="step"><span>{{ String(i+1).padStart(2,'0') }}</span><p>{{ step }}</p></li></ol></section>
      </article>
      <aside class="detail-aside"><div class="aside-panel"><p class="eyebrow">QUICK INFO</p><h3>攻略信息</h3><div class="info-line"><span>地图</span><b>{{ item.map }}</b></div><div class="info-line"><span>阵营</span><b>{{ item.side }}</b></div><div class="info-line"><span>类型</span><b>{{ item.type }}</b></div><div class="info-line"><span>难度</span><b>{{ item.difficulty }}</b></div><RouterLink to="/maps" class="aside-action">查看地图攻略 ↗</RouterLink></div></aside>
    </div>
  </div>
  <div v-else class="page-wrap inner-page"><h1>没有找到这条攻略</h1><RouterLink to="/grenades" class="btn btn-primary">返回投掷物数据库</RouterLink></div>
</template>