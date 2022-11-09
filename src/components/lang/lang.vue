<template>
  <b-nav-item-dropdown text="Lang" right>
    <b-dropdown-item
      v-for="language in languages"
      :key="language"
      @click="$store.state.Lang.lang = language"
      >{{ language.toUpperCase() }}</b-dropdown-item
    >
    <!-- <b-dropdown-item @click="$store.state.Lang.lang = 'en'">EN</b-dropdown-item> -->
  </b-nav-item-dropdown>
</template>

<script>
import store from "@/store";
export default {
  computed: {
    languages() {
      return this.$store.state.Lang.languages;
    },
  },
};
</script>

<style>
</style>