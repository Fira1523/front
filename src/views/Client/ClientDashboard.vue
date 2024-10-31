<template>
  <DefaultLayout2>
    <Navbar/>
<div class="">
<div class="flex pb-32  pr-28 mt-8 bg-white mb-96 shadow-md h-96  rounded-lg" id="">
      <div class="">
        <img src="\public\clienthome.jpg" alt=""
          class=" rounded-lg   w-80 mt-16 ml-10">
      </div>
      <div clas>
        <div class="mt-20  text-black  ml-10">
          <h1  class="block uppercase text-lime-600 text-2xl font-bold mb-2">Welcome <span>{{ user.full_name }}</span>! </h1>
          <p  class="block mt-3 text-black text-sm font-bold mb-2">Welcome to your dashboard! We’re excited to have you here <br>as you post your job and connect
            with top professionals. <br> This platform is designed to make your hiring process seamless and efficient.
            <br> If you need any assistance along the way, <br> don’t hesitate to reach out.</p>
                        <router-link to='/ProjectPost'
            class="bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black bg-white hover:shadow-lg outline-none focus:outline-none  mb-1"
            type="button">start posting a job</router-link>
               <router-link to='/Post'
            class="bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black bg-white hover:shadow-lg outline-none focus:outline-none ml-2 mb-1 "
            type="button">veiw posted jobs</router-link>

       
          <!-- <router-link to='/ChatTemplete' class="bg-cyan-900 text-white p-2 mt-10 rounded-md">ClintChat</router-link > -->
        </div>
      </div>

    </div>
</div>
    
    <div class="flex -mt-80">
<div class="bg-violet-400 shadow-md  w-40 h-36 mb-5 -mt-10 rounded-md">
  <img src="\istockphoto-598689286-2048x2048.jpg" alt="" class="w-32 ml-4 rounded-md">
  <p class="text-black ml-4">Build Your Profile</p>
</div>
<div class="bg-sky-800 shadow-md  w-40 h-36 mb-5 -mt-10 rounded-md ml-4">
    <img src="\postingJob.jpg" alt="" class="w-36 ml-2 h-24 rounded-md">
  <p class="text-black ml-4">Posting Jobs</p>
</div>
<div class="bg-pink-500 shadow-md  w-40 h-36 mb-5 -mt-10 rounded-md ml-4">
    <img src="\proposal.jpg" alt="" class="w-32 ml-4 rounded-md h-24">
  <p class="text-black ml-4">Showing Proposals</p>
</div>
<div class="bg-secondary shadow-md  w-40 h-36 mb-5 -mt-10 rounded-md ml-4">
    <img src="\handshaking.jpg" alt="" class="w-32 ml-4 rounded-md h-24">
  <p class="text-black ml-4">Signing Contracts</p>
</div>
<div class="shadow-md bg-meta-8 w-40 h-36 mb-5 -mt-10 rounded-md ml-4">
    <img src="\job approve.avif" alt="" class="w-28 ml-4 rounded-md h-20">
  <p class="text-black ml-4">Approve Finished jobs</p>
</div>
<div class="bg-zinc-500 shadow-md w-40 h-36 mb-5 -mt-10 rounded-md ml-4">
    <img src="\chatting.jpeg" alt="" class="w-32 ml-4 rounded-md h-20">
  <p class="text-black ml-4">Chatting with professional</p>
</div>

</div>
<div class="" >
  <div class="z-0">
    
  
<div >
     <h1 class="text-3xl font-extrabold text-cyan-700 text-center  animate-bounce ">Posting Jobs In Our Website</h1>
</div>
  <div class=" mb-10 flex mt-5 ">
<!-- <div class="bg-white w-2/3 h-72 shadow-md rounded-md pb-5 pt-5 pl-5 flex">
<img src="\web developer.avif" alt="" class="w-60">
<div class="transform -translate-y-4 transition-transform duration-300 ease-in-out hover:translate-y-0">
  <h1 class="text-2xl font-bold">Web Development Jobs</h1>
  <p class="mt-2">Explore exciting opportunities in web development.</p>
</div>
</div> -->
<div class="bg-zinc-300  w-3/4 h-60 shadow-md rounded-md pb-2 pt-2 pl-5 flex items-center relative overflow-hidden z-0">
  <img src="\web developer.avif" alt="" class="w-52 h-40 transition-opacity duration-300 ease-in-out opacity-100 rounded-md" id="webImage">
  <div class="" id="webText">
    <h1 class=" ml-3 block  text-cyan-700 text-2xl font-bold mb-2">Web Development Jobs</h1>
    
  </div>
</div>
<div class="bg-zinc-300  w-3/4 h-60 shadow-md rounded-md pb-2 pt-2 pl-5 flex items-center relative overflow-hidden ml-5">

    <img src="\online learning.webp" alt="" class="w-52 h-40 transition-opacity  duration-300 ease-in-out opacity-100  rounded-md mr-5" id="webImage">
  <div class="  transition-opacity duration-300 " id="webText">
    <h1 class=" block  text-cyan-700 text-2xl font-bold mb-2">Online Education Jobs</h1>
    
  </div>
</div>
<div></div>
  </div>
    <div class=" mb-10 flex mt-5">

<div class="bg-zinc-300  w-3/4 h-60 shadow-md rounded-md pb-2 pt-2 pl-5 flex items-center relative overflow-hidden z-0">
  <img src="\beuty.jpg" alt="" class="w-52 h-40 transition-opacity duration-300 ease-in-out opacity-100 rounded-md" id="webImage">
  <div class="" id="webText">
    <h1 class="ml-3 block  text-cyan-700 text-2xl font-bold mb-2">Online Beauty Advisor</h1>
    
  </div>
</div>
<div class="bg-zinc-300  w-3/4 h-60 shadow-md rounded-md pb-2 pt-2 pl-5 flex items-center relative overflow-hidden ml-5">

  <div class="  transition-opacity duration-300 " id="webText">
    <h1 class="mr-2 block  text-cyan-700 text-2xl font-bold mb-2">Online Councling</h1>
    
  </div>
    <img src="\councling.avif" alt="" class="w-56 h-40 transition-opacity  duration-300 ease-in-out opacity-100  rounded-md mr-5" id="webImage">
</div>
<div></div>
  </div>
      <div class=" mb-10 flex mt-5">

<div class="bg-zinc-300  w-3/4 h-60 shadow-md rounded-md pb-2 pt-2 pl-5 flex items-center relative overflow-hidden z-0">
  <img src="\project manager.jpg" alt="" class="w-60 h-40 transition-opacity duration-300 ease-in-out opacity-100 rounded-md" id="webImage">
  <div class="" id="webText">
    <h1 class="ml-2 block  text-cyan-700 text-2xl font-bold mb-2">Project Manager</h1>
    
  </div>
</div>
<div class="bg-zinc-300  w-3/4 h-60 shadow-md rounded-md pb-2 pt-2 pl-5 flex items-center relative overflow-hidden ml-5">

  <div class="  transition-opacity duration-300 " id="webText">
    <h1 class="mr-2 block  text-cyan-700 text-2xl font-bold mb-2">eHealth Consult</h1>
    
  </div>
    <img src="\doctor.jpg" alt="" class="w-56 h-40 transition-opacity  duration-300 ease-in-out opacity-100  rounded-md -mr-10" id="webImage">
</div>
<div></div>
  </div>

        <div class=" mb-10 flex mt-5">

<div class="bg-zinc-300  w-3/4 h-60 shadow-md rounded-md pb-2 pt-2 pl-5 flex items-center relative overflow-hidden z-0">
  <img src="\marketing.webp" alt="" class="w-60 h-40 transition-opacity duration-300 ease-in-out opacity-100 rounded-md" id="webImage">
  <div class="" id="webText">
    <h1 class="ml-2 block  text-cyan-700 text-2xl font-bold mb-2">Marketing Specialist</h1>
    
  </div>
</div>
<div class="bg-zinc-300  w-3/4 h-60 shadow-md rounded-md pb-2 pt-2 pl-5 flex items-center relative overflow-hidden ml-5">

  <div class="  transition-opacity duration-300 " id="webText">
    <h1 class="mr-2 block  text-cyan-700 text-2xl font-bold mb-2">Photographer</h1>
    
  </div>
    <img src="\cameraman.jpg" alt="" class="w-56 h-40 transition-opacity  duration-300 ease-in-out opacity-100  rounded-md -mr-10" id="webImage">
</div>



  </div>
  </div>
  <h1 class="mr-2 block  text-cyan-700 text-2xl font-bold mb-2 text-center animate-bounce">Post All Jobs Here 👇</h1>
  <a href="/ProjectPost" class="mr-2 block  text-blue-400 text-lg underline font-bold mb-2 text-center">Post</a>
  <div>
       <video src="\work.mp4"  autoplay muted loop class="w-screen mt-10 mb-5"></video>
</div>
</div>
    <div v-if="dropDown" class="right-2 top-32 absolute ">
      <p class="-ml-5 text-black">{{ user.full_name }}</p>
      <router-link to="/ClientProfile" class="text-blue-500 -ml-5">Profile</router-link><br>
      <button class="text-red -ml-5" @click="logoutUser">Logout</button>
    </div>
    <Footerr/>
  </DefaultLayout2>
</template>

<script>
import axios from 'axios';

import DefaultLayout2 from '@/layouts/DefaultLayout2.vue'
// import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import SubNav from '@/components/SubNav.vue';
import Navbar from '@/components/Navbar.vue';
import Logout from '../Panel/Logout.vue';
import Footerr from '@/components/Footerr.vue'
  document.addEventListener('DOMContentLoaded', () => {
    const webText = document.getElementById('webText');
    setTimeout(() => {
      webText.classList.remove('opacity-0');
      webText.classList.add('opacity-100');
    }, 2000); // Delay in milliseconds (2 seconds)
  });
export default {
  components: {

    // BreadcrumbDefault,
    DefaultLayout2,
    SubNav,
    Logout,
    Footerr,
    Navbar
    
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
<style>
 .transition-opacity {
    transition: opacity 0.5s ease-in-out;
  }

  @keyframes move {
    0% { transform: translateX(-1%); }
    100% { transform: translateX(100%); }
  }
    @keyframes move2 {
    100% { transform: translateX(100%); }
    0% { transform: translateX(-1%); }
  }

  .animate-moving {
    animation: move 5s linear infinite;
  }
  
</style>

<!-- <style>
        .irregular-shape {
            clip-path: polygon(50% 0%, 100% 20%, 80% 100%, 20% 100%, 0% 20%);
        }
  
    </style> -->