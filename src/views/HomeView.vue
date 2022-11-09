<template>
  <div>
    <categories />
    <blog-listing />
  </div>
</template>

<script>
import BlogListing from "@/components/blog/blog-listing.vue";
import Categories from "@/components/blog/blog-categories.vue";
export default {
  components: {
    BlogListing,
    Categories,
  },
};
</script>