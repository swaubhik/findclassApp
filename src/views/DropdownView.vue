<template>
  <multilevel-dropdown :options="faculties" @selected="onOptionSelected" :keep-open="true" />
</template>

<script>
import MultilevelDropdown from '../components/MultilevelDropdown.vue'
import { semesters, faculties } from '../data/data'
export default {
  components: {
    MultilevelDropdown
  },
  data() {
    return {
      semesters,
      faculties: faculties.map((faculty) => {
        return {
          ...faculty,
          // pass semester name and id to the faculty.semesters array
          semesters: semesters.map((semester) => {
            return {
              name: semester.name,
              id: semester.id
            }
          })
        }
      })
    }
  },
  methods: {
    onOptionSelected(option) {
      console.log('Selected option:', option)
    }
  }
}
</script>
