<script setup lang="ts">
defineProps<{ map: any }>()
</script>
<template>
  <RouterLink :to="`/maps/${map.slug}`" class="map-card">
    <img :src="map.image" :alt="`${map.name} 地图攻略封面`" loading="lazy" />
    <div class="map-card-shade"></div>
    <div class="map-card-content"><span class="map-kicker">{{ map.nameZh }}</span><h3>{{ map.name }}</h3><p>{{ map.summary }}</p><span class="card-cta">查看地图攻略 ↗</span></div>
  </RouterLink>
</template>