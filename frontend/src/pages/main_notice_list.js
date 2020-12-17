import Vue from 'vue'
import AppNoticeList from './AppNoticeList.vue'
import vuetify from '../plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(AppNoticeList)
}).$mount('#app')
