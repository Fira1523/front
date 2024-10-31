<template>
    <DefaultLayout2>
       <Navbar/>

        <div class="flex h-screen overflow-hidden mt-8">
            <div class="w-1/4 bg-white border-r border-gray-300">
                <header class="p-4 border-b border-gray-300 flex justify-between items-center bg-cyan-800 text-white">
                    <h1 class="text-2xl font-semibold">Chat</h1>
                    <div class="relative">
                        <button id="menuButton" class="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-100" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z" />
                            </svg>
                        </button>
                        <div id="menuDropdown"
                            class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden">
                            <ul class="py-2 px-3">
                                <li><a href="#" class="block px-4 py-2 text-gray-800 hover:text-gray-400">Option 1</a>
                                </li>
                                <li><a href="#" class="block px-4 py-2 text-gray-800 hover:text-gray-400">Option 2</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div class="overflow-y-auto h-screen p-3 mb-9 pb-20">
                    <div v-for="user in users" :key="user.id"
                        @click=" ; changeUser(user.full_name, user.id); getUserName(); fetchMessages(user.id)"
                        class="flex items-center  cursor-pointer hover:bg-gray-100 p-2 rounded-md">

                        <img src="\public\userPro2.jpg"
                            alt="User Avatar" class="h-12 w-12  rounded-full mr-2">
                        <div class="flex-1">
                            <h2 class="text-md font-semibold">{{ user.full_name }}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1">

                <header class="bg-white p-1 -mr-20  text-gray-700 flex flex-row">
                    <img src=" \public\userimage.avif"
                        class="w-28 rounded-lg ">
                    <h1 class="text-lg mt-4 ml-2 font-semibold">{{ userName }}</h1>
                </header>

                <div class=" overflow-scroll h-3/4 no-scrollbar mb-64">

                 <div v-for="message in messagess" :key="message.id" class="flex mb-4 cursor-pointer">
                        <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                            <img src="\public\userPro2.jpg"
                                alt="User Avatar" class="w-8 h-8 rounded-full text-gray bg-gray">
                        </div>
                        <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3 ">
                            <p class="text-gray-700"> {{ message }}</p>
                        </div>
                    </div> 

                    <div v-for="(message, index) in messages" :key="index" class="flex justify-end mb-4 cursor-pointer">
                        <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                            <p> {{ message }}</p>
                        </div>
                        <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                            <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                alt="My Avatar" class="w-8 h-8 rounded-full">
                        </div>
                    </div>
                </div>

                <footer class="bg-white p-4 fixed bottom-0 w-3/5 mt-80">
                    <div class="mt-">
                        <div class="flex items-center">
                            <input v-model="text" type="text" placeholder="Type a message..."
                                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-gray rounded text-sm shadow focus:outline-none focus:ring w-full">
                            <button @click="handleChat(); sendChat()"
                                class="bg-cyan-600 text-white active:bg-gray-700 text-sm font-semibold px-6 py-3 ml-5  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-5 mb-1"
                                type="button">Send</button>
                        </div>
                    </div>

                </footer>
            </div>
        </div>
        <div v-if="dropDown" class="right-2 top-24 absolute ">
            <!-- <p class="-ml-5 text-black">{{ user.full_name }}</p> -->
            <router-link to="/ClientProfile" class="text-blue-500 -ml-5">Profile</router-link><br>
            <button class="text-red -ml-5" @click="logoutUser">Logout</button>
        </div>
    </DefaultLayout2>
</template>

<script>
import axios from 'axios';
import DefaultLayout2 from '@/layouts/DefaultLayout2.vue'
import Navbar from '@/components/Navbar.vue';
export default {
    components: {
        DefaultLayout2,
        Navbar
    },
    data() {
        return {
            dropDown: false,
            users: [],
            user_name: '',
            userName: '',
            messages: [],
            text: '',
            friendId: null,
            receiverId: '',
            messagess: [],
            model: {
                chats: {
                    sender_id: '',
                    receiver_id: '',
                    message: ''
                }
            }
        };
    },
    mounted() {
        this.fetchUser();
        this.fetchMessages();

        this.changeUser();
        const senderID = localStorage.getItem('user_id')
        this.model.chats.sender_id = senderID
        console.log('sender id', this.model.chats.sender_id)
    },
    methods: {
        logoutUser() {
            localStorage.removeItem('wtoken', 'type', 'roleId')
            alert(`Logout`)
            this.$router.push('/Login');
        },
        handleClick() {
            this.dropDown = !this.dropDown
        },
        handleChat() {
            if (this.text.trim()) {
                this.messages.push(this.text);
                localStorage.setItem('text', this.text)
                this.text = '';

            }

        },

        sendChat() {
            const receiver_id = localStorage.getItem('receiver_id')
            this.model.chats.receiver_id = receiver_id
            const message = localStorage.getItem('text')
            this.model.chats.message = message
            const formData = new FormData();
            formData.append('sender_id', this.model.chats.sender_id);
            formData.append('receiver_id', this.model.chats.receiver_id);
            formData.append('message', this.model.chats.message);
            axios.post('http://127.0.0.1:8000/api/chat', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((res) => {

                })
        },
        getUserName() {
            this.userName = localStorage.getItem('full_name')

        },
        changeUser(user, receiver_id) {
            this.user_name = localStorage.setItem('full_name', user)
            this.receiverId = localStorage.setItem('receiver_id', receiver_id);
            console.log('receiver_id', receiver_id);
        },

        fetchUser() {
            axios.get('http://127.0.0.1:8000/api/showClient')
                .then((res) => {

                    this.users = res.data.data;
                    // console.log(this.users);

                })
                .catch((error) => {
                    console.error("There was an error fetching the professional:", error);
                });
        },
        fetchMessages(friendId) {
            axios.get(`http://127.0.0.1:8000/api/messages/${friendId}`)
                .then(response => {
                    this.messagess = response.data;
                    //   console.log( this.messagess)
                })
                .catch(error => {
                    console.error("There was an error fetching the messages!", error);
                });
        }

    }
}

</script>