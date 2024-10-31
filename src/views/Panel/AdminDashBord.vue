TIGI, [10/2/2024 2:35 PM]
<template>
  <DefaultLayout3>
    <SubNav3 />

    <div class="mr-72 mt-20">


      <!-- <ul v-if="dashboardInfo.hasOwnProperty('user') ">
        <li> users: {{ dashboardInfo.user.users }}</li>
        <li> clients: {{ dashboardInfo.user.clients }}</li>
        <li> professionals: {{ dashboardInfo.user.professionals }}</li>
      </ul> -->
      <!-- <p class="m-5"></p>
      <ul v-if="dashboardInfo.hasOwnProperty('project')">
        <li> all: {{ dashboardInfo.project.projects }}</li>
        <li> ongoing: {{ dashboardInfo.project.ongoing }}</li>
        <li> finished: {{ dashboardInfo.project.finished }}</li>
        <li> denied: {{ dashboardInfo.project.denied }}</li>
        <li> proposed: {{ dashboardInfo.project.proposed }}</li>
      </ul> -->
      <div v-if="showGraphs" class="flex">
        <div class="w-1/2 mr-40 ml-10">
          <apexchart type="donut" :options="clientProfessionalRatio.chartOptions" :series="clientProfessionalRatio.series" ></apexchart>
          <!-- <h1 class="ml-32 font-semibold text-black text-2xl">users</h1> -->
        </div>
        <div class="w-1/2 -mr-32" >
          <apexchart type="bar" height="350" :options="projectStatus.chartOptions" :series="projectStatus.series">   </apexchart>
            
       
        </div>
     
      </div>

      <p class="m-5"></p>

      <div v-if="dashboardInfo.hasOwnProperty('balance')" class="bg-white shadow-md w-full p-20 ml-40 rounded-md" >
        <div class="flex ">
          <div class="bg-green-400  shadow-md  rounded-md mr-3 w-80 h-40"><p class="text-center mt-16 text-white">  Main Balance <br>{{ dashboardInfo.balance.main_balance }} Birr</p></div>
          <div class="bg-cyan-600 shadow-md  rounded-md mr-3  w-80 h-40" > <p class="text-center mt-16 text-white"> All Transacted Money <br> {{ dashboardInfo.balance.total_transactions }} Birr</p></div>        
          <div class="bg-secondary  shadow-md  rounded-md mr-3  w-80 h-40"><p class="text-center mt-16 text-white"> Other Balance <br>{{ dashboardInfo.balance.other_balance }} Birr</p></div>
        </div>
        <div class="flex mt-5">
          <div class="bg-violet-300  shadow-md  rounded-md mr-3 w-80 h-40"><p class="text-center mt-16 text-white"> Total Balance <br> {{ dashboardInfo.balance.total_balance }} Birr</p></div>
          <div class="bg-yellow-300  shadow-md  rounded-md mr-3  w-80 h-40" ><p class="text-center mt-16 text-white">Total Deposits <br> {{ dashboardInfo.balance.total_deposits }} Birr</p></div>        
          <div class="bg-boxdark  shadow-md  rounded-md mr-3  w-80 h-40"><p class="text-center mt-16 text-white">  Total Withdrawal <br>{{ dashboardInfo.balance.total_withdrawals }} Birr</p></div>
        </div>

      </div>
      <!-- <ul v-if="dashboardInfo.hasOwnProperty('balance')">
        <li> all transacted money: {{ dashboardInfo.balance.total_transactions }}</li>

        <li> main balance: {{ dashboardInfo.balance.main_balance }}</li>
        <li> other balance: {{ dashboardInfo.balance.other_balance }}</li>
        <li> total balance: {{ dashboardInfo.balance.total_balance }}</li>

        <li> total deposits: {{ dashboardInfo.balance.total_deposits }}</li>
        <li> total withdrawal: {{ dashboardInfo.balance.total_withdrawals }}</li>

      </ul> -->

    


    </div>

  </DefaultLayout3>
</template>

TIGI, [10/2/2024 2:35 PM]
<script>
import DefaultLayout3 from '@/layouts/DefaultLayout3.vue'
import SubNav3 from '@/components/SubNav3.vue'
import axios from 'axios';
export default {
  components: {
    DefaultLayout3,
    SubNav3
  },
  data() {
    return {
      showGraphs: false,
      dashboardInfo: {},
      clientProfessionalRatio: {
        series: [],
        chartOptions: {
          labels: ['Clients', 'Professionals'],
          chart: {
            type: 'donut',
          },
          title:{
            text: 'users',
            offsetY: 170,
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              },
           
            }
          }]
        },
      },

      projectStatus: {
        series: [],
        chartOptions: {
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              dataLabels: {
                position: 'top', // top, center, bottom
              },
            }
          },
          dataLabels: {
            enabled: true,
            // formatter: function (val) {
            //   return val + "%";
            // },
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#304758"]
            }
          },

          xaxis: {
            categories: ["Ongoing", 'Finished', 'Denied', 'Proposed'],
            position: 'top',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              // formatter: function (val) {
              //   return val + "%";
              // }
            }

          },
          title: {
            text: 'Project By Status',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
              color: '#444'
            }
          }
        },
      }

    }
  },
  methods: {
    fetchDashboard() {
      this.showGraphs = false
      axios.get('http://127.0.0.1:8000/api/dashboard/basic-info').then(response => {
        this.dashboardInfo = response.data.data
        this.showGraphs = true
        this.prepareClientProfessionalRatio();
        this.prepareProjectStatus();
      })
    },
    prepareClientProfessionalRatio() {
      this.clientProfessionalRatio.series = [this.dashboardInfo.user.clients, this.dashboardInfo.user.professionals]
    },
    prepareProjectStatus() {
      this.projectStatus.series.push({
          name: 'projectStatus',
          data: [ this.dashboardInfo.project.ongoing, this.dashboardInfo.project.finished, this.dashboardInfo.project.denied, this.dashboardInfo.project.proposed ]
        })
      // this.projectStatus.series.data = 
    }
  },
  mounted() {
    this.fetchDashboard()
  }

}
</script>

<style></style>