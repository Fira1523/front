<template>
  <DefaultLayout2>
  <Navbar/>

    
    <div  class="max-w-md mx-auto px-6 py-8 bg-white shadow-lg rounded-lg mt-20">
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
      <div v-else >
      <div class="text-center mb-6">
        <img 
         :src="photo"
          class="w-60 h-48 rounded-md mx-auto border-4 border-cyan-600 shadow-md" 
          alt="Profile Image" />
      </div>

      <div class="text-center">
        <h3 class="text-3xl font-semibold text-gray-800 mb-1">{{ professionalData.full_name }}</h3>
        <p class="text-md text-gray-600 font-medium mb-1">{{ professionalData.email }}</p>
        <p class="text-md text-gray-600 font-medium mb-1">{{ professionalData.phone_number }}</p>
        <p class="text-md text-gray-600 font-medium mb-1">{{ professionalData.address }}</p>
        <!-- <img :src="photo" alt="photo"> -->
        <p v-if="professionalData.country" class="text-md text-gray-600 font-medium mb-1">{{ professionalData.country.name }}</p>
      </div>

      <div class="mt-6 flex justify-center space-x-4">
        <router-link 
          to="/ClientProfile" 
          class="bg-cyan-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:shadow-lg transition duration-200"
        >
          Edit
        </router-link>
        <router-link 
          to="/ShowProposal" 
          class="bg-cyan-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:shadow-lg transition duration-200" 
          @click="setProjectId(project.id)"
        >
          Proposals
        </router-link>
      </div>
      </div>
    </div>

    <div v-if="dropDown" class="right-2 top-24 fixed bg-white shadow-lg rounded-lg p-4">
      <router-link to="/ClientProfile" class="text-blue-500">Profile</router-link><br>
      <button class="text-red-500" @click="logoutUser">Logout</button>
    </div>
  </DefaultLayout2>
</template>

<style scoped>
.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
.border-cyan-600 {
  border-color: #06b6d4; 
}
</style>
<script>
import axios from 'axios'
import Navbar from '@/components/Navbar.vue';
import DefaultLayout2 from '@/layouts/DefaultLayout2.vue'
export default {
  components: {
    DefaultLayout2, 
    Navbar 
     },
  data() {
    return {
      profileLoaded: false,
      isLoading:false,
      dropDown: false,
      userId: '',
      infoUrl: 'http://127.0.0.1:8000/api/client-profile',
      nextPressed: false,
      termsAccepted: true,
       photo: '',
      model: {
        user: {
          full_name: '',
          email: '',
          password: '',
         
          country_id: null,
          phone_number: '',
          address: ''
        }
      },
      userPhoto: '',
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
      professionalData: [],
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
       this.isLoading = true
      axios
        .get(this.infoUrl)
        .then((response) => {
          this.profileLoaded = true
          this.isLoading = false
          this.professionalData = response.data.data.user
          console.log('country', response.data.data.user.country.name)
          // this.model.user.phone_number = response.data.data.user.phone_number
          this.photo = response.data.data.photo
          console.log('photo',this.photo)
         
          // this.model.user.full_name = response.data.data.user.full_name
          // this.model.user.email = response.data.data.user.email
          // this.model.user.country_id = response.data.data.user.country_id
          // this.model.user.address = response.data.data.user.address
      
        })
        .catch((error) => {
          console.error('Error fetching professional data:', error)
          this.errorMessage = 'Failed to load profile data.'
             this.isLoading =  false
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

        })
        .catch((error) => {
          console.error('Error updating profile:', error)
          this.errorMessage = 'Failed to update profile.'
        })
    }
  }
}
</script>