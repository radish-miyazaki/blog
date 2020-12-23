<template>
  <div
    :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
    class="mx-auto maxWidth">
    <v-card
      flat
    >
      <div v-if="isAuthor" class="text-right pt-3">
        <v-btn
          color="primary"
        >
          <router-link :to="`/blogs/${this.blog.id}/edit`" class="font-weight-bold white--text text-decoration-none">
            編集する
          </router-link>
        </v-btn>
      </div>
      <div v-if="blog">
        <v-card-title class="text-center pa-8">
          <h3>{{ blog.title }}</h3>
        </v-card-title>
        <v-divider />
        <div class="py-6 body-1">
          {{ blog.body }}
        </div>
        <v-divider></v-divider>
      </div>
    </v-card>
    <div v-if="comments">
      <h3 class="mt-3">コメント</h3>
      <v-card flat color="blue-grey lighten-5" v-for="(comment, i) in comments" :key="i" class="mt-4">
        <v-card-text>
          {{ comment.text }}
        </v-card-text>
            <div class="mr-3 pb-2 text--disabled text-right">
              {{ comment.user.nickname }}
            </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShowBlog",

  props: {
    id: {
      type: String,
      required: true,
    }
  },

  data() {
    return {
      blog: null,
      isAuthor: false,
      comments: null,
    }
  },

  methods: {
    async fetchBlog() {
      const response = await axios.get(`/api/blogs/${this.id}`)

      this.blog = response.data.data
      this.isAuthor = this.blog.user.id === this.$store.getters['auth/id']
      this.comments = this.blog.comments
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
 .maxWidth {
   width: 640px;
 }
</style>
