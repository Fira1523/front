<template>
<div class="flex flex-col md:flex-row items-center bg-cover bg-center text-white p-8" style="background-image: url('/images/hero/bg3.jpg');">
    <!-- Left Section with Text and Search Bar -->
    <div class="md:w-1/2 space-y-4 text-center md:text-left">
      <h1 class="text-4xl font-bold">Find a new job and build career</h1>
      <p class="text-lg">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>
      
      <!-- Search Bar -->
      <div class="flex items-center justify-center md:justify-start space-x-2">
        <input type="text" placeholder="Search your keywords" class="w-full md:w-2/3 p-3 text-gray-900 rounded-md focus:outline-none" />
        <button class="px-4 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">SEARCH</button>
      </div>
      
      <p class="text-sm text-gray-300">
        Popular Searches: Designer, Developer, Web, IOS, PHP Senior Engineer
      </p>
    </div>

    <!-- Right Section with Video and Centered Play Button -->
<!-- Right Section with Video and Centered Play Button -->
<div class="md:w-1/2 flex justify-center mt-8 md:mt-0">
  <div class="relative w-80 h-96 overflow-hidden rounded-lg shadow-lg border-4 border-white">
    <!-- Video Placeholder (Use <iframe> or <video> tag) -->
    <img src="/images/hero.jpg" class="w-full h-full object-cover" autoplay muted loop>
    
    
  </div>
</div>


  </div>
  <div>
    <CategoriesSection />
    <EmployerSection />
    <BlogSection />
  </div>
</template>

<script>
import CategoriesSection from "@/views/components/CategoriesSection.vue";
import EmployerSection from "@/views/components/EmployerSection.vue";
import BlogSection from "@/views/components/BlogSection.vue";

export default {
  components: {
    CategoriesSection,
    EmployerSection,
    BlogSection,
  },
};
</script>
