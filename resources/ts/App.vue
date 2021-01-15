<template>
  <v-app>
    <header>
      <Navbar />
    </header>
    <v-main>
      <div class="container">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import { INTERNAL_SERVER_ERROR } from "./util";

export default {
  components: {
    Navbar,
  },

  computed: {
    errorCode() {
      return this.$store.state.error.code
    }
  },

  watch: {
    errorCode: {
      handler(v) {
        if (v === INTERNAL_SERVER_ERROR) {
          this.$router.push('/500')
        }
      },
      immediate: true
    }
  },
  $router () {
    this.$store.commit('error/setCode', null)
  }
}
</script>
