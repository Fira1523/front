<template>
 <DefaultLayout2>
   <Navbar/>
<div>
     <video src="\rattingvedio.mp4"  autoplay muted loop class="w-screen "></video>

</div>
<div class="bg-white rounded-md shadow-md  ml-80 w-1/3  px-10 py-10 mt-32 fixed top-0" v-if="showThanhyou">
     <p>Thank you for ratting! 😊</p>
</div>
<div class="bg-white rounded-md shadow-md  ml-80 w-1/3  px-10 py-10 mt-32 fixed top-0" v-if="!showThanhyou">
    <h1 class="text-center text-warning text-2xl">Rate professional</h1>
    <label for="" class="block  text-gray-700 text-lg font-bold mb-2 mt-3 ">Add comment to professional</label><br>
    <textarea name="" id="" cols="60" rows="2" v-model="model.ratting.comment" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full -mt-4"></textarea>
    <div class="flex  mt-5">
     <label for="">Rate Professional</label>
        <ficon :icon="['fas', 'star']" :style="{ color: textColor }" class=" text-2xl ml-4" @click="changeColor(1)"/>
        <ficon :icon="['fas', 'star']" :style="{ color: textColor2 }" class=" text-2xl " @click="changeColor2(2)"/>
        <ficon :icon="['fas', 'star']" :style="{ color: textColor3 }" class=" text-2xl " @click="changeColor3(3)"/>
        <ficon :icon="['fas', 'star']" :style="{ color: textColor4 }" class=" text-2xl " @click="changeColor4(4)"/>
        <ficon :icon="['fas', 'star']" :style="{ color: textColor5 }" class=" text-2xl " @click="changeColor5(5)"/>
        
    </div>
    <button @click="rate" class="bg-warning text-white active:bg-gray-700 text-sm font-semibold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-40 mt-5" type="btn">submit</button>
   
</div>  
<!-- <div>
     <img src="\public\3stars.jpg" alt="" class="w-96">
</div> -->
  </DefaultLayout2>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import DefaultLayout2 from '@/layouts/DefaultLayout2.vue'

export default {
     components:{
     DefaultLayout2,
     Navbar
      },
     
  created () {
  },
data(){
    return{
        textColor: 'gray',
        textColor2: 'gray',
        textColor3: 'gray',
        textColor4: 'gray',
        textColor5: 'gray',
        value1 :1,
        value2 :1,

        professionalID:null,
        showThanhyou:false,
        userId:null,
        model:{
          ratting:{
               project_id:null,
               // amount:null,
               comment:'',
               taker_id:null,
              giver_id:null,
              

          }
        }
     
            
         
      
    }
},
mounted(){
this.model.ratting.taker_id = localStorage.getItem('taker_id')
this.model.ratting.giver_id = localStorage.getItem('user_id')
console.log('giver_id',this.model.ratting.giver_id)
console.log('taker_idddd',this.model.ratting.taker_id)
this.model.ratting.project_id = localStorage.getItem('projects_id')
console.log('retting_project',this.model.ratting.project_id)
},
methods:{
    changeColor(value){
         this.textColor = 'gray' ? 'orange' :'gray'
         this.model.ratting.amount  = value
    },
    changeColor2(value){
         this.textColor2 = 'gray' ? 'orange' : 'gray'
          this.model.ratting.amount  = value
              if(this.textColor2 == 'orange'){
          this.textColor = 'orange'
         
         }
    },
    changeColor3(value){
         this.textColor3 = 'gray' ? 'orange' : 'gray'
         if(this.textColor3 == 'orange'){
          this.textColor = 'orange'
          this.textColor2 = 'orange'
         }
          this.model.ratting.amount  = value
    },
    changeColor4(value){
         this.textColor4 = 'gray' ? 'orange' : 'gray'
          this.model.ratting.amount  = value
              if(this.textColor4 == 'orange'){
          this.textColor = 'orange'
          this.textColor2 = 'orange'
          this.textColor3 = 'orange'
         }
    },
    changeColor5(value){
         this.textColor5 = 'gray' ? 'orange' : 'gray'
          this.model.ratting.amount  = value
          if(this.textColor5 == 'orange'){
          this.textColor = 'orange'
          this.textColor2 = 'orange'
          this.textColor3 = 'orange'
          this.textColor4 = 'orange'
         }
          
    },
rate(){
     // alert(`hello`)
     const formData   = new FormData()
     formData.append('comment',this.model.ratting.comment)
     formData.append('taker_id',this.model.ratting.taker_id)
     formData.append('giver_id',this.model.ratting.giver_id)
     formData.append('amount',this.model.ratting.amount)
     formData.append('project_id',this.model.ratting.project_id)
    axios.post('http://127.0.0.1:8000/api/rindex',formData,{
         headers: {
                'Content-Type': 'multipart/form-data'
              }
    }).then((res)=>{
    
        
         this.showThanhyou = true
    })
}
},
}
</script>

<style>
.container{
     border-top-left-radius: 100px;
}
</style>