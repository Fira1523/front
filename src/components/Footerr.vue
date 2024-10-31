<template>
    
    <footer class="bg-black text-white py-8 top-40 sticky left-0 right-0 ">
        
      <div class="container mx-auto  px-6">
        <div class="flex flex-col md:flex-row justify-between">
          <div class="mb-6 md:mb-0">
            <h4 class="text-lg font-bold mb-2">About Us</h4>
            <p class="text-gray-300">
              We connect freelancers with clients, fostering a vibrant community of talent and opportunity.
            </p>
          </div>
  
          <div class="mb-6 md:mb-0">
            <h4 class="text-lg font-bold mb-2">Quick Links</h4>
            <ul class="list-none">
              <li><router-link to="/About" class="text-gray-300 hover:text-cyan-500">About Us</router-link></li>

              <li><router-link to="/Contactus" class="text-gray-300 hover:text-cyan-500">Contact</router-link></li>

            </ul>
          </div>
  
          <div class="mb-6 md:mb-0">
            <!-- <h4 class="text-lg font-bold mb-2">Follow Us</h4> -->
            <div class="flex space-x-4">
              <a href="https://facebook.com" target="_blank" class="text-gray-300 hover:text-cyan-500">
                <i class="fab fa-facebook-f footer-icon"></i>
              </a>
              <a href="https://twitter.com" target="_blank" class="text-gray-300 hover:text-cyan-500">
                <i class="fab fa-twitter footer-icon"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" class="text-gray-300 hover:text-cyan-500">
                <i class="fab fa-linkedin-in footer-icon"></i>
              </a>
              <a href="https://instagram.com" target="_blank" class="text-gray-300 hover:text-cyan-500">
                <i class="fab fa-instagram footer-icon"></i>
              </a>
            </div>
          </div>
        </div>
  
        <div class="mt-6 border-t border-gray-700 pt-4 text-center">
          <p class="text-sm text-gray-400">© 2024 workdiator. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer-icon {
    font-size: 1.5rem; /* Adjust icon size */
  }
  </style>