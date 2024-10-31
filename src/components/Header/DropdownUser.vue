<template>
  <div class="relative" ref="target">
    <router-link
      class="flex items-center gap-4"
      to="#"
      @click.prevent="handleClick"
    >
      <span class="text-right lg:block">
        <span class="block text-sm font-medium">{{ fullName }}</span>
      </span>

      <span class="h-12 w-12 rounded-full">
        <img src="@/assets/images/user/user-01.png" alt="User" />
      </span>

      <svg
        :class="dropdownOpen && 'rotate-180'"
        class="hidden fill-current sm:block"
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
          fill=""
        />
      </svg>
    </router-link>

    <!-- Dropdown Start -->
    <div
      v-show="dropdownOpen"
      class="absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
    >
      <ul class="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
        <li>
          <router-link
            to="/profile"
            class="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            My Profile
          </router-link>
        </li>
        <li>
          <router-link
            to="#"
            class="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            My Contacts
          </router-link>
        </li>
        <li>
          <router-link
            to="/pages/settings"
            class="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
          >
            Account Settings
          </router-link>
        </li>
      </ul>
      <button
        class="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
        @click="logoutUser"
      >
        Log Out
      </button>
    </div>
    <!-- Dropdown End -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      token: '',
      fullName: '',
      dropdownOpen: false,
    };
  },
  mounted() {
    this.token = localStorage.getItem('wtoken');
    if (this.token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
      this.getUser();  // Call the method to fetch user data after mounting the component
    } else {
      console.error('Token not found in localStorage.');
    }
  },
  methods: {
    // Toggle dropdown menu
    handleClick() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    
    // Fetch user information
    getUser() {
      axios
        .get('http://127.0.0.1:8000/api/user', {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          console.log('User Data:', res.data); // Log the response for debugging
          if (res.data && res.data.full_name) {
            this.fullName = res.data.full_name; // Assign full name if present
            localStorage.setItem('user_id', res.data.id); // Store user_id in localStorage
          } else {
            console.warn('full_name not found in response');
          }
        })
        .catch((err) => {
          console.error(
            'Error fetching user:',
            err.response ? err.response.data : err
          );
        });
    },
    
    // Logout user and clear session data
    logoutUser() {
      localStorage.removeItem('wtoken'); // Clear token
      localStorage.removeItem('user_id'); // Clear user_id
      this.$router.push('/'); // Redirect to login page or home
    },
  },
};
</script>
