<template>
  <div>
    <h2 class="my-3">ユーザ一覧</h2>
    <div v-if="users">
      <v-simple-table class="my-3">
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              ユーザ名
            </th>
            <th class="text-left">
              メールアドレス
            </th>
            <th class="text-center">
              管理者
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(user, i) in users" :key="`${i}`">
            <td>
              <router-link
                class="text-decoration-none font-weight-bold"
                :to="`/admin/users/${user.id}`">
                {{ user.first_name }} {{ user.last_name }}
              </router-link>
            </td>
            <td>
              {{ user.email }}
            </td>
            <td class="text-center">
              <v-icon v-if="user.isAdmin" color="indigo">
                mdi-account
              </v-icon>
            </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-pagination
        v-model="page"
        :length="lastPage"
        circle
        @input="getUsers"
      ></v-pagination>
    </div>
    <div v-else class="text-center pt-5">
      ユーザは存在しません
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShowUsers",

  data() {
    return {
      users: null,
      page: 1,
      lastPage: 1
    }
  },

  mounted() {
    return this.getUsers(this.page)
  },

  methods: {
    getUsers(page) {
      axios.get('/api/users', {
        params: {
          page: parseInt(page),
        }
      }).then(res => {
        console.log(res)
        this.users = res.data.data
        this.lastPage = res.data.last_page
      }).catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>

</style>
