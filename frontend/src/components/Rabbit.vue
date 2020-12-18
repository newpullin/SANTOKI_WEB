<template>
  <v-container fluid>
    <v-layout align-center justify-center class="mt-8">
      <v-img
        :src="require('../assets/rabbit.jpg')"
        class="my-3"
        max-width="400px"
        max-height="300px"
      ></v-img>
    </v-layout>
    <v-card-text class="mt-3 text-center">
      <br /><br />
      <h1>Rabbit</h1>
      <br /><br />
      작고 귀여운 센서입니다.<br />
      아두이노로 만들어졌습니다<br />
    </v-card-text>
    <v-layout align-center justify-center class="mt-9">
      <v-btn text class="ma-2" href="https://shopping.naver.com/">
        <v-icon large class="ma-1" color="indigo"> mdi-gift </v-icon>
        구입하기
      </v-btn>
    </v-layout>
  </v-container>
</template>