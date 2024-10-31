
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
          <p>Your have Successfully agreed to the contract. excited?😊 <span @click="$router.push({name: 'WatchProposal'})" class=" ml-6 bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button">
            Back</span> </p>
        </div>
      </div>
    </div>
  </div>
</div>
    <div v-if="!registrationComplete" class="flex ml-16 mt-5" >

      <div class="fixed " v-if="!isLoading">
        <img src="\projectskill.jpg" alt="" class=" h-80 ml-20 mt-10">
      </div>
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
      <div class="ml-96 mt-20" v-else >
        <div class="ml-40">

          <label for="" class="font-serif text-md">Skills:</label><br>
          <span class="text-sm -mt-10">select the skills much with your project.</span><br>
          <select name="" required v-model="model.projectSkll.skill_list_id" multiple
            class=" mt-3 w-52 lg:w-80 border-gray-200 mb-10 focus:outline-none h-40 rounded-md  bg-white ">
            <option value="">Select Skills:</option>
            <option v-for="skill in skills" :key="skill.id" :value="skill.id">{{ skill.skill_name }}</option>
          </select>
          <button @click="projectPost" class="-ml-80 mt-10  bg-cyan-800 text-white rounded-md px-10 py-1 ">Post
            Project</button>
        </div>

      </div>


</div>
    <div v-if="dropDown" class="right-2 top-32 absolute ">
      <p class="-ml-5 text-black">{{ user.full_name }}</p>
      <router-link to="/ClientProfile" class="text-blue-500 -ml-5">Profile</router-link><br>
      <button class="text-red -ml-5" @click="logoutUser">Logout</button>
    </div>
  </DefaultLayout2>
</template>
<script>
import axios from 'axios';
import DefaultLayout2 from '@/layouts/DefaultLayout2.vue'
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    DefaultLayout2,
    Navbar
  },
  data() {
    return {
      user: '',
      dropDown: false,
      skills: '',
      skillId: '',
      isLoading:false,
      registrationComplete:false,
      model: {
        projectSkll: {
          skill_list_id: [],
          project_id: ''
        }
      }
    }
  },
  mounted() {
  this.fetchSkills()
    const proId = localStorage.getItem('project_id')
    this.model.projectSkll.project_id = proId
    console.log('project_id', this.model.projectSkll.project_id)
    this.getToken();
    this.handleLogin()
    const token = localStorage.getItem('wtoken');


if (token) {
      axios.defaults.withCredentials = true;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      this.loadProfile()
    } else {
      this.$router.push({ name: 'Login' });
    }
  },
  methods: {
    fetchSkills(){
      this.isLoading = true
  axios.get('http://127.0.0.1:8000/api/skills')
      .then((res) => {
        console.log('response data', res.data)
        if (res.data) {
          this.skills = res.data.data
          this.skillId = this.skills.map(skill => skill.id);
        } else {
          console.error('Invalid response data structure:', res.data);
        }
         this.isLoading = false
      })
      .catch((error) => {
        console.error('error featching roles:', error);
        this.isLoading =  false
      });
    },
    logoutUser() {
      localStorage.removeItem('wtoken', 'type', 'roleId')
      alert(Logout)
      this.$router.push('/Login');
    },
    handleClick() {
      this.dropDown = !this.dropDown
    },
    navigateToProfileBLd() {
      this.$router.push('/ProfileBLd');
    },
    loadProfile() {
      axios
        .get('http://127.0.0.1:8000/api/profile')
        .then((response) => {
          this.user = response.data.data;
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    },
    async handleLogin() {
      this.logging = true;
      this.errorMessage = ''
      console.log(this.email, this.password)

      try {

        const response = await axios.post('http://127.0.0.1:8000/api/wlogin', {
          email: this.email,
          password: this.password,
        });
        this.token = response.data.token

        localStorage.setItem('wtoken', this.token);
        localStorage.setItem('type', roleType);
        localStorage.setItem('roleId', roleID)

        alert('Sucessfully Login')
      } catch (err) {
        console.log('eror', err)
        this.logging = false;
        this.errorMessage = err.response?.data?.message || 'An error occurred';

        setTimeout(() => {
          this.errorMessage = ''
        }, 2000)
      }
      this.getUser();
    },
    getToken() {
      axios.get('http://127.0.0.1:8000/' + 'sanctum/csrf-cookie').then(response => {

      });
    },
    getUser() {

      axios.get('http://127.0.0.1:8000/api/user', {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }

      }).then((res) => {

        this.fullName = res.data.full_name

        localStorage.setItem('user_id', res.data.id)
      });
      console.log('hekko')
    },
    handleClick() {
      this.dropDown = !this.dropDown
    },
    projectPost() {
      axios.post('http://127.0.0.1:8000/api/projectSkill', this.model.projectSkll).then((res) => {
        console.log(res.data)
        this.model.projectSkll = {
          skill_list_id: [],
          project_id: this.model.projectSkll.project_id


}
        this.registrationComplete = true;
        this.$router.push('/Post')


      })
        .catch(error => {
          if (error.response) {
            console.error('Server responded with an error:', error.response.data);
          } else if (error.request) {
            console.error('No response received:', error.request);
          } else {
            console.error('Error:', error.message);
          }
          this.errorMessage = error.response.data.message;
        });
    },
    logoutUser() {
      localStorage.removeItem('wtoken', 'type', 'roleId')
      alert(Logout)
      this.$router.push('/');
    },
  },
  created() {
    this.token = localStorage.getItem('wtoken');
    if (this.token) {
      console.log('token', this.token)
      axios.defaults.withCredentials = true;
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
    }
  },
}
</script>