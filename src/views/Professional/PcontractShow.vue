<template>
  <DefaultLayout>

    <Navbarpro />

    <div v-if="registrationComplete"
      class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
      <div class="p-6 border-l-4 border-green-500 -6 rounded-r-xl bg-green-50">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="ml-3">
            <div class="text-sm text-green-600">
              <p>Your have Successfully agreed to the contract. excited?😊 <span
                  @click="$router.push({ name: 'WatchProposal' })"
                  class=" ml-6 bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button">
                  Back</span> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!registrationComplete" class="container mx-auto px-4 py-10 shadow-sm mt-20">
      <div class="flex flex-wrap">
        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img alt="Project Image" class="max-w-full rounded-lg shadow-lg h-96 ml-20" src="\handshaking.jpg" />
        </div>
        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">
            <div class="text-cyan-600 p-3 inline-flex w-16 h-16 mb-6 shadow-lg rounded-full ml-8 bg-blue-400">
              <i class="fas fa-rocket text-xl"></i>
            </div>
            <p class="block uppercase text-gray-700  font-bold mb-6 text-sm ">start date: {{ start_date }} </p>
            <p class="block uppercase text-gray-700  font-bold mb-6 text-sm"><span class="font-semibold"></span>end
              date: {{ end_date }}</p>
            <p class="block uppercase text-gray-700  font-bold mb-6 text-sm"> <span class="font-semibold"></span>term
              and condition: {{ term_and_conditions }}</p>
            <!-- <img :src="userPhoto" alt=""> -->
            <!-- <p class="mt-4 text-lg leading-relaxed text-gray-600"> <span class="font-semibold"></span>file:{{ cFile }}</p> -->
            <div v-if="acceptance_status">
              <div v-show="acceptance_status == null || acceptance_status == 1"> <button @click="agreeContract(2, id)"
                  class="bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-10"
                  type="button">
                  Agree🤝
                </button>
                <button @click="agreeContract(3, id)"
                  class="bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button">
                  Denied
                </button>
              </div>
              <div v-show=" acceptance_status == 2">
                <router-link @click="setContractId(id)" to="/ProjectProgress"
                  class="bg-gray-900 active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow text-black hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button">
                  Report progress
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </DefaultLayout>
</template>

<script>
import axios from 'axios'
import Navbarpro from '@/components/Navbarpro.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue'
export default {
  components: {
    DefaultLayout,
    Navbarpro
  },
  data() {
    return {
      token: '',
      contracts: [],
      start_date: null,
      end_date: null,
      term_and_conditions: '',
      acceptance_status: null,
      cFile: '',
      proposalId: null,
      pro_is_finished: 1,
      id: null,
      isAgree: null,
      registrationComplete: false,
      userPhoto: '',
      showButton: true,


    }
  },
  mounted() {

    this.proposalId = this.$route.params.proposal_id
    const token = localStorage.getItem('wtoken');
    console.log('proposal_id', this.proposalId)

    if (token) {
      axios.defaults.withCredentials = true;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    } else {
      this.$router.push({ name: 'Login' });
    }
    this.fetchContracts()


  },
  methods: {
    showSuccess() {
      this.registrationComplete = true;
    },
    hideButton() {
      this.showButton = false;
    },
    setContractId(id) {
      const contId = localStorage.setItem('contractId', id)
      console.log('contractId', contractId)
    },
    agreeContract(value, id) {
      if (confirm('Are you sure?')) {
        this.isAgree = value

        axios.post('http://127.0.0.1:8000/api/contract-agreement?is_agree=' + this.isAgree + '&contract_id=' + id)
          .then((res) => {
            console.log('make deal', res.data)
            this.hideButton()
            this.showSuccess()

          })
      }

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
          console.log('contracts:', this.contracts);
          if (res.data.data.length === 0) {
            console.log('No contracts found for this proposal ID');
          }
        })
        .catch((error) => {
          console.error('Error fetching contracts:', error);
        });

      console.log('proposal', this.proposalId);
    }

  }


}
</script>
