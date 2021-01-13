<script>
import { Bar } from 'vue-chartjs';
import axios from 'axios';
import * as palette from 'google-palette';

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
      let data = res.data;
      if(data) {
        data.forEach(e => {
          this.years.push(e.date);
          this.number.push(e.number);
        });
        this.renderChart(
          // chart-data
          {
            labels: this.years,
            datasets: [{
              label: '投稿数',
              backgroundColor: palette('mpn65', this.number.length).map(
                function (hex) {
                  return '#' + hex
                }
              ),
              data: this.number,
            }]
          },
          // options
          {
            title: {
              display: true,
              text: '日別ブログ投稿数',
              padding: 10,
              fontSize: 23
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginZero: true
                  },
                  scaleLabel: {
                    display: true,
                    labelString: '投稿数',
                    fontSize: 18
                  }
                }
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: '日付',
                    fontSize: 18
                  }
                }
              ]
            },
            legend: {
              display: false
            }
          })
      }
    })
  }
}
</script>
