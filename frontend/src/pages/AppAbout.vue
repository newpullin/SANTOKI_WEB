<template>
  <v-app id="inspire">
    <MainMenu></MainMenu>

    <v-main><About fluid></About></v-main>

    <Footer fluid></Footer>
  </v-app>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";
import Footer from "../components/Footer.vue";
import About from "../components/About.vue";
export default {
  components: { MainMenu, Footer, About },
  data: () => ({
    //drawer: null,
  }),
  created() {
    //this.$vuetify.theme.dark = true
  },
};
</script>