<script setup lang="ts">
const navList = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Restaurants',
    path: '/restaurants'
  },
  {
    name: 'Dishes',
    path: '/dishes'
  }
]
</script>

<template>
  <header
    class="container py-2 flex justify-between items-center shadow-[0_2px_0_0_hsl(0deg,0%,96%)]"
  >
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
  </header>
</template>

<style scoped></style>
