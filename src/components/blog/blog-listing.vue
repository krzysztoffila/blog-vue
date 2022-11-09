<template>
  <div class="blog-listing">
    <div class="container">
      <div class="row text-center">
        <h1 class="mx-auto" v-if="currentCategory.name">
          KATEGORIA: {{ currentCategory.name }}
        </h1>
        <h1 class="mx-auto" v-else>Witamy na blogu!</h1>
      </div>
      <div class="row">
        <router-link
          :to="`/blog/${blog.id}`"
          class="col-12 col-lg-4 mb-4"
          v-for="blog in blogs"
          :key="`blog-${blog.id}`"
        >
          <img class="img-fluid mb-2" :src="blog.photo" alt="" loading="lazy" />
          <h4 class="font-weight-bold text-center mb-0">{{ blog.title }}</h4>
          <i class="text-center w-100 d-block">{{ blog.subtitle }}</i>
          <span>{{ blog.categoryId }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    currentCategory() {
      return this.$store.state.Categories.currentCategory;
    },
    blogs() {
      if (!this.currentCategory.id) {
        return this.$store.state.Blog.blogs;
      } else
        return this.$store.state.Blog.blogs.filter(
          (blog) => blog.categoryId == this.currentCategory.id
        );
    },
  },
};
</script>
