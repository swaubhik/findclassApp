<template>
  <div class="px-2">
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
    <!-- render days -->
    <div class="flex flex-col mt-4">
      <p v-if="!activeItem" class="font-light px-4 mb-2 animate-pulse">
        Please select a day to view classes
      </p>
      <div class="px-4 py-2 rounded-xl gap-2 flex bg-gray-100 shadow-lg">
        <button
          v-for="day in days"
          :key="day.id"
          class="p-2 rounded-full w-14 bg-blue-300 font-semibold shadow"
          @click="findClassesT(day.id)"
          :class="{ 'bg-blue-500 font-bold': activeItem === day.id }"
        >
          {{ day.day }}
        </button>
      </div>
    </div>
    <div class="flex flex-col itmes-center text-lg justify-center mt-2">
      <div v-for="i in showClass" :key="i.id">
        <div class="flex flex-col items-center p-2 w-full">
          <div
            v-if="!i.isBreak"
            class="flex flex-col w-full p-1 border-2 border-gray-500 rounded-lg"
          >
            <div class="font-semibold">
              <p>{{ i.subject }}</p>
            </div>
            <div class="text-gray-600 border-b">
              <p>{{ i.time }}</p>
            </div>
            <div class="flex justify-between mt-1">
              <span>{{ i.teacher }}</span>
              <span class="font-bold">Period {{ i.id }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { semesters, days } from '../data/data.js'
export default {
  name: 'RoutineView',
  data() {
    return {
      title: null,
      semesters,
      days,
      activeItem: null,
      showClass: [],
      teacher: this.$route.params.code
    }
  },
  created() {
    this.title = this.$route.params.sem
  },
  methods: {
    // find all the classes from the semester for teacher code and day
    findClassesT(day) {
      this.activeItem = day
      this.showClass = []
      this.semesters.forEach((sem) => {
        if (sem.name === this.title) {
          sem.days.forEach((d) => {
            if (d.id === day) {
              d.classes.forEach((c) => {
                if (c.teacher === this.teacher) {
                  this.showClass.push(c)
                }
              })
            }
          })
        }
      })
    }
  }
}
</script>
