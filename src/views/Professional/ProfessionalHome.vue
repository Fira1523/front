
<template>
  <DefaultLayout>
    <!-- <logout v-if=""/> -->
   <Navbarpro/>
<div class="">
<div class="flex pb-32  pr-28 mt-8 bg-white mb-96 shadow-md h-72  rounded-lg" id="">
      <!-- <div class="">
        <img src="\public\clienthome.jpg" alt=""
          class=" rounded-lg   w-80 mt-16 ml-10">
      </div> -->
      <div class="">
        <div class="mt-20  text-black  ml-10">
          <h1  class="block uppercase text-lime-600 text-2xl font-bold mb-2 ml-10">Welcome <span>{{ user.full_name }}!</span> </h1>
          <p class="text-black font-bold ml-10">This dashboard is your comprehensive tool for navigating the job market with confidence and ease. Here, you can explore a wide array of tailored job opportunities, and access valuable resources designed to enhance your skills. Empower yourself with the tools and insights needed to thrive in your career path. </p>
            <button @click="navigateToProfileBLd"
            class="bg-cyan-600 text-white mt-5  active:bg-gray-700 text-sm font-semibold  px-6 py-3 rounded shadow hover:shadow-xl  outline-none focus:outline-none mr-1 mb-1 ml-64"
            type="button" style="transition: all 0.15s ease 0s;">
            Go to Profile Builder
          </button>
                     <router-link to="/ProjectShow"
            class="bg-cyan-600 text-white mt-5  active:bg-gray-700 text-sm font-semibold  px-6 py-3 rounded shadow hover:shadow-xl  outline-none focus:outline-none mr-1 mb-1 ml-5"
            type="button" style="transition: all 0.15s ease 0s;">Show post Jobs</router-link>

       
          <!-- <router-link to='/ChatTemplete' class="bg-cyan-900 text-white p-2 mt-10 rounded-md">ClintChat</router-link > -->
        </div>
      </div>

    </div>
</div>
    
    <div class="flex -mt-80 ml-20">
<div class="bg-violet-400 shadow-lg w-40 h-40 -mt-10 rounded-md mr-2">
  <img src="\istockphoto-598689286-2048x2048.jpg" alt="" class="w-36  h-24 ml-2 mt-1 rounded-md">
  <p class="text-white ml-4 mt-2 font-semibold text-center">Build Your Profile</p>
</div>
<div class="bg-sky-800 shadow-lg w-40 h-40 -mt-10 rounded-md mr-2">
    <img src="\postingJob.jpg" alt="" class="w-36  h-24 ml-2 mt-1 rounded-md">
  <p class="text-white ml-4 mt-2 font-semibold text-center">watch posted jobs</p>
</div>
<div class="bg-pink-500 shadow-lg w-40 h-40 -mt-10 rounded-md mr-2">
    <img src="\proposal.jpg" alt="" class="w-36  h-24 ml-2 mt-1 rounded-md">
  <p class="text-white ml-4 mt-2 font-semibold text-center">Applying</p>
</div>
<div class="bg-secondary shadow-lg w-40 h-40 -mt-10 rounded-md mr-2">
    <img src="\handshaking.jpg" alt="" class="w-36  h-24 ml-2 mt-1 rounded-md">
  <p class="text-white ml-4 mt-2 font-semibold text-center">signingup Contracts</p>
</div>
<div class="bg-meta-8 shadow-lg w-40 h-40 -mt-10 rounded-md mr-2">
    <img src="\job approve.avif" alt="" class="w-36  h-24 ml-2 mt-1 rounded-md">
  <p class="text-white ml-4 mt-2 font-semibold text-center">showing progress</p>
</div>
<div class="bg-zinc-500 shadow-lg w-40 h-40 -mt-10 rounded-md mr-2">
    <img src="\chatting.jpeg" alt="" class="w-36  h-24 ml-2 mt-1 rounded-md">
  <p class="text-white ml-4 mt-2 font-semibold text-center">Chatting with client</p>
</div>

</div>
<div class="" >
  <div class="z-0">
    
  
<div >
     <h1 class="text-3xl ml-96 font-bold text-black  mt-10 animate-bounce">Find Jobs You want</h1>
</div>
  <div class=" mb-10 flex mt-5 ">
<!-- <div class="bg-white w-2/3 h-72 shadow-md rounded-md pb-5 pt-5 pl-5 flex">
<img src="\web developer.avif" alt="" class="w-60">
<div class="transform -translate-y-4 transition-transform duration-300 ease-in-out hover:translate-y-0">
  <h1 class="text-2xl font-bold">Web Development Jobs</h1>
  <p class="mt-2">Explore exciting opportunities in web development.</p>
</div>
</div> -->
<div class="bg-zinc-300 w-3/4 h-60 shadow-md rounded-md pl-10 flex items-center relative overflow-hidden z-0">
  <img src="\psychologist.webp" alt="" class="w-44 h-52 transition-opacity duration-300 ease-in-out opacity-100 rounded-md" id="webImage">
  <div class="" id="webText">
    <h1 class=" ml-3 block  text-cyan-700 text-2xl font-bold mb-2">psychologist</h1>
    
  </div>
</div>
<div class="bg-zinc-300 w-3/4 h-60 shadow-md rounded-md pl-10 flex items-center relative overflow-hidden ml-5">
  <div class="  transition-opacity duration-300 mr-2 " id="webText">
    <h1 class=" block  text-cyan-700 text-2xl font-bold mb-2">Online Teacher</h1>
    
  </div>
    <img src="\online teacher.jpg" alt="" class="w-44 h-52 transition-opacity  duration-300 ease-in-out opacity-100  rounded-md mr-5" id="webImage">

</div>
<div></div>
  </div>
    <div class=" mb-10 flex mt-5">

<div class="bg-zinc-300 w-3/4 h-60 shadow-md rounded-md pl-10 flex items-center relative overflow-hidden z-0">
  <img src="\website developer.avif" alt="" class="w-44 h-52 transition-opacity duration-300 ease-in-out opacity-100 rounded-md" id="webImage">
  <div class="" id="webText">
    <h1 class="ml-3 block  text-cyan-700 text-2xl font-bold mb-2">Website Developer</h1>
    
  </div>
</div>
<div class="bg-zinc-300 w-3/4 h-60 shadow-md rounded-md pl-10 flex items-center relative overflow-hidden ml-5">

  <div class="  transition-opacity duration-300 " id="webText">
    <h1 class="mr-2 block  text-cyan-700 text-2xl font-bold mb-2">Online doctor</h1>
    
  </div>
    <img src="\online doctor.jpg" alt="" class="w-56 h-40 transition-opacity  duration-300 ease-in-out opacity-100  rounded-md mr-5" id="webImage">
</div>
<div></div>
  </div>
      <div class=" mb-10 flex mt-5">

<div class="bg-zinc-300 w-3/4 h-60 shadow-md rounded-md pl-10 flex items-center relative overflow-hidden z-0">
  <img src="\data analyst.jpg" alt="" class="w-60 h-40 transition-opacity duration-300 ease-in-out opacity-100 rounded-md" id="webImage">
  <div class="" id="webText">
    <h1 class="ml-2 block  text-cyan-700 text-2xl font-bold mb-2">Data Analysts</h1>
    
  </div>
</div>
<div class="bg-zinc-300 w-3/4 h-60 shadow-md rounded-md pl-10 flex items-center relative overflow-hidden ml-5">

  <div class="  transition-opacity duration-300 " id="webText">
    <h1 class="mr-2 block  text-cyan-700 text-2xl font-bold mb-2">Transcriptionists</h1>
    
  </div>
    <img src="\Transcriptionists.jpg" alt="" class="w-56 h-40 transition-opacity  duration-300 ease-in-out opacity-100  rounded-md -mr-10" id="webImage">
</div>
<div></div>
  </div>

        <div class=" mb-10 flex mt-5">

<div class="bg-zinc-300 w-3/4 h-60 shadow-md rounded-md pl-10 flex items-center relative overflow-hidden z-0">
  <img src="\uidesign.avif" alt="" class="w-60 h-40 transition-opacity duration-300 ease-in-out opacity-100 rounded-md" id="webImage">
  <div class="" id="webText">
    <h1 class="ml-2 block  text-cyan-700 text-2xl font-bold mb-2">UX/UI Designers</h1>
    
  </div>
</div>
<div class="bg-zinc-300 w-3/4 h-60 shadow-md rounded-md pl-10 flex items-center relative overflow-hidden ml-5">

  <div class="  transition-opacity duration-300 " id="webText">
    <h1 class="mr-2 block  text-cyan-700 text-2xl font-bold mb-2">HR Consultants</h1>
    
  </div>
    <img src="\HR Consultants.jpg" alt="" class="w-56 h-40 transition-opacity  duration-300 ease-in-out opacity-100  rounded-md -mr-10" id="webImage">
</div>

</div>
  </div>
  <h1 class="mr-2 block  text-black text-2xl font-bold mb-2 text-center animate-bounce">Work From Anywhere</h1>
  <div>
       <video src="\professhionalVideo.webm"  autoplay muted loop class="w-screen mt-10 mb-5"></video>
</div>
</div>
    <div v-if="dropDown" class="right-2 top-32 absolute ">
      <p class="-ml-5 text-black">{{ user.full_name }}</p>
      <router-link to="/ClientProfile" class="text-blue-500 -ml-5">Profile</router-link><br>
      <button class="text-red -ml-5" @click="logoutUser">Logout</button>
    </div>
    <Footerr />
  </DefaultLayout>
</template>

<script>
import axios from 'axios';

import DefaultLayout from '@/layouts/DefaultLayout.vue'
// import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import Navbarpro from '@/components/Navbarpro.vue';
import Logout from '../Panel/Logout.vue';
import Footerr from '@/components/Footerr.vue'

export default {
  components: {

    // BreadcrumbDefault,
    DefaultLayout,
    Navbarpro,
    Logout,
    Footerr,
  },
  data() {
    return {
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
  methods: {
    navigateToProfileBLd() {
      this.$router.push('/ProfileBLd');
    },
       toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
      logoutUser() {
      if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('wtoken', 'type', 'roleId');
        this.$router.push('/Logout');
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

<!-- <style>
        .irregular-shape {
            clip-path: polygon(50% 0%, 100% 20%, 80% 100%, 20% 100%, 0% 20%);
        }
  
    </style> -->