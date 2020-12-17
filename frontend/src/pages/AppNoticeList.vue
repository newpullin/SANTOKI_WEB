<template>
  <v-app id="inspire">
    <MainMenu></MainMenu>

    <v-main> <NoticeList></NoticeList> </v-main>

    <Footer fluid></Footer>
  </v-app>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";
import Footer from "../components/Footer.vue";
import NoticeList from "../components/NoticeList";
export default {
  components: { MainMenu, Footer, NoticeList },
  data: () => ({
    //drawer: null,
  }),
  created() {
    //this.$vuetify.theme.dark = true
  },
};
</script>