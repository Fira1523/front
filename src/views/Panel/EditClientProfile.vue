
<template>
<DefaultLayout2>
  <SubNav3 />
<BreadcrumbDefault pageTitle="Client" />
  <header>
        <div class="flex justify-between shadow-md pb-2 pt-2 pl-2 pr-2 -ml-5 -mr-5">
        <router-link to="#" class=" text-3xl text-cyan-600 font-semibold">Workdiator</router-link>
    <h1></h1>
      <ficon :icon="['fas', 'circle-user']" class=" text-4xl" @click="handleClick"/>
    </div>
  </header>
  <div class="text-center font-serif text-3xl text-gray-700 mt-10 font-semibold mb-1 text-cyan-600">Update Your Information</div>
    <div class="-ml-20 shadow-cyan-800 drop-shadow-md bg-gray-100  pt-10  px-12 pb-10 w-2/3 ">
                <div class="-mt-1 mb-5 ml-40 shadow-cyan-800 drop-shadow-md  pt-10 w-full h-96 rounded-md px-12 pb-10 ">
                <div class="flex flex-row">
       <div>
        <label  class="text-md mb-20 text-black">Full Name:</label><br>
        <input type="text" name="full_name" v-model="model.user.full_name" class=" mb-3 w-80  focus:outline-none h-10 rounded-md mr-10 mt-3"><br>
        
      </div>
      <div>
        <label  class="text-md mb-20 text-black">Email:</label><br>
        <input type="email" name="email" v-model="model.user.email" class=" mb-3 w-80  focus:outline-none h-10 rounded-md mr-10 mt-3">
      </div>
      </div>
       <div class="flex flex-row">
      <div>
        <label class="text-md mb-20 text-black">Password:</label><br>
        <input type="password" name="password" v-model="model.user.password" class=" mb-3 w-80  focus:outline-none h-10 rounded-md mr-10 mt-3"><br>
      </div>
      <div>
        <label class="text-md mb-20 text-black">Role:</label><br>
        <select name="role" v-model="model.user.role_id" class=" mb-3 w-80  focus:outline-none h-10 rounded-md mr-10 mt-3">
          <option v-for="role in roles" :key="role.id" :value="role.id" >{{ role.name }}</option>
        </select>
      </div>
     </div>
      <div class="flex flex-row">
      <div>
        <label class="text-md mb-20 text-black">Photo:</label><br>
        <input type="file" @change="handlephoto"  name="photo" class=" mb-3 w-80  focus:outline-none h-10 rounded-md mr-10 mt-3"><br>
    
      </div>
      <div>
        <label  class="text-md mb-20 text-black">Country:</label><br>
        <select name="country" v-model="model.user.country_id" class=" mb-3 w-80  focus:outline-none h-10 rounded-md mr-10 mt-3">
          <option value="">Select country:</option>
          <option v-for="country in countries" :key="country.id" :value="country.id"  class=" mb-3 w-80  focus:outline-none h-10 rounded-md mr-10 mt-3">
            {{ country.name }}
          </option>
        </select>
      </div>
     </div>
      <div class="flex flex-row">
      <div>
        <label class="text-md mb-20 text-black">Phone number:</label><br>
        <input type="text" name="phone_number" v-model="model.user.phone_number" class=" mb-3 w-80  focus:outline-none h-10 rounded-md mr-10 mt-3">
      </div>
      <div>
        <label class="text-md mb-20 text-black">Address:</label><br>
        <input type="text" name="address" v-model="model.user.address" class=" mb-3 w-80  focus:outline-none h-10 rounded-md mr-10 mt-3"><br>
      </div>
        
     </div>

    <button @click="editUser"
                        class="btn bg-teal-700 py-1 px-4 rounded-md text-white">update</button>
                    <button @click="dicardEdit"
                        class="btn bg-gray-400 rounded-md py-1 px-4 ml-2 text-white">cancle</button>
                </div>

            </div>
      
       
        <!-- end of  -->



  </DefaultLayout2>
</template>

<script>
import axios from 'axios';
import DefaultLayout2 from '@/layouts/DefaultLayout2.vue'
import SubNav3 from '@/components/SubNav3.vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'

export default {
    components:{
      BreadcrumbDefault,
      DefaultLayout2,
      SubNav3
      },
    data() {
        return {
            showcreateuser: false,
            showedit: false,
            user: [],
            userId: '',
            isLoading : false,
            errorMessage:'',
          //  payment_name: '',
            // isLoading:true,
          model:{
        user:{
          full_name:'',
          email: '',
          password: '',
          role_id: '',
          photo: '',
          country_id: '',
          phone_number: '',
          address: '',
       
        }
      },
         countries: [],
      roles: [],
      countryIds: [],
      roleIds: [],
            pageText: 'Users',
        };
    },
    mounted() {
        this.fetchCountries();
        this.fetchRoles();
        // this.getUser();
        this.getUserData(this.$route.params.id)
         this.userId = this.$route.params.id
         console.log('id',this.$route.params.id)
        //  this. startEdit(this.$route.params.id)
  
    },
    // components: {
    //     DefaultLayout,
    //     BreadcrumbDefault
    // },
    methods: {
      
      getUserData(userID){
axios.get(`http://127.0.0.1:8000/api/users/edit/${userID}`).then(res=>{
console.log('users',res.data)
this.model.user = res.data.data
// this.model.user.full_name = res.data.data.full_name
// this.model.user.email = res.data.data.email

}).catch(error => {
     
        this.errorMessage = error.response ? error.response.data.message : 'An error occurred. Please try again.';
        console.error('Error creating user:', this.errorMessage);
        if(error.res.status == 404){
            this.errorMessage = error.response.data.message
        }
    });
      },
        fetchCountries() {
          this.isLoading =  true,
      axios.get('http://127.0.0.1:8000/api/country')
      
        .then((res) => {
          console.log('Response data:', res.data);
          if (res.data && res.data[0] && Array.isArray(res.data[0])) {
            this.countries = res.data[0];
            this.countryIds = this.countries.map(country => country.id);
          } else {
            console.error('Invalid response data structure:', res.data);
          }
        })
        .catch((error) => {
          console.error('Error fetching countries:', error);
           this.isLoading =  false
        });
    },
      fetchRoles() {
      axios.get('http://127.0.0.1:8000/api/role')
        .then((res) => {
          console.log('Response data:', res.data);
          if (res.data && res.data[0] && Array.isArray(res.data[0])) {
            this.roles = res.data[0];
            this.roleIds = this.roles.map(role => role.id);
          } else {
            console.error('Invalid response data structure:', res.data);
          }
        })
        .catch((error) => {
          console.error('Error fetching roles:', error);
        });
    },
   deleteUser(userId){ 
if(confirm('Are You sure, you want to delete this data ?')){
    axios.delete(`http://127.0.0.1:8000/api/users/${userId}`).then((res)=>{
alert(res.data.message)
this.getUser()
    }).catch(function (error){
if(error.response){
    if(error.response.status == 404){
        alert(error.response.data.data.message)
    }
}
    }) 
}
    },

createUser() {
            this.showcreateuser = !this.showcreateuser;
        },
          startEdit(users) {
            this.showedit = true;
            this.userId = users.id;
            this.full_name = users.full_name;
            this.email = users.email;
            this.password = users.password;
            this.role_id = users.role_id;
            this.photo = users.photo;
            this.country_id = users.country_id;
            this.phone_number = users.phone_number;
            this.address = users.address;
            const div = this.$refs.scrollableDiv;
            div.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        dicardEdit() {
            this.model.user.full_name = '',
             this.model.user.email ='';
            this.model.user.password = '';
            this.model.user.role_id ='';
            this.model.user.country_id = '';
            this.model.user.photo = '';
            this.model.user.phone_number = '';
            this.model.user.address = '';
            this.showedit = false
            this.$router.push('/ClientProfile')
        },
        discardCreate() {
            this.showcreateuser = false
        },
        editUser() {
      // alert(hello)
             this.errorMessage = null;
            //  const updatedMethod = { 
            //   full_name: this.full_name ,
            //   email: this.email, 
            //   password: this.password, 
            //   role_id: this.role_id, 
            //   photo: this.photo, 
            //   country_id: this.country_id, 
            //   phone_number: this.phone_number,  
            //   address: this.address, 
            //   };

            axios.put(`http://127.0.0.1:8000/api/users/edit/${this.userId}`, this.model.user)
                .then(res => {
                    console.log('User updated successfully', res.data);
                    alert(`User updated successfully`)
              this.model.user.full_name = '',
             this.model.user.email ='';
            this.model.user.password = '';
            this.model.user.role_id ='';
            this.model.user.country_id = '';
            this.model.user.photo = '';
            this.model.user.phone_number = '';
            this.model.user.address = '';
             this.$router.push('/ClientProfile')
            //         this.showedit = false;
            //         this.getUser();
                }).catch((error => {
                    this.errorMessage = error.response.data.message;
                }))},
         handlephoto(event){
    const file = event.target.files[0];
      if (file) {
         this.model.user.photo = event.target.files[0];
         console.log(this.model.user.photo)
      }
   },
       getUser(){
        axios.get('http://127.0.0.1:8000/api/users').then((res)=>{
         this.user = res.data.data
         console.log(this.user)
          this.isLoading = false
        }) .catch(error => {
                    console.log('Error fetching payment methtods', error.response.data);
                     this.isLoading = false
                     alert('API not found')
                });
    },
  addUser() {
    
        if(this.role_id == 2){
          // alert(professiional)
       this.$router.push('/AddProfessional');
      }
    const formData = new FormData();
    formData.append('photo', this.photo);
    formData.append('full_name', this.full_name);
    formData.append('email', this.email);
    formData.append('password', this.password);
    formData.append('role_id', this.role_id);
    formData.append('country_id', this.country_id);
    formData.append('phone_number', this.phone_number);
    formData.append('address', this.address);

axios.post('http://127.0.0.1:8000/api/users', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(res => {
      console.log('User created successfully', res.data);
      console.log('user id from request', res.data.user_id)
      console.log('full name',res.data.full_name)
    localStorage.setItem('user_id',  res.data.user_id)
     
        this.full_name = '';
        this.email = '';
        this.password = '';
        this.role_id = '';
        this.country_id = '';
        this.phone_number = '';
        this.photo = null; 
        this.address = '';

        this.getUser();
    })
    .catch(error => {
     
        this.errorMessage = error.response ? error.response.data.message : 'An error occurred. Please try again.';
        console.error('Error creating user:', this.errorMessage);
    });
},        
 handlephoto(event){
    const file = event.target.files[0];
      if (file) {
         this.photo = event.target.files[0];
     
         console.log('photo',this.model.user.photo)
      }
   },
       
    }
};
</script>