<script setup lang="ts">
defineProps<{ item: any; kind?: 'grenade' | 'video' }>()
</script>
<template>
  <RouterLink :to="kind === 'video' ? `/videos/${item.slug}` : `/grenades/${item.slug}`" class="guide-card">
    <img :src="kind === 'video' ? item.cover : item.image" :alt="item.title" loading="lazy" />
    <div class="guide-card-body">
      <div class="tag-row"><span class="tag">{{ kind === 'video' ? item.category : item.type }}</span><span class="tag muted">{{ kind === 'video' ? item.map : `${item.map} · ${item.side}` }}</span></div>
      <h3>{{ item.title }}</h3>
      <p>{{ kind === 'video' ? item.summary : item.purpose }}</p>
      <div class="guide-meta"><span>{{ kind === 'video' ? `▶ ${item.duration}` : `难度：${item.difficulty}` }}</span><span>查看详情 ↗</span></div>
    </div>
  </RouterLink>
</template>