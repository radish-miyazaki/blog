import bootstrap from "./bootstrap";
import Vue from 'vue';
import "vuetify/dist/vuetify.min.css";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vuetify from 'vuetify';
import router from './router';
import App from './App.vue';
import store from './store';

bootstrap();
Vue.use(Vuetify);

const createApp = async () => {
  await store.dispatch('auth/currentUser')

  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App />',
    vuetify: new Vuetify()
  })
}

createApp();
