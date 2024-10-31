<template>
    <!-- ===== Page Wrapper Start ===== -->
    <div class="flex h-screen overflow-hidden">
      <!-- ===== Sidebar Start ===== -->
      <!-- ===== Sidebar End ===== -->
  
      
      <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <!-- ===== Header Start ===== -->
        <!-- <HeaderArea /> -->
        <main>
          <div class="mx-auto max-w-screen-2xl bg-slate-100 p-4 md:p-6 2xl:p-10">
            <slot></slot>
          </div>
        </main>
        <!-- ===== Main Content End ===== -->
      </div>
    </div>
    <!-- ===== Page Wrapper End ===== -->
  </template>
  
  <script>
  //import HeaderArea from '@/components/Header/HeaderArea.vue';
  //import SidebarArea from '@/components/Sidebar/SidebarArea.vue';
  
  export default {
    components: {
      //HeaderArea,
      //SidebarArea,
    },
  };
  </script>