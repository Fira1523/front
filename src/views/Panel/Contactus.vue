
<template>

  <div class="bg-gray-100 min-h-screen flex flex-col items-center py-10">
    <div class="max-w-6xl mx-auto px-4">
      <h1 class="text-5xl font-bold text-center text-blue-800 mb-6">Contact Us</h1>
      <p class="text-lg text-center text-gray-600 mb-10">
        We're here to help! Please fill out the form below or reach out through our contact details.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- Contact Form -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-3xl font-semibold text-blue-700 mb-4">Get in Touch</h2>
          <form @submit.prevent="handleSubmit">
            <div class="mb-4">
              <label class="block text-gray-700 mb-2" for="name">Name</label>
              <input type="text" id="name" v-model="form.name" required class="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 mb-2" for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required class="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 mb-2" for="message">Message</label>
              <textarea id="message" v-model="form.message" required class="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" rows="5"></textarea>
            </div>
            <button type="submit" class="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-3xl font-semibold text-blue-700 mb-4">Contact Information</h2>
          <p class="text-gray-700 mb-2"><strong>Email:</strong> info@jobnova.com</p>
          <p class="text-gray-700 mb-2"><strong>Phone:</strong> +123 456 7890</p>
          <p class="text-gray-700 mb-6"><strong>Address:</strong> 123 Jobnova St, City, Country</p>
          <h3 class="text-2xl font-semibold text-blue-700 mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-blue-600 hover:text-blue-500 transition duration-300">
              <i class="fab fa-facebook-f fa-lg"></i>
            </a>
            <a href="#" class="text-blue-400 hover:text-blue-300 transition duration-300">
              <i class="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" class="text-pink-500 hover:text-pink-400 transition duration-300">
              <i class="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" class="text-blue-800 hover:text-blue-700 transition duration-300">
              <i class="fab fa-linkedin-in fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here (e.g., send data to an API)
      console.log('Form submitted:', this.form);
      // Clear the form after submission
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
      alert('Your message has been sent!');
    }
  }
};
</script>

<style scoped>
/* Add any additional custom styles here */

</style>
