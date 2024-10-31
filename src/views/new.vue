TIGI, [10/17/2024 9:27 PM]
<template>
<div class="pb-10">
    <nav class="flex justify-between border-b pb-3 pt-5 pl-16 pr-16 border-neutral-300 sticky top-0 bg-white ">
    <div>
        <a href="#" class="text-2xl font-bold text-black block font-satoshi">EthioLance<span class="text-green-400 text-4xl animate-pulse">.</span> </a>
    </div>
    <div class="">
        <router-link to="/About" class="mr-5 hover:text-green-400 ">About</router-link>
         <router-link to="/Contactus" class="hover:text-green-400">Contact Us</router-link>
        
    </div>
    <div class="">
   
        <router-link :to="{ name: 'Signup' }" class="text-black font-medium hover:text-green-400 mr-4">Sign up </router-link>
        <router-link to="/Login" class="text-green-600 border px-3 py-1 rounded-md hover:bg-green-800 hover:text-white">Login</router-link>
    </div>
</nav>
 
  <div class="bg-green-950 w-5/6 h-2/3  mt-8 ml-28  rounded-lg">
  <div class="flex">
<img src="\public\HomefirstLady.jpg" alt="" class="w-40 h-40 ml-36 rounded-md">
<div>
    <h1 class="text-white mt-20  ml-28 text-5xl font-bold">Find the right <span class="text-green-500">freelance</span><br><span class=" ml-12">service right away</span></h1>
    <div>
    <div class=" mt-20 animate-ping">
      <a href="/Signup" class=" text-green-200 ml-64">Let's get started!</a>
    </div>
      
      
</div>
</div>

<div class="">
<img src="\public\homesecondLady.jpg" alt="" class="w-32 h-28  ml-32 rounded-md">
</div>

  </div>
  <div class="flex">
  <div class=" ml-16 ">
    <img src="\public\homethirdguy.jpg" alt="" class="w-32 h-28 rounded-md">
  </div>
  <div class="ml-96 ">
    <div class="ml-1 -mt-12">
        <img src="\public\hometwoladiesshakinghands.jpg" alt="" class="w-40 h-40 rounded-md ml-96">
    </div>

  </div>
  </div>


  </div>
  <div class="flex justify-between ml-28 mt-6 w-5/6" >
    <div class=" shadow-lg rounded-lg py-2 px-2 w-40 h-32 bg-white">
        <img src="\public\homelaptopwithmug.jpg" alt="" class="w-20 rounded-sm ml-6">
        <p class="text-black mt-2 ml-3">Website Jobs</p>
    </div>
    <div class=" shadow-lg rounded-lg py-2 px-2 w-40 h-32 bg-white">
           <img src="\public\a-guy-with-phone.jpg" alt="" class="w-20 rounded-sm ml-10">
        <p class="text-black mt-2 ml-7">Business and Related Jobs</p>
    </div>
    <div class=" shadow-lg rounded-lg py-2 px-2 w-40 h-32 bg-white">
           <img src="\public\homeimojiwithbook.jpg" alt="" class="w-20 rounded-sm ml-10">
        <p class="text-black mt-2 ml-3">Online learning Jobs</p>
    </div>
    <div class=" shadow-lg rounded-lg py-2 px-2 w-40 h-32 bg-white">
           <img src="\public\hometwoladies.jpg" alt="" class="w-20 rounded-sm ml-9">
        <p class="text-black mt-2 ml-3">Counselling Jobs</p>
    </div>
    <div class=" shadow-lg rounded-lg py-2 px-2 w-40 h-32 bg-white">
           <img src="\homemarketingdesigner.jpg" alt="" class="w-20 rounded-sm ml-10">
        <p class="text-black mt-5 ml-5">Marketing Jobs</p>
    </div>
    <div class=" shadow-lg rounded-lg py-2 px-2 w-40 h-32 bg-white">
           <img src="\public\homegraphicsdesigner.jpg" alt="" class="w-20 rounded-sm ml-10">
        <p class="text-black mt-2 ml-5">Graphics Jobs</p>
    </div>
    <div class=" shadow-lg rounded-lg py-2 px-2 w-40 h-32 bg-white">
           <img src="\public\homejobs.jpg" alt="" class="w-20 rounded-sm ml-9 h-16">
        <p class="text-black mt-3 ml-9">Other Jobs</p>
    </div>

TIGI, [10/17/2024 9:27 PM]
</div>
  <h1 class="text-4xl text-black ml-28 mt-4 font-bold animate-pulse">Popular Services</h1>
  <div class="flex justify-between ml-28 mt-6 w-5/6">
<div class="bg-green-800 shadow-lg w-44 h-52 rounded-md ">
    <p class="text-white ml-3 font-bold mt-5">Posting Jobs <br> Online By clients</p>
    <img src="\public\client hiring.jpg" alt="" class="mt-7 w-40 ml-2  rounded-md">
</div>
<div class="bg-orange-500 shadow-lg w-44 h-52 rounded-md ">
    <p class="text-white ml-3 font-bold mt-5">Professionals Serching Jobs <br>online</p>
    <img src="\public\homegoogleglass.jpg" alt="" class="mt-1 w-40 ml-2  rounded-md">
</div>
<div class="bg-green-950 shadow-lg w-44 h-52 rounded-md ">
    <p class="text-white ml-3 font-bold mt-5">Applying proposals <br> for Selected Jobs Online</p>
    <img src="\work proposals.webp" alt="" class="mt-1 w-40 ml-2  rounded-md">
</div>
<div class="bg-rose-900 shadow-lg w-44 h-52 rounded-md ">
    <p class="text-white ml-3 font-bold mt-5">Signing Contracts <br> Online</p>
    <img src="\public\hometwoladiesshakinghands.jpg" alt="" class="mt-7 w-40 ml-2  rounded-md">
</div>
<div class="bg-lime-800 shadow-lg w-44 h-52 rounded-md ">
    <p class="text-white ml-3 font-bold mt-5">Payment Services <br> Online</p>
    <img src="\public\homephoneholding.jpg" alt="" class="mt-9  h-24 w-40 ml-2  rounded-md">
</div>
<div class="bg-rose-950 shadow-lg w-44 h-52 rounded-md ">
    <p class="text-white ml-3 font-bold mt-5">Give Ratings <br> Online</p>
    <img src="\public\homestars.jpg" alt="" class="mt-7 w-40 ml-2  rounded-md">
</div>
  </div>
  <div class="-mt-10 an">
    <h1 class="styled-heading animate-pulse ">We connect global talent with job opportunities.</h1>
    <div class="mt-6 ml-16 flex">

    <img src="\connecting pople.webp" alt="" class="w-80 h-64 m-2 rounded-md ">
    <img src="\connecting pople2.jpg" alt="" class="w-80 h-64 m-2 rounded-md">
    <img src="\connecting people5.webp" alt="" class="w-80 h-64 m-2 rounded-md">
    <img src="\connecting pople4.webp" alt="" class="w-80 h-64 m-2 rounded-md">
   
   
    </div>
     <div class=" ml-16 flex">

    <img src="\connecting pople5.jpg" alt="" class="w-80 h-64 m-2 rounded-md">
  <video src="\connecting pople10.webm"  autoplay muted loop class="w-80 h-64 m-2 rounded-md"></video>
    <img src="\connecting pople6.webp" alt="" class="w-80 h-64 m-2 rounded-md">
    <img src="\connecting people9.jpg" alt="" class="w-80 h-64 m-2 rounded-md">
   
   
    </div>
  </div>
</div>
<Footerr />
</template>

<script>
import Footerr from '@/components/Footerr.vue'
export default {
components:{
  Footerr,
}
}
</script>

<style>
  .styled-heading {
    font-size: 2.5rem; 
    color: black; 
    margin-left: 6rem; 
    margin-top: 5rem; 
    font-weight: bold;
    background-color: rgba(240, 248, 255, 0.8);
    padding: 20px; 
    border-radius: 10px; 
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); 
    transition: transform 0.3s; 
  }

  .styled-heading:hover {
    transform: scale(1.05); 
  }
</style>