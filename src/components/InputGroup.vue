<template>
  <div class="mb-4">
    <label class="mb-2.5 block font-medium text-black">{{ label }}</label>
    <div class="relative">
      <input
        :type="type"
        :placeholder="placeholder"
        class="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 
        outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark 
        dark:bg-form-input dark:focus:border-primary text-black"
        @input="sendValue($event.target.value)"  
      />
      <span class="absolute right-4 top-4">
        <slot></slot>
      </span>
    </div>
  </div>
</template>



<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: { 
      type: String,
      default: '',
    },
  },

  methods: {
    sendValue(val){
      console.log('sending')
      this.$emit('val', val)
    }
  }
};
</script>