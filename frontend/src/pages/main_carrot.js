import Vue from 'vue'
import AppCarrot from './AppCarrot.vue'
import vuetify from '../plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(AppCarrot)
}).$mount('#app')
