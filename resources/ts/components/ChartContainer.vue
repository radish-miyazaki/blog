<template>
  <div class="container">
    <chart
      v-if="loaded"
      :chartdata="chartdata"
    ></chart>
  </div>
</template>

<script>
import Chart from './Chart.vue';
import axios from "axios";

export default {
  name: "ChartContainer",

  components: { Chart },

  data() {
    return {
      loaded: false,
      chartdata: null,
    }
  },

  async mounted() {
    this.loaded = false
    try {
      const blogList = await axios.get('/api/blogs')
      this.chartdata = blogList.data
      console.log(this.chartdata)
      this.loaded = true
    } catch(e) {
      console.log(e)
    }
  }
}
</script>
