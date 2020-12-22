<template>
  <div>
    <v-card
      :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
      class="mx-auto"
      flat
      max-width="640"
    >
      <v-card-title class="text-center pa-8">
        <h3>ログイン</h3>
      </v-card-title>
      <v-divider />
      <div class="pt-6">
        <div>
          <v-text-field
            autofocus
            dense
            height="48px"
            outlined
            placeholder="メールアドレス"
            v-model="loginForm.email"
            class="mb-2"
            label="メールアドレス"
          ></v-text-field>

          <v-text-field
            dense
            height="48px"
            outlined
            type="password"
            placeholder="パスワード"
            v-model="loginForm.password"
            class="mb-2"
            label="パスワード"
          ></v-text-field>
        </div>
        <div class="pb-8">
          <v-btn
            color="#FFCB00"
            depressed
            height="48px"
            tile
            class="font-weight-bold"
            @click.prevent="login"
          >
            ログイン
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async login() {
      await this.$store.dispatch('auth/login', this.loginForm)
      this.$router.push('/')
    }
  }
}
</script>
