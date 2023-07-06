<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import RestaurantCard from './components/RestaurantCard.vue'
import { useRestaurantStore } from './store'

const showForm = ref(false)
const filterText = ref('')

const restaurantStore = useRestaurantStore()

const { list: restaurantList, getNumberOfRestaurants: totalRestaurant } =
  storeToRefs(restaurantStore)
const filteredRestaurantList = computed(() =>
  restaurantList.value.filter((restaurant) => {
    if (restaurant.name) {
      return restaurant.name.toLowerCase().includes(filterText.value.toLowerCase())
    } else {
      return restaurantList
    }
  })
)
</script>
<template>
  <MainLayout>
    <div class="container">
      <form v-if="showForm" action=""></form>

      <section v-else>
        <h1 class="text-[32px] mb-4">Restaurants</h1>
        <div class="flex gap-4 items-center mb-6">
          <strong class="text-xl">{{ totalRestaurant }} restaurants</strong>
          <button class="btn btn--primary">New</button>
        </div>
        <div class="space-y-4">
          <RestaurantCard
            v-for="item in filteredRestaurantList"
            :key="`item-${item}`"
            :restaurant="item"
            @delete-restaurant="restaurantStore.deleteRestaurant(item)"
          />
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<style scoped></style>
