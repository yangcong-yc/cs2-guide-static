<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; subtitle?: string; link?: string; linkText?: string }>()
</script>
<template>
  <div class="section-title">
    <div><p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p><h2>{{ title }}</h2><p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p></div>
    <RouterLink v-if="link" :to="link" class="text-link">{{ linkText || '查看全部' }} <span>↗</span></RouterLink>
  </div>
</template>