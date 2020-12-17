import Vue from 'vue'
import AppRabbit from './AppRabbit.vue'
import vuetify from '../plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(AppRabbit)
}).$mount('#app')
