<template>
  <div>
    <v-app-bar fixed app>
      <v-toolbar-title class="mx-5 text-h4">SANTOKI</v-toolbar-title>
      <v-btn text color="primary" class="ma-2 text-h5" href="/">
        <v-icon large class="mr-2" color="brown lighten-2"> mdi-home </v-icon>
        Home
      </v-btn>
      <v-btn text class="ma-2 text-h5" href="/">
        <v-icon large class="ma-1" color="green darken-2"> mdi-rabbit </v-icon>
        Rabit
      </v-btn>
      <v-btn text class="ma-2 text-h5" href="/">
        <v-icon large class="ma-1" color="red lighten-2"> mdi-carrot </v-icon>
        Carrot
      </v-btn>
      <v-btn text class="ma-2 text-h5" href="/">
        <v-icon class="mr-2" color="brown lighten-2"> mdi-triangle </v-icon>
        D-box
      </v-btn>
      <v-btn text class="ma-2 text-h5" href="/">
        <v-icon large color="dakr lighten-2"> mdi-format-color-text </v-icon>
        bout
      </v-btn>
      <v-btn text class="ma-2 text-h5" href="/">
        <v-icon class="mr-2" large color="dark lighten-2"> mdi-new-box </v-icon>
        Notice
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