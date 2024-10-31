<template>
  <DefaultLayout2>
 <Navbar/>
    <div class="container mx-auto px-4 py-10 mt-4" >
 <div v-if="proposal && !isLoading ">

 <h1 class="text-center mt-20 text-cyan-700 font-bold text-2xl" >Here 👇 are proposals related to your projects</h1>
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
        
      <div class="flex flex-wrap -mx-4" v-else>
        <div v-for="proposal in proposals" :key="proposal.id" class="w-full md:w-4/12 px-4 mb-10">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <!-- <img
              alt="Project Image"
              class="max-w-full h-48 object-cover rounded-t-lg"
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            /> -->
            <div class="p-6">
              <!-- <div class="text-cyan-600 p-3 inline-flex w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-400">
                <i class="fas fa-rocket text-xl"></i>
              </div> -->
              <h3 > <span class="text-md font-bold text-black">Professional Name:</span> <span >{{ proposal.user.full_name }}</span> </h3>
              <p class="mt-4 text-md text-black">
                <span class="font-semibold ">Time to finish:</span> {{ proposal.how_long }} days
              </p>
              <p class="mt-2 text-md text-black">
                <span class="font-semibold text-black">Cover Letter:</span> {{ proposal.cover_letter }}
              </p>
              <p class="mt-2 text-md text-gray-600">
                <span class="font-semibold text-black">Payment:</span> {{ proposal.propose_price }}
              </p>
               <a :href="proposal.pFile" class="text-blue-700 underline">Download File</a>
              <!-- <img :src="proposal.pFile" alt="image" class="h-24 w-auto mt-2 rounded-md border" /> -->
              <router-link
                @click="setProposalId(proposal.id)"
                to="/contract"
                class="mt-5 bg-gray-900 text-black ml-20 text-sm font-semibold px-6 py-3 rounded shadow hover:bg-gray-800 transition duration-200"
                type="button"
              >
                Make Deal 🤝
              </router-link>
            </div>
          </div>
        </div>
      </div>
          <div v-if="proposals == null || proposals == '' && !isLoading ">
   <div class="ml-3">
        <div class="text-sm text-green-600">
          <p class="text-2xl font-bold">No Proposals Found.⚠️ </p>
        </div>
      </div>
          </div>
    </div>
  </DefaultLayout2>
</template>
    
    <script>
    import axios from 'axios'
    import DefaultLayout2 from '@/layouts/DefaultLayout2.vue'
    import Navbar from '@/components/Navbar.vue';
    export default {
      components:{
     DefaultLayout2,
     Navbar
      },
      data() {
        return {
        
         isLoading:false,
          token: '',
          proposals: [],
          pFile:null
    
        }
      },
        mounted() {
          const token = localStorage.getItem('wtoken');
          
    
        if (token) {
          axios.defaults.withCredentials = true;
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
       
        } else {
          this.$router.push({ name: 'Login' });
        }
        this. getProposals()
    
    
    
    
      
      },
      methods:{
        
          getProposals() {
            this.isLoading = true
          axios.get('http://127.0.0.1:8000/api/proposals').then((res) => {
            // console.log('data',res.data.data.data.proposal.projects_id)
            this.proposals = res.data.data.proposal
            //  this.pFile = res.data.data[0].pFile
            //  console.log('pFile',this.pFile)
            console.log('proposal',this.proposals)
            this.isLoading = false
            // console.log(this.proposals)
            this.filterUserProposals()
         
    
          })
           .catch((error) => {
          console.error('Error fetching proposals:', error)
          this.errorMessage = 'Failed to load proposals.'
             this.isLoading =  false
        })
        },
           filterUserProposals() {
          const ProposalId = localStorage.getItem('selectedProjectId');
          console.log('project',ProposalId)
          this.proposals = this.proposals.filter((proposal) => proposal.projects_id === parseInt(ProposalId));
        },
        setProposalId(id){
            localStorage.setItem('proposalsID',id)
    
        }
      }
    
    
    }
    </script>
    
    <style>
    
    </style>