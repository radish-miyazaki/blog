<script>
import { Bar } from 'vue-chartjs';
import axios from 'axios';

export default {
  extends: Bar,
  name: "Chart",

  data() {
    return {
      years: [],
      labels: [],
      number: [],
    }
  },

  mounted() {
    axios.get('/api/dashboard').then(res => {
      console.log(res);
      let data = res.data;
      if(data) {
        data.forEach(e => {
          this.years.push(e.date);
          this.number.push(e.number);
        });
        this.renderChart({
          labels: this.years,
          datasets: [{
            label: '投稿数',
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)'
            ],
            data: this.number,
          }]
        })
      }
    })
  }
}
</script>
