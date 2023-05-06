<template>
  <div class="about">
    <div class="flex">
      <!-- go back btn -->
      <router-link class="flex items-center" :to="{ name: 'home' }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 4.354a.5.5 0 010 .708L8.707 8l2.647 2.646a.5.5 0
              01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5
              0 01.708 0z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M4.5 8a.5.5 0 01.5-.5h6a.5.5
              0 010 1h-6a.5.5 0 01-.5-.5z"
            clip-rule="evenodd"
          />
        </svg>
        <h1>{{ title }}</h1></router-link
      >
    </div>
  </div>
</template>
<script>
import { semesters } from '../data/data.js'
export default {
  name: 'RoutineView',
  data() {
    return {
      title: null,
      semesters
    }
  },
  created() {
    let id = this.$route.params.id
    // find the semester by id
    var semester = this.semesters.find((semester) => {
      console.log(semester.title, id)
      return semester.id === id
    })
    this.title = semester.name
  }
}
</script>
