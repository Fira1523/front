<template>
    <!-- ====== Forms Section Start -->
    <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div class="flex flex-wrap items-center">
        <div class="hidden w-full xl:block xl:w-1/2">
          <div class="py-17.5 px-26 text-center">
            
            <div class="text-3xl font-semibold mt-10 text-blue-700">EthioLance</div>
            <p class="font-medium 2xl:px-20 text-gray-500 mb-16 mt-6">
               
             <span class="text-black font-bold -ml-4"> Welcome to Our Freelancing Hub!</span><br>
             <span class="font-semibold ">Connect with professionals and clients seamlessly. <br>Log in to unlock opportunities and collaborate with ease.</span>
            </p>
            <router-link class="mb-5.5 inline-block" to="/">
              <img class="" src="\mobile.svg" alt="Logo" />
            </router-link>
          </div>
        </div>
        <div class="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div class="w-full p-4 sm:p-12.5 xl:p-17.5">
            <span class="mb-1.5 block font-medium">{{ subtitle }}</span>
            <h2 class="mb-9 text-2xl font-bold text-black  sm:text-title-xl2">
              {{ title }}
            </h2>
  
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <!-- ====== Forms Section End -->
  </template>
  
  <script >
  export default {
    props: {
      subtitle: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      customClasses: {
        type: String,
        default: '',
      },
    },
  };
  </script>