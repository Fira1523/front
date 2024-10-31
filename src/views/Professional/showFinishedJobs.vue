<template>
 <DefaultLayout>
        <Navbarpro/>
  <!-- <div v-for="finishedJobs in finishedJob" :key="finishedJobs" class="flex mt-10">
    <div class="flex-1  bg-red mb-3">
        <div class="">
<p>Message:{{finishedJobs.message}}</p>
<a :href="finishedJobs.tFilePath">File</a>

        </div>

    </div>

  </div> -->
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
  
        <section class="relative py-20 -mt-4" v-else>
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div v-for="finishedJobs in finishedJob" :key="finishedJobs" class="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden" >
                <div class="flex justify-center">
                  <img alt="Project Image" class="max-w-full rounded-lg shadow-lg h-48 mt-4" 
                    src="\completed.png" />
                </div>
                <div class="p-4 flex-1"> 
                  <!-- <div class="text-cyan-600 p-3 inline-flex w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-400">
                    <i class="fas fa-rocket text-xl"></i>
                  </div> -->
                  <h3 class="block  text-black text-md font-bold mb-2"><span class="text-green-200 font-bold">Title:</span> {{finishedJobs.contract.proposal.project.title}}</h3>
                  <h3 class="block  text-black text-md font-bold mb-2"><span class="text-green-200 font-bold">Description:</span> {{finishedJobs.contract.proposal.project.description}}</h3>
                  <h3 class="block  text-black text-md font-bold mb-2"><span class="text-green-200 font-bold">Price:</span> {{finishedJobs.contract.proposal.project.price}}</h3>
                  
                  <!-- <p>{{finishedJobs.contract.user_id}} {{finishedJobs.contract.proposal.project.id}}</p> -->
                 
                <span class="text-green-200 font-bold ">Attached file:</span>  <a :href="finishedJobs.tFilePath" ><span class="underline text-blue-700">File</span> </a><br>
                <button  class="bg-white mt-5 text-black active:bg-gray-700 text-sm font-semibold px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button" @click="rate(finishedJobs.contract.user_id,finishedJobs.contract.proposal.project.id)">Rate Client</button>
                </div>
           
              </div>
            </div>
          </div>
        </section>
                  <div v-if="finishedJob == null || finishedJob == '' " class="-mt-20">
   <div class="ml-3" v-if="!isLoading ">
        <div class="text-sm text-green-600">
          <p class="text-2xl font-bold">No Terminated Jobs Found.⚠️ </p>
        </div>
      </div>
          </div>
   </DefaultLayout>
</template>

<script>
import axios from 'axios';
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Navbarpro from '@/components/Navbarpro.vue';

export default {
data(){
    return{
finishedJob:[],
token: '',
tFile:'',
clientID:null,
isLoading:false
    }
},
  components: {
        DefaultLayout,
        Navbarpro
    },
      mounted(){
        const token = localStorage.getItem('wtoken');

    if (token) {
      axios.defaults.withCredentials = true;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //   this.loadProfile()
    } else {
      this.$router.push({ name: 'Login' });
    }
    this.showFinsishedJob();
      },
  methods:{
    rate(id,pid){
localStorage.setItem('clientID',id)
localStorage.setItem('PID',pid)
this.$router.push('/RattingPro')
    },
showFinsishedJob(){
  this.isLoading = true
    axios.get('http://127.0.0.1:8000/api/showApprovedProjects').then((res)=>{
this.finishedJob = res.data.approvedProjects
this.tFile =  res.data.tFiles



this.filterProjects();
console.log('finishedJobs',this.finishedJob)
console.log('file',this.tFile)
this.isLoading = false
    })
    .catch((error) => {
          this.message = error.response.data.message
          this.isLoading =  false
        })
},
    //   filterProjects() {
    //   const userId = localStorage.getItem('user_id');
    //   this.finishedJob = this.finishedJob.filter(finishedJobs => finishedJobs.user_id === parseInt(userId));
    // },
    filterProjects() {
  const userId = localStorage.getItem('user_id');
  console.log('user',userId)
  const parsedUserId = parseInt(userId, 10);
  console.log('parsed',parsedUserId)


  if (isNaN(parsedUserId)) {
    console.error("Invalid user ID");
    return;
  }


  if (!Array.isArray(this.finishedJob)) {
    console.error("finishedJob is not an array:", this.finishedJob);
    return;
  }


  this.finishedJob = this.finishedJob.filter(finishedJob => finishedJob.proffesional_id === parsedUserId);
}
  },
}
</script>

<style>

</style>