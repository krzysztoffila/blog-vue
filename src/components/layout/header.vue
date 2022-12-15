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
        <Lang :show-flags="true" />
        <template v-if="!isLoggedIn">
          <b-nav-item :to="{ name: 'login' }">{{
            $ll("loginHeader")
          }}</b-nav-item>
          <b-nav-item :to="{ name: 'register' }">{{
            $ll("registerHeader")
          }}</b-nav-item>
        </template>
        <b-button
          @click="handleSignOut"
          v-if="isLoggedIn"
          size="sm"
          class="my-2 my-sm-0"
          type="submit"
          >Wyloguj</b-button
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import Search from "@/components/search/search.vue";
import Lang from "@/components/lang/lang.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
let auth;
export default {
  data() {
    return {
      isLoggedIn: true,
    };
  },
  mounted: function () {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
  methods: {
    handleSignOut: function () {
      signOut(auth).then(() => {
        if (this.$route.path != "/") {
          this.$router.push("/");
        }
        console.log("Wylogowano!");
      });
    },
  },
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
