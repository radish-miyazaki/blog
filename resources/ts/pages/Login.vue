<template>
  <div>
    <v-card
      :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
      class="mx-auto"
      flat
      max-width="640"
    >
      <div v-if="loginError">
        <ul v-if="loginError.email">
          <li v-for="msg in loginError.email" :key="msg">{{ msg }}</li>
        </ul>
        <ul v-if="loginError.password">
          <li v-for="msg in loginError.password" :key="msg">{{ msg }}</li>
        </ul>
      </div>
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
            :rules="[required, emailValidation]"
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
            :rules="[required]"
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
import { mapState } from 'vuex';
export default {
  name: "Login",

  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      required: value => !!value || "必ず入力してください。",
      emailValidation: value => /.+@.+\..+/.test(value) || '',
    }
  },

  computed: {
    ...mapState({
      apiStatus: state => state.auth.apiStatus,
      loginError: state => state.auth.loginErrorMessage
    })
  },

  methods: {
    async login() {
      await this.$store.dispatch('auth/login', this.loginForm)

      if(this.apiStatus) {
        if (this.$store.getters['auth/admin'] === 1) {
          // 管理者の場合、ダッシュボードに遷移
          this.$router.push('/admin/dashboard')
        } else if (this.$store.getters['auth/admin'] === 0) {
          // 管理者以外の場合、ブログ一覧画面に遷移
          this.$router.push('/')
        }
      }
    },

    clearError() {
      this.$store.commit('auth/setLoginErrorMessages', null)
    }
  },

  created() {
    this.clearError()
  }
}
</script>
