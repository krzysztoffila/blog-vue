<template>
  <div class="single-blog container">
    <h1 class="text-center">{{ blog.title_pl }}</h1>
    <h2 class="text-center">{{ blog.subtitle_pl }}</h2>
    <img
      class="img-fluid mx-auto d-block"
      :src="blog.photo"
      alt=""
      style="max-width: 500px; max-height: 500px"
    />
    <p class="m-5">{{ blog.content_pl }}</p>
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
};
</script>

<style></style>
