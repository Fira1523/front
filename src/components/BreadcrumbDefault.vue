<template>
    <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 class="text-title-md2 text-2xl font-semibold text-black">
        {{ pageTitle }}
      </h2>
  
      <nav class="mr-10">
        
        <ol class="flex items-center gap-2">
          <li>
            <router-link class="font-medium" to="/"> Dashboard / </router-link>
          </li>
          <li class="font-medium text-primary">{{ pageTitle }}</li>
        </ol>
      </nav>
    </div>
  </template>
  
  <script >
  export default {
    props: {
      pageTitle: {
        type: String,
        required: true,
      },
    },
  };
  </script>