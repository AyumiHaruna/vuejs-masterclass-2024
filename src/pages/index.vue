<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1>Home page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">go to project 1</RouterLink>
  </div>
</template>
