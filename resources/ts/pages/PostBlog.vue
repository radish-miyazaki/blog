<template>
  <v-card
    :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
    class="mx-auto"
    flat
    max-width="640"
  >
    <v-card-title class="text-center pa-8">
      <h3>投稿画面</h3>
    </v-card-title>
    <v-divider />
    <div class="pt-6">
      <div>
        <v-text-field
          dense
          height="48px"
          outlined
          class="mb-2"
          label="タイトル"
          v-model="postForm.title"
        ></v-text-field>
        <v-textarea
          label="本文"
          dense
          outlined
          height="150px"
          v-model="postForm.body"
        ></v-textarea>

      </div>
      <div class="pb-8">
        <v-btn
          color="primary"
          depressed
          height="48px"
          tile
          class="font-weight-bold"
          @click.prevent="post"
        >
          投稿する
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
  name: "Blog",

  data() {
    return {
      postForm: {
        title: '',
        body: '',
        user_id: '',
      }
    }
  },

  methods: {
    async post() {
      this.postForm.user_id = this.$store.getters['auth/id']
      await axios.post('/api/blogs', this.postForm)
      await this.$router.push('/')
    }
  }
}
</script>
