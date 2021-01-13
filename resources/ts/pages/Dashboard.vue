<template>
  <div>
    <v-navigation-drawer app clipped>
      <v-list>
        <v-list-item href="/admin/users">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              ユーザ一覧
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="/">
          <v-list-item-icon>
            <v-icon>mdi-post</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              ブログ一覧
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div>
      <Chart />
    </div>
  </div>
</template>

<script>
import Chart from '../components/Chart.vue'

export default {
  name: "Dashboard",
  data() {
    return {
      drawer: true
    }
  },

  components: {
    Chart
  }

}
</script>

<style scoped>

</style>
