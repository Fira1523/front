<template>
<nav class="flex justify-between border-b pb-3 pt-5 pl-16 pr-16 border-neutral-300 sticky top-0 bg-white ">
    <div>
        <a href="/" class="text-2xl font-bold text-black block ">Workdiator<span class="text-green-400 text-4xl">.</span> </a>
    </div>
    <div class="">
        <router-link to="/About" class="mr-5 hover:text-green-400">About</router-link>
         <router-link to="/ContactUS " class="hover:text-green-400">Contact Us</router-link>
        
    </div>
    <div class="">
   
        <router-link :to="{ name: 'Signup' }" class="text-black font-medium hover:text-green-400 mr-4">Sign up </router-link>
        <router-link to="/Login" class="text-green-600 border px-3 py-1 rounded-md hover:bg-green-800 hover:text-white">Login</router-link>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>