<template>
  <DefaultLayout2>
  <Navbar/>
   <div class="flex justify-center items-start mt-16">
<div class="bg-white rounded-lg shadow-lg p-10 w-2/3 transition-transform transform hover:scale-105">
    <h1 class="uppercase text-cyan-700 text-lg font-bold mb-6 text-center">Project Details</h1>

    
        <div class="flex flex-wrap mb-5">
            <div class="w-full md:w-1/2 pr-2">
                <label class="block uppercase text-gray-700 text-md font-bold mb-1">Title:</label>
                <span class="text-sm text-gray-500">Put the title of your project here, e.g., frontend development, backend, UI/UX design.</span>
                <input type="text" name="title" v-model="model.projects.title"
                    class="mt-2 border border-gray-300 px-4 py-2 placeholder-gray-400 text-gray-700 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full transition duration-200 ease-in-out"
                    required>
            </div>
    
            <div class="w-full md:w-1/2 pl-2 ">
                <label class="block uppercase text-gray-700 text-md font-bold mb-1">Price:</label>
                <span class="text-sm text-gray-500">Estimate how much you will pay for the professionals.</span>
                <input type="number" name="price" v-model="model.projects.price"
                    class="mt-2 border border-gray-300 px-4 py-2 placeholder-gray-400 text-gray-700 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full transition duration-200 ease-in-out"
                    required>
            </div>
           
        </div>

        <div class="flex flex-wrap mb-5">
       
     
        <div class="w-full md:w-1/2 pl-2 -mr-4">
                <label class="block uppercase text-gray-700 text-md font-bold mb-1">Description:</label>
                <span class="text-sm text-gray-500">Write details about your project.</span>
                <textarea name="description" v-model="model.projects.description"
                    class="mt-2 border border-gray-300 px-4 py-2 placeholder-gray-400 text-gray-700 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full transition duration-200 ease-in-out"
                    rows="5" required></textarea>
            </div>
            <div class="w-full md:w-1/2 pr-2">
                <label class="block uppercase text-gray-700 text-md font-bold mb-1 ml-6">Attached File:</label>
                <span class="text-sm text-gray-500 ml-6">Drop your file here.</span>
                <input type="file" @change="handlephoto" name="attached_file"
                    class="mt-2 border border-gray-300 px-4 py-2 placeholder-gray-400 text-gray-700 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full transition duration-200 ease-in-out"
                    required>
            </div>
        </div>

        <div class="flex justify-center">
            <button @click="projectPost"
                class="bg-cyan-600 text-white active:bg-gray-700 text-sm font-semibold px-20 py-3 rounded-lg shadow hover:shadow-lg transition duration-200 transform hover:scale-105"
                type="submit">Next</button>
        </div>
  
</div>
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
      token: '',
      show: false,
      showNext: true,
      dropDown: false,
      model: {
        projects: {
          title: '',
          description: '',
          attached_file: '',
          price: '',
          user_id: '',
          dropDown: false,
          user: '',


        }
      }
    }
  },
  mounted() {
    const token = localStorage.getItem('wtoken');


if (token) {
      axios.defaults.withCredentials = true;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      this.loadProfile()
    } else {
      this.$router.push({ name: 'Login' });
    }
    this.handleLogin();
    this.getToken();
    const userID = localStorage.getItem('user_id')
    this.model.projects.user_id = userID
    console.log('user_id', this.model.projects.user_id)
  },
  methods: {
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

        alert('Sucessfully Logged in')

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

    shouHide() {

      this.show = !this.show
      this.showNext = !this.showNext
    },
    projectPost() {
      const formData = new FormData()
      formData.append('attached_file', this.model.projects.attached_file)
      formData.append('description', this.model.projects.description)
      formData.append('title', this.model.projects.title)
      formData.append('price', this.model.projects.price)
      formData.append('user_id', this.model.projects.user_id)


      axios.post(`http://127.0.0.1:8000/api/projects`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((res) => {
          console.log('Project :', res.data);
          const project_id = res.data.data.id
          console.log('project_id', project_id)
          localStorage.setItem('project_id', project_id);

          this.model.projects = {
            attached_file: '',
            description: '',
            title: '',
            price: ''

          };

          this.$router.push('/ProjectSkill')
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
    handlephoto(event){
      const file = event.target.files[0];
      if (file) {
        this.model.projects.attached_file = file;
        console.log('attached-file',this.model.projects.attached_file)
      }
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

<style scoped>
.form-group {
display: flex;
flex-direction: column;
}
</style>