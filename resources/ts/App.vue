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

export default {
  components: {
    Navbar,
  }
}
</script>
