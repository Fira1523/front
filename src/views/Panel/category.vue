<template>
    <DefaultLayout3>
        <SubNav3 />
         <div class="font-serif ml-56" ref="scrollableDiv">
            <div class="mb-2 ml-32">
                <div v-if="showcreate" class="shadow-md shadow-gray-400 w-72 h-32 ml-20">
                                 <div>
          <label for="" class="font-serif  text-md">Category Name:</label><br>
          <input type="text" name="category_name" v-model="category_name" class="border-2 mt-3 mb-3 lg:w-60 w-48 border-gray-200 focus:outline-none h-8 rounded-md lg:mr-1 bg-white" required><br>
        </div>
          <div>
          <label for="" class="font-serif text-md">Code:</label><br>
          <input type="number" name="certificate" class="border-2 mt-3 lg:w-60 w-48 mb-3 border-gray-200 focus:outline-none h-8 rounded-md lg:mr-1 bg-white" required v-model="code">
        </div>

                    <button @click="addCategory" class="btn bg-teal-700 py-1 px-4 rounded-md text-white">Add</button>
                    <button @click="discardCreate"
                        class="btn bg-gray-400 rounded-md py-1 px-4 ml-2 text-white">cancle</button>
                </div>
                <button @click="createPaymethod" class="btn bg-cyan-800 text-white py-2 px-8 -ml-80 rounded-md">
                    Add Category
                </button>
            </div>

            <div class="mb-2 ml-32">
                <div v-if="showedit" class="shadow-md shadow-gray-400 w-72 h-32 ml-20">
                    <div>
          <label for="" class="font-serif  text-md">Category_name:</label><br>
          <input type="text" name="experience" v-model="category_name" class="border-2 mt-3 mb-3 lg:w-60 w-48 border-gray-200 focus:outline-none h-8 rounded-md lg:mr-1 bg-white" required><br>
        </div>
          <div>
          <label for="" class="font-serif text-md">Code:</label><br>
          <input type="number" name="certificate" class="border-2 mt-3 lg:w-60 w-48 mb-3 border-gray-200 focus:outline-none h-8 rounded-md lg:mr-1 bg-white" required v-model="code">
        </div>

                    <button @click="editCategory"
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
                class="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div class="col-span-3 flex items-center ml-20">
                    <p class="font-medium">category_name</p>
                </div>
                <!-- <div class="col-span-1 hidden items-center sm:flex ml-80 ">
                    <p class="font-medium">code</p>
                </div> -->

                <div class="col-span-1 flex items-center ">
                    <p class="font-medium ml-96">Actions</p>
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

                <div v-for="category in caregories" :key="category.id"
                    class="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">

                    <div class="col-span-3 hidden items-center sm:flex ml-20">
                        <p class="text-sm font-medium text-black dark:text-white w-full">{{category.category_name}}</p>
                    </div>
                    <div class="col-span-1 flex items-center ">
                        <p class="text-sm font-medium text-black dark:text-white ml-80">{{category.code}}</p>
                    </div>


                    <div class="col-span-1 flex items-center ml-12">
                        <div class="py-5 px-4 ml-48">
                            <div class="flex items-center space-x-3.5">
                                <!-- <router-link :to="{path: payMethod.id + '/EditPayMethod'}"> 
                                    <ficon :icon="['fas', 'pen-to-square']" />
                                </router-link> -->
                               
                              <ficon :icon="['fas', 'pen-to-square']" @click="startEdit(category)" />
                             <ficon :icon="['fas', 'trash']" @click="deleteCategory(category.id)"/>
                               
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
import SubNav3 from '@/components/SubNav3.vue'
import DefaultLayout3 from '@/layouts/DefaultLayout3.vue'


export default {
    data() {
        return {
            showcreate: false,
            showedit: false,
            caregories: [],
            categoryID: '',
            // payment_name: '',
            isLoading:true,
             model: {
           category: {
            category_name: '',
            code: '',
        
        }
      },
            pageText: 'Categories',
        };
    },
    mounted() {

        this.fetchCategory();
    },
    components: {
        DefaultLayout3,
        SubNav3
   
    },
    methods: {
        createPaymethod() {
            this.showcreate = !this.showcreate;
        },
        startEdit(category) {
            this.showedit = true;
            this.categoryID = category.id;
            this.category_name = category.category_name;
            this.code = category.code;
            const div = this.$refs.scrollableDiv;
            div.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        dicardEdit() {
            this.category_name = '',
            this.code = ''
            this.showedit = false
        },
        discardCreate() {
            this.showcreate = false
        },
        editCategory() {
            this.errorMessage = null;
            const updatedMethod = { 
                category_name: this.category_name,
                code:this.code
                 };

            axios.put(`http://127.0.0.1:8000/api/category/${this.categoryID}`, updatedMethod)
                .then(res => {
                    console.log('payment method updated successfully', res.data);
                    this.category_name = '';
                    this.code=''
                    this.showedit = false;
                    this.fetchCategory();
                }).catch((error => {
                    this.errorMessage = error.response.data.message;
                }))
        },
        addCategory() {
            this.model.category.category_name = this.category_name;
             this.model.category.code = this.code;
            axios.post('http://127.0.0.1:8000/api/category', this.model.category)
                .then(res => {
                    console.log('Category method created successfully', res.data);
                    this.category_name = '';
                    this.code = ''
                    this.fetchCategory();
                })
                .catch(error => {
                    this.errorMessage = error.response.data.message;
                });
        },
        fetchCategory() {
            axios.get('http://127.0.0.1:8000/api/category')
          
            
                .then(res => {
                    console.log('payment', res.data.data);
                    if (res.data && Array.isArray(res.data.data)) {
                        this.caregories = res.data.data;
                    } else {
                        console.error('Invalid response', res.data);
                    }
                    this.isLoading = false
                    
                })
                .catch(error => {
                    console.log('Error fetching payment methtods', error.response.data);
                     this.isLoading = false
                     alert(`API not found`)
                });
        },
        deleteCategory(categoryID) {
            if (confirm('Are you sure you want to delete this payment method?')) {
                axios.delete(`http://127.0.0.1:8000/api/category/${categoryID}`)
                    .then(res => {
                        console.log('payment method deleted successfully', res.data);
                        this.fetchCategory();
                    })
                    .catch(error => {
                        console.error('Error deleting payment method', error.response.data);
                    });
            }
        }
    }
};
</script>
