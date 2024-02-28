<template>
  <div>
    <Header />
    <Toast />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/layout/header.vue";
import Toast from "@/components/toast/Toast.vue";
import Footer from "@/components/layout/footer.vue";

export default {
  components: {
    Header,
    Toast,
    Footer,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap");
* {
  font-family: "Source Sans Pro", sans-serif;
}
h1 {
  text-transform: uppercase;
}
main {
  padding: 2rem;
}
</style>
