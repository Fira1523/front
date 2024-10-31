
<template>
  <DefaultLayout2>
     <Navbar/>
<div class="" v-if="showPayment">
  <img src="\telemoneytrtansfer.jpg" class="mt-10 ml-44 h-80 w-2/3">
  <div class="bg-cyan-900 h-32 ml-44 mr-54  w-2/3">
    <button class=" ml-80 mt-10 px-16 py-2 rounded-md bg-white text-black" @click="startPayment" v-if="!hideShow">Pay</button>
  </div>
   
    <div v-if="showPaymentForm" class="mt-5 ">
        <p class="text-center -ml-10 mt-2 ">You are about to pay - <span class="font-bold text-cyan-600 mt-5">{{ payment.amount }}</span> </p>
        <div class="ml-20">
          <input class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-96 ml-80 mt-3" placeholder="enter your password to verify" v-model="password" type="password"/> 
        </div>
        

        <p class="text-center text-cyan-600 mt-3"> {{ (payment.service_fee) }} will be deducted when reaching the professional</p>
        <div class="ml-20 mt-2">
          <div class="ml-96 mt-6 mb-6">
          <p class="text-green-800">{{ successMessage }}</p>
          <p class="text-red">{{ errorMessage }}</p>
          </div>
   
          <button class="bg-cyan-600 text-white active:bg-gray-700 text-sm font-semibold px-20 py-3  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-96"
            type="button"  @click="pay" v-if="hideShow">pay</button>
        </div>



      </div>
</div>
   <div v-if="isLoading" class="ml-20 mt-5">
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
   <div class="flex flex-wrap justify-between mx-1 py-10 pr-28">
  <div
    v-for="progres in progress"
    :key="progres.id"
    v-if="showProgress"
    class="w-full md:w-6/12 lg:w-5/12 mb-6 px-4"  
  >
    <div class="flex flex-row -ml-5 bg-white w-125 p-5 pr-5 rounded-md h-100">
      <div class=" md:w-4/12">
        <img
          alt="Project Image"
          class="max-w-60 rounded-lg shadow-lg h-72"
          src="/progress.jpg"
        />
      </div>
      <div class="w-full md:w-8/12 p-6 flex flex-col justify-between ml-20 -mt-8">
        <div class="w-56">
          <!-- <div class="text-cyan-600 p-3 inline-flex w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-400">
            <i class="fas fa-rocket text-xl"></i>
          </div> -->
          <p class="mt-4 text-lg leading-relaxed text-gray-600">
            <span class="font-semibold">Professional Name:</span> <span class="text-black font-semibold">{{ progres.contract.proposal.user.full_name }}</span> 
          </p>
          <h3 class=" font-semibold">Message: </h3> <span class="text-black font-semibold">{{ progres.message }}</span> 
          <p class="mt-4 text-lg leading-relaxed text-gray-600">
            <a :href="progres.tFile" class="text-blue-700 underline">Download File</a>
          </p>

          <div v-if="progres.contract.pro_is_finished == null">
            <button
              @click="agreeTermination(2, progres.contract.id, 1); finalPayment2(progres.proffesional_id)"
              class="bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              Approve
            </button>
            <button
              @click="agreeTermination(3, progres.id, 2)"
              class="bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              Reject
            </button>
          </div>
          <div v-if="progres.contract.pro_is_finished == 1 || progres.contract.pro_is_finished == 2">
            <p class="mt-2 text-green-300">The project is approved, please finish the payment.</p>
            <button
              @click="finalPayment(progres.proffesional_id)"
              class="bg-cyan-600 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-white hover:shadow-lg outline-none focus:outline-none mr-1 ml-5 mb-1 mt-3"
              type="button"
            >
              Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
               <div class="-mt-10">
   <div class="ml-3" v-if="!isLoading ">
        <div class="text-sm text-green-600" v-if="progress == null || progress == '' " >
          <p class="text-2xl font-bold">No Projects Found.⚠️ </p>
        </div>
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
  components: {
    DefaultLayout2,
    Navbar
  },
  data() {
    return {
       isLoading:false,
      token: '',
      progress: [],
      contractID: null,
      isApproved: null,
      isFinished: null,
      showPaymentForm: false,
      password: null,
      payment: {},
      successMessage: null,
      errorMessage: null,
      showPayment:false,
      showProgress:true,
      hideShow:false,
      tFile:null,
      contracts:null
    }
  },
  mounted() {
    this.contractID = this.$route.params.contract_id
    this.projectID = this.$route.params.projects_id
    console.log('contractID', this.contractID)
    const token = localStorage.getItem('wtoken')
    const userID = localStorage.getItem('user_id')
    console.log('userrr', userID)
    this.project_id = this.$route.params.projects_id
    console.log('project_id',this.project_id )
    localStorage.setItem('projects_id',this.project_id)


if (token) {
      axios.defaults.withCredentials = true
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
      this.$router.push({ name: 'Login' })
    }
    this.getProgress()
  },
  methods: {
    finalPayment2(id){
      localStorage.setItem('taker_id',id)
          console.log('taker_id',id)
    },
    finalPayment(id){
         this.showPayment = !this.showPayment
          this.showProgress = !this.showProgress
        
    },
       fetchContracts() {
      axios.get(`http://127.0.0.1:8000/api/cindex?proposals_id=${this.proposalId}`)
        .then((res) => {

          this.contracts = res.data.data[0]
          this.start_date = res.data.data[0].start_date
          this.acceptance_status = res.data.data[0].acceptance_status
          this.end_date = res.data.data[0].end_date
          this.term_and_conditions = res.data.data[0].term_and_conditions
          this.cFile = res.data.data[0].cFile
          this.id = res.data.data[0].id
         
          // this.userPhoto = res.data.data.photo
          // console.log('contracts:',  this.pro_id);
          if (res.data.data.length === 0) {
            console.log('No contracts found for this proposal ID');
          }
        })
        .catch((error) => {
          console.error('Error fetching contracts:', error);
        });

      console.log('proposal', this.proposalId);
    },
    passProfessionalID(id,uID){
localStorage.setItem('professionalsID',id)
localStorage.setItem('userrID',uID)


this.$router.push('/Ratting')
    },
    pay() {
      this.successMessage = null
      this.errorMessage = null
      axios.post('http://127.0.0.1:8000/api/pay/' + this.contractID, {
        'password': this.password
        
      }).then((response) => {
        this.successMessage = response.data.message
        this.$router.push('/Ratting')
      }).catch(error => {
        this.errorMessage = error.response.data.message
      })
    },
    startPayment() {
      this.showPaymentForm = true
      this.password = null
      this.fetchPaymentInformation()
      this.hideShow = !this.hideShow
    },
    // getProgress() {
    //    this.isLoading = true
    //   axios.get('http://127.0.0.1:8000/api/progress').then((res) => {
    //     // console.log(res.data)
    //     this.progress = res.data.data.progress
    //     this.tFile = res.data.data.tFile
    //     console.log('progress',this.progress)
    //     console.log('File',this.tFile)
    //     // console.log('file',res.data.data.progress.tFile)
    //      //this.pro_id = res.data.data[0].proffesional_id
    //     // console.log('dataaaaa',  this.pro_id)
    //     this.isLoading = false
    //     // localStorage.setItem('professionalsID',)
    //    // console.log('progress',res.data.data[1].contract.acceptance_status)
    //     this.filterUserContract();
    //   })
    //      .catch((error) => {
    //       console.error('Error fetching progress data:', error)
    //       // this.errorMessage = 'Failed to load progress.'
    //          this.isLoading =  false
    //     })
    // },
//     getProgress() {
//     this.isLoading = true;
//     axios.get('http://127.0.0.1:8000/api/progress')
//         .then((res) => {
//             // Check the structure of the response
//             this.progress = res.data.data.progress; // Updated based on your provided structure
//             console.log('Progress:', this.progress);

//             // Example: Extracting contract IDs
//             this.progress.forEach((item) => {
//               this.contracts = item.contract.id
//                 console.log('Contract ID:', this.contracts); // Accessing contract ID
//             });

//             this.isLoading = false;
//             this.filterUserContract(); // Call your filtering function here if needed
//         })
//         .catch((error) => {
//             console.error('Error fetching progress data:', error);
//             this.isLoading = false; // Ensure loading state is reset on error
//         });
// },
getProgress() {
    this.isLoading = true;
    axios.get('http://127.0.0.1:8000/api/progress')
        .then((res) => {
       
            this.progress = res.data.data.progress; 
            console.log('Progress:', this.progress);

          
            this.contracts = [];
            
            
            this.progress.forEach((item) => {
                this.contracts.push(item.contract.id); 
                console.log('Contract ID:', item.contract.id); 
            });

            this.isLoading = false;
            this.filterUserContract(); 
        })
        .catch((error) => {
            console.error('Error fetching progress data:', error);
            this.isLoading = false; 
        });
},
    fetchPaymentInformation() {
      axios.get('http://127.0.0.1:8000/api/get-payment-info/' + this.contractID).then((res) => {
        this.payment = res.data.data
      })
    },
    // filterUserContract() {
    //   this.progress = this.progress.filter((progres) => progres.contracts.id === parseInt(this.contractID)
      
    //   )
    // },
    filterUserContract() {
 
    if (this.contractID) {
        this.progress = this.progress.filter((progres) => progres.contract.id === parseInt(this.contractID));
    } else {
        console.warn('No contract ID provided for filtering.');
    }
},

    agreeTermination(value, id, value2) {
      this.isApproved = value
      this.isFinished = value2
      console.log('idddddd', id)
      axios
        .post(
          'http://127.0.0.1:8000/api/contractTermination?is_approved=' +
            this.isApproved +
            '&contract_id=' +
            id +
            '&is_finished=' +
            this.isFinished
        )

        .then((res) => {
          console.log('make deal', res.data)
     
        })
      // this.$router.push('/Post')
           this.showPayment = !this.showPayment
          this.showProgress = !this.showProgress
    }
  }
}
</script>
    
