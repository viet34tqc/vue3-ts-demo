<script setup lang="ts">
import MainLayout from '@/components/layouts/MainLayout.vue'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import RestaurantCard from './components/RestaurantCard.vue'
import RestaurantForm from './components/RestaurantForm.vue'
import { useRestaurantStore } from './store'

const showForm = ref(false)

onMounted(() => {
  const route = useRoute()

  if (route.query.new) {
    showForm.value = true
  }
})

const hideForm = () => {
  showForm.value = false
}

const filterText = ref('')

const restaurantStore = useRestaurantStore()

const { list: restaurantList, getNumberOfRestaurants: totalRestaurant } =
  storeToRefs(restaurantStore)
const { addRestaurant, deleteRestaurant } = restaurantStore
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
      <h1 class="text-[32px] mb-4">Restaurants</h1>

      <RestaurantForm
        v-if="showForm"
        @addRestaurant="addRestaurant"
        @hideForm="hideForm()"
      ></RestaurantForm>

      <section v-else>
        <div class="flex gap-4 items-center mb-6">
          <strong class="text-xl">{{ totalRestaurant }} restaurants</strong>
          <button class="btn btn--primary" @click="showForm = true">New</button>
        </div>
        <div class="space-y-4">
          <RestaurantCard
            v-for="item in filteredRestaurantList"
            :key="`item-${item}`"
            :restaurant="item"
            @delete-restaurant="deleteRestaurant(item)"
          />
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<style scoped></style>
