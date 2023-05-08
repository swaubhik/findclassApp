<template>
  <header class="shadow py-2 px-4">
    <h1>Find Class</h1>
  </header>
  <main>
    <div class="flex p-4 items-center flex-col justify-between h-full">
      <AppSearch />
      <AppDropdown :options="semesters" selectedValue="Select Semester" />
      <multilevel-dropdown :options="faculties" @selected="onOptionSelected" :keep-open="true" />
    </div>
  </main>
</template>

<script>
import AppSearch from '@/components/AppSearch.vue'
import AppDropdown from '../components/AppDropdown.vue'
import { semesters, faculties } from '../data/data'
import MultilevelDropdown from '../components/MultilevelDropdown.vue'
export default {
  name: 'HomeView',
  components: {
    AppSearch,
    AppDropdown,
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
    toggleDropdownMenu() {
      this.dropdownMenu.value.toggle()
    },
    onOptionSelected(option) {
      console.log('Selected option:', option)
    }
  }
}
</script>
