require('../js/bootstrap');
import Vue from 'vue';
import "vuetify/dist/vuetify.min.css";
import Vuetify from 'vuetify';
import router from './router';
import App from './App.vue'

Vue.use(Vuetify);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />',
  vuetify: new Vuetify()
})
