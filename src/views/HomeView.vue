<script setup lang="ts"></script>

<template>
  <main class="container py-12 md:px-24">
    <div class="grid gap-8 md:grid-cols-2 items-center">
      <div>
        <h1 class="text-[48px] mb-4">
          Helping people track all the delicious things they want to eat.
        </h1>
        <div class="flex gap-3 items-center">
          <RouterLink to="/restaurants" class="btn btn--primary">See all food</RouterLink>
          <RouterLink to="/restaurants?new=true" class="btn">Add new food</RouterLink>
        </div>
      </div>

      <img src="@/assets/home-img.jpg" alt="Home Image" />
    </div>
  </main>
</template>
