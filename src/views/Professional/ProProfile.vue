
<template>
     <DefaultLayout>
           <Navbarpro/>

<div v-if="registrationComplete" class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
  <div class="p-6 border-l-4 border-green-500 -6 rounded-r-xl bg-green-50">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
      </div>
      <div class="ml-3">
        <div class="text-sm text-green-600">
          <p>Your have Successfully Updated Your Profile.😊  <router-link to="/ClientPrePo" class=" ml-6 bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button">
            Back to Profile</router-link> </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div  class="max-w-md mx-auto px-6 py-8 bg-white shadow-lg rounded-lg mt-10">
  <div v-if="isLoading" class="ml-20">
                <div role="status">
                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor" />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
  <div v-else>
    <!-- <div class="ml-7"  >
<h1 class="block uppercase text-cyan-500 text-2xl ml-80   font-bold mb-5">Personal Information</h1>
    </div> -->
   <div class="text-center mb-6">
   <img :src="photo" alt="" class="w-80 h-48 ml-10 rounded-lg">
    </div>
    <div class="text-center -ml-100">
<p class="block uppercase text-gray-700 text-xl font-bold  ml-96 mt-5">{{fullName}}</p>


 <p class="block uppercase text-gray-700 text-sm font-bold mb-2 ml-96 ">{{email}}</p>

   
    <!-- <p class="text-cyan-500">Photo:<span class="text-black"> {{photo}}</span></p><br> -->

<p class="block uppercase text-gray-700 text-sm font-bold mb-2 ml-96">{{phone_number}}</p>

  <p v-if="user.country" class="block uppercase text-gray-700 text-sm font-bold mb-2 ml-96">{{ user.country.name }}</p>
 <p class="block uppercase text-gray-700 text-sm font-bold mb-2 ml-96">{{address}}</p>
 
  
<p class="block uppercase text-gray-700 text-sm font-bold mb-2 ml-96">{{experiance}} Year Experiance</p>
 
      
<p class="block uppercase text-gray-700 text-sm font-bold mb-2 ml-96">{{college}}</p><br>
<!-- <p>{{portfolio}}</p>
<a :href="portfolio" class="block uppercase text-blue-600 -mt-5 text-sm font-bold mb-2 ml-96">portfolio</a> -->
 <a :href="portfolio.startsWith('http') ? portfolio : 'http://' + portfolio" 
   class="block uppercase text-blue-600 -mt-5 text-sm font-bold mb-2 ml-96" 
   target="_blank" 
   rel="noopener noreferrer">portfolio</a>
   </div>
<!-- <img :src="photo" alt="photo"> -->
    <div class="flex " >
    <router-link :to="{path:'/Professional/'+id+'/ProfileBLd'}"  class="bg-gray-900 active:bg-gray-700 text-sm font-semibold px-10 py-3 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-3 ml-28"
>Edit Profile</router-link>
    <!-- <button @click="deleteUser(id)" class="bg-rose-400 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-white hover:shadow-lg outline-none focus:outline-none"
>Delete account</button> -->
    </div>


    </div>
   
    <!-- <img :src="photo" alt="undefined"> -->
</div>
  <div v-if="dropDown" class="ml-28 -mt-28">
       <p class="-ml-5 text-black">{{fullName}}</p>
       <router-link to="/ClientProfile" class="text-blue-500 -ml-5">Profile</router-link ><br>
       <button class="text-red -ml-5" @click="logoutUser">Logout</button>
     </div>
</DefaultLayout>
</template>

<script>
import axios from 'axios';
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Navbarpro from '@/components/Navbarpro.vue';
export default {
components:{
DefaultLayout,
Navbarpro

      },
data(){
    return{
        profileLoaded: false,
isLoading:true,
token:'',
fullName:'',
email:'',
photo:'',
phone_number:'',
address:'',
role_id:'',
country_id:'',
id:'',
experiance:null,
certificate:'',
portfolio:'',
college:'',
country_id: null,
 countryIds: [],

dropDown:false

    }
},
mounted(){
this.handleLogin();
this.getToken();
const userID = localStorage.getItem('user_id')
console.log(userID)
 this.fetchCountries()



},
methods:{
    fetchCountries() {
      axios
        .get('http://127.0.0.1:8000/api/country')
        .then((res) => {
          console.log('Response data:', res.data)
          if (res.data && res.data[0] && Array.isArray(res.data[0])) {
            this.countries = res.data[0]
            this.countryIds = this.countries.map((country) => country.id)
          } else {
            console.error('Invalid response data structure:', res.data)
          }
        })
        .catch((error) => {
          console.error('Error fetching countries:', error)
        })
    },
  deleteUser(userID){
   
    if(confirm('Are you sure, you want to delete thiss data?')){
axios.delete(`http://127.0.0.1:8000/api/users/${userID}`).then((res)=>{

 localStorage.removeItem('wtoken','type','roleId')
 alert('User delated Successfully')
    this.$router.push('/');
}).catch(error => {
     
        this.errorMessage = error.response ? error.response.data.message : 'An error occurred. Please try again.';
        console.error('Error creating user:', this.errorMessage);
        if(error.res.status == 404){
            this.errorMessage = error.response.data.message
        }
    });
    }

  },
    handleClick(){
this.dropDown = !this.dropDown
    },
      async handleLogin() {
      this.logging = true;
      this.errorMessage = ''
      console.log(this.email, this.password)

try {
        // console.log('helllllllllo');
        const response = await axios.post('http://127.0.0.1:8000/api/wlogin', {
          email: this.email,
          password: this.password,
        });
        this.token = response.data.token
        // const roleType = response.data.type
        //  const roleID = response.data.roleId
        localStorage.setItem('wtoken', this.token);
         localStorage.setItem('type', roleType);
         localStorage.setItem('roleId',roleID)
        // this.logging = false;        
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
        getUser(){
           this.profileLoaded = false
          this.isLoading = true
      axios.get('http://127.0.0.1:8000/api/professional-profile', {
    headers: {
        'Authorization': `Bearer ${this.token}  `
    }
 
}).then((res)=>{
  this.user = res.data.data.user
  this.portfolio = res.data.data.portfolio
  console.log('portfolio',this.portfolio)
   console.log('users',this.user)
   this.profileLoaded = true
   this.isLoading = false
   console.log('response',res.data)
  
  this.fullName = res.data.data.user.full_name
  this.email = res.data.data.user.email
  this.photo = res.data.data.photo
  console.log('photo',this.photo)
  this.phone_number = res.data.data.user.phone_number
  this.address = res.data.data.user.address
//   this.role_id = res.data.data.user.role_id
//   this.country_id = res.data.data.user.country.name
//   console.log('country', this.country_id)
  this.id = res.data.data.user.id
  console.log('professional_id',this.id)
  this.experiance = res.data.data.freelancer.experiance
  this.college = res.data.data.freelancer.college
  console.log('experiance',  this.experiance)
    this.country_id = res.data.data.user.country
  console.log('country',  this.country_id)
  
 
// console.log(res.data.id)
   localStorage.setItem('user_id',  res.data.id)
}).catch((error) => {
          console.error('Error fetching professional data:', error)
          this.errorMessage = 'Failed to load profile data.'
             this.isLoading =  false
        });
console.log('hekko',res.data.experiance)
    },

 logoutUser(){
   if(confirm('Are you sure, you want to delete thiss data?')){
    localStorage.removeItem('wtoken','type','roleId')
   }

    // alert(Logout)
    this.$router.push('/Login');
  }
},

  created() {
    this.token = localStorage.getItem('wtoken');
    if (this.token) {
      console.log('token', this.token)
      axios.defaults.withCredentials = true;
      axios.defaults.headers.common['Authorization'] =` Bearer ${this.token}`;

    }
  },
 
}
</script>

<style>

</style>