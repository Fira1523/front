<template>
    <DefaultLayout3>
        <SubNav3 />
        <BreadcrumbDefault pageTitle="project" />

        <div class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div class="py-6 px-4 md:px-6 xl:px-7.5">
                <h4 class="text-xl font-bold text-black dark:text-white">{{ pageText }}</h4>
            </div>

            <!-- Table Header -->
            <div class="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div class="col-span-1 flex items-center">
                    <p class="font-medium">title</p>
                </div>
                <div class="col-span-2 hidden items-center sm:flex ml-20 ">
                    <p class="font-medium">description</p>
                </div>
                <div class="col-span-1 hidden items-center sm:flex ml-32 ">
                    <p class="font-medium">attached_file</p>
                </div>
                <div class="col-span-1 hidden items-center sm:flex ml-40 ">
                    <p class="font-medium">price</p>
                </div>
                <div class="col-span-1 hidden items-center sm:flex ml-56 ">
                    <p class="font-medium">skill_name</p>
                </div>
             
            </div>

            <div v-if="isLoading" class="ml-20">
                <div role="status">
                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>

            <!-- Table Rows -->
            <div v-else>
                <div v-for="project in projects" :key="project.id" class="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                    <div class="col-span-1 hidden items-center sm:flex ">
                        <p class="text-sm font-medium text-black dark:text-white">{{ project.title }}</p>
                    </div>
                    <div class="col-span-2 flex items-center ">
                        <p class="text-sm font-medium text-black dark:text-white  ml-10">{{ project.description }}</p>
                    </div>
                    <div class="col-span-1 flex items-center ">
                        <p class="text-sm font-medium text-black dark:text-white ">{{ project.attached_file }}</p>
                    </div>
                    <div class="col-span-1 flex items-center ">
                        <p class="text-sm font-medium text-black dark:text-white ml-40">{{ project.price }}</p>
                    </div>
                    <div class="col-span-1 flex items-center ml-48 w-64 ">
                        <ul class="list-none mt-2">
                            <li v-for="skill in getSkillsForProject(project.id)" :key="skill.id" class="py-1 block text-gray-700 text-sm font-bold mb-2">
                                <div class="flex items-center">
                                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-2">
                                        <i class="fas fa-fingerprint"></i>
                                    </span>
                                    <h4 class="text-gray-600">{{ skill.skill_name }}</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                 
                </div>
            </div>
        </div>
    </DefaultLayout3>
</template>

<script>
import axios from 'axios';
import DefaultLayout3 from '@/layouts/DefaultLayout3.vue';
import SubNav3 from '@/components/SubNav3.vue';
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue';

export default {
    data() {
        return {
            showcreate: false,
            showedit: false,
            projects: [],
            isLoading: true,
            pageText: 'projects',
        };
    },
    mounted() {
        this.fetchProjects();
    },
    components: {
        DefaultLayout3,
        BreadcrumbDefault,
        SubNav3
    },
    methods: {
        getSkillsForProject(projectId) {
            const project = this.projects.find(p => p.id === projectId);
            return project ? project.project_skill_lists.map(skillList => skillList.skill) : [];
        },
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then(res => {
                    if (res.data && Array.isArray(res.data.data)) {
                        this.projects = res.data.data;
                    } else {
                        console.error('Invalid response', res.data);
                    }
                    this.isLoading = false;
                })
                .catch(error => {
                    console.error('Error fetching projects', error.response);
                    this.isLoading = false;
                    alert(`API not found`);
                });
        },
      
      
    }
};
</script>

