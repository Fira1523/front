<template>
      <nav class="flex justify-between border-b pb-3 pt-5 -ml-10 pl-10 -mt-8 pr-16 -mr-6 border-neutral-300 sticky top-0 bg-white z-50">
    <div>
      <div class="flex">
     <a href="#" class="text-2xl font-bold text-black block ">EthioLance<span class="text-green-400 text-4xl">.</span> </a>
          
        <div class="relative ml-2 mt-2">
          <button @click="toggleDropdown" class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 focus:outline-none">
            <ficon :icon="['fas', 'fa-caret-down']" />
          </button>
          <div v-if="dropdownOpen" class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded z-20">
            <router-link to="/balance" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Balance</router-link>
            <router-link to="/post" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">My Projects</router-link>
            <router-link to="/invoices" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Invoices</router-link>
            <router-link to="/settings" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Settings</router-link>
          </div>
        </div>
      </div>
   
    </div>
<div>
  
</div>
    <div class="">
   
        <!-- <router-link :to="{ name: 'Signup' }" class="text-black font-medium hover:text-green-400 mr-4">Sign up </router-link> -->
        <button  @click="logoutUser" class="text-green-600 border px-3 py-1 rounded-md hover:bg-green-800 hover:text-white -mr-8">Logout</button>
    </div>
</nav>
</template>

<script>
import axios from 'axios';
export default {
data(){
    return{
            token: '',
      // fullName:'',
      dropDown: false,
       dropdownOpen: false,
      user: '',
      secondDropdownOpen: false, 
      dropDownn: false,
    
    }
},
  mounted() {
    const token = localStorage.getItem('wtoken');

    if (token) {
      axios.defaults.withCredentials = true;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      this.loadProfile()
    } else {
      this.$router.push({ name: 'Login' });
    }
  },
  methods:{
      toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
      logoutUser() {
      if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('wtoken', 'type', 'roleId');
        this.$router.push('/');
      }
    },
    handleClick() {
      this.dropDown = !this.dropDown
    },
    async handleLogin() {
      this.logging = true;
      this.errorMessage = ''
      console.log(this.email, this.password)

      try {

        const response = await axios.post('http://127.0.0.1:8000/api/wlogin', {
          email: this.email,
          password: this.password,
        });
        this.token = response.data.token

        localStorage.setItem('wtoken', this.token);
        localStorage.setItem('type', roleType);
        localStorage.setItem('roleId', roleID)
        localStorage.setItem('user_id', user_id)

        alert('Sucessfully Login')

      } catch (err) {
        console.log('eror', err)
        this.logging = false;
        this.errorMessage = err.response?.data?.message || 'An error occurred';

        setTimeout(() => {
          this.errorMessage = ''
        }, 2000)
      }
      this.getUser();
    },
    getToken() {
      axios.get('http://127.0.0.1:8000/' + 'sanctum/csrf-cookie').then(response => {

      });
    },
    loadProfile() {
      axios
        .get('http://127.0.0.1:8000/api/profile')
        .then((response) => {
          this.user = response.data.data;
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    },
    logoutUser() {


if (confirm('Are you sure, you want to Logout thiss data?')) {
        localStorage.removeItem('wtoken', 'type', 'roleId')
        this.$router.push('/Login');
      }
    },
  },

  created() {
    this.token = localStorage.getItem('wtoken');
    if (this.token) {
      console.log('token', this.token)
      axios.defaults.withCredentials = true;
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;

    }
  },
  }

</script>

<style>

</style>