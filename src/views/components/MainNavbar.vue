<template>
  <nav class="bg-slate-900 text-white p-4 flex justify-between items-center fixed top-0 w-full z-10">
    <div class="text-xl font-bold"> 
      <img src="#" class="w-10 h-10 inline-block mr-2" alt="Jobnova" />
      Jobnova
    </div>
    <div class="flex justify-center">
  <ul class="hidden md:flex space-x-8">
    <li><router-link to="/" class="hover:underline">Home</router-link></li>
    <li><router-link to="/jobs" class="hover:underline">Jobs</router-link></li>
    <li><router-link to="/employers" class="hover:underline">Employers</router-link></li>
    <li><router-link to="/About" class="hover:underline">About</router-link></li>
    <li><router-link to="/Contactus" class="hover:underline">Contact</router-link></li>
  </ul>
</div>

    <ul class="hidden md:flex space-x-8">
      <li><router-link to="/signup" class="hover:underline">Register</router-link></li>
    <li><router-link to="/Login" class="hover:underline">Login</router-link></li>
    </ul>
    <button class="md:hidden" @click="toggleMenu">☰</button>
    <ul
      v-if="isOpen"
      class="absolute top-16 bg-gray-800 text-white p-4 space-y-4 md:hidden"
    >
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/jobs">Jobs</router-link></li>
      <li><router-link to="/employers" class="hover:underline">Employers</router-link></li>
      <li><router-link to="/contact" class="hover:underline">Contact Us</router-link></li>
    </ul>
  </nav>

  <!-- Main content with top margin to avoid overlap -->
  <main class="mt-16">
    <!-- Your other page content goes here -->
  </main>
</template>

<script>
export default {
  data() {
    return { isOpen: false };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
