<template>
  <b-nav-form>
    <b-form-input
      v-model="search"
      size="sm"
      class="mr-sm-2"
      :placeholder="$ll('searchPlaceholder')"
    ></b-form-input>
    <b-button size="sm" class="my-2 my-sm-0" type="submit">{{
      $ll("searchInput")
    }}</b-button>
  </b-nav-form>
</template>

<script>
export default {
  computed: {
    search: {
      get() {
        return this.$store.state.Search.search;
      },
      set(newValue) {
        this.$store.state.Search.search = newValue;
        this.$store.state.Categories.currentCategory = {};
        this.$store.state.Categories.sidebar = false;
      },
    },
  },
};
</script>

<style>
</style>
