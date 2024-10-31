<template>
  <DefaultLayout2>
  <Navbar/>
    <div class="flex">
      <div>
        <div class="mt-20" v-if="showBalance">
          <img src="\public\coin.jpg" alt="" class="w-60 rounded-3xl" />
          <h1 class="mt-5 ml-20 font-semibold">Balance <sub>(ETB)</sub></h1>
          <h1 class="ml-24 mt-2 text-black font-semibold">{{ balance.balance }}</h1>

          <button @click="deposit" class="mt-20 ml-10 bg-lime-500 text-white px-10 py-2 rounded-md hover:bg-lime-600">
            {{ showDepositForm ? 'cancel' : 'Deposit Cash' }}
          </button>
          <button @click="showWithdraw"
            class="mt-2 ml-10 text-lime-600 px-8 py-2 rounded-md border hover:bg-lime-500 hover:text-white">
            Withdraw Cash
          </button>
        </div>
        <div v-if="showDepositForm" class="mx-20 mt-40">
          <img src="\public\coin.jpg" alt="" class="w-60 rounded-3xl" />
          <label for="" class="block text-lime-600 text-sm font-bold mb-2 mt-5">Enter Money amount to deposite:</label>
          <input placeholder="enter amount" v-model="depositAmount"
            class="focus:outline-none pl-3 py-1 rounded-md ml-5" />
            <p class="text-green-800">{{ successMessage }}</p>
          <p class="text-red">{{ errorMessage }}</p>
          <div class="flex">
            <div>
              
              <button @click="proceed" class="mt-4 bg-lime-500 text-white py-2 px-8 rounded-md hover:bg-lime-600">
                proceed
              </button>
            </div>

            <div class="-mt-1">
              <button @click="cancel" class="mt-5 ml-6 bg-zinc-500 text-white px-8 py-2 rounded-md hover:bg-lime-600">
                cancel
              </button>
            </div>
          </div>

          
        </div>

        <div v-if="showWithdrawForm" class="mx-96 mt-40">
          <img src="\public\coin.jpg" alt="" class="w-60 rounded-3xl" />
          <label for="" class="block text-lime-600 text-sm font-bold mb-2 mt-5">Enter Money amount to withdraw:</label>
          <input placeholder="enter amount" v-model="withdrawAmount"
            class="focus:outline-none pl-3 py-1 rounded-md ml-5" />
             <p class="text-green-800">{{ successMessage }}</p>
          <p class="text-red w-80" v-if="errorMessage">{{ errorMessage }}</p>
          <div v-if="!successMessage">
   <button @click="withdraw" class="mt-4 ml-12 bg-lime-500 text-white px-8 py-1 rounded-md hover:bg-lime-600">
            withdraw
          </button>
          <button @click="cancel" class="mt-6 ml-12 bg-zinc-500 text-white px-10 py-1 rounded-md hover:bg-lime-600">
            cancel
          </button>
          </div>
          <div v-if="successMessage">
 <button @click="showBalancee" class="mt-4 ml-12 bg-lime-500 text-white px-8 py-1 rounded-md hover:bg-lime-600">
            Ckeck Balance
          </button>
          </div>
       

         
        </div>
        <!-- 
    <div>
      <h1>Transaction History</h1>

      

  

    
    </div>  -->
      </div>

      <div class="-ml-20" v-if="!showWithdrawForm">
        <div class="mt-28 ml-64 font-bold text-black">
          <ul>
            <li v-for="h in histories.payment_histories" :key="h.id">
              {{ h.amount }} etb payed on {{ h.created_at }} for {{ h.to_account.user.full_name }}
            </li>
          </ul>
        </div>
        <hr class="ml-28 text-zinc-300 mt-6" />
        <div class="ml-">
          <div class="ml-40 mt-5">
            <div class="flex">
              <div class="h-40   overflow-scroll no-scrollbar">
                <h1 class="text-black">withdraw</h1>
                <div class="flex mb-3">
                  <ul>
                    <li v-for="h in histories.withdraws" :key="h.id">
                     <span class="text-yellow-500 font-bold">-</span>  {{ h.amount }} on {{ h.created_at }}
                    </li>
                  </ul>
                  <p class="text-black ml-40 font-semibold"></p>
                </div>
              </div>
              <div class="h-40 overflow-scroll no-scrollbar">
                <p class="text-black">Deposite</p>
                <div class="flex mb-3">
                  <ul>
                    <li v-for="h in histories.deposits" :key="h.id">
                       <span class="text-green-600 font-bold">+</span> {{ h.amount }} on {{ h.created_at }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="flex ml-40 mt-6">
              <img src="\telebirr coin.png" class="w-10" />
              <p class="ml-3 mt-3 mr-3 text-green-500 font-semibold">Give Tip</p>
              <img src="\tlebirr next icon.jpg" class="w-7 h-7 mt-2" />
            </div>
            <img src="\telecrop.jpg" />
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout2>
</template>

<script>
import DefaultLayout2 from '@/layouts/DefaultLayout2.vue'
import Navbar from '@/components/Navbar.vue';

import axios from 'axios'

export default {
  components: {
    DefaultLayout2,
    Navbar
  },
  created() { },
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
        showBalancee() {
           this.fetchBalance()
           this.fetchTransactionHistory()
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
          // this.cancel() 
        //   if(this.errorMessage){
           
        //      this.errorMessage = res.data.message

        //   }
        //   else{
        // this.cancel()  
        //   }
          
          
          
        })
        .catch((error) => {
          this.successMessage = error.response.data.message
        })
        // .finally(() => this.cancel())
    },
    // proceed() {

    // },

    proceed() {
      if(this.depositAmount>0){
    this.$router.push({
        name: 'Telebirr',
        query: {
          amount: this.depositAmount
        }
      })
      }else{
        this.errorMessage ='please enter positive amount';
      }
  
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