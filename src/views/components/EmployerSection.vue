<template>
  <div class="container mx-auto py-10">
  <h2 class="text-3xl font-bold mb-6 text-center">Find Best Companies</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div
      v-for="employer in employers"
      :key="employer.name"
      class="flex items-center bg-white p-6 rounded shadow"
    >
      <img :src="employer.logo" alt="" class="w-12 h-12 mr-4" />
      <div>
        <h3 class="text-lg font-semibold">{{ employer.name }}</h3>
        <p class="text-gray-500">{{ employer.vacancies }} Vacancies</p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      employers: [
        { name: "Google", logo: "images/company/google-logo.png", vacancies: 10 },
        { name: "Facebook", logo: "images/company/facebook-logo.png", vacancies: 10 },
        { name: "LinkedIn", logo: "images/company/linkedin.png", vacancies: 10 },
      ],
    };
  },
};
</script>
