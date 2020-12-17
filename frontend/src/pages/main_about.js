import Vue from 'vue'
import AppAbout from './AppAbout.vue'
import vuetify from '../plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(AppAbout)
}).$mount('#app')
