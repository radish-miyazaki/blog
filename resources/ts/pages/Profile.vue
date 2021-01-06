<template>
  <v-card
    :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
    class="mx-auto"
    flat
    max-width="640"
    v-if="user"
  >
    <v-card-title class="text-center pa-8">
      <h3>プロフィール</h3>
    </v-card-title>
    <div class="text-right">
      <v-btn
        color="primary"
      >
        <router-link
          to="/profile/edit"
          class="font-weight-bold white--text text-decoration-none">
          編集する
        </router-link>
      </v-btn>
    </div>
    <v-simple-table class="mt-6">
      <tbody>
      <tr>
        <th>名前</th>
        <td>{{ first_name }} {{ last_name }}</td>
      </tr>
      <tr>
        <th>ニックネーム</th>
        <td>{{ nickname }}</td>
      </tr>
      <tr>
        <th>メールアドレス</th>
        <td>{{ email }}</td>
      </tr>
      <tr>
        <th>パスワード</th>
        <td>**********</td>
      </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "Profile",

  data() {
    return {
      user: null,
      first_name: '',
      last_name: '',
      nickname: '',
      email: '',
    }
  },

  methods: {
    async fetchProfile() {
      const response = await axios.get('/api/user')
      this.user = response.data;

      this.first_name = this.user.first_name
      this.last_name = this.user.last_name
      this.nickname = this.user.nickname
      this.email = this.user.email
    },
  },

  watch: {
    $route: {
      async handler() {
        await this.fetchProfile()
      },
      immediate: true
    }
  }
}
</script>
