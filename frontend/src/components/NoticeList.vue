<template>
  <v-container>
    <v-card-text height="200px"></v-card-text>
    <v-data-table
      :headers="headers"
      :items="notices"
      sort-by="id"
      sortDesc="true"
      class="elevation-1"
      :items-per-page="5"
      @click:row="serverPage"
      :loading="table_loading"
      loading-text="Loading... Please wait"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title> 공지사항 </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
        </v-toolbar>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "NoticeList",

  data: () => ({
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "제  목", value: "title" },
      { text: "수정일", value: "modify_dt" },
      { text: "작성자", value: "owner" },
    ],
    notices: [],
  }),
  methods: {
    fetchPostList() {
      console.log("fetchPostList()...");
      this.table_loading = true;
      let getUrl = "";
      getUrl = "/api/notice/list/";
      axios
        .get(getUrl)
        .then((res) => {
          console.log("Notices LIST GET RES", res);
          this.notices = res.data;
          this.table_loading = false;
        })
        .catch((err) => {
          console.log("POST List GET ERR.RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },
    serverPage(item) {
      console.log("serverPages()...", item);
      location.href = `/notice/${item.id}/`;
    },
  },
  created() {
    this.fetchPostList();
  },
};
</script>
<style scoped>
.v-data-table >>> tbody > tr {
  cursor: pointer;
}
</style>