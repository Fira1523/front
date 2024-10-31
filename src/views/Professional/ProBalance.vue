<template>
  <DefaultLayout>
    <SubNav2 />
    <div class="flex">
      <div class="ml-10 mt-10">
        <div class="mt-20" v-if="showBalance">
          <img src="\public\coin.jpg" alt="" class="w-60 rounded-3xl" />
          <h1 class="mt-5 ml-20 font-semibold">Balance <sub>(ETB)</sub></h1>
          <h1 class="ml-24 mt-2 text-black font-semibold">{{ balance.balance }}</h1>

          <button
            @click="showWithdraw"
            class="mt-2 ml-10 text-lime-600 px-8 py-2 rounded-md border hover:bg-lime-500 hover:text-white"
          >
            Withdraw Cash
          </button>
        </div>
        <div v-if="showDepositForm" class="mx-96 mt-40">
          <img src="\public\coin.jpg" alt="" class="w-60 rounded-3xl" />
          <label for="" class="block text-lime-600 text-sm font-bold mb-2 mt-5"
            >Enter Money amount to deposite:</label
          >
          <input
            placeholder="enter amount"
            v-model="depositAmount"
            class="focus:outline-none pl-3 py-1 rounded-md ml-5"
          />
       

          <p @click="cancel">cancel</p>

          <p class="text-green-800">{{ successMessage }} 22</p>
          <p class="text-red">{{ errorMessage }}</p>
        </div>

        <div v-if="showWithdrawForm" class="mx-96 mt-40">
          <img src="\public\coin.jpg" alt="" class="w-60 rounded-3xl" />
          <label for="" class="block text-lime-600 text-sm font-bold mb-2 mt-5"
            >Enter Money amount to withdraw:</label
          >
          <input
            placeholder="enter amount"
            v-model="withdrawAmount"
            class="focus:outline-none pl-3 py-1 rounded-md ml-5"
          />
          <button
            @click="withdraw"
            class="mt-4 ml-12 bg-lime-500 text-white px-8 py-1 rounded-md hover:bg-lime-600"
          >
            withdraw
          </button>
          <p @click="cancel">cancel</p>

          <p class="text-green-800">{{ successMessage }}</p>
          <p class="text-red">{{ errorMessage }}</p>
        </div>
        <!-- 
    <div>
      <h1>Transaction History</h1>

      

  

    
    </div>  -->
      </div>

      <div class="ml-20 mt-32">
   
        <div class="ml-">
          <div class="ml-40 mt-5">
            <div class="flex">
              <div >
                <h1 class="text-black">withdraw</h1>
                <div class="flex mb-3">
                  <ul>
                    <li v-for="h in histories.withdraws" :key="h.id">
                      - {{ h.amount }} on {{ h.created_at }}
                    </li>
                  </ul>
                  <p class="text-black ml-40 font-semibold"></p>
                </div>
                  </div>
              
            
            </div>

            <div class="flex ml-40 mt-6">
              <img src="\telebirr coin.png" class="w-10" />
              <p class="ml-3 mt-3 mr-3 text-green-500 font-semibold">Give Tip</p>
              <img src="\tlebirr next icon.jpg" class="w-7 h-7 mt-2" />
            </div>
            <img src="\telecrop.jpg">
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SubNav2 from '@/components/SubNav2.vue'

import axios from 'axios'

export default {
  components: {
    DefaultLayout,
    SubNav2
  },
  created() {},
  data() {
    return {
      balance: {},
      showDepositForm: false,
      showWithdrawForm: false,
      showBalance: true,
      depositAmount: null,
      withdrawAmount: null,
      successMessage: null,
      errorMessage: null,
      histories: []
    }
  },
  mounted() {
    this.fetchBalance()
    this.fetchTransactionHistory()
  },
  methods: {
    cancel() {
      this.showDepositForm = false
      this.showWithdrawForm = false
      this.depositAmount = null
      this.withdrawAmount = null
      this.showBalance = true
      this.successMessage = null
      this.errorMessage = null
      this.fetchBalance()
      this.fetchTransactionHistory()
    },
    deposit() {
      this.showDepositForm = !this.showDepositForm
      this.showBalance = !this.showBalance
    },
    showWithdraw() {
      this.showWithdrawForm = !this.showWithdrawForm
      this.showDepositForm = false
      this.showBalance = !this.showBalance
    },

    withdraw() {
      axios
        .post('http://127.0.0.1:8000/api/withdraw', {
          amount: this.withdrawAmount
        })
        .then((res) => {
          this.successMessage = res.data.message
        })
        .catch((error) => {
          this.errorMessage = error.response.data.message
        })
        .finally(() => this.cancel())
    },
    // proceed() {

    // },

    proceed() {
      this.$router.push({
        name: 'Telebirr',
        query: {
          amount: this.depositAmount
        }
      })
    },

    fetchBalance() {
      axios
        .get('http://127.0.0.1:8000/api/get-balance')
        .then((res) => {
          this.balance = res.data.data
        })
        .catch((error) => {
          console.error('There was an error fetching the clients:', error)
        })
    },
    fetchTransactionHistory() {
      axios
        .get('http://127.0.0.1:8000/api/get-history')
        .then((res) => {
          this.histories = res.data.data
        })
        .catch((error) => {
          console.error('There was an error fetching the clients:', error)
        })
    }
  }
}
</script>