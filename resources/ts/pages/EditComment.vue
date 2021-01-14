<template>
  <v-card
    :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
    class="mx-auto"
    flat
    max-width="640"
    v-if="comment"
  >
    <v-card-title class="text-center pa-8">
      <h3>コメント編集画面</h3>
    </v-card-title>
    <div class="text-right">
      <v-btn
        color="error"
        class="font-weight-bold mb-3"
        @click="destroy"
      >
        削除する
      </v-btn>
    </div>
    <v-divider />
    <div class="pt-6">
      <div>
        <v-textarea
          label="コメント"
          dense
          outlined
          height="150px"
          v-model="text"
          :rules="[required]"
        ></v-textarea>
      </div>
      <div class="pb-8">
        <v-btn
          color="primary"
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
import axios from 'axios';

export default {
  name: "EditComment",

  data() {
    return {
      comment: null,
      text: '',
      required: value => !!value || "必ず入力してください。",
    }
  },

  props: {
    id: {
      type: String,
      required: true,
    }
  },

  methods: {
    async fetchComment() {
      const response = await axios.get(`/api/comments/${this.id}`)
      this.comment = response.data

      if(this.comment.user.id !== this.$store.getters['auth/id']
        && this.$store.getters['auth/admin'] === 0) {
        await this.$router.push('/') // 一つ前の画面に戻す
      }
      this.text = this.comment.text
    },

    async update() {
      this.comment.text = this.text
      await axios.post(`/api/comments/${this.id}/update`, this.comment);
      this.$router.go(-1);
    },

    async destroy() {
      if(confirm('本当に削除してよろしいですか？')) {
        await axios.post(`/api/comments/${this.id}/destroy`);
        this.$router.go(-1);
      }
    }
  },

  watch: {
    $route: {
      async handler() {
        await this.fetchComment()
      },
      immediate: true
    }
  }


}
</script>

<style scoped>

</style>
