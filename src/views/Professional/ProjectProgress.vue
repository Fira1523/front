<template>
    <DefaultLayout>
      <Navbarpro />

        <div class="font-serif ml-56 " ref="scrollableDiv">
            <section class="relative block py-24 lg:pt-0 bg-gray-900 mt-64">
              <div class="container mx-auto px-4">
                <div class="flex flex-wrap justify-center  -mt-32">
                  <div class="w-full lg:w-3/4 px-4 -ml-40">
                    <div  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                      <div class="flex-auto p-5 lg:p-10">
                        <h4 class="text-2xl font-semibold">Report progress</h4>
                        <div class="relative w-full mb-3">
                          <label class="block uppercase text-gray-700 text-xs font-bold mb-2">message</label>
                          <textarea rows="4" cols="80" v-model="model.progress.message" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"></textarea>
                        </div>
                        <div class="relative w-full mb-3">
                          <label class="block uppercase text-gray-700 text-xs font-bold mb-2">upload any necessary file</label>
                          <input type="file" @change="handleFile" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                        </div>
                        <div>
                            <button @click="postContracts" class="bg-cyan-600 text-white active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-56 mt-4" type="button" >Upload</button>
                        </div>
                          
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
            <div v-if="dropDown" class="right-2 top-24 fixed  bg-white">
      <!-- <p class="-ml-5 text-black">{{ user.full_name }}</p> -->
      <router-link to="/ClientProfile" class="text-blue-500 -ml-5">Profile</router-link><br>
      <button class="text-red -ml-5" @click="logoutUser">Logout</button>
    </div>
    </DefaultLayout>

</template>

<script>
import axios from 'axios';
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Navbarpro from '@/components/Navbarpro.vue';

export default {
    data() {
        return {
           
            // contracts: [],
            dropDown: false,
       
        
            model: {
                progress: {
                    message:'',
                    tFile:'',
                    contract_id:null,
                    proffesional_id:null,
                   
                }
            },
        
        };
    },
    mounted() {

        // this.fetchContracts();
        const contractId = localStorage.getItem('contractId')
        this.model.progress.contract_id = contractId
        const userID = localStorage.getItem('user_id'); 
      
        this.model.progress.proffesional_id = userID
        console.log('userId', this.model.progress.proffesional_id)
        console.log('proposalID', this.model.progress.contract_id = contractId
        )

       // console.log('ProposalID', proID)
    },
    components: {
        DefaultLayout,
        Navbarpro
    },
    methods: {
      // setStatus(){
      //   this.client_is_finished = 1;
      // },
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
          formData.append('message',this.model.progress.message)
          formData.append('tFile',this.model.progress.tFile)
          formData.append('proffesional_id',this.model.progress.proffesional_id)
          formData.append('contract_id',this.model.progress.contract_id)
          
         

            axios.post('http://127.0.0.1:8000/api/progress',formData,{
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
          
            
                .then(res => {
                  this.$router.push('/WatchProposal')
                    // alert('Contract Submitted')
                    this.model.progress = {
                        message:'',

                      tFile:''
                    }
                    // this.$router.push('/professional-home')
                    
                })
                .catch(error => {
                    console.log('Error contracts payment methtods', error.response.data);
                
                });
        },

        handleFile(event) {
      const tFile = event.target.files[0]
      if (tFile) {
        this.model.progress.tFile = tFile
        console.log(this.model.progress.tFile)
      }
    },
    }
};
</script>
