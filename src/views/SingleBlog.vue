<template>
  <div class="single-blog container">
    <h1 class="text-center">{{ blog.title }}</h1>
    <h2 class="text-center">{{ blog.subtitle }}</h2>
    <img class="img-fluid" :src="blog.photo" alt="" />
  </div>
</template>

<script>
export default {
  computed: {
    blog() {
      return this.$store.state.Blog.blogs.find(
        (blog) => blog.id == this.$route.params.blogId
      );
    },
  },
  created() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>