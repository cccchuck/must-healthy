<script setup lang="ts">
import { ref } from 'vue'
import { toggleShowMode } from '@/utils'

interface INavItem {
  name: string
  icon: string
  title: string
}

defineProps({
  navList: {
    type: Array as () => INavItem[],
    required: true,
  },
})

const media = window.matchMedia('(prefers-color-scheme: dark)')
const isDark = ref(media.matches)

toggleShowMode(isDark.value)

media.addEventListener('change', () => {
  isDark.value = media.matches
  toggleShowMode(isDark.value)
})

const getIcon = (icon: string): string => {
  return `i-mdi-${icon}`
}

const handleToggleMode = () => {
  isDark.value = !isDark.value
  toggleShowMode(isDark.value)
}
</script>

<template>
  <nav
    flex
    items-center
    mx-auto
    py1
    justify-between
    box-border
    min-w-screen-md
    max-w-screen-xl
  >
    <ul flex m0 p0 my-2>
      <li
        v-for="item in navList"
        :key="item.name"
        flex
        items-center
        mr-4
        px4
        py2
        transition
        rounded-xl
        list-none
        text-lg
        text-white-500
        font-medium
        duration-500
        hover:cursor-pointer
        hover:bg-teal-900
        hover:-translate-y-2px
        :class="{
          'bg-teal-900': $route.name === item.name,
          '-translate-y-2px': $route.name === item.name,
          'dark:bg-zinc-700': $route.name === item.name,
        }"
        class="hover:dark:bg-zinc-700"
        @click="$router.push({ name: item.name })"
      >
        <div :class="getIcon(item.icon)" w-6 h-6></div>
        <span ml-2>{{ item.title }}</span>
      </li>
    </ul>

    <div
      i-mdi-brightness-4
      text-zinc-800
      w-2rem
      h-2rem
      font-bold
      transition
      duration-500
      hover:cursor-pointer
      hover:-translate-y-2px
      dark:text-white-900
      dark:i-mdi-brightness-5
      dark:w-2rem
      dark:h-2rem
      @click="handleToggleMode"
    ></div>
  </nav>
</template>
