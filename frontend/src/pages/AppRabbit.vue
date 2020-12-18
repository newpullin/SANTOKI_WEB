<template>
  <v-app id="inspire">
    <MainMenu></MainMenu>

    <v-main><Rabbit></Rabbit></v-main>

    <Footer fluid></Footer>
  </v-app>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";
import Footer from "../components/Footer.vue";
import Rabbit from "../components/Rabbit.vue";
export default {
  components: { MainMenu, Footer, Rabbit },
  data: () => ({
    //drawer: null,
  }),
  created() {
    //this.$vuetify.theme.dark = true
  },
};
</script>