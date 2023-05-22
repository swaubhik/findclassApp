<template>
  <header class="shadow py-2 px-4 flex items-center">
    <img class="w-1/4" src="@/assets/icon.png" alt="logo" />
    <h1 class="text-3xl font-bold">Find Class</h1>
  </header>
  <main>
    <div class="flex relative p-4 items-center flex-col gap-20 justify-between h-full">
      <AppSearch />
      <AppDropdown class="shadow-lg" :options="semesters" selectedValue="Select Semester" />
      <multilevel-dropdown
        :options="faculties"
        place="Select Professor"
        @selected="onOptionSelected"
        :keep-open="true"
      />
      <AppDropdown class="shadow-lg" :options="rooms" selectedValue="Select Room" />
    </div>
  </main>
</template>

<script>
import AppSearch from '@/components/AppSearch.vue'
import AppDropdown from '../components/AppDropdown.vue'
import { semesters, faculties, rooms } from '../data/data'
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
      }),
      rooms
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
