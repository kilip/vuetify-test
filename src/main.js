import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './routes'
import SiapComp from './views';

Vue.config.productionTip = false;
Vue.use(SiapComp);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
