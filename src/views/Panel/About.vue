<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center">
    <!-- Hero Section -->
    <div class="bg-blue-800 text-white w-full py-20 flex flex-col items-center">
      <h1 class="text-5xl font-extrabold mb-4">Welcome to Jobnova</h1>
      <p class="text-lg mb-6 max-w-2xl text-center">
        Your one-stop solution for connecting talented professionals with businesses. Explore opportunities, showcase your skills, and thrive in a collaborative environment.
      </p>
      <router-link to="/signup" class="bg-yellow-500 text-blue-800 px-6 py-3 rounded-full hover:bg-yellow-400 transition duration-300">
        Join Us Today
      </router-link>
    </div>

    <!-- Mission Section -->
    <div class="max-w-6xl mx-auto px-4 py-10">
      <h2 class="text-4xl font-bold text-blue-800 text-center mb-6">Our Mission</h2>
      <p class="text-gray-600 text-lg text-center">
        At Jobnova, our mission is to connect talented professionals with businesses seeking their skills. We aim to create a platform where individuals can showcase their talents and find opportunities that match their expertise.
      </p>
    </div>

    <!-- Values Section -->
    <div class="max-w-6xl mx-auto px-4 py-10">
      <h2 class="text-4xl font-bold text-blue-800 text-center mb-6">Our Values</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <h3 class="text-2xl font-semibold text-blue-700">Integrity</h3>
          <p class="text-gray-600 mt-2">We operate with transparency and honesty.</p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <h3 class="text-2xl font-semibold text-blue-700">Innovation</h3>
          <p class="text-gray-600 mt-2">We strive to continuously improve and innovate.</p>
        </div>
        <div class="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <h3 class="text-2xl font-semibold text-blue-700">Collaboration</h3>
          <p class="text-gray-600 mt-2">We believe in the power of teamwork.</p>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="max-w-6xl mx-auto px-4 py-10">
      <h2 class="text-4xl font-bold text-blue-800 text-center mb-6">Meet Our Team</h2>
      <div class="flex justify-center mb-10">
        <div class="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <img src="https://via.placeholder.com/150" alt="Mekua Marie" class="w-40 h-40 rounded-full mx-auto mb-4">
          <h3 class="text-xl font-bold">Mekua Marie</h3>
          <p class="text-gray-600">Founder & CEO</p>
          <p class="text-gray-500 mt-2">Passionate about connecting talent with opportunities and fostering a supportive community.</p>
        </div>
      </div>
    </div>

    <!-- Testimonial Section -->
    <div class="bg-gray-200 w-full py-10">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold text-blue-800 text-center mb-6">What Our Users Say</h2>
        <div class="flex flex-col md:flex-row justify-center items-center">
          <div class="bg-white shadow-lg rounded-lg p-6 m-2 max-w-xs">
            <p class="text-gray-600 italic">"Jobnova has transformed my freelance career. I've connected with amazing clients and projects!"</p>
            <p class="text-right font-semibold mt-4">— Sarah L.</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-6 m-2 max-w-xs">
            <p class="text-gray-600 italic">"The best platform for freelancers! Easy to use and full of opportunities!"</p>
            <p class="text-right font-semibold mt-4">— Mark T.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
};
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>
