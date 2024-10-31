<template>
  <section class="py-16">
    <!-- Job Categories Section -->
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-10">Browse by Categories</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div
          v-for="(job, index) in jobs"
          :key="index"
          class="bg-white shadow-lg rounded-lg p-6 text-center"
        >
          <div
            class="mx-auto w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4"
          >
            <i :class="job.icon" class="text-2xl text-blue-600"></i>
          </div>
          <h3 class="font-semibold text-lg">{{ job.title }}</h3>
          <p class="text-gray-500 mt-2">{{ job.jobCount }} Jobs</p>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="container mx-auto mt-24 flex flex-col md:flex-row items-center gap-10">
      <div class="w-full md:w-1/2 relative">
        <img
          src="/images/about/ab01.jpg"
          alt="About Us"
          class="rounded-lg shadow-lg"
        />
        <div
          class="absolute -bottom-8 -right-8 bg-white rounded-full shadow-md p-2"
        >
          <img
            src="/images/about/ab02.jpg"
            class="w-16 h-16 rounded-full"
            alt="Play Video"
          />
        </div>
      </div>

      <div class="w-full md:w-1/2">
        <h2 class="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <p class="text-gray-500 mb-8">
          Search all the open positions on the web. Get your personalized salary
          estimate. Read reviews on over 30,000+ companies worldwide.
        </p>

        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              class="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100"
              @click="toggleFAQ(index)"
            >
              <span class="font-medium">{{ faq.question }}</span>
            </button>
            <div
              v-show="faq.open"
              class="px-6 py-4 text-gray-600"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
         { title: 'Business Development', jobCount: 74, icon: 'mdi mdi-airplay' },
        { title: 'Marketing & Communication', jobCount: 20, icon: 'mdi mdi-award' },
        { title: 'Project Management', jobCount: 35, icon: 'mdi mdi-at-sign' },
        { title: 'Customer Service', jobCount: 46, icon: 'mdi mdi-codesandbox' },
        { title: 'Software Engineering', jobCount: 60, icon: 'mdi mdi-chrome' },
        { title: 'Human Resource HR', jobCount: 74, icon: 'mdi mdi-briefcase' },
        { title: 'IT & Networking', jobCount: 20, icon: 'mdi mdi-lan' },
        { title: 'Sales & Marketing', jobCount: 35, icon: 'mdi mdi-sale' },
        { title: 'Project Manager', jobCount: 46, icon: 'mdi mdi-clipboard-check' },
        { title: 'Data Science', jobCount: 60, icon: 'mdi mdi-database' },
      ],
      faqs: [
        {
          question: 'How does it work?',
          answer:
            'There are many variations of passages of Lorem Ipsum available, but most have suffered alteration in some form.',
          open: true,
        },
        {
          question: 'Do I need a designer to use Jobnova?',
          answer:
            'There are many variations of passages of Lorem Ipsum available, but most have suffered alteration in some form.',
          open: false,
        },
        {
          question: 'What do I need to do to start selling?',
          answer:
            'There are many variations of passages of Lorem Ipsum available, but most have suffered alteration in some form.',
          open: false,
        },
        {
          question: 'What happens when I receive an order?',
          answer:
            'There are many variations of passages of Lorem Ipsum available, but most have suffered alteration in some form.',
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleFAQ(index) {
      this.faqs[index].open = !this.faqs[index].open;
    },
  },
};
</script>

<style scoped>
/* Custom Styles */
.container {
  max-width: 1200px;
  padding: 0 1rem;
}
</style>
