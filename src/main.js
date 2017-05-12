import Vue from 'vue';
import VueResource from 'vue-resource';  // get $http
import App from './App';
import router from './router'; //get vue-router

Vue.config.productionTip = false;
Vue.use(VueResource);


router.push('/goods');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router,
  render: h => h(App)
})
