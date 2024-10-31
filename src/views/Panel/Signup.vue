<template>
  <div v-if="!registrationComplete&&!isProffessional" class="block uppercase text-cyan-700 text-center text-xl mt-16 font-bold mb-2">
    Sign up to get started
  </div>


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
          <p>Your registered Successfully. 😊 you can now <span @click="$router.push({name: 'Login'})" class=" ml-6 bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button">
            Login</span> </p>
        </div>
      </div>
    </div>
  </div>
</div>
     


<div v-if="!registrationComplete">
  <div  class=" ml-72  shadow-md bg-wh pt-10 pl-4 pr-12 pb-10 -mt-20 w-2/3 ">
    <div v-if="!nextPressed" class="pl-20 pt-10 rounded-lg">
      <div class="flex flex-row mb-5">
        <div class="relative w-full mb-3 mt-8">
          <label class="text-md mb-20 text-black -ml-10">Full Name:</label><br />
          <input
            type="text"
            name="full_name"
            v-model="model.user.full_name"
            class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96 mr-10 -ml-10" 
          /><br />
        </div>
        <div class="mt-8">
          <label class="font- text-md text-black">Email:</label><br />
          <input
            type="email"
            name="email"
            v-model="model.user.email"
            class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96" 
          />
        </div>
      </div>
      <div class="flex flex-row mb-5">
        <div>
          <label class="font-serif text-md text-black -ml-10">Password:</label><br />
          <input
            type="password"
            name="password"
            v-model="model.user.password"
            class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96 mr-10 -ml-10" 
          /><br />
        </div>
        <div>
          <label class="font-serif text-md text-black">Role:</label><br />
          <select
            name="role"
            v-model="model.user.role_id"
            class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96" 
          >
            <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }}</option>
          </select>
        </div>
      </div>
      <div class="flex flex-row mb-5">
        <div>
          <label class="font-serif text-md text-black -ml-10">Photo:</label><br />
          <input
            type="file"
            @change="handlephoto"
            name="photo"
            class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96 mr-10 -ml-10" 
          /><br />
        </div>
        <div>
          <label class="font-serif text-md text-black">Country:</label><br />
          <select
            name="country"
            v-model="model.user.country_id"
            class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96" 
          >
            <option value="">Select country:</option>
            <option
              v-for="country in countries"
              :key="country.id"
              :value="country.id"
              class="bg-gray rounded-lg mt-2"
            >


{{ country.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="flex flex-row mb-5">
        <div>
          <label class="font-serif text-md text-black -ml-10">Phone number:</label><br />
          <input
            type="text"
            name="phone_number"
            v-model="model.user.phone_number"
            class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96 mr-10 -ml-10" 
          />
        </div>
        <div>
          <label class="font-serif text-md text-black">Address:</label><br />
          <input
            type="text"
            name="address"
            v-model="model.user.address"
            class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96" 
          /><br />
        </div>
      </div>

      <br />
      <div class="flex mb-5">
        <input type="checkbox" v-model="termsAccepted" class="w-4 h-4 mt-1 mr-3" required />
        <p class="font-serif text-md text-gray-400">
          Yes, I understand and agree to the Workdiator
          <a href="/" class="underline text-cyan-500">Terms</a> of Service,including the <br />
          <a href="/" class="underline text-cyan-500"> User Agreement</a> and
          <a href="/" class="underline text-cyan-500"> Privacy Policy</a> .
        </p>
      </div>
      <p v-if="errorMessage" class="text-red">{{ errorMessage }}</p>

      <button
        v-if="isClient"
        @click="createAccount"
        class="btn bg-cyan-800 text-white rounded-md px-14 py-2 font-serif ml-64 mb-10"
      >
        Sign Up
      </button>

      <button
        v-if="isProffessional"
        @click="nextStep"
        class="btn bg-cyan-800 text-white rounded-md px-14 py-2 font-serif ml-64 mb-10"
      >
        Next
      </button>
    </div>
  </div>

  <div v-if="isProffessional && nextPressed" class="mt-20">
    <div class="text-center font-serif text-2xl text-cyan-500 font-semibold mb-3 md:ml-32 lg:-ml-5 -mt-14">
      Fill out additional details as a professional
    </div>
    <div
      class="ml-80 mr-80 shadow-md rounded-md w-230 pr-7 pl-7"
    >
      <div class="lg:ml-5 mr-5 mt-5">
        <div class="flex justify-between">
          <div>
            <label for="" class="font-serif text-md">Experience:</label><br />
            <input
              type="number"
              name="experience"
              v-model="proffesionalModel.professional.experiance"
              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96" 
              required
            /><br />
          </div>
          <div>
            <label for="" class="font-serif text-md">Certificate:</label><br />
            <input
              type="file"
               @change="handleCertificate"
              name="certificate"
              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96 h-11" 
              required
            />
          </div>
        </div>


<div class="flex justify-between">
          <div>
            <label for="" class="font-serif text-md">Educational status:</label><br />
            <select
              name=""
              required
              v-model="proffesionalModel.professional.educational_status_id"
              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96" 
              
            >
              <option :value="null" disabled class="text-bold">Select Educational Status :</option>
              <option v-for="status in educationalStatuses" :key="status.id" :value="status.id">
                {{ status.name }}
              </option></select
            ><br />
          </div>

          <div>
            <label for="" class="font-serif text-md">College:</label><br />
            <input
              type="text"
              name="college"
              v-model="proffesionalModel.professional.college"
              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96" 
            /><br />
          </div>
        </div>
        <div class="flex justify-between">
          <div>
            <label for="" class="font-serif text-md">Graduation year:</label><br />
            <input
              type="text"
              name="graduation_year"
              required
              v-model="proffesionalModel.professional.graduation_year"
              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96" 
            />
          </div>
          <div>
            <label for="" class="font-serif text-md">Portfolio:</label><br />
            <input
              type="file"
              @change="handlePortfolio"
              name="portfolio"
              required
              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96" 
            /><br />
          </div>
        </div>
        <div class="flex justify-between">
          <div>
            <label for="" class="font-serif text-md">Skills:</label><br />
            <select
              name=""
              required
              v-model="proffesionalModel.professional.skill_lists_id"
              multiple
              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96 mb-5" 
            >
              <option :value="null" disabled>Select Skills:</option>
              <option v-for="skill in skills" :key="skill.id" :value="skill.id">
                {{ skill.skill_name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <p v-if="errorMessage" class="text-red">{{ errorMessage }}</p>

      <button
        class="bg-cyan-600 text-white active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-5 mb-5 ml-80"
        @click="previousStep"
      >
        Back
      </button>

      <button
        class="bg-cyan-600 text-white active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        @click="createAccount"
      >
       Finish & Sign Up
      </button>
    </div>
  </div>
  </div>
   
</template>

<script>

import axios from 'axios'

export default {
 
  data() {
    return {
      registrationComplete: false,
      roleUrl: 'http://127.0.0.1:8000/api/role',
      nextPressed: false,
      termsAccepted: false,
      model: {
        user: {
          full_name: '',
          email: '',
          password: '',
          role_id: null,
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
      proffesionalModel: {
        professional: {
          experiance: null,
          certificate: [],
          educational_status_id: null,
          college: '',
          graduation_year: null,
          portfolio: '',
          skill_lists_id: []
        }
      }
    }
  },
  computed: {
    isProffessional() {
      return this.model.user.role_id == this.proffessional
    },
    isClient() {
      return this.model.user.role_id == this.client
    }
  },
  mounted() {
    this.fetchCountries()
    this.fetchRoles()
    this.fetchEducationalStatus()
    this.fetchSkills()
  },
  methods: {
    nextStep() {
      this.nextPressed = true
    },
    previousStep() {
      this.nextPressed = false
    },
    registerPro() {
      axios
        .post('http://127.0.0.1:8000/api/findex', this.proffesionalModel.professional)
        .then((res) => {
          console.log(res.data)
          this.proffesionalModel.professional = {
            experiance: '',
            // certificate: [],
            educational_status_id: null,
            college: '',
            graduation_year: '',
            // portfolio: [],
            skill_lists_id: []
          }
          alert('Professional registered successfully')
        })
        .catch((error) => {
          if (error.response) {
            console.error('Server responded with an error:', error.response.data)
          } else if (error.request) {
            console.error('No response received:', error.request)
          } else {
            console.error('Error:', error.message)
          }
          this.errorMessage = error.response.data.message
        })
      this.$router.push({ name: 'Login' })
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


fetchRoles() {
      axios
        .get(this.roleUrl)
        .then((res) => {
          console.log('Response data:', res.data)
          if (res.data && res.data[0] && Array.isArray(res.data[0])) {
            this.roles = res.data[0]
            this.roleIds = this.roles.map((role) => role.id)
          } else {
            console.error('Invalid response data structure:', res.data)
          }
        })
        .catch((error) => {
          console.error('Error fetching roles:', error)
        })
    },
    fetchEducationalStatus() {
      axios
        .get('http://127.0.0.1:8000/api/eduStatuses')
        .then((res) => {
          console.log('Educational statuses response data', res.data)
          if (res.data && res.data[0] && Array.isArray(res.data[0])) {
            this.educationalStatuses = res.data[0]
            this.educationalStatusesId = this.educationalStatuses.map(
              (educationalStatus) => educationalStatus.id
            )
            // if (res.data && Array.isArray(res.data)) {
            //   this.educationalStatuses = res.data;
          } else {
            console.error('Invalid response data structure for educational statuses:', res.data)
          }
        })
        .catch((error) => {
          console.error('Error fetching educational statuses:', error)
        })
    },
    fetchSkills() {
      axios
        .get('http://127.0.0.1:8000/api/skills')
        .then((res) => {
          console.log('response data', res.data)
          if (res.data ) {
            this.skills = res.data.data
            this.skillId = this.skills.map((skill) => skill.id)
          } else {
            console.error('Invalid response data structure:', res.data)
          }
        })
        .catch((error) => {
          console.error('error featching roles:', error)
        })
    },
    createAccount() {
      this.errorMessage = null
      if (!this.termsAccepted) {
        this.errorMessage = 'please agree to the terms and conditions.'
        return
      }

      const formData = new FormData()
      formData.append('photo', this.model.user.photo)
      formData.append('full_name', this.model.user.full_name)
      formData.append('email', this.model.user.email)
      formData.append('password', this.model.user.password)
      formData.append('role_id', this.model.user.role_id)
      formData.append('country_id', this.model.user.country_id)
      formData.append('phone_number', this.model.user.phone_number)
      formData.append('address', this.model.user.address)

      if(this.isProffessional) {
        formData.append('experiance', this.proffesionalModel.professional.experiance)
        formData.append('educational_status_id', this.proffesionalModel.professional.educational_status_id)
        formData.append('college', this.proffesionalModel.professional.college)
        formData.append('graduation_year', this.proffesionalModel.professional.graduation_year)
        formData.append('skills', this.proffesionalModel.professional.skill_lists_id)
        formData.append('certificate', this.proffesionalModel.professional.certificate)
        formData.append('portfolio', this.proffesionalModel.professional.portfolio)
      }

      axios
        .post('http://127.0.0.1:8000/api/users', formData, {
           headers: {
             'Content-Type': 'multipart/form-data'
           }
        })
        .then((response) => {
            this.registrationComplete = true
        })
        .catch((error) => {
          if (error.response) {
            // console.error('Server responded with an error:', error.response.data)
            this.errorMessage = error.response.data.message || error.response.data.errors
          } else if (error.request) {
            console.error('No response received:', error.request)
          } else {
            console.error('Error:', error.message)
          }
        })
    },


handlephoto(event) {
      const file = event.target.files[0]
      if (file) {
        this.model.user.photo = event.target.files[0]
        console.log(this.model.user.photo)
      }
    },
    handleCertificate(event) {
      const file = event.target.files[0]
      if (file) {
        this.proffesionalModel.professional.certificate = file
      }
    },
    handlePortfolio(event) {
      const file = event.target.files[0]
      if (file) {
        this.proffesionalModel.professional.portfolio = file
      }
    }
  }
}
</script>