<template>
    <div class="ml-64">
        <p class="text-3xl ml-96 mt-8">Clients</p>
    </div>

    <section v-for="user in users" :key="user.id" class="mt-20 bg-gray-300" >
        <div class="container mx-auto px-4">
            <div class="">
                <div class="w-full md:w-4/12 px-4 text-center ml-96">
                    <div class="relative min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                        <div class="px-4 py-5">
                            <div class="text-white p-3 text-center items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                <i class="fas fa-retweet"></i>
                            </div>
                            <div>
                                <p>{{ user.full_name }}</p>
                                <p>{{ user.email }}</p>
                                <p>{{ user.role_id }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: []
        };
    },
    mounted() {
        this.fetchUser();
    },
    methods: {
        fetchUser() {
    const token = localStorage.getItem('wtoken');
    axios.get('http://127.0.0.1:8000/api/showProfessional', {
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