import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';

// ページコンポーネントをインポート
import Login from './pages/Login.vue';
import Index from './pages/Index.vue';
import Register from './pages/Register.vue';

// VueRouterプラグインを使用する
// これによって<router-link />コンポーネントなどを使うことができる
Vue.use(VueRouter);

// パスとコンポーネントのマッピング
const routes = [{ path: '', component: Index },
  {
    path: '/login',
    component: Login,
    beforeEnter (_: any, _2: any, next: any) {
      if (store.getters['auth/check']) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/register',
    component: Register,
    beforeEnter (_: any, _2: any, next: any) {
      if (store.getters['auth/check']) {
        next('/')
      } else {
        next()
      }
    }
  }
];

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history',
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
