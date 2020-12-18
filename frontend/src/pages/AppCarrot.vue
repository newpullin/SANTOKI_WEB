<template>
  <v-app id="inspire">
    <MainMenu></MainMenu>

    <v-main><Carrot></Carrot></v-main>

    <Footer fluid></Footer>
  </v-app>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";
import Footer from "../components/Footer.vue";
import Carrot from "../components/Carrot.vue";
export default {
  components: { MainMenu, Footer, Carrot },
  data: () => ({
    //drawer: null,
  }),
  created() {
    //this.$vuetify.theme.dark = true
  },
};
</script>