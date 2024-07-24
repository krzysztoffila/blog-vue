<template>
  <div class="single-blog container d-flex flex-column align-items-center">
    <h1 class="text-center mt-5 pb-2">{{ blog[`title_${lang}`] }}</h1>
    <h2 class="text-center mb-5">{{ blog[`subtitle_${lang}`] }}</h2>
    <img class="img-fluid mx-auto d-block mb-4" :src="blog.photo" alt="" />
    <div class="blog-content mb-5">
      <p v-html="formattedContent"></p>
    </div>
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
    lang() {
      return this.$store.state.Lang.lang;
    },
    formattedContent() {
      return this.blog[`content_${this.lang}`].replace(/\n/g, "<br />");
    },
  },
};
</script>

<style scoped lang="scss">
.single-blog {
  max-width: 800px;
  padding: 20px;
}
h1,
h2 {
  color: #333;
}
.blog-content {
  line-height: 1.6;
  font-size: 1.1em;
  color: #555;
  white-space: pre-line;
}
img {
  max-width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
}
</style>
