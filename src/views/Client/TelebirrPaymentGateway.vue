<template>
  <nav class="width-full shadow-md sticky top-0 bg-white">
    <div>
      <img src="\telebirlogo.svg" class="w-32" />
    </div>
  </nav>
  <div class="mt-20" v-if="!showPassword">
    <div class="flex ml-5 mb-5">
      <div>
        <img src="\telecontacts.png" alt="" class="w-10 rounded-md" />
      </div>
      <div>
        <h1 class="ml-2 text-black font-bold">Workdiator</h1>
        <p class="ml-2 text-black text-xs">+2519090909</p>
      </div>
    </div>

    <h1 class="text-black font-bold text-center">You are about to pay : {{ depositAmount }}</h1>
    <button
      @click="toggleShow"
      class="mt-2 ml-32 text-lime-600 px-8 py-2 rounded-md border hover:bg-lime-500 hover:text-white"
    >
      pay
    </button>

    <h1 class="text-green-400" v-if="successMessage">{{ successMessage }}</h1>
    <h1 class="text-red-400" v-if="errorMessage">{{ errorMessage }}</h1>
  </div>
  <div v-if="showPassword">
    <div class="">
      <div class="max-w-sm mx-auto p-5 rounded-lg shadow-md mt-32">
        <div class="-mt-20 mb-16 bg-white h-56 p-10 rounded-lg">
          <h2 class="text-xl font-semibold mb-4 text-center">Enter your password</h2>
          <div class="display h-12 flex items-center justify-center text-2xl rounded mb-4">
         {{password}}
          </div>
        </div>

        
          <!-- <button v-for="digit in digits" :key="digit" @click="addDigit(digit)"
          class="button bg-white text-black p-4 rounded hover:bg-gray">
          {{ digit }}
        </button> -->
        
          <div class="flex justify-between">
            <div>
<button @click="savePassword('1')" >1</button>
            </div>
            <div>
 <button @click="savePassword('2')">2</button>
            </div>
           <div>
    <button @click="savePassword('3')">3</button>
           </div>
        
          </div>
          <div class="flex justify-between">
            <div>
<button @click="savePassword('4')">4</button>
            </div>
            <div>
  <button @click="savePassword('5')">5</button>
            </div>
          <div>
   <button @click="savePassword('6')">6</button>
          </div>
         
          </div>
          <div class="flex justify-between">
            <div>
<button @click="savePassword('7')">7</button>
            </div>
            <div>
  <button @click="savePassword('8')">8</button>
            </div>
            <div>
<button @click="savePassword('9')">9</button>
            </div>
          
            
          </div>

          <div class="flex justify-between">
            <button @click="savePassword('0')">0</button>
            <button
              @click="
               
                pay()
              "
              class="button bg-green-200 text-black p-4 rounded hover:bg-gray ml-20 px-10"
            >
              OK
            </button>

            <button
              @click="clear"
              class="button bg-red-500 text-black p-4 rounded hover:bg-red-600 ml-20"
            >
              Cancel
            </button>
            <!-- <button @click="addDigit('.')" class="button bg-white text-black p-4 rounded hover:bg-gray">.</button> -->
          </div>
        </div>
        <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
      </div>
    </div>

</template>

<script>
import DefaultLayout2 from '@/layouts/DefaultLayout2.vue'
import SubNav from '@/components/SubNav.vue'

import axios from 'axios'

export default {
  components: {
    DefaultLayout2,
    SubNav
  },
  created() {
    ;(this.depositAmount = this.$route.query.amount), (this.user = this.$route.query.user)
  },
  data() {
    return {
      depositAmount: 0,
      password: '',
      user: null,
      errorMessage: null,
      showPassword: false,
      code: [],
      errorMessage: '',
      digits: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      successMessage: null
    }
  },
  mounted() {
    // this.fetchBalance();
  },
  methods: {
    savePassword(value){
      this.password = this.password + value
    },
    addDigit(digit) {
      if (this.code.length < 4 && !(digit === '.' && this.code.includes('.'))) {
        this.code.push(digit)
      }
    },
    clear() {
      this.code = []
      this.errorMessage = ''
    },
    // submitCode() {
    //   if (this.code.length === 8) {
    //     alert(`Code submitted: ${this.code.join('')}`)
    //     this.clear()
    //   } else {
    //     this.errorMessage = 'Please enter a complete 4-digit code.'
    //   }
    // },

    deposit() {
      this.showDepositForm = !this.showDepositForm
    },
    toggleShow() {
      this.showPassword = true
    },
    pay() {
      this.errorMessage = null
      this.successMessage = 'paying'
      const token = localStorage.getItem('wtoken')
      axios
        .post('http://192.168.174.21:8000/api/deposit', {
          amount: this.depositAmount,
          user: this.user,
          password: this.password
        })
        .then((res) => {
          this.successMessage = res.data.message
        })
        .catch((error) => {
          this.errorMessage = error.response.data.message
          console.error('There was an error fetching the clients:', error)
        })
    }
  }
}
</script>  