<script setup lang="ts">
import { RouterView } from 'vue-router'
import BaseNav from '@/components/BaseNav/BaseNav.vue'
import { ref } from 'vue'

const navList = ref([
  {
    title: '首页',
    name: 'home',
    icon: 'i-mdi-home-circle',
  },
  {
    title: '说明',
    name: 'about',
    icon: 'i-mdi-email-outline',
  },
])
</script>

<template>
  <header bg-emerald-500 dark:bg-zinc-900>
    <BaseNav :nav-list="navList" />
  </header>

  <main>
    <RouterView />
  </main>
</template>
