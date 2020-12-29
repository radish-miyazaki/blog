<template>
  <v-card
    :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
    class="mx-auto"
    flat
    max-width="640"
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
    <v-simple-table dark class="mt-6">
      <tbody>
      <tr>
        <th>名前</th>
        <td>{{ this.$store.getters['auth/name'] }}</td>
      </tr>
      <tr>
        <th>ニックネーム</th>
        <td>{{ this.$store.getters['auth/nickname'] }}</td>
      </tr>
      <tr>
        <th>メールアドレス</th>
        <td>{{ this.$store.getters['auth/email'] }}</td>
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
export default {
  name: "Profile",
}
</script>
