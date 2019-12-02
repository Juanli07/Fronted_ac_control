<template>
  <div class="small">
    <h3 class=fecha>{{ fecha }}</h3>
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'
  import axios from "axios";
  export default {
    
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null,
        reg : [],
        url : "https://ac-ctrl.herokuapp.com/regforhour",
        fecha : ""
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      getdata(){
        axios.get(this.url).then(response => {
          console.log("passs")
          this.reg = response.data;
          this.fecha = this.reg[0].time.substring(0, 16)
          console.log(this.fecha)
          console.log(this.reg);
          console.log("yes");
        }).catch(error => {
        console.log(error)
      });
      },
      fillData () {
        this.getdata()
        this.datacollection = {
          labels: ["8:00-9:00", "10:00-11:00", "1:00-2:30", "3:00-4:30"],
          datasets: [
            {
              label: 'Temperature',
              backgroundColor: '#f87979',
              data: [23, 25, 27, 22]
            }, {
              label: 'Temperature',
              backgroundColor: '#f87979',
              data: [20, 21, 22, 23, 24, 25, 26, 27, 28,29]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin-top: 10px;
    /* margin:  150px auto; */

  }
  .fecha {
    text-size-adjust: 10px;
    text-align: center;
  }
</style>