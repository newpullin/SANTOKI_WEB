import Vue from 'vue'
import AppNoticeDetail from './AppNoticeDetail.vue'
import vuetify from '../plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(AppNoticeDetail)
}).$mount('#app')
