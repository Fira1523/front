<script setup lang="ts">
import HeaderArea from '@/components/Header/HeaderArea.vue'
import SidebarArea3 from '@/components/Sidebar/SidebarArea3.vue'
import { onMounted } from 'vue';
import axios from 'axios';
import router from '@/router';

onMounted(() => {
  const token = localStorage.getItem('wtoken');
    if (token) {
      axios.defaults.withCredentials = true;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      router.push({name: 'Login'});
    }
})
</script>

<template>
  <!-- ===== Page Wrapper Start ===== -->
  <div class="flex h-screen overflow-hidden">
    <!-- ===== Sidebar Start ===== -->
    <SidebarArea3 />
    <!-- ===== Sidebar End ===== -->

    <!-- ===== Content Area Start ===== -->
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <!-- ===== Header Start ===== -->
      <HeaderArea />
      <!-- ===== Header End ===== -->

      <!-- ===== Main Content Start ===== -->
      <main>
        <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <slot></slot>
        </div>
      </main>
      <!-- ===== Main Content End ===== -->
    </div>
  </div>
  <!-- ===== Page Wrapper End ===== -->
</template>
