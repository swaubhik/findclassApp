<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="bg-blue-400 hover:bg-blue-500 text-gray-800 font-bold py-2 px-4 rounded flex w-64 items-center text-center justify-between"
    >
      <span>{{ selected }}</span>
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M6 8l4 4 4-4" :class="{ 'rotate-180': isOpen }"></path>
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute z-50 bg-white py-2 w-full shadow-lg rounded mt-1 h-32 overflow-auto"
    >
      <button
        v-for="(option, index) in options"
        :key="index"
        @click="selectOption(option)"
        class="w-full text-center px-4 py-2 text-gray-800 hover:bg-gray-200 border-b"
      >
        {{ option.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedValue: {
      type: String,
      default: 'Select an option'
    },
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selected: this.selectedValue,
      isOpen: false
    }
  },

  methods: {
    selectOption(option) {
      this.selected = option.name
      this.isOpen = false
      //   push to router
      this.$router.push({ name: 'routine', params: { id: option.id } })
    }
  }
}
</script>

<style>
/* No styles needed for this component */
</style>
