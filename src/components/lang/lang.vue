<template>
  <b-nav-item-dropdown text="Lang" right>
    <b-dropdown-item
      v-for="language in languages"
      :key="language"
      @click="setLang(language)"
      >{{ language.toUpperCase() }}</b-dropdown-item
    >
  </b-nav-item-dropdown>
</template>

<script>
import setCookie from "@/helpers/cookies/set-cookie.js";
export default {
  computed: {
    languages() {
      return this.$store.state.Lang.languages;
    },
  },
  methods: {
    setLang(language) {
      this.$store.state.Lang.lang = language;
      setCookie("lang", language, 30);
    },
  },
};
</script>

<style>
</style>