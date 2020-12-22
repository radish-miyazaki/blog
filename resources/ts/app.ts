require('../js/bootstrap');
import Vue from 'vue';
import "vuetify/dist/vuetify.min.css";
import Vuetify from 'vuetify';
import bootstrap from './bootstrap';
import router from './router';
import App from './App.vue';
import store from './store';

Vue.use(Vuetify);
bootstrap();

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App />',
  vuetify: new Vuetify()
})
