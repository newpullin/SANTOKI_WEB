<template>
  <v-app id="inspire">
    <MainMenu></MainMenu>

    <v-main> <DBox></DBox> </v-main>

    <Footer fluid></Footer>
  </v-app>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";
import Footer from "../components/Footer.vue";
import DBox from "../components/DBox.vue";
export default {
  components: { MainMenu, Footer, DBox },
  data: () => ({
    //drawer: null,
  }),
  created() {
    //this.$vuetify.theme.dark = true
  },
};
</script>