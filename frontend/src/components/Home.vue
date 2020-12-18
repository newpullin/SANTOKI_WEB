<template>
  <v-container fluid class="pa-0">
    <v-carousel v-model="model" class="mb-5">
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">화면 {{ i + 1 }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-card-text height="300px"></v-card-text>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row align="center" justify="center" class="my-9">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">Santoki</h1>
          <h4 class="subheading">Build your Home Smart!</h4>
        </v-col>
      </v-row>
    </v-parallax>
    <v-card-text height="300px"></v-card-text>
    <v-parallax
      height="300"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      class="my-9"
    ></v-parallax>
    <v-card-text height="300px"></v-card-text>
    <v-parallax
      height="400"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      class="my-9"
    ></v-parallax>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
};
</script>