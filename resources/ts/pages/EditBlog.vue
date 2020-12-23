<template>
  <v-card
    :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
    class="mx-auto"
    flat
    max-width="640"
  >
    <v-card-title class="text-center pa-8">
      <h3>更新画面</h3>
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
          v-model="title"
        ></v-text-field>
        <v-textarea
          label="本文"
          dense
          outlined
          height="150px"
          v-model="body"
        ></v-textarea>

      </div>
      <div class="pb-8">
        <v-btn
          color="primary"
          depressed
          height="48px"
          tile
          class="font-weight-bold"
          @click.prevent="update"
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
  name: "EditBlog",

  data() {
    return {
      blog: null,
      title: '',
      body: ''
    }
  },

  props: {
    id: {
      type: String,
      required: true,
    }
  },

  methods: {
    async fetchBlog() {
      const response = await axios.get(`/api/blogs/${this.id}`)
      this.blog = response.data.data

      if(this.blog.user.id !== this.$store.getters['auth/id']) {
        await this.$router.push('/')
      }
      this.title = this.blog.title
      this.body = this.blog.body
    },

    async update() {
      this.blog.title = this.title;
      this.blog.body = this.body;

      await axios.post(`/api/blogs/${this.id}`, this.blog);
      this.$router.push(`/blogs/${this.id}`);
    }
  },

  watch: {
    $route: {
      async handler() {
        await this.fetchBlog()
      },
      immediate: true
    }
  }
}
</script>

<style scoped>

</style>
