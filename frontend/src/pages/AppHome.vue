<template>
  <v-app id="inspire">
    <MainMenu></MainMenu>

    <v-main> <Home fluid></Home> </v-main>

    <Footer fluid></Footer>
  </v-app>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";
import Footer from "../components/Footer.vue";
import Home from "../components/Home";
export default {
  components: { MainMenu, Footer, Home },
  data: () => ({
    //drawer: null,
  }),
  created() {
    //this.$vuetify.theme.dark = true
  },
};
</script>