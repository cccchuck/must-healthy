<script setup lang="ts">
import { getMockData } from '@/api'
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'

interface IFood {
  name: string
  calorie: number
  imgUrl: string
  intro: string
}

const foodData: Ref<IFood[]> = ref([])

onMounted(async () => {
  const result = await getMockData()
  foodData.value = result.data
})
</script>

<template>
  <main py4 min-w-screen-md max-w-screen-xl mx-auto text-neutral-600>
    <div
      v-for="food in foodData"
      :key="food.name"
      class="food-card"
      flex
      items-center
      rounded-4
      shadow-md
      shadow-inner
      mb-4
      bg-white
      overflow-hidden
      transition
      duration-500
      hover:cursor-pointer
      hover:-translate-y-5px
      dark:bg-dark-800
    >
      <div class="food-card__img">
        <img :src="food.imgUrl" w-60 h-60 align-bottom object-cover />
      </div>

      <div class="food-card__info" p4>
        <p text-stone-800 font-bold dark:text-neutral-300>{{ food.name }}</p>
        <p dark:text-neutral-400>热量：{{ food.calorie }}大卡 / 100g</p>
        <p dark:text-neutral-400>{{ food.intro }}</p>
      </div>
    </div>
  </main>
</template>
