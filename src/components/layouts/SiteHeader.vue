<script setup lang="ts">
const navList = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Restaurants',
    path: '/restaurants'
  }
]
</script>

<template>
  <header class="py-2 shadow-[0_2px_0_0_hsl(0deg,0%,96%)]">
    <div class="container flex justify-between items-center">
      <RouterLink to="/" class="navbar-item">
        <img src="@/assets/logo.svg" alt="" width="50" />
      </RouterLink>
      <nav class="flex items-center gap-1">
        <RouterLink
          class="p-2 text-blue-500"
          v-for="navItem in navList"
          :to="navItem.path"
          :key="`nav-${navItem.name}`"
          >{{ navItem.name }}</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
