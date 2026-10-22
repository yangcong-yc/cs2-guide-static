<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import videos from '../data/videos.json'
const route = useRoute()
const video = computed(() => videos.find((v:any) => v.slug === route.params.slug))
</script>
<template>
  <div v-if="video" class="page-wrap inner-page">
    <RouterLink to="/videos" class="back-link">← 返回视频攻略</RouterLink>
    <div class="video-detail">
      <p class="eyebrow">{{video.category}} / VIDEO GUIDE</p><h1 class="article-title">{{video.title}}</h1>
      <div class="tag-row"><span class="tag">{{video.map}}</span><span class="tag muted">{{video.duration}}</span><span class="tag muted">{{video.views}} 次观看（示例数据）</span></div>
      <div v-if="video.embedUrl" class="video-frame"><iframe :src="video.embedUrl" title="CS2 视频攻略" allowfullscreen loading="lazy"></iframe></div>
      <div v-else class="video-placeholder" :style="{ backgroundImage: `linear-gradient(0deg,rgba(8,12,17,.8),rgba(8,12,17,.25)),url(${video.cover})` }"><div class="play-circle">▶</div><b>尚未配置视频地址</b><span>在 src/data/videos.json 中填写 embedUrl 后即可嵌入播放。</span></div>
      <div class="article-section"><h2>视频简介</h2><p>{{video.summary}}</p></div>
      <div class="notice"><b>内容维护方式</b><p>将视频地址填写到 src/data/videos.json 的 embedUrl 字段。嵌入地址应使用平台提供的播放器 URL，并确认外部网站允许嵌入。</p></div>
    </div>
  </div>
  <div v-else class="page-wrap inner-page"><h1>没有找到这个视频</h1><RouterLink to="/videos" class="btn btn-primary">返回视频列表</RouterLink></div>
</template>