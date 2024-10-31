import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
   
  },
  mutations: {
  
  },
  actions: {
    proFunction({commit}, addProfessional)
   {
        this.model.professionals.experiance = this.experiance;
        this.model.professionals.educational_status = this.educational_status;
        this.model.professionals.graduation_year = this.graduation_year;
        this.model.professionals.portfolio = this.portfolio;
        this.model.professionals.skill_lists_id = this.skill_lists_id;
        this.model.professionals.phone_number = this.phone_number;
        this.model.professionals.phone_number = this.phone_number;
        axios.post('http://127.0.0.1:8000/api/findex', this.model.professionals)
            .then(res => {
                console.log('payment method created successfully', res.data);
               
        this.experiance = null,
         this.educational_status ='';
        this.college = '';
        this.graduation_year ='';
        this.portfolio = '';
        this.skill_lists_id = '';
        this.phone_number = '';
        this.user_id = null
                this.fetchProfessionals();
            })
            .catch(error => {
                this.errorMessage = error.response.data.message;
            });
    },
  },
  getters: {
  
  }
});