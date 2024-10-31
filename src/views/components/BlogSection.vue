<template>
  <div class="container mx-auto py-10">
  <h2 class="text-3xl font-bold mb-6 text-center">Latest Blog or News</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div
      v-for="post in posts"
      :key="post.title"
      class="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300"
    >
      <img
        :src="post.image"
        alt=""
        class="w-full h-48 object-cover rounded mb-4"
      />
      <h3 class="text-xl font-semibold">{{ post.title }}</h3>
      <p class="text-gray-500">{{ post.date }} | {{ post.readTime }}</p>
    </div>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      posts: [
        { title: "How to Get New Clients", image: "images/blog/01.jpg", date: "Oct 31, 2023", readTime: "5 min" },
        { title: "DigitalOcean Launches in Toronto", image: "images/blog/02.jpg", date: "Oct 31, 2023", readTime: "5 min" },
        { title: "DigitalOcean Launches in Toronto", image: "images/blog/02.jpg", date: "Oct 31, 2023", readTime: "5 min" },
        { title: "DigitalOcean Launches in Toronto", image: "images/blog/02.jpg", date: "Oct 31, 2023", readTime: "5 min" },
        { title: "DigitalOcean Launches in Toronto", image: "images/blog/02.jpg", date: "Oct 31, 2023", readTime: "5 min" },
        { title: "DigitalOcean Launches in Toronto", image: "images/blog/02.jpg", date: "Oct 31, 2023", readTime: "5 min" },
      ],
    };
  },
};
</script>
