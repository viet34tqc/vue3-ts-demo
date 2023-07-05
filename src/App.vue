<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteFooter from './components/layouts/SiteFooter.vue'
import SiteHeader from './components/layouts/SiteHeader.vue'
</script>

<template>
  <SiteHeader />
  <RouterView />
  <SiteFooter />
</template>
