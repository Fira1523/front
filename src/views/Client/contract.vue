<template>
    <DefaultLayout2>
      <Navbar/>
        <!-- <BreadcrumbDefault pageTitle="Contract" /> -->


        <div class="font-serif ml-56" ref="scrollableDiv" v-if="showContract">
            <section class="relative block py-24 lg:pt-0 bg-gray-900 mt-72">
              <div class="container mx-auto px-4">
                <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                  <div class="w-full lg:w-3/4 px-4 -ml-40">
                    <div  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                      <div class="flex-auto p-5 lg:p-10">
                        <h4 class="text-2xl font-semibold">make your deal</h4>
                        
                        <div class="relative w-full mb-3 mt-8">
                          <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="full-name">Start Date</label>
                          <input type="date" v-model="model.contracts.start_date" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                        </div>
                        <div class="relative w-full mb-3 mt-8">
                          <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="full-name">End Date</label>
                          <input type="date" v-model="model.contracts.end_date" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                        </div>
                        <div class="relative w-full mb-3">
                          <label class="block uppercase text-gray-700 text-xs font-bold mb-2">Terms and conditions</label>
                          <textarea rows="4" cols="80" v-model="model.contracts.term_and_conditions" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"></textarea>
                        </div>
                        <div class="relative w-full mb-3">
                          <label class="block uppercase text-gray-700 text-xs font-bold mb-2">upload any necessary file</label>
                          <input type="file" @change="handleFile" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                        </div>
                        <div>
                            <button @click="postContracts"   class="bg-cyan-600 text-white active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-32 " type="button" >Set Deal</button>
                        </div>
                          
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
              <div class="text-sm text-green-600 text-center mt-40" v-if="postUpdate">
          <p>Your have Successfully Submitted Your Contracts.😊  <button @click="toggleShow" class=" ml-6 bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button">
            Show Contracts</button> </p>
        </div>
            <div v-if="dropDown" class="right-2 top-24 fixed  bg-white">
      <!-- <p class="-ml-5 text-black">{{ user.full_name }}</p> -->
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
    Navbar,
 
  },
    data() {
      
        return {
           
            // contracts: [],
            dropDown: false,
            postUpdate:false,
            showContract:true,
       
        
            model: {
                contracts: {
                    start_date:null,
                    end_date:null,
                    term_and_conditions:'',
                    cFile:'',
                    proposals_id:null,
                    user_id:null,
                    client_is_finished:null,
                }
            },
        
        };
    },
    mounted() {

        // this.fetchContracts();
        const proID = localStorage.getItem('proposalsID')
        this.model.contracts.proposals_id = proID
        const userID = localStorage.getItem('user_id'); 
      
        this.model.contracts.user_id = userID
        console.log('userId', this.model.contracts.user_id)
        console.log('proposalID', this.model.contracts.proposals_id)

       // console.log('ProposalID', proID)
    },
 
    methods: {
      // setStatus(){
      //   this.client_is_finished = 1;
      // },
      toggleShow(){
this.$router.push('/ManageContract')
      },
        logoutUser() {
      localStorage.removeItem('wtoken', 'type', 'roleId')
      alert(`Logout`)
      this.$router.push('/Login');
    },
        handleClick() {
      this.dropDown = !this.dropDown
    },
        postContracts() {
          const formData = new FormData()
          formData.append('start_date',this.model.contracts.start_date)
          formData.append('end_date',this.model.contracts.end_date)
          formData.append('term_and_conditions',this.model.contracts.term_and_conditions)
          formData.append('cFile',this.model.contracts.cFile)
          formData.append('proposals_id',this.model.contracts.proposals_id)
          formData.append('user_id',this.model.contracts.user_id)

            axios.post('http://127.0.0.1:8000/api/cindex',formData,{
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
          
            
                .then(res => {
                   this.postUpdate = true;
                   this.showContract = false
                    this.model.contracts = {
                      start_date:null,
                      end_date:null,
                      term_and_conditions:'',
                      cFile:''
                    }
                    
                    
                })
                .catch(error => {
                    console.log('Error contracts payment methtods', error.response.data);
                
                });
        },

        handleFile(event) {
      const cfile = event.target.files[0]
      if (cfile) {
        this.model.contracts.cFile = cfile
        console.log(this.model.contracts.cFile)
      }
    },
    }
};
</script>
