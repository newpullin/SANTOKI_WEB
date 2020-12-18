<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <h1>{{ notice.title }}</h1>
      </v-col>
      <v-col class="text-right">
        <p>{{ notice.modify_dt }}</p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row align="start" justify="center" class="mt-6">
      <v-col cols="12">
        <v-card class="pa-4" min-height="500px" outlined tile>
          <p style="white-space: pre-wrap">{{ notice.content }}</p>
        </v-card>
      </v-col>
      <v-col cols="12" class="mb-0">
        <v-card class="pa-2 mb-0">
          <p
            tile
            v-if="notice.prev.title"
            @click.stop="fetchPostDetail(notice.prev.id)"
            class="my-hover"
          >
            <strong>이전</strong> &nbsp;&nbsp; {{ notice.prev.title }}
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" class="mt-0">
        <v-card class="pa-2 mt-0" tile>
          <p
            v-if="notice.next.title"
            @click.stop="fetchPostDetail(notice.next.id)"
            class="my-hover"
          >
            <strong>다음</strong> &nbsp;&nbsp; {{ notice.next.title }}
          </p>
        </v-card>
      </v-col>
    </v-row>
    <v-btn text class="my-4" href="/notice/list/" outlined> 목록 </v-btn>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    notice: {},
  }),
  created() {
    console.log("created()...");
    // const postId = location.pathname.split('/')[3] || 2;
    const noticeId = location.pathname.split("/")[2];
    this.fetchPostDetail(noticeId);
  },

  methods: {
    fetchPostDetail(postId) {
      console.log("fetchPostDetail()...", postId);
      axios
        .get(`/api/notice/${postId}/`)
        .then((res) => {
          console.log("POST DETAIL GET RES", res);
          this.notice = res.data;
        })
        .catch((err) => {
          console.log("POST DETAIL GET ERR", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },
  },
};
</script>

<style scoped>
.my-hover:hover {
  cursor: pointer;
  font-style: italic;
}
</style>