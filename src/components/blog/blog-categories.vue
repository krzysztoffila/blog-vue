<template>
  <div>
    <b-sidebar
      :visible="categorySidebar"
      id="sidebar-1"
      title="Categories"
      shadow
    >
      <div class="px-3 py-2">
        <ul v-for="category in categories" :key="`category-${category.id}`">
          <b-button
            @click="setCurrentCategory(category)"
            :variant="
              currentCategory.id == category.id ? `primary` : `outline-primary`
            "
          >
            <li>{{ category.name }} : {{ category.id }}</li>
          </b-button>
        </ul>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    blogs() {
      return this.$store.state.Blog.blogs;
    },
    categories() {
      return this.$store.state.Categories.categories;
    },
    currentCategory() {
      return this.$store.state.Categories.currentCategory;
    },
    categorySidebar: {
      get() {
        return this.$store.state.Categories.sidebar;
      },
    },
  },
  methods: {
    setCurrentCategory(category) {
      if (this.currentCategory.id == category.id) {
        this.$store.state.Categories.currentCategory = {};
      } else this.$store.state.Categories.currentCategory = category;
      this.$store.state.Search.search = "";
    },
  },
};
</script>
<style scoped lang ="scss">
ul {
  list-style-type: none;
}
</style>