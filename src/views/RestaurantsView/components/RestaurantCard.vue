<script setup lang="ts">
import { computed } from 'vue'
import type { Restaurant } from '../types'

type PropTypes = {
  restaurant: Restaurant
}

const props = defineProps<PropTypes>()

const statusColor = computed(() => {
  switch (props.restaurant.status) {
    case 'Want to Try':
      return 'is-warning'
    case 'Recommended':
      return 'is-success'
    case 'Do Not Recommend':
      return 'is-danger'
    default:
      return ''
  }
})
</script>

<template>
  <article class="flex gap-3 p-4 shadow-md">
    <img src="https://placehold.jp/150x150.png" alt="" width="150" height="150" />
    <div>
      <h3 class="text-lg mb-1">
        {{ restaurant.name }}
      </h3>
      <p :class="`text-sm mb-2 tag ${statusColor}`">
        {{ restaurant.status }}
      </p>
      <p class="mb-2">
        {{ restaurant.address }}
      </p>
      <div class="flex gap-4">
        <button class="btn is-danger" @click="$emit('delete-restaurant')">Delete</button>
        <button class="btn" @click="$emit('editForm')">Edit</button>
      </div>
    </div>
  </article>
</template>

<style></style>
