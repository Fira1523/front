<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import SidebarItem from './SidebarItem.vue'

const target = ref(null)

const sidebarStore = useSidebarStore()

onClickOutside(target, () => {
  sidebarStore.isSidebarOpen = false
})

const menuGroups = ref([
  {
    name: 'MENU',
    menuItems: [
      //  {
      //   icon: 'user',
      //   label: 'Users',
      //   route: '/user',
      
      // },
      // {
      //   icon: 'house',
      //   label:'Sign-up',
      //   route:'/Signup'

      // },
//        {
//         icon: 'house',
//         label:'Home',
//         route:'/Home'

//       },
      
//        {
//         icon: 'user',
//         label:'Professional-Dashbord',
//         route:'/professional-home'

//       },
//          {
//         icon: 'user',
//         label:'Profile-build',
//         route:'/ProfileBLd'

//       },
//    {
//         icon: 'diagram-project',
//         label:'Job-show',
//         route:'/ProjectShow'

//       },
//          {
//         icon: 'file',
//         label:'proposal',
//         route:'/Proposal'

//       },
      
        {
        icon: 'house',
        label:'Dashboard',
        route:'/ClientDashboard'
      },
   
        {
        icon: 'user',
        label:'Profile',
        route:'/ClientPrePo'
      },
             {
        icon: 'coins',
        label:'Balance',
        route:'/balance'

      },
       {
        icon: 'list-check',
        label:'Post Project',
        route:'/ProjectPost'

      },
      //  {
      //   icon: 'diagram-project',
      //   label:'Project-skill',
      //   route:'/ProjectSkill'

      // },
        {
        icon: 'layer-group',
        label:'Posted Projects',
        route:'/Post'

      },
      {
        icon: 'paper-plane',
        label:'Chat',
        route:'/ChatTemplete'

      },
      {
        icon: 'list-check',
        label:'Manage Contract',
        route:'/ManageContract'

      }
      
      
      

      
      // {
      //   icon: 'user',
      //   label: 'Professionals',
      //   route: '/professional',
      
      // },
      //   {
      //   icon: 'list',
      //   label: 'category',
      //   route: '/category',
      
      // },
      //   {
      //   icon: 'handshake',
      //   label: 'contract',
      //   route: '/contract',
      
      // },
      //  {
      //   icon: 'globe',
      //   label: 'countries',
      //   route: '/countries',
      
      // },
      //  {
      //   icon: 'file',
      //   label: 'proposals',
      //   route: '/proposals',
      
      // },
      //   {
      //   icon: 'user-tie',
      //   label: 'role',
      //   route: '/role',
      
      // },
      
      // {
      //   icon: 'credit-card',
      //   label: 'Payment',
      //   route: '#',
      //   children: [
      //       { label: 'Payment Method', route: '/payment-method' },
      //     ]
      // },


      // {
      //   icon: 'credit-card',
      //   label: 'Dashboard',
      //   route: '#',
      //   children: [
      //       { label: 'eCommerce', route: '/' },
      //       { label: 'home', route: '/calendar' },
      //     ]
      // },
      //   {
      //   icon: 'hashtag',
      //   label: 'Retting',
      //   route: '#',
      //   children: [
      //       { label: 'rettingNumber', route: '/rettingNumber' },
      //     ]
      // },
      // {
      //   icon: `calendar`,
      //   label: 'Calendar',
      //   route: '/calendar',
      // },
      // {
      //   icon: ``,
      //   label: 'Profile',
      //   route: '/profile'
      // },
      // {
      //   icon: ``,
      //   label: 'Forms',
      //   route: '#',
      //   children: [
      //     { label: 'Form Elements', route: '/forms/form-elements' },
      //     { label: 'Form Layout', route: '/forms/form-layout' }
      //   ]
      // },
      // {
      //   icon: ``,
      //   label: 'Tables',
      //   route: '/tables'
      // },
      // {
      //   icon: ``,
      //   label: 'Pages',
      //   route: '#',
      //   children: [{ label: 'Settings', route: '/pages/settings' }]
      // }
    ]
  },
  // {
  //   name: 'OTHERS',
  //   menuItems: [
  //     {
  //       icon: ``,
  //       label: 'Charts',
  //       route: '#',
  //       children: [{ label: 'Basic Chart', route: '/charts/basic-chart' }]
  //     },
  //     {
  //       icon: ``,
  //       label: 'UI Elements',
  //       route: '#',
  //       children: [
  //         { label: 'Alerts', route: '/ui-elements/alerts' },
  //         { label: 'Buttons', route: '/ui-elements/buttons' }
  //       ]
  //     },
  //     {
  //       icon: `user`,
  //       label: 'Authentication',
  //       route: '#',
  //       children: [
  //         { label: 'Sign In', route: '/auth/signin' },
  //         { label: 'Sign Up', route: '/auth/signup' }
  //       ]
  //     }
  //   ]
  // }
])
</script>

<template>
  <aside
    class="absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0"
    :class="{
      'translate-x-0': sidebarStore.isSidebarOpen,
      '-translate-x-full': !sidebarStore.isSidebarOpen
    }"
    ref="target"
  >
    <!-- SIDEBAR HEADER -->
    <div class="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
      <router-link to="/" class="text-2xl">
       <img src="\photo_2024-10-08_21-55-44.jpg" alt="" class="h-28 w-60 -mb-10 rounded-3xl" >
      </router-link>

      <button class="block lg:hidden" @click="sidebarStore.isSidebarOpen = false">
        <svg
          class="fill-current"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
            fill=""
          />
        </svg>
      </button>
    </div>
    <!-- SIDEBAR HEADER -->

    <div class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <!-- Sidebar Menu -->
      <nav class="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
        <template v-for="menuGroup in menuGroups" :key="menuGroup.name">
          <div>
            <h3 class="mb-4 ml-4 text-sm font-medium text-bodydark2">{{ menuGroup.name }}</h3>

            <ul class="mb-6 flex flex-col gap-1.5">
              <SidebarItem
                v-for="(menuItem, index) in menuGroup.menuItems"
                :item="menuItem"
                :key="index"
                :index="index"
              />
            </ul>
          </div>
        </template>
      </nav>
      <!-- Sidebar Menu -->

      <!-- Promo Box -->
     
      <!-- Promo Box -->
    </div>
  </aside>
</template>
