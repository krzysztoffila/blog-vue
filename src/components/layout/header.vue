<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <router-link to="/">
      <b-navbar-brand>Blog</b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item @click="sidebar = !sidebar">Categories</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <Search />
        <Lang />

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import Search from "@/components/search/search.vue";
import Lang from "@/components/lang/lang.vue";
export default {
  computed: {
    sidebar: {
      get() {
        return this.$store.state.Categories.sidebar;
      },
      set(newValue) {
        this.$store.state.Categories.sidebar = newValue;
      },
    },
  },
  components: { Search, Lang },
};
</script>