import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';

// ページコンポーネントをインポート
import Login from './pages/Login.vue';
import Index from './pages/Index.vue';
import Register from './pages/Register.vue';
import PostBlog from './pages/PostBlog.vue';
import ShowBlog from './pages/ShowBlog.vue';
import EditBlog from './pages/EditBlog.vue';
import EditComment from './pages/EditComment.vue';
import Profile from './pages/Profile.vue';

// VueRouterプラグインを使用する
// これによって<router-link />コンポーネントなどを使うことができる
Vue.use(VueRouter);

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '',
    component: Index
  },
  {
    path: '/blogs/post',
    component: PostBlog,
    beforeEnter(_: any, _2: any, next: any) {
      if(!store.getters['auth/check']) {
        alert('先にログインしてください。')
        next('/login')
      } else {
        next()
      }
    }
  },
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
    },
  },
  {
    path: '/profile',
    component: Profile,
    beforeEnter(_: any, _2: any, next: any) {
      if(!store.getters['auth/check']) {
        alert('先にログインしてください。')
        next('/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/blogs/:id',
    component: ShowBlog,
    props: true,
  },
  {
    path: '/blogs/:id/edit',
    component: EditBlog,
    props: true
  },
  {
    path: '/comments/:id',
    component: EditComment,
    props: true,
  },
];

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history',
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
