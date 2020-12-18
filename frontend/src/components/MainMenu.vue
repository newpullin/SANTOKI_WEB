<template>
  <div>
    <v-navigation-drawer clipped v-model="drawer" app>
      <v-list>
        <!-- items 배열을 읽어와서 차례로 메뉴로 바인딩 하여 표시함 -->
        <v-list-item value="true" v-for="(item, i) in fnGetMenuItems" :href="item.to" :key="i">
          <v-list-item-action>
            <!-- html 엘리먼트의 값으로 바인딩할 때는 v-html 디렉티브 사용
							-->
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
      <v-btn text class="ma-2" href="/"> Santoki </v-btn>
      <v-btn text class="ma-2 hidden-xs-only" href="/rabbit/">
        <v-icon large class="ma-1" color="green darken-2"> mdi-rabbit </v-icon>
        Rabbit
      </v-btn>
      <v-btn text class="ma-2 hidden-xs-only" href="/carrot/">
        <v-icon large class="ma-1" color="red lighten-2"> mdi-carrot </v-icon>
        Carrot
      </v-btn>
      <v-btn text class="ma-2 hidden-xs-only" href="/dbox/"> D-box </v-btn>
      <v-btn text class="ma-2 hidden-xs-only" href="/about/"> About </v-btn>
      <v-btn text class="ma-2 hidden-xs-only" href="/notice/list/">
        Notice
      </v-btn>
      <v-btn
        text
        class="ma-2"
        href="https://shopping.naver.com/"
      >
        <v-icon large class="ma-1" color="red lighten-3"> mdi-gift </v-icon>
        Shop
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
  computed: {
    fnGetMenuItems() {
      return [
        {
          title: "Rabbit",
          to: "/rabbit/",
          icon: "mdi-rabbit",
        },
        {
          title: "Carrot",
          to: "/carrot/",
          icon: "mdi-carrot",
        },
        {
          title: "D-box",
          to: "/dobx/",
          icon: "mdi-box",
        },
        {
          title: "About",
          to: "/about/",
          icon: "mdi-about",
        },
        {
          title: "Notice",
          to: "/notice/list/",
          icon: "mdi-notice",
        },
      ];
    },
  },
};
</script>

<style>
v-btn {
  align-content: center;
}
</style>