<template>
  <v-card
    :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
    class="mx-auto"
    flat
    max-width="640"
    v-if="user"
  >
    <v-card-title class="text-center pa-8">
      <h3>ユーザ情報編集画面</h3>
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
              v-model="first_name"
              :rules="[required]"
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
              v-model="last_name"
              :rules="[required]"
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
          v-model="nickname"
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          dense
          height="48px"
          outlined
          placeholder="メールアドレス"
          label="メールアドレス"
          class="mb-2"
          v-model="email"
          :rules="[required, emailValidation]"
        ></v-text-field>
      </div>
      <div class="pb-8">
        <v-btn
          color="#FFCB00"
          depressed
          height="48px"
          tile
          class="font-weight-bold"
          @click="update"
        >
          更新する
        </v-btn>
      </div>
    </div>
  </v-card>

</template>

<script>
import axios from "axios";

export default {
  name: "EditUser",

  props: {
    id: {
      type: String,
      required: true,
    }
  },

  data() {
    return {
      user: null,
      first_name: '',
      last_name: '',
      email: '',
      nickname: '',
      required: value => !!value || "必ず入力してください。",
      emailValidation: value => /.+@.+\..+/.test(value) || '',
    }
  },

  methods: {
    async fetchUser() {
      const response = await axios.get(`/api/users/${this.id}`);
      this.user = response.data.data;

      this.first_name = this.user.first_name
      this.last_name = this.user.last_name
      this.nickname = this.user.nickname
      this.email = this.user.email
    },

    async update() {
      await axios.post(`/api/users/${this.id}/update`, {
        first_name: this.first_name,
        last_name: this.last_name,
        nickname: this.nickname,
        email: this.email,
      })

      await this.$router.push(`/admin/users/${this.id}`);
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

<style scoped>

</style>
