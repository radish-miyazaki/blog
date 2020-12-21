<template>
  <v-card
    :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
    class="mx-auto"
    flat
    max-width="640"
  >
    <v-card-title class="text-center pa-8">
      <h3>会員登録</h3>
    </v-card-title>
    <v-divider />
    <div class="pt-6">
      <div>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              autofocus
              dense
              height="48px"
              outlined
              placeholder="氏名（姓）"
              label="氏名（姓）"
              v-model="registerForm.first_name"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              dense
              height="48px"
              outlined
              placeholder="氏名（名）"
              label="氏名（名）"
              v-model="registerForm.last_name"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-text-field
          dense
          height="48px"
          outlined
          placeholder="ニックネーム"
          label="ニックネーム"
          class="mb-2"
          v-model="registerForm.nickname"
        ></v-text-field>

        <v-text-field
          dense
          height="48px"
          outlined
          placeholder="メールアドレス"
          label="メールアドレス"
          class="mb-2"
          v-model="registerForm.email"
        ></v-text-field>

        <v-text-field
          dense
          height="48px"
          outlined
          type="password"
          placeholder="パスワード"
          label="パスワード"
          class="mb-2"
          v-model="registerForm.password"
        ></v-text-field>

        <v-text-field
          dense
          height="48px"
          outlined
          type="password"
          placeholder="パスワード（確認）"
          label="パスワード（確認）"
          class="mb-2"
          v-model="registerForm.password_confirm"
        ></v-text-field>
      </div>
      <div class="pb-8">
        <v-btn
          color="#FFCB00"
          depressed
          height="48px"
          tile
          class="font-weight-bold"
          @click.prevent="register"
        >
          登録する
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      registerForm: {
        first_name: '',
        last_name: '',
        nickname: '',
        email: '',
        password: '',
        password_confirm: ''
      }
    }
  },

  methods: {
    register() {
      console.log(this.registerForm)
    }
  }


}
</script>

<style scoped>

</style>
