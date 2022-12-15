<template>
  <b-nav-item-dropdown text="PL | EN" right>
    <b-dropdown-item
      v-for="language in languages"
      :key="language"
      @click="setLang(language)"
    >
      <img
        v-if="showFlags"
        :src="require(`@/assets/icons/flags/${language}.svg`)"
        width="25"
        height="25"
      />
      {{ language.toUpperCase() }}</b-dropdown-item
    >
  </b-nav-item-dropdown>
</template>

<script>
import setCookie from "@/helpers/cookies/set-cookie.js";
export default {
  props: {
    showFlags: {
      type: Boolean,
      default: false,
    },
  },
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
