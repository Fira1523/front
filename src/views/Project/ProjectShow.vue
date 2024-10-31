<template>
  <DefaultLayout>
    <Navbarpro />
    <div>
      <main>
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
        <div v-else
          class="relative pt-16 pb-32 flex content-center items-center justify-center"
          style="min-height: 24vh"
        >
          <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div class="pr-12">
                  <h1 class="block uppercase text-black text-3xl font-bold mb-2 -mt-10">Your work story starts with us.</h1>
                </div>
              </div>
            </div>
          </div>
          <div
            class="-mt-1 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style="height: 70px"
          >
            <svg
              class="absolute bottom-0 overflow-hidden "
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>

        <section class="pb-20 bg-gray-300">
          <div class="container mx-auto px-4 -mt-18">
            <div class="flex flex-wrap">
              <div class="mt-16 md:w-full px-4 mr-auto ml-auto">
              
                <h3 class="text-3xl mb-2 font-semibold leading-normal">{{ message }}</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div
                    class="shadow-lg rounded-md p-5 bg-white flex flex-col justify-between"
                    v-for="project in availableProjects"
                    :key="project.id"
                  >
                    <div>
                        <h3 class="block  text-cyan-400 -ml-20 text-3xl font-bold mb-5 text-center -mt-16 " v-if="project && !isLoading">Job Opportunities</h3>
                      <div
                        class="text-white p-3 text-center inline-flex items-center justify-center w-4 h-4 mb-5 shadow-lg rounded-full bg-green-400"
                      >
                        <i class="fas fa-fingerprint"></i>
                      </div>
                      <div
                        class="text-white p-3 text-center inline-flex items-center justify-center ml-64 w-4 h-4 shadow-lg rounded-full bg-white stick"
                      >
                        <i class="fas fa-fingerprint"></i>
                      </div>
                      <div
                        class="text-white p-3 text-center inline-flex items-center justify-center ml-64 w-4 h-4 -mt-32 shadow-lg rounded-full bg-orange-600"
                      >
                        <i class="fas fa-fingerprint"></i>
                      </div>
                      <p class="mb-5 mt-5">Project Title: {{ project.title }}</p>
                      <ul class="list-none mt-6">
                        <p>Required skills:</p>
                        <li
                          v-for="skill in getSkillsForProject(project.id)"
                          :key="skill.id"
                          class="py-2"
                        >
                          <div class="flex items-center">
                            <span
                              class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                            >
                              <i class="fas fa-fingerprint"></i>
                            </span>
                            <h4 class="text-gray-600">{{ skill.skill.skill_name }}</h4>
                          </div>
                        </li>
                      </ul>
                      <p class="mb-5 mt-5">Project Description: {{ project.description }}</p>
                      <a :href="project.attached_file" class="text-blue-700 underline cursor-pointer">File Uploads</a>
                      
                      <p class="mb-5 mt-5">Salary: {{ project.price }}</p>
                    </div>
                    <router-link
                      to="/Proposal"
                      class="bg-gray-900 bg-cyan-600 text-sm font-semibold px-6 text-center py-3 rounded shadow text-white hover:shadow-lg outline-none focus:outline-none mt-auto"
                      @click="setProjectId(project.id)"
                      >Apply</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
   
      </main>
               <div class="-mt-20">
   <div class="ml-3" v-if="!isLoading ">
        <div class="text-sm text-green-600" v-if="availableProjects == null || availableProjects == '' " >
          <p class="text-2xl font-bold">No Projects Found.⚠️ </p>
        </div>
      </div>
          </div>
           <Footerr v-if=" project" />
    </div>
  </DefaultLayout>
</template> 

<script>
import axios from 'axios'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Navbarpro from '@/components/Navbarpro.vue'
export default {
  components: {
    DefaultLayout,
   Navbarpro
  },
  name: 'landing-page',
  created() {
    const token = localStorage.getItem('wtoken')
    if (token) {
      axios.defaults.withCredentials = true
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      this.$router.push({ name: 'Login' })
    }
  },
  data() {
    return {
      availableProjects: [],
      projectSkills: [],
      message: '',
      dropDown: false,
       isLoading:false
    }
  },
  mounted() {
    this.getAvailableProjects()
    this.getProjectSkills()
  },
  methods: {
    handleClick() {
      this.dropDown = !this.dropDown
    },
    getProjectSkills() {
      axios.get('http://127.0.0.1:8000/api/projectSkill').then((res) => {
        this.projectSkills = res.data.data
      })
    },
    getAvailableProjects() {
      this.isLoading = true
      this.message = ''
      axios
        .get('http://127.0.0.1:8000/api/available-project')
        .then((response) => {
          this.availableProjects = response.data.data.projects
          console.log('project',this.availableProjects )
          this.message = response.data.message
          this.isLoading = false
        })
        .catch((error) => {
          this.message = error.response.data.message
          this.isLoading =  false
        })
    },
    getSkillsForProject(projectId) {
      return this.projectSkills.filter((skill) => skill.project_id === projectId)
    },
    setProjectId(id) {
      localStorage.setItem('selectedProjectId', id)
    }
  }
}
</script>