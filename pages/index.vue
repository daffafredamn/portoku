<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>

  <!-- Tambahkan ini di tempat yang sesuai dalam file index.vue -->
<div class="mt-4">
  <nuxt-link to="/showcase" class="bg-purple-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-purple-800 transition-colors duration-300">Lihat Proyek Saya</nuxt-link>
</div>
</template>

