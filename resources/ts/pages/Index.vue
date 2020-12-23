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
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        class="font-weight-bold"
        dark
        depressed
        large
      >投稿する</v-btn>
    </v-toolbar>

    <v-divider></v-divider>
    <v-simple-table dark class="mt-3">
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            タイトル
          </th>
          <th class="text-left">
            ニックネーム
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(blog, i) in blogs" :key="i">
          <td>{{ blog.title }}</td>
          <td>{{ blog.user.nickname }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Index",
  data() {
    return {
      blogs: []
    }
  },
  mounted() {
    axios.get('api/blogs').then(res => this.blogs = res.data.data)

  }
}
</script>

<style scoped>

</style>
