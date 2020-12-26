<template>
  <div
    v-if="blog"
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
    <v-divider></v-divider>
    <form v-if="isLogin" @submit="postComment">
      <h3 class="my-3">コメントを投稿する</h3>
      <v-textarea
        label="コメント"
        dense
        outlined
        height="150px"
        v-model="commentContent"
      ></v-textarea>
      <v-btn
        color="teal"
        class="mb-3 font-weight-bold white--text"
        type="submit"
      >
        コメント投稿
      </v-btn>
    </form>
    <div v-if="comments">
      <h3 class="mt-3">コメント</h3>
      <v-card flat color="blue-grey lighten-5" v-for="(comment, i) in comments" :key="i" class="mt-4">
        <v-card-text>
          {{ comment.text }}
        </v-card-text>
        <v-row
          class="mr-3 pb-2 text--disabled text-right"
          align="center"
          justify="end"
        >
          <div class="mr-3">
            {{ comment.user.nickname }}
          </div>
          <router-link to="/" class="mr-1 text-decoration-none">
            編集
          </router-link>
        </v-row>
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
      commentContent: '',
    }
  },

  computed: {
    isLogin() {
      return this.$store.getters['auth/check']
    }
  },

  methods: {
    async fetchBlog() {
      const response = await axios.get(`/api/blogs/${this.id}`)

      this.blog = response.data.data
      this.isAuthor = this.blog.user.id === this.$store.getters['auth/id']
      this.comments = this.blog.comments
    },

    async postComment() {
      await axios.post(`/api/blogs/${this.id}/comments`, {
        text: this.commentContent
      })

      this.commentContent = ''
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
