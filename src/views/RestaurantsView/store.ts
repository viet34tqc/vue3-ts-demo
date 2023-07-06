import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Restaurant } from './types'

export const useRestaurantStore = defineStore('restaurantStore', () => {
  const list = ref<Restaurant[]>([
    {
      id: '9f995ce4-d2fc-4d00-af1d-6cb1647c6bd3',
      name: 'Quiche From a Rose',
      address: '283 Thisisnota St.',
      website: 'www.quichefromarose.com',
      status: 'Want to Try'
    },
    {
      id: 'ae62a3da-791b-4f44-99a1-4be1b0ec30b8',
      name: 'Tamago Never Dies',
      address: '529 Letsgofora Dr.',
      website: 'www.tamagoneverdies.com',
      status: 'Recommended'
    },
    {
      id: '9b361dae-2d44-4499-9940-97e188d41a32',
      name: 'Penne For Your Thoughts',
      address: '870 Thisisa St.',
      website: 'www.penneforyourthoughts.com',
      status: 'Do Not Recommend'
    }
  ])
  const getNumberOfRestaurants = computed(() => list.value.length)
  const addRestaurant = (payload: Restaurant) => {
    list.value.push(payload)
  }
  const deleteRestaurant = (payload: Restaurant) => {
    list.value = list.value.filter((restaurant) => restaurant.id !== payload.id)
  }

  return { list, getNumberOfRestaurants, addRestaurant, deleteRestaurant }
})
