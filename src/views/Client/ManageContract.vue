<template>
  <DefaultLayout2>
     <Navbar/>
     <div v-if="contracts && !isLoading" class="">

    <h1 class="block uppercase text-gray-600 text-xl font-bold mb-8 mt-10 text-center">Manage Your Contracts</h1>
 </div>

       <div v-if="isLoading" class="ml-20 mt-10">
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
        <div class="top-24 bottom-0 left-0  w-full absolute pointer-events-none overflow-hidden" style="height: 70px;">
            <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        <div class="container mx-auto px-4 py-10">
      <div class="flex flex-wrap -mx-4">
        <div v-for="contract in contracts" :key="contract.id" class="w-full md:w-4/12 px-4 mb-10">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
            <div class="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">
                  <span class="font-bold">Start Date:</span> {{ contract.start_date }}
                </h3>
                <p class="text-md text-gray-700 mb-2">
                  <span class="font-bold">End Date:</span> {{ contract.end_date }} 
                </p>
                <p class="text-md text-gray-700 mb-4">
                  <span class="font-bold">Term and conditions</span> {{ contract.term_and_conditions }}
                </p>
              </div>
              <router-link
                :to="{ name: 'ManageProgress', params: { contract_id: contract.id,projects_id: contract.proposal.projects_id}}"
                class="w-full bg-blue-600 text-white text-center text-sm font-semibold px-6 py-3 rounded shadow hover:bg-blue-500 transition duration-200"
                type="button"
              >
                Watch Progress
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
          <div v-if="contracts == null || contracts == '' && !isLoading " class="mt-5">
   <div class="ml-3">
        <div class="text-sm text-green-600">
          <p class="text-2xl font-bold">No Contracts Found.⚠️ </p>
        </div>
      </div>
          </div>
  
  </DefaultLayout2>
</template>
    <script>
    import axios from 'axios'
    import Navbar from '@/components/Navbar.vue';
    import DefaultLayout2 from '@/layouts/DefaultLayout2.vue'
    export default {
      components:{
     DefaultLayout2,
     Navbar,
    
      },
      data() {
        return {
        
         isLoading:false,
          token: '',
          contracts: [],
    
        }
      },
        mounted() {
          const token = localStorage.getItem('wtoken');
          const userID = localStorage.getItem('user_id'); 
          console.log('userrr',userID);
          
    
        if (token) {
          axios.defaults.withCredentials = true;
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
       
        } else {
          this.$router.push({ name: 'Login' });
        }
        this. getProposals()
    
    
    
    
      
      },
      methods:{
        // setContractId(){


// },
          getProposals() {
            this.isLoading = true
          axios.get('http://127.0.0.1:8000/api/showContract').then((res) => {
            console.log(res.data)
            this.contracts = res.data.data
             this.isLoading = false
    
            // console.log('contractsss',this.contracts)
            
            this.filterUserContract()
         
    
          })
           .catch((error) => {
          console.error('Error fetching progress data:', error)
          this.errorMessage = 'Failed to load progress.'
             this.isLoading =  false
        })
        },
        filterUserContract() {
        const userId = localStorage.getItem('user_id');
        this.contracts = this.contracts.filter(contract => contract.user_id === parseInt(userId));
      },
    
      }
    
    
    }
    </script>
    
    <style>
    
    </style>