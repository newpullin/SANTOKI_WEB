import Vue from 'vue'
import AppDBox from './AppDBox.vue'
import vuetify from '../plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(AppDBox)
}).$mount('#app')
