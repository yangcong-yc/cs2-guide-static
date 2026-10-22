<script setup lang="ts">
import { computed, ref } from 'vue'
import maps from '../data/maps.json'
import grenades from '../data/grenades.json'
import videos from '../data/videos.json'
import MapCard from '../components/MapCard.vue'
import GuideCard from '../components/GuideCard.vue'
import SectionTitle from '../components/SectionTitle.vue'
const tab = ref('全部')
const featuredGrenades = computed(() => tab.value === '全部' ? grenades.slice(0, 3) : grenades.filter((g:any) => g.type === tab.value).slice(0, 3))
</script>
<template>
  <div class="page-wrap">
    <section class="hero">
      <img class="hero-bg" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2000&q=85" alt="" />
      <div class="hero-overlay"></div><div class="hero-content">
        <div class="hero-label"><span class="live-dot"></span> TACTICAL INTELLIGENCE / CS2 GUIDE</div>
        <h1>每一回合，<br/><em>都有制胜的方法。</em></h1>
        <p>从地图理解到投掷物执行，建立属于你的竞技知识库。</p>
        <div class="hero-actions"><RouterLink to="/maps" class="btn btn-primary">探索地图攻略 <span>→</span></RouterLink><RouterLink to="/grenades" class="btn btn-ghost">查看投掷物数据库</RouterLink></div>
        <div class="hero-stats"><div><b>06</b><span>地图指南</span></div><div><b>05</b><span>投掷物示例</span></div><div><b>04</b><span>视频栏目</span></div></div>
      </div>
      <div class="hero-side-note"><span>01 / FIELD GUIDE</span><b>LEARN<br/>. ADAPT<br/>. WIN.</b></div>
    </section>
    <section class="content-section">
      <SectionTitle eyebrow="MAP INTELLIGENCE" title="热门地图" subtitle="熟悉每一条路线，理解每一个关键点位。" link="/maps" linkText="全部地图"/>
      <div class="map-grid"><MapCard v-for="map in maps.slice(0,4)" :key="map.slug" :map="map"/></div>
    </section>
    <section class="content-section">
      <SectionTitle eyebrow="UTILITY DATABASE" title="投掷物攻略" subtitle="按地图和用途查找训练思路，具体点位请以实测为准。" link="/grenades" linkText="进入数据库"/>
      <div class="filter-tabs"><button v-for="t in ['全部','烟雾弹','闪光弹','燃烧弹']" :key="t" :class="{active:tab===t}" @click="tab=t">{{t}}</button></div>
      <div class="guide-grid"><GuideCard v-for="g in featuredGrenades" :key="g.slug" :item="g" kind="grenade"/><div v-if="!featuredGrenades.length" class="empty-state">当前分类暂无内容</div></div>
    </section>
    <section class="content-section">
      <SectionTitle eyebrow="WATCH & LEARN" title="精选视频攻略" subtitle="把战术原则转化为可以练习的动作。" link="/videos" linkText="全部视频"/>
      <div class="guide-grid"><GuideCard v-for="v in videos.slice(0,3)" :key="v.slug" :item="v" kind="video"/></div>
    </section>
    <section class="callout"><div><p class="eyebrow">TRAIN WITH PURPOSE</p><h2>把每一次复盘，<br/>变成下一次进步。</h2><p>从一个点位、一颗道具和一次团队沟通开始。</p></div><RouterLink to="/maps" class="btn btn-primary">开始训练 <span>→</span></RouterLink></section>
  </div>
</template>