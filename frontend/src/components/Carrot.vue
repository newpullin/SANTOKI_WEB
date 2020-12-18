<template>
  <v-container fluid>
    <v-layout align-center justify-center class="mt-8">
      <v-img
        :src="require('../assets/carrot.jpg')"
        class="my-3"
        max-width="400px"
        max-height="300px"
      ></v-img>
    </v-layout>
    <v-card-text class="mt-3 text-center">
      <br /><br />
      <h1>Carrot</h1>
      <br /><br />
      산토끼 전용 컨트롤러입니다.<br />
      PWA 기술로 만들어져 크로스플랫폼을 지원합니다.<br />
      다운로드 없이 웹에서 사용가능합니다.<br />
      다운로드도 가능합니다. <br /><br />
    </v-card-text>
    <v-layout align-center justify-center class="mt-9">
      <v-btn text class="my-4" href="https://shopping.naver.com/">
        <v-icon large class="ma-1" color="indigo"> mdi-download </v-icon>
        사용하기
      </v-btn>
    </v-layout>
  </v-container>
</template>