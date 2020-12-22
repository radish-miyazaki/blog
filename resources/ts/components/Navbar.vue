<template>
  <div>
    <v-app-bar
      dark
      color="teal"
    >
      <v-toolbar-title>
        <router-link to="/" class="text-decoration-none text-decoration-none font-weight-bold white--text">
          miniBLOG
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <span> username </span>
      <v-btn dark class="mx-3">
        <router-link to="/login" class="white--text text-decoration-none font-weight-bold">
          ログイン
        </router-link>
      </v-btn>
      <v-btn dark class="mx-3 font-weight-bold" @click="logout">
        ログアウト
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    }
  }
}
</script>
