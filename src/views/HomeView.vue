<template>
  <header class="shadow py-2 px-4">
    <h1>Find Class</h1>
  </header>
  <main>
    <div class="flex p-4 items-center flex-col justify-between h-full">
      <AppSearch />
      <AppDropdown :options="semesters" selectedValue="Select Semester" />
    </div>
  </main>
</template>

<script>
import AppSearch from '@/components/AppSearch.vue'
import AppDropdown from '../components/AppDropdown.vue'
import { semesters } from '../data/data'
export default {
  name: 'HomeView',
  components: {
    AppSearch,
    AppDropdown
  },
  data() {
    return {
      semesters
    }
  }
}
</script>
