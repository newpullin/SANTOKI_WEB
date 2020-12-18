<template>
  <v-container fluid class="pa-0">
    <v-card-text height="300px"></v-card-text>
    <v-divider></v-divider>
    <v-img
      lazy-src="https://picsum.photos/10/15"
      max-height="300px"
      max-width="100%"
      src="https://picsum.photos/500/300"
    ></v-img>

    <v-card-text class="mt-3 text-center">
      <br /><br />
      <h1>산토끼</h1>
      <br /><br />
      산토끼는 포트폴리오 제출을 위한 프로젝트입니다<br />
      아두이노와 라즈베리 파이를 사용하여, 센서와 허브를 구성하였고<br />
      추가적으로 메인 서버로 이루어진 단순한 IOT 프로젝트입니다.<br />
      아두이노는 데이터를 수집합니다. <br />
      라즈베리파이는 데이터를 받습니다.<br />
      라즈베리파이는 서버로 데이터를 전송합니다. <br />
      아두이노는 캐롯을 통해 직접 조종하거나 데이터를 읽을 수 있습니다.<br />
      이 홈페이지는 이 프로젝트를 소개하기 위해서 만들어졌습니다.<br />
      <br /><br />
    </v-card-text>

    <v-img
      lazy-src="https://picsum.photos/10/10"
      max-height="300px"
      max-width="100%"
      src="https://picsum.photos/500/310"
    ></v-img>
    <v-card-text class="mt-3 text-center">
      <br /><br />
      <h1>사이트 개발 환경</h1>
      <br /><br />
      <p>
        이 사이트의 프론트 엔드는 Vue와 Vuetify를 사용하여 만들어졌습니다<br />
        백엔드는 Python의 Django를 사용하여 구성하였습니다.<br />
        컨트롤러 역할을 하는 Carrot은 Vue를 사용하여 PWA로 구성할 계획입니다.
        <br />
      </p>
      <br /><br />
    </v-card-text>
    <v-img
      lazy-src="https://picsum.photos/10/6"
      max-height="300px"
      max-width="100%"
      src="https://picsum.photos/500/320"
      class="mt-3 justify-center"
    ></v-img>

    <v-card-text class="mt-3 text-center">
      <br /><br />
      <h1>왜 산토끼 인가?</h1>
      <br /><br />
      <p>
        센서로 데이터를 모아오는 아두이노가 토끼<br />
        같다는 생각이 들어서 이름을 이렇게 지었습니다.<br />
        이 토끼들을 조종하는 컨트롤러의 <br />
        이름은 당근으로 지었습니다.<br />
      </p>
      <br /><br /><br /><br /><br /><br />
    </v-card-text>
  </v-container>
</template>