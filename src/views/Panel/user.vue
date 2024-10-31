<template>
    <DefaultLayout3>
      <SubNav3 />
        <div class="font-serif ml-56" ref="scrollableDiv">
            <div v-if="showcreateuser" class="-mt-1 mb-5 -ml-40 shadow-cyan-800 drop-shadow-md bg-white   pt-10 w-full h-96 rounded-md px-12 pb-10 ">
                <div  class="shadow-md shadow-gray-400 w-72 h-32 ml-20">
                    <div class="flex flex-row">
        <div>
        <label  class="font-serif text-md">Full Name:</label><br>
        <input type="text" name="full_name" v-model="full_name" class="border-2 mb-3 w-80 border-gray-200 focus:outline-none h-8 rounded-md mr-10"><br>
        
      </div>
      <div>
        <label  class="font-serif text-md">Email:</label><br>
        <input type="email" name="email" v-model="email" class="border-2 w-80 mb-3 border-gray-200 focus:outline-none h-8 rounded-md mr-10">
      </div>
      </div>
     <div class="flex flex-row">
      <div>
        <label class="font-serif text-md">Password:</label><br>
        <input type="password" name="password" v-model="password" class="border-2 w-80 border-gray-200 mb-3 focus:outline-none h-8 rounded-md mr-10"><br>
      </div>
      <div>
        <label class="font-serif text-md">Role:</label><br>
        <select name="role" v-model="role_id" class="border-2 w-80 border-gray-200 mb-3 focus:outline-none h-8 rounded-md mr-10">
          <option v-for="role in roles" :key="role.id" :value="role.id" >{{ role.name }}</option>
        </select>
      </div>
     </div>
     <div class="flex flex-row">
      <div>
        <label class="font-serif text-md">Photo:</label><br>
        <input type="file" @change="handlephoto"  name="photo" class="border-2 w-80 border-gray-200 mb-3 focus:outline-none h-8 rounded-md mr-10"><br>
    
      </div>
      <div>
        <label  class="font-serif text-md">Country:</label><br>
        <select name="country" v-model="country_id" class="border-2 w-80 border-gray-200 mb-3 focus:outline-none h-8 rounded-md mr-10">
          <option value="">Select country:</option>
          <option v-for="country in countries" :key="country.id" :value="country.id"  class="border-2  bg-gray-100 rounded-lg mt-2">
            {{ country.name }}
          </option>
        </select>
      </div>
     </div>
     <div class="flex flex-row">
      <div>
        <label class="font-serif text-md">Phone number:</label><br>
        <input type="text" name="phone_number" v-model="phone_number" class="border-2 w-80 border-gray-200 mb-3 focus:outline-none h-8 rounded-md mr-10">
      </div>
      <div>
        <label class="font-serif text-md">Address:</label><br>
        <input type="text" name="address" v-model="address" class="border-2 w-80 border-gray-200 mb-3 focus:outline-none h-8 rounded-md mr-10"><br>
      </div>
        
     </div>

                    <button @click="addUser" class="btn bg-teal-700 py-1 px-4 rounded-md text-white">Add</button>
                    <button @click="discardCreate"
                        class="btn bg-gray-400 rounded-md py-1 px-4 ml-2 text-black">cancle</button>
                </div>
                
            </div>
             <button @click="createUser" class="btn bg-cyan-800 text-white py-2 px-8 -ml-56 rounded-md">
                    Add User
                </button>
            <div class="mb-2 ml-32">
                <div v-if="showedit"  class="-mt-1 mb-5 -ml-40 shadow-cyan-800 drop-shadow-md bg-white   pt-10 w-full h-96 rounded-md px-12 pb-10 ">
                      <div class="flex flex-row">
        <div>
        <label  class="font-serif text-md">Full Name:</label><br>
        <input type="text" name="full_name" v-model="full_name" class="border-2 mb-3 w-80 border-gray-200 focus:outline-none h-8 rounded-md mr-10"><br>
        
      </div>
      <div>
        <label  class="font-serif text-md">Email:</label><br>
        <input type="email" name="email" v-model="email" class="border-2 w-80 mb-3 border-gray-200 focus:outline-none h-8 rounded-md mr-10">
      </div>
      </div>
       <div class="flex flex-row">
      <div>
        <label class="font-serif text-md">Password:</label><br>
        <input type="password" name="password" v-model="password" class="border-2 w-80 border-gray-200 mb-3 focus:outline-none h-8 rounded-md mr-10"><br>
      </div>
      <div>
        <label class="font-serif text-md">Role:</label><br>
        <select name="role" v-model="role_id" class="border-2 w-80 border-gray-200 mb-3 focus:outline-none h-8 rounded-md mr-10">
          <option v-for="role in roles" :key="role.id" :value="role.id" >{{ role.name }}</option>
        </select>
      </div>
     </div>
      <div class="flex flex-row">
      <div>
        <label class="font-serif text-md">Photo:</label><br>
        <input type="file" @change="handlephoto"  name="photo" class="border-2 w-80 border-gray-200 mb-3 focus:outline-none h-8 rounded-md mr-10"><br>
    
      </div>
      <div>
        <label  class="font-serif text-md">Country:</label><br>
        <select name="country" v-model="country_id" class="border-2 w-80 border-gray-200 mb-3 focus:outline-none h-8 rounded-md mr-10">
          <option value="">Select country:</option>
          <option v-for="country in countries" :key="country.id" :value="country.id"  class="border-2  bg-gray-100 rounded-lg mt-2">
            {{ country.name }}
          </option>
        </select>
      </div>
     </div>
      <div class="flex flex-row">
      <div>
        <label class="font-serif text-md">Phone number:</label><br>
        <input type="text" name="phone_number" v-model="phone_number" class="border-2 w-80 border-gray-200 mb-3 focus:outline-none h-8 rounded-md mr-10">
      </div>
      <div>
        <label class="font-serif text-md">Address:</label><br>
        <input type="text" name="address" v-model="address" class="border-2 w-80 border-gray-200 mb-3 focus:outline-none h-8 rounded-md mr-10"><br>
      </div>
        
     </div>

                    <button @click="editUser"
                        class="btn bg-teal-700 py-1 px-4 rounded-md text-white">update</button>
                    <button @click="dicardEdit"
                        class="btn bg-gray-400 rounded-md py-1 px-4 ml-2 text-white">cancle</button>
                </div>

            </div>
        </div>
        <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div class="py-6 px-4 md:px-6 xl:px-7.5">
                <h4 class="text-xl font-bold text-black dark:text-white">{{ pageText }}</h4>
            </div>

            <!-- Table Header -->
            <div
                class="grid grid-cols-6 border-t border-stroke py-4.5 px-5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div class="col-span-1 flex items-center">
                    <p class="font-medium">full_name</p>
                </div>
                <div class="col-span-1 hidden items-center sm:flex ml-20">
                    <p class="font-medium">email</p>
                </div>
                    <div class="col-span-1 hidden items-center sm:flex ml-24">
                    <p class="font-medium">status</p>
                </div>
                    <!-- <div class="col-span-1 hidden items-center sm:flex ">
                    <p class="font-medium">photo</p>
                </div> -->
                    <div class="col-span-1 hidden items-center sm:flex  ">
                    <p class="font-medium ml-16">phone_number</p>
                </div>
                    <div class="col-span-1 hidden items-center sm:flex  ">
                    <p class="font-medium ml-20">address</p>
                </div>
                    <div class="col-span-1 hidden items-center sm:flex  ">
                    <p class="font-medium ml-16">role</p>
                </div>
                        <div class="col-span-1 hidden items-center sm:flex ">
                    <p class="font-medium ml-5">country</p>
                </div>

                <div class="col-span-1 flex items-center ">
                    <div class=" ">
 <p class="font-medium   ml-4">Actions</p>
                    </div>
                   
                </div>
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
            <!-- Table Rows -->
            <div v-else>

                <div v-for="users in user" :key="users.id"
                    class="grid grid-cols-3 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">

                    <div class="col-span-1 hidden items-center sm:flex">
                        <p class="text-sm font-medium text-black dark:text-white">{{users.full_name}}</p>
                    </div>
                    <div class="col-span-1 flex items-center ml-12">
                        <p class="text-sm font-medium text-black dark:text-white -ml-3">{{users.email}}</p>
                    </div>
                     <div class="col-span-1 flex items-center ml-28">
                        <p class="text-sm font-medium text-black dark:text-white ">{{users.status}}</p>
                    </div>
                     <!-- <div class="col-span-1 flex items-center ">
                        <p class="text-sm font-medium text-black dark:text-white -ml-16">{{users.photo}}</p>
                    </div> -->
                     <div class="col-span-1 flex items-center ">
                        <p class="text-sm font-medium text-black dark:text-white ml-16">{{users.phone_number}}</p>
                    </div>
                     <div class="col-span-1 flex items-center ">
                        <p class="text-sm font-medium text-black dark:text-white ml-20">{{users.address}}</p>
                    </div>
                     <div class="col-span-1 flex items-center ml-1">
                        <p class="text-sm font-medium text-black dark:text-white ml-16">{{users.role_id}}</p>
                    </div>
                     <div class="col-span-1 flex items-center ">
                        <p class="text-sm font-medium text-black dark:text-white ml-10">{{users.country_id}}</p>
                    </div>


                    <div class="col-span-1 flex items-center ">
                        <div class="py-5 px-4 ">
                            <div class="flex items-center space-x-3.5">
                                <!-- <router-link :to="{path: payMethod.id + '/EditPayMethod'}"> 
                                    <ficon :icon="['fas', 'pen-to-square']" />
                                </router-link> -->
                               
                              <ficon :icon="['fas', 'pen-to-square']" @click="startEdit(users)" />
                             <ficon :icon="['fas', 'trash']" @click="deleteUser(users.id)"/>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>

        <!-- end of  -->


    </DefaultLayout3>

</template>

<script>
import axios from 'axios';
import DefaultLayout3 from '@/layouts/DefaultLayout3.vue'
import SubNav3 from '@/components/SubNav3.vue'


export default {
    data() {
        return {
            showcreateuser: false,
            showedit: false,
            user: [],
            userId: '',
            isLoading : false,
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
        this.getUser();
         this.userId = this.$route.params.id
        //  this. startEdit(this.$route.params.id)
  
    },
    components: {
        DefaultLayout3,
        SubNav3
        
    },
    methods: {
      
      
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
        },
        discardCreate() {
            this.showcreateuser = false
        },
        editUser() {
      // alert(`hello`)
             this.errorMessage = null;
             const updatedMethod = { 
              full_name: this.full_name ,
              email: this.email, 
              password: this.password, 
              role_id: this.role_id, 
              photo: this.photo, 
              country_id: this.country_id, 
              phone_number: this.phone_number,  
              address: this.address, 
              };

            axios.put(`http://127.0.0.1:8000/api/users/${this.userId}`, updatedMethod)
                .then(res => {
                    console.log('payment method updated successfully', res.data);
              this.model.user.full_name = '',
             this.model.user.email ='';
            this.model.user.password = '';
            this.model.user.role_id ='';
            this.model.user.country_id = '';
            this.model.user.photo = '';
            this.model.user.phone_number = '';
            this.model.user.address = '';
                    this.showedit = false;
                    this.getUser();
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
                     alert(`API not found`)
                });
    },
  addUser() {
    
        if(this.role_id == 2){
       this.$router.push('/addProfessional');
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
