
<template>
  <DefaultLayout>
    <Navbarpro />
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
          <p>Your have Successfully Submitted Your Proposal.😊  <router-link to="/ClientPrePo" class=" ml-6 bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button">
            Back to Profile</router-link> </p>
        </div>
      </div>
    </div>
  </div>
</div>
    <section v-if="!registrationComplete" class="relative block py-24 lg:pt-0 bg-gray-900 mt-32">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center ">
          <div class="w-full ml-32 mr-32 px-4">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 p-6">
              <h4 class="text-2xl font-semibold text-gray-800">Fill out your Job Proposal</h4>

              <div class="flex  mb-3 mt-8 gap-4">
                <div class="w-full md:w-6/12 pr-2">
                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="how_long">How Long</label>
                  <span class="text-sm">Duration to complete the project in days:</span>
                  <input
                    type="number"
                    name="how_long"
                    class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    v-model="model.proposals.how_long"
                    required
                  />
                </div>

                <div class="w-full md:w-6/12 pl-2">
                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="propose_price">Propose Price</label>
                  <span class="text-sm">Estimated price for the project:</span>
                  <input
                    type="number"
                    name="propose_price"
                    class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    v-model="model.proposals.propose_price"
                    required
                  />
                </div>
              </div>
              <div class="flex">
                <div class="flex flex-wrap mb-3 mt-8 gap-4 w-auto">
                <div class="w-full">
                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="cover_letter">Cover Letter</label>
                  <span class="text-sm mb-2">Tell us something about your skills:</span>
                  <textarea
                    rows="4"
                    class="px-3 py-3 placeholder-gray-400 text-gray-700 mt-2 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    v-model="model.proposals.cover_letter"
                    required
                  ></textarea>
                </div>
              </div>

              <div class="flex flex-wrap mb-3 mt-8 gap-4 ml-10">
                <div class="w-full">
                  <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="file">File</label>
                  <span class="text-sm mb-2">Drop your file here:</span>
                  <input
                    type="file"
                    name="pFile"
                    class="px-3 mt-2 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    @change="handlephoto"
                  />
                </div>
              </div>
              </div>


<div class="text-center mt-6">
                <button
                  class="bg-gray-900 text-cyan-600 active:bg-gray-700 text-sm font-semibold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition duration-150"
                  type="button"
                  @click="addProposal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <div v-if="dropDown" class="right-2 top-32 absolute">
      <p class="-ml-5 text-black">{{ user.full_name }}</p>
      <router-link to="/ClientProfile" class="text-blue-500 -ml-5">Profile</router-link><br>
      <button class="text-red -ml-5" @click="logoutUser">Logout</button>
    </div> -->
         <div class="text-sm text-green-600 text-center mt-40" v-if="postUpdate">
          <p>Your have Successfully Submitted Your Proposals.😊  <router-link to="/WatchProposal"  class=" ml-6 bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button">
            Show Proposals</router-link> </p>
        </div>
  </DefaultLayout>
</template>

  
<script>
import axios from 'axios'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import Navbarpro from '@/components/Navbarpro.vue';
export default {
components: {
        DefaultLayout,
        BreadcrumbDefault,
        Navbarpro
    },
data(){
return{
     user: '',
      dropDown:false,
       postUpdate:false,
       registrationComplete:false,
model:{
     proposals:{
    how_long:null,
    cover_letter:'',
    pFile:'',
    propose_price:null,
    user_id:null,
    projects_id:null
    
    
    }
}
}
},
mounted(){
const userID = localStorage.getItem('user_id')
this.model.proposals.user_id = userID
console.log('user_id',this.model.proposals.user_id )
console.log(this.model.proposals.user_id )
const proId = localStorage.getItem('selectedProjectId')
this.model.proposals.projects_id = proId
console.log('project_id',this.model.proposals.projects_id)
this.getUser()
  const token = localStorage.getItem('wtoken');

    if (token) {
      axios.defaults.withCredentials = true;
      axios.defaults.headers.common['Authorization'] =` Bearer ${token}`;
      this.loadProfile()
    } else {
      this.$router.push({ name: 'Login' });
    }
},
methods:{
     logoutUser(){
        localStorage.removeItem('wtoken','type','roleId')
        alert(Logout)
        this.$router.push('/Login');
      },
         handleClick(){
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
     getToken() {
          axios.get('http://127.0.0.1:8000/' + 'sanctum/csrf-cookie').then(response => {
            //console.log('TOKENNNN', response);
          });
        },
       addProposal(){
         const formData = new FormData()
          formData.append('how_long', this.model.proposals.how_long)
          formData.append('cover_letter',this.model.proposals.cover_letter)
          formData.append('propose_price',this.model.proposals.propose_price)
          formData.append('user_id',this.model.proposals.user_id)
          formData.append('projects_id',this.model.proposals.projects_id)
           formData.append('pFile',this.model.proposals.pFile)
    
    
    
    axios.post(`http://127.0.0.1:8000/api/proposals`,formData,{
          headers: {
                'Content-Type': 'multipart/form-data'
              }
    })
        //    headers: {
        //         'Content-Type': 'multipart/form-data'
        //       }
    .then((res)=>{
       console.log('proposal :', res.data);
      this.$router.push('/WatchProposal')
 
    // alert(`Proposal Submitted`)
    // this.$router.push('/professional-home')
       this.model.projects = {
        how_long:null,
        cover_letter:'',
        propose_price:null,
        
    
       };
           
           
    })
      .catch(error => {
        if (error.response) {
          console.error('Server responded with an error:', error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {


console.error('Error:', error.message);
        }
        this.errorMessage =  error.response.data.message;
      });
    },
     getUser() {
          axios.get('http://127.0.0.1:8000/api/user', {
        headers: {
            'Authorization': `Bearer ${this.token}`  
        }
     
    }).then((res)=>{
      
      this.fullName = res.data.full_name
    //   console.log(res.data.id)
       localStorage.setItem('user_id',  res.data.id)
    });
    console.log('hekko')
        },
    handlephoto(event){
        const pFile = event.target.files[0];
          if (pFile) {
          this.model.proposals.pFile = pFile
            
             console.log(this.model.proposals.pFile)
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

<style>

</style>