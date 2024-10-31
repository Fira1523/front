<template>
    <div class="bg-zinc-300">
          <nav class="width-full shadow-md sticky top-0 bg-white">
        <div>
            <img src="\telebirlogo.svg" class="w-32">
        </div>

    </nav>
    <div class=" max-w-sm mx-auto p-5  rounded-lg shadow-md mt-32 ">
        <div class="-mt-20 mb-16 bg-white h-56 p-10 rounded-lg">
            <h2 class="text-xl font-semibold mb-4 text-center">Enter your password</h2>
      <div class="display  h-12 flex items-center justify-center text-2xl  rounded mb-4">
        {{ code.join('') }}
      </div>
        </div>
    
      <div class="grid grid-cols-3 gap-2">
        <button v-for="digit in digits" :key="digit" @click="addDigit(digit)"
          class="button bg-white text-black p-4 rounded hover:bg-gray">
          {{ digit }}
        </button>
        <button @click="submitCode" class="button bg-green-200 text-black p-4 rounded hover:bg-gray">OK</button>
       
        <button @click="clear"
          class="button bg-red-500 text-black p-4 rounded hover:bg-red-600 ">Cancel</button>
        <!-- <button @click="addDigit('.')" class="button bg-white text-black p-4 rounded hover:bg-gray">.</button> -->
      </div>
      <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
    </div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        code: [],
        errorMessage: '',
        digits: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
      };
    },
    methods: {
      addDigit(digit) {
        if (this.code.length < 4 && !(digit === '.' && this.code.includes('.'))) {
          this.code.push(digit);
        }
      },
      clear() {
        this.code = [];
        this.errorMessage = '';
      },
      submitCode() {
        if (this.code.length === 4) {
          alert(`Code submitted: ${this.code.join('')}`);
          this.clear();
        } else {
          this.errorMessage = 'Please enter a complete 4-digit code.';
        }
      },
      
    }
  };
  </script>
  
  <style scoped>
  .button {
    transition: background-color 0.3s;
  }
  </style>