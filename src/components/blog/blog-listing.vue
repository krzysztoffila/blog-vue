<template>
  <div class="blog-listing">
    <div class="container">
      <div class="row text-center">
        <h1 class="mx-auto" v-if="currentCategory.name">
          {{ $ll("categoryList") }}: {{ currentCategory.name }}
        </h1>
        <h1 class="mx-auto" v-else>{{ $ll("welcomeHome") }}</h1>
      </div>
      <div v-if="blogs.length > 0" class="row">
        <router-link
          :to="`/blog/${blog.id}`"
          class="col-12 col-lg-4 mb-4"
          v-for="blog in blogs"
          :key="`blog-${blog.id}`"
        >
          <div class="image-container">
            <img
              class="img-fluid mb-2"
              :src="blog.photo"
              alt=""
              loading="lazy"
            />
          </div>
          <h4 class="font-weight-bold text-center mb-0">
            {{ blog[`title_${lang}`] }}
          </h4>
          <i class="text-center w-100 d-block">{{
            blog[`subtitle_${lang}`]
          }}</i>
        </router-link>
      </div>
      <div v-else class="row p-4 text-center">
        <h2 class="mx-auto">
          <u>{{ $ll("noFindBlogs") }}</u>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/helpers/firestore/getCollection.js";
import Lang from "@/components/lang/lang.vue";
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
      blogs = blogs.filter(
        (blog) =>
          blog.title_pl.toLowerCase().includes(this.search.toLowerCase()) ||
          blog.title_en.toLowerCase().includes(this.search.toLowerCase()) ||
          blog.subtitle_pl.toLowerCase().includes(this.search.toLowerCase()) ||
          blog.subtitle_en.toLowerCase().includes(this.search.toLowerCase())
      );
      if (!this.currentCategory.id) {
        return blogs;
      } else
        return blogs.filter(
          (blog) => blog.categoryId == this.currentCategory.id
        );
    },
    lang() {
      return this.$store.state.Lang.lang;
    },
  },
  components: { Lang },
  created() {
    getCollection("blogs", "Blog", "blogs");
  },
};
</script>

<style scoped lang="scss">
a {
  color: #000;
  transition: 0.3s;
  &:hover {
    text-decoration: none;
    color: #17a2b8;
  }
}
h1 {
  padding-bottom: 2rem;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  overflow: hidden;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
</style>
