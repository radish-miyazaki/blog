<template>
  <v-card
    :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
    class="mx-auto"
    flat
    max-width="640"
    v-if="user"
  >
    <v-card-title class="text-center pa-8">
      <h3>ユーザ詳細</h3>
    </v-card-title>
    <div v-if="user.isAdmin === 0" class="text-right">
      <v-btn
        color="primary"
      >
        <router-link
          :to="`/admin/users/${this.id}/edit`"
          class="font-weight-bold white--text text-decoration-none">
          編集する
        </router-link>
      </v-btn>
      <v-btn
        color="error"
        @click="destroy"
      >
        削除する
      </v-btn>
    </div>
    <v-simple-table class="mt-6">
      <tbody>
      <tr>
        <th>名前</th>
        <td>{{ user.first_name }} {{ user.last_name }}</td>
      </tr>
      <tr>
        <th>ニックネーム</th>
        <td>{{ user.nickname }}</td>
      </tr>
      <tr>
        <th>メールアドレス</th>
        <td>{{ user.email }}</td>
      </tr>
      <tr>
        <th>パスワード</th>
        <td>**********</td>
      </tr>
      <tr>
        <th>管理者</th>
        <td>{{ isAdminUser() }}</td>
      </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "ShowUser",

  props: {
    id: {
      type: String,
      required: true,
    }
  },

  data() {
    return {
      user: null
    }
  },

  methods: {
    async fetchUser() {
      const response = await axios.get(`/api/users/${this.id}`);
      this.user = response.data.data;
    },

    isAdminUser() {
      if (this.user.isAdmin === 1) {
        return '管理者'
      } else {
        return '一般ユーザ'
      }
    },

    async destroy() {
      if(confirm('本当に削除してよろしいですか？')) {
        await axios.post(`/api/users/${this.id}/destroy`);
        await this.$router.push('/admin/users');
      }
    },
  },

  watch: {
    $route: {
      async handler() {
        await this.fetchUser()
      },
      immediate: true
    }
  }
}
</script>
