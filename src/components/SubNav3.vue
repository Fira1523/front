<template>
  <header class="fixed top-0 left-72 mr-96 -right-96 bg-white shadow-md z-10">
    <div class="flex justify-between items-center px-6 py-4">
      <div class="relative flex items-center">
        <router-link to="/ClientDashboard" class="text-3xl text-cyan-600 font-semibold">Admin</router-link>
        
        <div classc="relative ml-2">
          <button @click="toggleDropdown" class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 focus:outline-none">
            <ficon :icon="['fas', 'fa-caret-down']" />
          </button>
          <div v-if="dropdownOpen" class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded z-20">
            <router-link to="/balance" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Balance</router-link>
            <router-link to="/projects" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">My Projects</router-link>
            <router-link to="/invoices" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Invoices</router-link>
            <router-link to="/settings" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Settings</router-link>
          </div>
        </div>

        <div class="relative ml-2">
          <button @click="toggleSecondDropdown" class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 focus:outline-none">
            <ficon :icon="['fas', 'fa-ellipsis-v']" /> 
          </button>
          <div v-if="secondDropdownOpen" class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded z-20">
            <router-link to="/help" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Help</router-link>
            <router-link to="/feedback" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Feedback</router-link>
            <router-link to="/support" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Support</router-link>
          </div>
        </div>
      </div>

      <ficon :icon="['fas', 'circle-user']" class="text-4xl cursor-pointer" @click="handleClick" />
    </div>
  </header>

  <div v-if="dropDown" class="absolute right-1 top-16 bg-white shadow-lg rounded p-4 z-10">
    <p class="text-black">{{ user.full_name }}</p>
    <router-link to="/ClientProfile" class="text-blue-500 rounded-sm">Profile</router-link><br />
    <button class="text-red-500" @click="logoutUser">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false,
      secondDropdownOpen: false, 
      dropDown: false,
      user: ''
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    toggleSecondDropdown() {
      this.secondDropdownOpen = !this.secondDropdownOpen; 
    },
    handleClick() {
      this.dropDown = !this.dropDown;
    },
    logoutUser() {
      if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('wtoken', 'type', 'roleId');
        this.$router.push('/Logout');
      }
    }
  }
}
</script>

<style scoped>
.dropdown {
  transition: all 0.3s ease;
}
</style>