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
import EditProfile from './pages/EditProfile.vue';

import Dashboard from './pages/Dashboard.vue';

// VueRouterプラグインを使用
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
    path: '/profile/edit',
    component: EditProfile,
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
  // 管理者用ページ //////////////////////////////
  {
    path: '/admin/dashboard',
    component: Dashboard,
    beforeEnter(_: any, _2: any, next: any) {
      if(!store.getters['auth/check']) {
        alert('先にログインしてください。')
        next('/login')
      } else if(store.getters['auth/admin'] === 0) {
        alert('管理者権限がありません。')
        next('/')
      } else {
        next()
      }
    }
  },
  // 管理者用ページ //////////////////////////////
];

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history',
  routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
