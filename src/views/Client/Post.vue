<template>
  <DefaultLayout2>
   <Navbar/>
    <div class="font-serif mt-10" ref="scrollableDiv">
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
      <div v-else>
  <div class="text-sm text-green-600 text-center" v-if="postUpdate">
          <p>Your have Successfully Updated Your posts.😊  <button @click="toggleShow" class=" ml-6 bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button">
            Back to your posts</button> </p>
        </div>
 <main  v-if="show">
        <div class="relative pt-16 pb-32 flex items-center justify-center" style="min-height: 32vh;">
          <div class="container relative mx-auto">
            <div class="items-center flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div class="pr-12">
                  <h1 class="block uppercase text-black text-3xl font-bold mb-2 -mt-10" v-if="projects">Manage your posts</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="top-5 bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style="height: 70px;">
            <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>


        <section class="relative py-20 -mt-48">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div v-for="project in projects" :key="project.id" class="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden " v-if="!showEdit">
                <div class="flex justify-center">
                  <img alt="Project Image" class="max-w-full rounded-lg shadow-lg h-48 mt-4" 
                    src="\job managment.jpg" />
                </div>
                <div class="p-4 flex-1"> 
                  <!-- <div class="text-cyan-600 p-3 inline-flex w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-400">
                    <i class="fas fa-rocket text-xl"></i>
                  </div> -->
                  <h3 class="block  text-black text-xl font-bold mb-2">{{ project.title }}</h3>
                  <!-- <p class="block text-gray-700 text-sm font-bold mb-2">{{ project.description }}</p> -->
   <div>
    <p class="block text-gray-700 text-sm font-bold mb-2">
      {{ truncatedDescription }}
      <span v-if="showMore[project.id]">{{ project.description }}</span>
      <a href="#" @click.prevent="toggleShowMore(project.id)" class="text-blue-400">
        {{ showMore[project.id] ? '... Read Less' : '... Read More' }}
      </a>
    </p>
  </div>
                  <!-- <p class="block text-gray-700 text-sm font-bold mb-2">{{ project.attached_file }}</p> -->
                  <a :href="project.attached_file" class="text-blue-400">download File</a>
                  <p class="block text-gray-700 text-sm font-bold mb-2">price: {{ project.price }}</p>
                  <!-- <h4 class="block text-gray-700 text-sm font-bold mb-2">Required skills</h4>
                  <ul class="list-none mt-2">
                    <li v-for="skill in getSkillsForProject(project.id)" :key="skill.id" class="py-1 block text-gray-700 text-sm font-bold mb-2">
                      <div class="flex items-center">
                        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-2">
                          <i class="fas fa-fingerprint"></i>
                        </span>
                        <h4 class="text-gray-600">{{ skill.skill_name }}</h4>
                      </div>
                    </li>
                  </ul> -->
     <div>
    <h4 class="block text-blue-400 text-sm font-bold mb-2 cursor-pointer" @click="toggleSkills(project.id)">
      Required skills
    </h4>
    <ul v-if="showSkills[project.id]" class="list-none mt-2">
      <li v-for="skill in getSkillsForProject(project.id)" :key="skill.id" class="py-1 block text-gray-700 text-sm font-bold mb-2">
        <div class="flex items-center">
          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-2">
            <i class="fas fa-fingerprint"></i>
          </span>
          <h4 class="text-gray-600">{{ skill.skill_name }}</h4>
        </div>
      </li>
    </ul>
  </div>
                </div>
                <div class="flex justify-center p-4"> <!-- Fixed buttons at the bottom -->
                  <button @click="startEdit(project)"
                    class="bg-gray-900 active:bg-gray-700 text-sm font-semibold px-4 py-2 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1"
                    type="button">
                    Edit
                  </button>
                  <!-- <button @click="deleteProject(project.id)"
                    class="bg-gray-900 active:bg-gray-700 text-sm font-semibold px-4 py-2 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1"
                    type="button">
                    Delete
                  </button> -->
                  <router-link @click="setProjectId(project.id)" to="/ShowProposal"
                    class="bg-gray-900 active:bg-gray-700 text-sm font-semibold px-4 py-2 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none"
                    type="button">
                    Proposals
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </section>

<section class="relative block py-24 lg:pt-0 bg-gray-900 mt-64 mb-96">
          <div class="container mx-auto px-4  mb-20" v-for="project in projects" :key="project.id">
            <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div class="w-full lg:w-6/12 px-4">
                <div v-if="showEdit && selectedProject == project.id"
                  class=" flex flex-col min-w-0 break-words w-full  shadow-lg rounded-lg bg-white -mt-20">
                  <div class="flex-auto lg:px-10 ">
                    <h4 class="text-2xl font-semibold mt-5">Let's update {{ project.title }}</h4>
                    <div class="flex mt-10">
                      <div class="relative w-full mb-3  mr-5">
                      <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="full-name">Full Title</label>
                      <input type="text" v-model="title"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                    </div>
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-gray-700 text-xs font-bold mb-2">Attached File</label>
                      <input type="file" @change="onFileChange"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                    </div>
                    </div>
                    <hr class="mb-5">
                 <div class="flex">
                  <div class="relative w-full mb-3 mr-5">
                      <label class="block uppercase text-gray-700 text-xs font-bold mb-2  no-scroller">Description</label>
                      <textarea rows="4" cols="80" v-model="description"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"></textarea>
                    </div>
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-gray-700 text-xs font-bold mb-2">Price</label>
                      <input type="number" v-model="price"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                    </div>
                 </div>
                 <hr class="mb-5 mt-5">
                    <div class="relative w-full mb-3">
                      <label for="" class="font-serif text-md">Skills:</label><br>
                      <span class="text-sm -mt-10">Select the skills that match your project.</span><br>
                      <select v-model="selectedProjectSkills" multiple
                        class="mt-3 w-52 lg:w-80 border-gray-200 mb-10 focus:outline-none h-40 rounded-md bg-white">
                        <option value="">Select Skills:</option>
                        <option v-for="skill in skills" :key="skill.id" :value="skill.id">{{ skill.skill_name }}</option>
                      </select>
                    </div>
                    <div class="text-center mt-6">
                      <button @click="handleEdit"
                        class="bg-cyan-600 text-white active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!showEdit" class="top-5 bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden mt-96" style="height: 70px;">
  <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">


<polygon class="text-gray-300 fill-current" points="0 0 0 100 2560 100"></polygon>
  </svg>
</div>
        </section>
          <!-- <div class="ml-3" v-if="postUpdate">
        <div class="text-sm text-green-600">
          <p>Your have Successfully Updated Your Profile.😊  <router-link to="/Post" class=" ml-6 bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button">
            Back to Profile</router-link> </p>
        </div>
      </div> -->
   
      </main>
      <div v-if="project == null || project == '' && !isLoading " class="-mt-230">
   <div class="ml-3" v-if="!showEdit ">
        <div class="text-sm text-green-600">
          <p class="text-2xl font-bold">No Projects Found.⚠️ </p>
        </div>
      </div>
          </div>
      <Footerr v-if="!showEdit && show && project" />
      </div>

      
    </div>

    <div v-if="dropDown" class="right-2 top-32 absolute">
      <p class="-ml-5 text-black">{{ user.full_name }}</p>
      <router-link to="/ClientProfile" class="text-blue-500 -ml-5">Profile</router-link><br>
      <button class="text-red -ml-5" @click="logoutUser">Logout</button>
    </div>
    
    
  </DefaultLayout2>
</template>
<script>
import axios from 'axios'
import DefaultLayout2 from '@/layouts/DefaultLayout2.vue'
import Footerr from '@/components/Footerr.vue'
import Navbar from '@/components/Navbar.vue';


export default {
   props: {
    project: {
      type: Object,
      required: true,
    },
  },
  components: {
    DefaultLayout2,
    Navbar,
    Footerr
  },
  data() {
    return {
      user: '',
      postUpdate:false,
      showSkills: {},
       showMore: {},
       isLoading:false,
      dropDown: false,
      showEdit: false,
      show:true,
      selectedProject: null,
      selectedProjectSkills: [],
      title: '',
      description: '',
      attached_file: '',
      price: '',


token: '',
      full_name: '',
      email: '',
      photo: '',
      phone_number: '',
      address: '',
      role_id: '',
      country_id: '',
      id: '',
      projects: [],
      projectId: '',
      projectSkills: [],
      projectSkillID: '',
      skill_name: [],
      skills: []
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


    this.getProjects()
    this.getProjectSkills()

    axios.get('http://127.0.0.1:8000/api/skills').then((res) => {
      this.skills = res.data.data
      console.log(this.skills)
    })
    this.handleLogin();
    this.getToken();
    const userID = localStorage.getItem('user_id')
    console.log(userID)

  },
  methods: {
    toggleShow(){
      this.show = true
      this.postUpdate = false
       this.getProjects();
        this.getProjectSkills();
    },
    // setProposalID(id){
    //  localStorage.setItem('ProposalID',id) 
    // },
   toggleSkills(projectId) {
     
      this.showSkills[projectId] = !this.showSkills[projectId];
    },
     toggleShowMore(projectId) {
      this.showMore[projectId] = !this.showMore[projectId];

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
    getProjects() {
      this.isLoading = true
      axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
      
        this.projects = res.data.data.projects
          this.isLoading = false
        console.log('projectss',this.projects)
        this.filterUserProjects()

      })
       .catch((error) => {
          console.error('Error fetching projects data:', error)
          this.errorMessage = 'Failed to load projects.'
             this.isLoading =  false
        })
    },
    getProjectSkills() {
      axios.get('http://127.0.0.1:8000/api/projectSkill').then((res) => {
        this.projectSkills = res.data.data
        console.log(this.projectSkills)
      })
    },
    startEdit(project) {
      this.showEdit = true;
      this.selectedProject = project.id;
      this.projectId = project.id;
      let selSkills = this.getSkillsForProject(project.id);
      this.selectedProjectSkills = []
      selSkills.forEach((s) => {
        this.selectedProjectSkills.push(s.id)
      })

      this.title = project.title;
      this.description = project.description;
      this.attached_file = project.attached_file;
      this.price = project.price;
      const div = this.$refs.scrollableDiv;
      div.scrollTo({
        bottom: 0,
        behavior: 'smooth'
      })
    },
    async handleEdit() {
      this.errorMessage = null;

      const updatePost = {
        title: this.title,
        description: this.description,
        // attached_file: this.attached_file,
        price: this.price,
        skills: this.selectedProjectSkills
      };

      console.log('Update Post :', updatePost);

      try {
        const updateResponse = await axios.put(`http://127.0.0.1:8000/api/projects/${this.projectId}`, updatePost);
        console.log('Project updated successfully', updateResponse.data);


   
        // this.$router.push('/ClientDashboard');
        // this.resetForm();
        // this.getProjects();
        // this.getProjectSkills();
        this.showEdit = false
        this.show = false
       this.postUpdate = true
      } catch (error) {
        this.errorMessage = error.response ? error.response.data.message : 'An error occurred';
        console.error('Error updating project:', this.errorMessage);
      }
    },
    getSkillsForProject(projectId) {

      const skillIds = this.projectSkills
        .filter(skill => skill.project_id === projectId)
        .map(skill => skill.skill_list_id);


      return this.skills.filter(skill => skillIds.includes(skill.id));
    },

    filterUserProjects() {
      const userId = localStorage.getItem('user_id');
      this.projects = this.projects.filter(project => project.user_id === parseInt(userId));
    },

    deleteProject(projectId) {


if (confirm('Are you sure, you want to delete thiss data?')) {
        axios.delete('http://127.0.0.1:8000/api/projects/${projectId}').then((res) => {
          alert('project delated Successfully')

        }).catch(error => {

          this.errorMessage = error.response ? error.response.data.message : 'An error occurred. Please try again.';
          console.error('Error creating user:', this.errorMessage);
          if (error.res.status == 404) {
            this.errorMessage = error.response.data.message
          }
        });
      }

    },
    handleClick() {
      this.dropDown = !this.dropDown
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
        this.users = res.data
        console.log(this.users)

        this.full_name = res.data.full_name
        this.email = res.data.email
        this.photo = res.data.photo
        this.phone_number = res.data.phone_number
        this.address = res.data.address
        this.role_id = res.data.role_id
        this.country_id = res.data.country_id
        this.id = res.data.id

        localStorage.setItem('user_id', res.data.id)
      });

    },
    logoutUser() {

      if (confirm('Are you sure, you want to Logout thiss data?')) {
        localStorage.removeItem('wtoken', 'type', 'roleId')
        this.$router.push('/Login');
      }
    },
    setProjectId(id) {
      localStorage.setItem('selectedProjectId', id);
    }
  },
   computed: {
    truncatedDescription() {
      this.getProjects();
      const maxLength = 100; 
      return this.project.description.length > maxLength
        ? this.project.description.slice(0, maxLength) + '...'
        : this.project.description;
        
    },
    
    },
  created() {
    this.token = localStorage.getItem('wtoken');
    if (this.token) {
      console.log('token', this.token)
      axios.defaults.withCredentials = true;
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.token};`


    }
  }}

</script>