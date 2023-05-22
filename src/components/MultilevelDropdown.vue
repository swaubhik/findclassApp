<template>
  <div class="relative">
    <button
      class="text-gray-800 font-bold py-2 rounded inline-flex justify-between"
      @click="isOpen = !isOpen"
      :class="place == '' ? 'w-28' : 'bg-blue-400 w-64 hover:bg-blue-500 px-4'"
    >
      <span>{{ place }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
        :class="{ 'rotate-90': isOpen }"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>
    <ul v-if="isOpen" class="absolute z-50 bg-white py-2 shadow-lg rounded mt-1">
      <li
        class="flex justify-between items-center text-center px-4 py-2 text-gray-800 hover:bg-gray-200 border-b"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        <span v-if="option.name">{{ option.name }}</span>
        <span v-else>{{ option }}</span>
        <multilevel-dropdown
          class="ml-2 w-full text-center px-4 py-2 text-gray-800"
          v-if="option.semesters"
          :options="option.semesters"
          @selected="onOptionSelected"
          :keep-open="true"
          place=""
        ></multilevel-dropdown>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MultilevelDropdown',
  props: {
    options: {
      type: Object,
      required: true
    },
    keepOpen: {
      type: Boolean,
      default: false
    },
    place: {
      type: String,
      default: 'Select'
    }
  },
  data() {
    return {
      isOpen: false,
      selectedTeacher: null
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('selected', option)
      this.selectedTeacher = option.code
      if (!this.keepOpen) {
        this.isOpen = false
      }
    },
    onOptionSelected(option) {
      this.$emit('selected', option)
      // redirect to teacher page with semesterid as params and show all the coureces for that teacher.name
      this.$router.push({
        name: 'teacher',
        params: { code: this.selectedTeacher, sem: option.name }
      })
    }
  }
}
</script>
