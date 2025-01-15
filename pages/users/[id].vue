<template>
  <h1>Chi tiết người dùng: {{ userId }}</h1>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id
</script>
