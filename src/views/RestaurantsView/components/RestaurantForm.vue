<script setup lang="ts">
import { ref } from 'vue'
import { restaurantStatusList } from '../constants'
import type { Restaurant } from '../types'

const props = defineProps<{
  defaultRestaurant: Restaurant
}>()
const formValue = ref<Restaurant>(props.defaultRestaurant)

const emit = defineEmits(['addRestaurant', 'hideForm'])

const addRestaurant = () => {
  emit('addRestaurant', formValue.value)
  emit('hideForm')
}
</script>

<template>
  <form @submit.prevent class="space-y-4">
    <div class="space-y-2">
      <label for="name" class="label">Name:</label>
      <input
        v-model="formValue.name"
        type="text"
        class="input is-large"
        placeholder="Beignet and the Jets"
        required
      />
    </div>

    <div class="space-y-2">
      <label for="website" class="label">Website</label>
      <input
        v-model="formValue.website"
        type="text"
        class="input"
        placeholder="www.beignetandthejets.com"
      />
    </div>

    <div class="space-y-2">
      <label for="status" class="label">Status</label>
      <select v-model="formValue.status" id="status">
        <option v-for="status in restaurantStatusList" :value="status" :key="`option-${status}`">
          {{ status }}
        </option>
      </select>
    </div>
    <div class="flex gap-4">
      <button type="button" @click="addRestaurant" class="btn is-success">
        {{ defaultRestaurant.name !== '' ? 'Edit' : 'Create' }}
      </button>
      <button type="button" @click="$emit('hideForm')" class="btn">Cancel</button>
    </div>
  </form>
</template>

<style scoped></style>
