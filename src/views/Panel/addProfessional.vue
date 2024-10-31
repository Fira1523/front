<template>
  <div class="text-center font-serif text-2xl text-cyan-500 font-semibold mb-3 md:ml-32 lg:-ml-5">Fill out additional details as a professional</div>
  <div class="lg:ml-80 ml-12 md:ml-40 md:w-auto md:mr-20 md:pl-32 w-80 lg:w-auto shadow-md bg-gray-100 lg:mr-96 pt-10 rounded-md lg:px-12 lg:pb-10 px-5 mr-7">
    <div class=" lg:ml-20">
      <div class="flex justify-between">
        <div>
          <label for="" class="font-serif  text-md">Experience:</label><br>
          <input type="number" name="experience" v-model="model.professional.experiance" class="border-2 mt-3 mb-3 lg:w-80 w-52 border-gray-200 focus:outline-none h-8 rounded-md lg:mr-10 bg-white" required><br>
        </div>
        <div>
          <label for="" class="font-serif text-md">Certificate:</label><br>
          <input type="url" name="certificate" class="border-2 mt-3 lg:w-80 w-52 mb-3 border-gray-200 focus:outline-none h-8 rounded-md lg:mr-10 bg-white" required>
        </div>
      </div>
      <div class="flex justify-between">
        <div>
          <label for="" class="font-serif text-md">Educational status:</label><br>
          <input type="text" name="educational_status" required v-model="model.professional.educational_status" class="border-2 mt-3 w-52 lg:w-80 border-gray-200 mb-3 focus:outline-none h-8 rounded-md lg:mr-10 bg-white"><br>
        </div>
        <div>
          <label for="" class="font-serif text-md">College:</label><br>
          <input type="text" name="college" v-model="model.professional.college" class="border-2 mt-3 lg:w-80 w-52 border-gray-200 mb-3 focus:outline-none h-8 rounded-md lg:mr-10 bg-white" ><br>
        </div>
      </div>
      <div class="flex justify-between">
        <div>
          <label for="" class="font-serif text-md">Graduation year:</label><br>
          <input type="text" name="graduation_year" required v-model="model.professional.graduation_year" class="border-2 mt-3 w-52 lg:w-80 border-gray-200 mb-3 focus:outline-none h-8 rounded-md lg:mr-10 bg-white" >
        </div>
        <div>
          <label for="" class="font-serif text-md">Portfolio:</label><br>
          <input type="ur;" name="portfolio" required v-model="model.professional.portfolio" class="border-2 mt-3 w-52 lg:w-80 border-gray-200 mb-3 focus:outline-none h-8 rounded-md lg:mr-10 bg-white" ><br>
        </div>
      </div>
      <div class="flex justify-between">
          <div>
            <label for="" class="font-serif text-md">Skills:</label><br>
            <select name="" required v-model="model.professional.skill_lists_id" multiple class="border-2 mt-3 w-52 lg:w-80 border-gray-200 mb-3 focus:outline-none h-20 rounded-md lg:mr-10 bg-white" >
              <option value="">Select Skills:</option>
              <option v-for="skill in skills" :key="skill.id" :value="skill.id">{{ skill.skill_name }}</option>
            </select>
        </div>
      </div>
    </div>
    <p v-if="errorMessage" class="text-red-500"> {{ errorMessage }}</p>
    <button class="btn bg-cyan-700 text-white rounded-md px-8 py-2 font-serif ml-64"  @click="registerPro">Create Account</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      skills: '',
      skillId: '',
      model: {
        professional: {
            experiance: '',
            certificate: [],
            educational_status: '',
            college: '',
            graduation_year: '',
            portfolio: '',
            skill_lists_id: [],
        }
      },
 
    }
  },
  mounted(){
        axios.get('http://127.0.0.1:8000/api/skills')
        .then((res)=>{
        console.log('response data', res.data)
        if(res.data && res.data[0] && Array.isArray(res.data[0])){
        this.skills = res.data[0];
        this.skillId = this.skills.map(skill=>skill.id);
        }else {
        console.error('Invalid response data structure:', res.data);
        }
        })
        .catch((error)=>{
        console.error('error featching roles:', error);
        });
      //this.removeId();
      const user_id = localStorage.getItem('user_id');
        
       this.model.professional.user_id = user_id
      console.log('user_id',this.model.professional.user_id );
      

        },

  methods: {
    removeId(){
       localStorage.removeItem('user_id');
    },
    registerPro() {
      axios.post('http://127.0.0.1:8000/api/findex', this.model.professional)
        .then((res) => {
          
          console.log(res.data)
          this.model.professional = {
            experiance: '',
            certificate: [],
            educational_status: '',
            college: '',
            graduation_year: '',
            portfolio: '',
            skill_lists_id: [],
          
          }
           
          alert('Professional registered successfully')
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
    // this.$router.push({name: 'Login'});
    }
  },
        }
</script>
<style>
</style>