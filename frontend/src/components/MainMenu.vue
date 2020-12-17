<template>
  <div>
    <v-app-bar fixed app>
      <v-btn text class="ma-2" href="/"> Santoki </v-btn>
      <v-btn text class="ma-2" href="/rabbit/">
        <v-icon large class="ma-1" color="green darken-2"> mdi-rabbit </v-icon>
        Rabbit
      </v-btn>
      <v-btn text class="ma-2" href="/carrot/">
        <v-icon large class="ma-1" color="red lighten-2"> mdi-carrot </v-icon>
        Carrot
      </v-btn>
      <v-btn text class="ma-2" href="/dbox/"> D-box </v-btn>
      <v-btn text class="ma-2" href="/about/"> About </v-btn>
      <v-btn text class="ma-2" href="/notice/list/"> Notice </v-btn>
      <v-btn text class="ma-2" href="https://shopping.naver.com/">
        <v-icon large class="ma-1" color="red lighten-3"> mdi-gift </v-icon>
        Shop
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style>
v-btn {
  align-content: center;
}
</style>