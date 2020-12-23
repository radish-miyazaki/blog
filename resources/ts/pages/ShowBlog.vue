<template>
  <v-card
    :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
    class="mx-auto"
    flat
    max-width="640"
  >
    <div v-if="blog">
      <v-card-title class="text-center pa-8">
        <h3>{{ blog.title }}</h3>
      </v-card-title>
      <v-divider />
      <div class="py-6">
        {{ blog.body }}
      </div>
      <v-divider></v-divider>
    </div>
  </v-card>
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
      blog: null
    }
  },

  methods: {
    async fetchBlog() {
      const response = await axios.get(`/api/blogs/${this.id}`)

      this.blog = response.data.data
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
