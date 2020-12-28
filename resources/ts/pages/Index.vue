<template>
  <div>
    <h2 class="my-3">ブログ一覧</h2>
    <v-divider></v-divider>

    <v-toolbar class="mt-2">
      <v-text-field
        clearable
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="検索する"
        v-model="keyword"
      ></v-text-field>
      <template v-if="isLogin">
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          class="font-weight-bold"
          dark
          depressed
          large
        >
          <router-link
            to="/blogs/post"
            class="white--text text-decoration-none font-weight-bold"
          >
            投稿する
          </router-link>
        </v-btn>
      </template>
    </v-toolbar>

    <v-divider></v-divider>
    <div v-if="blogs">
      <v-simple-table dark class="my-3">
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              タイトル
            </th>
            <th class="text-left">
              ニックネーム
            </th>
            <th>
              タグ
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(blog, i) in blogs" :key="`${i}`">
            <td>
              <router-link
                class="text-decoration-none white--text font-weight-bold"
                :to="`/blogs/${blog.id}`">
                {{ blog.title }}
              </router-link>
            </td>
            <td>{{ blog.user.nickname }}</td>
            <td>
              <v-chip
                small
                v-for="(tag, j) in blog.tags"
                :key="`${j}`"
                class="ml-1"
                outlined
                color="success">
                {{ tag.name }}
              </v-chip>
            </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-pagination
        v-model="page"
        :length="lastPage"
        circle
        @input="getBlogs"
      ></v-pagination>
    </div>
    <div v-else class="text-center pt-5">
      投稿はありません。
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Index",
  data() {
    return {
      blogs: null,
      page: 1,
      lastPage: 1,
      keyword: "",
    }
  },

  mounted() {
    return this.getBlogs(this.page)
  },

  methods: {
    getBlogs(page) {
      axios.get('api/blogs', {
        params: {
          page: parseInt(page),
        }
      }).then(res => {
        this.blogs = res.data.data
        this.lastPage = res.data.meta.last_page
      }).catch(e => console.log(e))
    },

    search() {
      if(!!this.keyword) {
        axios.get('/api/blogs?keyword=' + this.keyword)
          .then(res => {
            this.blogs = res.data.data;
            this.lastPage = res.data.meta.last_page
          })
          .catch(e => console.log(e))
      } else {
        this.getBlogs(1);
      }
    }
  },
  watch: {
    keyword() {
      this.search()
    }
  },

  computed: {
    isLogin() {
      return this.$store.getters['auth/check']
    },
  }
}
</script>

<style scoped>

</style>
