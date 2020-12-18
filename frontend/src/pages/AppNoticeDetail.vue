<template>
  <v-app id="inspire">
    <MainMenu></MainMenu>

    <v-main> <NoticeDetail></NoticeDetail> </v-main>

    <Footer fluid></Footer>
  </v-app>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";
import Footer from "../components/Footer.vue";
import NoticeDetail from "../components/NoticeDetail.vue";
export default {
  components: { MainMenu, Footer, NoticeDetail },
  data: () => ({
    //drawer: null,
  }),
  created() {
    //this.$vuetify.theme.dark = true
  },
};
</script>