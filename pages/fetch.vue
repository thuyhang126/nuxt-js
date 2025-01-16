<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <span>{{ post.title }}</span>
      <p>{{ post.body }}</p>
    </li>
  </ul>
</template>

<script setup>
import { useRoute } from 'vue-router';

const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts?_limit=9');
</script>

<style scoped>
ul {
  max-width: 1000px;
  padding: 50px 0 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
li {
  list-style: none;
  padding: 0;
  margin-bottom: 15px;
  width: 30%;
}
span {
  font-size: 24px;
  font-weight: 600;
  color: yellowgreen;
}
p {
  font-size: 16px;
  font-weight: 500;
  text-align: justify;
}
</style>
