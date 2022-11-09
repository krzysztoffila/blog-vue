<template>
  <div class="blog-listing">
    <div class="container">
      <div class="row text-center">
        <h1 class="mx-auto" v-if="currentCategory.name">
          KATEGORIA: {{ currentCategory.name }}
        </h1>
        <h1 class="mx-auto" v-else>Witamy na blogu!</h1>
      </div>
      <div v-if="blogs.length > 0" class="row">
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
      <div v-else class="row p-4 text-center">
        <h2 class="mx-auto"><u>Nie znaleziono blogów</u></h2>
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
    search() {
      return this.$store.state.Search.search;
    },
    blogs() {
      let blogs = this.$store.state.Blog.blogs;
      blogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(this.search.toLowerCase())
      );
      if (!this.currentCategory.id) {
        return blogs;
      } else
        return blogs.filter(
          (blog) => blog.categoryId == this.currentCategory.id
        );
    },
  },
};
</script>
