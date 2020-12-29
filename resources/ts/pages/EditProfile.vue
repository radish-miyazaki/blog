<template>
  <v-card
    :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
    class="mx-auto"
    flat
    max-width="640"
  >
    <v-card-title class="text-center pa-8">
      <h3>プロフィール編集画面</h3>
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
              v-model="updateForm.first_name"
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
              v-model="updateForm.last_name"
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
          v-model="updateForm.nickname"
        ></v-text-field>

        <v-text-field
          dense
          height="48px"
          outlined
          placeholder="メールアドレス"
          label="メールアドレス"
          class="mb-2"
          v-model="updateForm.email"
        ></v-text-field>
      </div>
      <div class="pb-8">
        <v-btn
          color="#FFCB00"
          depressed
          height="48px"
          tile
          class="font-weight-bold"
        >
          更新する
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "EditProfile",

  data() {
    return {
      updateForm: {
        first_name: this.$store.getters['auth/first_name'],
        last_name: this.$store.getters['auth/last_name'],
        nickname: this.$store.getters['auth/nickname'],
        email: this.$store.getters['auth/email'],
      }
    }
  }
}
</script>

<style scoped>

</style>
