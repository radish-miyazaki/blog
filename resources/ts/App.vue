<template>
  <v-app>
    <header>
      <Navbar />
    </header>
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
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
