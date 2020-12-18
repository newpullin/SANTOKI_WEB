<template>
  <v-footer dark padless>
    <v-container fluid class="pa-0">
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text pt-1">
          산토끼 - 작고 빠른 IoT 시스템<br />
          KostaEdu 경기도 성남시 분당구 삼평동 대왕판교로 670길 (삼평동 682번지)
          유스페이스2 B동 8층<br />
          포트폴리오 용입니다. 이메일 newpullin@naver.com
        </v-card-text>
        <v-divider></v-divider>

        <v-card-text class="white--text">
          Copylight &copy;{{ new Date().getFullYear() }} —
          <strong>Santoki</strong>
        </v-card-text>
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>