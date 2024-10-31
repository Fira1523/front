<template>
  <div class="min-h-screen flex flex-col">
    <MainNavbar />
    <router-view class="flex-grow" />
    <SiteFooter />
  </div>
</template>

<script>
import MainNavbar from "@/views/components/MainNavbar.vue";
import SiteFooter from "@/views/components/SiteFooter.vue";

export default {
  components: {
    MainNavbar,
    SiteFooter,
  },
};
</script>
