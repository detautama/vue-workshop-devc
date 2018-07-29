import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('currency', function (value) {
  return 'Rp. ' + parseFloat(value).toFixed(3);
})

new Vue({
  render: h => h(App)
}).$mount('#app')
