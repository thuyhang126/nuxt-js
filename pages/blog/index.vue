<template>
  <div>
    <h1>Blog</h1>
   <ContentDoc path="/hello" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const doc = await $content('hello').fetch();
    return { doc };
  },
};
</script>
