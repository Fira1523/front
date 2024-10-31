
<template>
  <DefaultLayout2>
<Navbar/>

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
    <!-- <BreadcrumbDefault pageTitle="Post" /> -->
    <!-- ====== Profile Section Start -->
    <div v-if="!registrationComplete"
      class="overflow-hidden rounded-sm border border-stroke mt-10 bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div v-if="!profileLoaded">
        <h1 class="text-2x1 font-bold justify-center text-cyan-800 mt-10 ml-40">
          LOADING PROFILE ...
        </h1>
      </div>
      <div v-if="profileLoaded" class="">
        <div class="relative z-0 h-72 md:h-65 ">
          <!-- <img src="\public\postingJob.jpg" alt="profile cover" -->
          <!-- <img :src="photo" alt=""
            class="h-full w-full rounded-tl-sm rounded-tr-sm   " /> -->
            <img :src="photo" alt="" class="h-80 w-full">
            <div class="ml-20 -mt-32">

            <img :src="photo" alt="" class="w-44 h-44 rounded-full ml-96 ">
            </div>
          <div class="absolute -mb-22 bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
            <label for="cover" 
              class="flex cursor-pointer items-center justify-center gap-2 rounded bg-cyan-800 py-1 px-2 text-sm font-medium text-white hover:bg-opacity-80 xsm:px-4 ">
              <input type="file" name="cover" id="cover" class="sr-only " @change="handlephoto" />
             
              <span>Edit</span>
            </label>
          </div>
        </div>
        <div class="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5 mt-28">

          <div class="mt-4">
            <h3 class="mb-1.5 text-2xl font-bold text-black-2 dark:text-white text-center ml-20">
              {{ model.user.full_name }}
            </h3>
            <div>
              <div class="flex justify-center mb-10">
                <div class="mr-5">
                  <label for="" class="block uppercase text-gray-700 text-xs font-bold ">Full name:</label><br />
                  <input type="text" name="full_name"
                    class=" border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-w -mt-2hite rounded text-sm shadow focus:outline-none focus:ring w-96"
                    required v-model="model.user.full_name" /><br />
                </div>
                <div>
                  <label for="" class="block uppercase text-gray-700 text-xs font-bold ">Email:</label><br />
                  <input type="text" name="full_name"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-wh -mt-2ite rounded text-sm shadow focus:outline-none focus:ring w-96"
                    required v-model="model.user.email" /><br />
                </div>
              </div>
              <div class="flex justify-center mb-10">
                <div class="mr-5">
                  <label for="" class="block uppercase text-gray-700 text-xs font-bold">Phone number:</label><br />
                  <input type="text" name="phone_number"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96"
                    required v-model="model.user.phone_number" /><br />
                </div>
                <div>
                  <label for="" class="block uppercase text-gray-700 text-xs font-bold ">Address:</label><br />
                  <input type="text" name="address"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-wh -mt-2ite rounded text-sm shadow focus:outline-none focus:ring w-96"
                    required v-model="model.user.address" /><br />
                </div>
              </div>


<div class="flex justify-center text-center ">
                <div class="mr-5 ml-64 mt-3">
                  <label  class="block uppercase text-gray-700 text-xs font-bold ">Country:</label><br />
                  <select name="country" v-model="model.user.country_id"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 -mt-2 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96">
                    <option value="">Select country:</option>
                    <option v-for="country in countries" :key="country.id" :value="country.id"
                      class="bg-gray rounded-lg mt-2">
                      {{ country.name }}
                    </option>
                  </select>
                </div>
             
              <div class="mr-4">
                <div class="justify-center mr-96 w-64">
                  <label  class="block uppercase text-gray-700 text-xs font-bold ">Photo:</label><br />
                  <input type="file" @change="handlephoto" name="photo"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 -mt-2 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96" />
                  <br />
                </div>
              </div>
            </div>
            
              <button @click="updateProfile"
              class="bg-cyan-600 text-white active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-5" type="button ">
                Save Profile
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div v-if="dropDown" class="right-2 top-24 fixed  bg-white">
      <!-- <p class="-ml-5 text-black">{{ user.full_name }}</p> -->
      <router-link to="/ClientProfile" class="text-blue-500 -ml-5">Profile</router-link><br>
      <button class="text-red -ml-5" @click="logoutUser">Logout</button>
    </div>
  </DefaultLayout2>

</template>
<script>
import axios from 'axios'

import DefaultLayout2 from '@/layouts/DefaultLayout2.vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import Navbar from '@/components/Navbar.vue';
export default {
  components: {
    DefaultLayout2,
    BreadcrumbDefault,
    Navbar  
  },
  data() {
    return {
      profileLoaded: false,
      dropDown: false,
      userId: '',
      infoUrl: 'http://127.0.0.1:8000/api/client-profile',
      nextPressed: false,
      termsAccepted: true,
      registrationComplete:false,
      model: {
        user: {
          full_name: '',
          email: '',
          password: '',
          photo: '',
          country_id: null,
          phone_number: '',
          address: ''
        }
      },

      countries: [],
      roles: [],
      countryIds: [],
      roleIds: [],
      errorMessage: null,
      client: 3,
      proffessional: 2,

      educationalStatuses: '',
      educationalStatusesId: '',
      skills: '',
      skillId: '',
      professionalData: {},
      proffesionalModel: {
        professional: {
          experiance: null,
          certificate: [],
          educational_status_id: null,
          college: null,
          graduation_year: null,
          portfolio: null,
          skill_lists_id: []
        }
      }
    }
  },
  computed: {
    isProffessional() {
      return this.model.user.role_id == this.proffessional
    }
  },
  mounted() {
    // console.log('sssssss')
    const token = localStorage.getItem('wtoken')

    if (token) {
      axios.defaults.withCredentials = true
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`


this.fetchClientData()
      this.fetchCountries()
    } else {
      this.$router.push({ name: 'Login' })
    }
  },
  methods: {
    logoutUser() {
    
    if (confirm('Are you sure, you want to Logout thiss data?')) {
      localStorage.removeItem('wtoken', 'type', 'roleId')
    this.$router.push('/Login');
  }
},
    handleClick() {
      this.dropDown = !this.dropDown
    },
    fetchClientData() {
      this.profileLoaded = false
      axios
        .get(this.infoUrl)
        .then((response) => {
          this.profileLoaded = true
          this.professionalData = response.data.data
          this.model.user.phone_number = response.data.data.user.phone_number
          this.model.user.photo = response.data.data.user.photo
          this.model.user.full_name = response.data.data.user.full_name
          this.model.user.email = response.data.data.user.email
          this.model.user.country_id = response.data.data.user.country_id
          this.model.user.address = response.data.data.user.address
             this.photo = response.data.data.photo
          console.log('photo',this.photo)
        })
        .catch((error) => {
          console.error('Error fetching professional data:', error)
          this.errorMessage = 'Failed to load profile data.'
        })
    },
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

    handlephoto(event) {
      const file = event.target.files[0]
      if (file) {
        this.model.user.photo = file
      }
    },

    updateProfile() {
      const formData = new FormData()
      formData.append('full_name', this.model.user.full_name)
      formData.append('phone_number', this.model.user.phone_number)
      formData.append('country_id', this.model.user.country_id)
      formData.append('address', this.model.user.address)
      formData.append('photo', this.model.user.photo)
      axios
        .post('http://127.0.0.1:8000/api/updateClientProfile', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
         
        })
        .then((response) => {
          console.log('Profile updated successfully:', response.data)
          this.registrationComplete = true
        })
        .catch((error) => {
          console.error('Error updating profile:', error)
          this.errorMessage = 'Failed to update profile.'
        })
    }
  }
}
</script>