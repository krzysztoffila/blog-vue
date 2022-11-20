<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <router-link to="/">
      <b-navbar-brand>
        <!-- <img
          class="navbar-logo"
          src="../../assets/logo.png"
          alt="Tryvium Logo"
        /> -->LOGO
      </b-navbar-brand>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item @click="sidebar = !sidebar">{{
          $ll("categoryHeader")
        }}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <Search />
        <Lang />
        <b-nav-item :to="{ name: 'login' }">{{
          $ll("loginHeader")
        }}</b-nav-item>
        <b-nav-item :to="{ name: 'register' }">{{
          $ll("registerHeader")
        }}</b-nav-item>
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