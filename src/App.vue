<template>
  <div>
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/layout/header.vue";
import Footer from "@/components/layout/footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
main {
  padding: 2rem;
}
</style>
