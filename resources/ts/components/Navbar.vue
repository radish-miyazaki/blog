<template>
  <div>
    <v-app-bar
      dark
      color="teal"
    >
      <v-toolbar-title>
        <router-link
          to="/"
          class="text-decoration-none font-weight-bold white--text">
          miniBLOG
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <div v-if="isLogin">
        <router-link
          to="/profile"
          class="text-decoration-none white--text">
          {{ nickname }}
        </router-link>
        <v-btn
          dark
          class="mx-3 font-weight-bold"
          @click="logout">
          ログアウト
        </v-btn>
      </div>
      <div v-else>
        <v-btn dark>
          <router-link
            to="/register"
            class="white--text text-decoration-none font-weight-bold">
            登録
          </router-link>
        </v-btn>
        <v-btn dark class="mx-3">
          <router-link
            to="/login"
            class="white--text text-decoration-none font-weight-bold">
            ログイン
          </router-link>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.getters['auth/check']
    },

    nickname() {
      return this.$store.getters['auth/nickname']
    }
  },

  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    }
  }
}
</script>
