<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()
    return { post }
  }
}
</script>
