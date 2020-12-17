<template>
  <v-app id="inspire">
    <MainMenu></MainMenu>

    <v-main> carrot </v-main>

    <Footer fluid></Footer>
  </v-app>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";
import Footer from "../components/Footer.vue";
export default {
  components: { MainMenu, Footer },
  data: () => ({
    //drawer: null,
  }),
  created() {
    //this.$vuetify.theme.dark = true
  },
};
</script>