<template>
  <div class="container mx-auto py-10">
  <h2 class="text-3xl font-bold mb-6 text-center">Browse by Categories</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
    <div
      v-for="category in categories"
      :key="category.name"
      class="bg-white p-6 shadow rounded text-center"
    >
      <h3 class="text-xl font-semibold">{{ category.name }}</h3>
      <p class="text-gray-600 mt-2">{{ category.jobs }} Jobs Available</p>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      categories: [
        { name: "Human Resource", jobs: 90 },
        { name: "IT & Networking", jobs: 90 },
        { name: "Sales & Marketing", jobs: 90 },
        { name: "Accounting", jobs: 90 },
        { name: "Delivery", jobs: 90 },
      ],
    };
  },
};
</script>
