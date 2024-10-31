<template>
    <div class="shadow-md mt-20 ml-96 mr-96 h-96 pt-12 pb-96 pl-10 bg-white rounded-full">
        <h1 class="text-cyan-700 ml-20">{{ full_name }}</h1>
        <p class="mt-10" v-if="showText"></p>
        {{ ClinetMessage }}
        <div class="fixed w-1/2 mb-3 mt-96 pr-20 flex ml-10">
            <input
                type="text"
                v-model="text"
                placeholder="Type text"
                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            />
            <button
                @click="sendChat"
                class="bg-cyan-600 text-white active:bg-gray-700 text-sm font-semibold px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ml-5 mt-1"
                type="button"
            >
                Send
            </button>
        </div>

        <div class="mt-10">
            <div v-for="(message, index) in messages" :key="index" class="mt-2 p-2 bg-gray-200 rounded">
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: [],
            full_name: '',
            text: '',
            showText: false,
            messages: [],
            ClinetMessage:''
        };
    },
    mounted() {
        this.fetchUser();
        this.full_name = localStorage.getItem('full_name');
    //    this.ClinetMessage = localStorage.getItem('message')
       console.log('message',this.ClinetMessage)
    },
    methods: {
       sendChat() {
            if (this.text.trim()) {
                this.messages.push(this.text); 
                  this.text = ''
            }
           
        },
        fetchUser() {
            const token = localStorage.getItem('wtoken');
            axios.get('http://127.0.0.1:8000/api/showClient', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((res) => {
                console.log(res.data.data);
                this.users = res.data.data;
            })
            .catch((error) => {
                console.error("There was an error fetching the clients:", error);
            });
        }
    }
}
</script>