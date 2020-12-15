import Vue from 'vue';
import VueRouter from 'vue-router';

// ページコンポーネントをインポート
import Login from './pages/Login.vue';
import Index from './pages/Index.vue';

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter);

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '',
    component: Index
  },
  {
    path: '/login',
    component: Login
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
