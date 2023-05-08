<template>
  <div class="">
    <button
      class="bg-blue-400 w-full py-2 px-4 hover:blue-500 font-semibold"
      @click="isOpen = !isOpen"
    >
      {{ place }}
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li v-for="option in options" :key="option.value" @click="selectOption(option)">
        <span v-if="option.name">{{ option.name }}</span>
        <span v-else>{{ option }}</span>
        <multilevel-dropdown
          class="ml-2 w-full text-center px-4 py-2 text-gray-800 hover:bg-gray-200 border-b"
          v-if="option.semesters"
          :options="option.semesters"
          @selected="onOptionSelected"
          :keep-open="true"
          place=">"
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
      default: 'Select Pofessor'
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
