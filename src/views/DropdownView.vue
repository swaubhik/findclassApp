<template>
  <!-- loop all clases -->
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
          @click="findClasses(day.id)"
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
export default {
  name: 'RoomView',
  data() {
    return {
      title: null,
      days: [
        {
          id: 1,
          day: 'Mon'
        },
        {
          id: 2,
          day: 'Tue'
        },
        {
          id: 3,

          day: 'Wed'
        },
        {
          id: 4,

          day: 'Thurs'
        },
        {
          id: 5,
          day: 'Fri'
        }
      ],
      rooms: [
        {
          id: 1,
          name: 'Seminar Hall'
        },
        {
          id: 2,
          name: 'Workshop'
        }
      ],
      semesters: [
        {
          id: 'ug2',
          name: 'Degree Semester 2',
          days: [
            {
              id: 1,
              day: 'Mon',
              classes: [
                {
                  id: 1,
                  time: '8:30 AM - 9:30 AM',
                  subject: 'UMCD 204',
                  teacher: 'ABP',
                  room: 'Seminar Hall'
                },
                {
                  id: 2,
                  time: '10:30 AM - 11:30 AM',
                  subject: 'UMCD 201',
                  teacher: 'SDN',
                  room: 'Seminar Hall'
                },
                {
                  id: 3,
                  time: '11:30 AM - 12:30 PM',
                  subject: 'UHSS 201 Lab',
                  teacher: 'JDHB',
                  room: 'Workshop'
                },
                {
                  id: 4,
                  isBreak: true
                }
              ]
            },
            {
              id: 2,
              day: 'Tue',
              classes: [
                {
                  id: 1,
                  time: '9:30 AM - 10:30 AM',
                  subject: 'UMCD 201',
                  teacher: 'SDN',
                  room: 'Seminar Hall'
                },
                {
                  id: 2,
                  time: '10:30 AM - 11:30 AM',
                  subject: 'UMCD 202',
                  teacher: 'DKB',
                  room: 'Seminar Hall'
                },
                {
                  id: 3,
                  time: '11:30 AM - 12:30 PM',
                  subject: 'UHSS 201 Lab',
                  teacher: 'JDHB',
                  room: 'Workshop'
                },
                {
                  id: 4,
                  isBreak: true
                }
              ]
            }
          ]
        },
        {
          id: 'ug4',
          name: 'Degree Semester 4',
          days: [
            {
              id: 1,
              day: 'Mon',
              classes: [
                {
                  id: 1,
                  time: '8:30 AM - 9:30 AM',
                  subject: 'UMCD 204',
                  teacher: 'ABP',
                  room: 'Seminar Hall'
                },
                {
                  id: 2,
                  time: '10:30 AM - 11:30 AM',
                  subject: 'UMCD 201',
                  teacher: 'SDN',
                  room: 'Seminar Hall'
                },
                {
                  id: 3,
                  time: '11:30 AM - 12:30 PM',
                  subject: 'UHSS 201 Lab',
                  teacher: 'JDHB',
                  room: 'Workshop'
                },
                {
                  id: 4,
                  isBreak: true
                }
              ]
            },
            {
              id: 2,
              day: 'Tue',
              classes: [
                {
                  id: 1,
                  time: '9:30 AM - 10:30 AM',
                  subject: 'UMCD 201',
                  teacher: 'SDN',
                  room: 'Seminar Hall'
                },
                {
                  id: 2,
                  time: '10:30 AM - 11:30 AM',
                  subject: 'UMCD 202',
                  teacher: 'DKB',
                  room: 'Seminar Hall'
                },
                {
                  id: 3,
                  time: '11:30 AM - 12:30 PM',
                  subject: 'UHSS 201 Lab',
                  teacher: 'JDHB',
                  room: 'Workshop'
                },
                {
                  id: 4,
                  isBreak: true
                }
              ]
            }
          ]
        },
        {
          id: 'ug6',
          name: 'Degree Semester 6'
        },
        {
          id: 'ug8',
          name: 'Degree Semester 8'
        },
        {
          id: 'pg2',
          name: 'Masters Semester 2',
          days: [
            {
              id: 1,
              day: 'Mon',
              classes: [
                {
                  id: 1,
                  time: '8:30 AM - 12:30 PM',
                  subject: 'PMCD 211',
                  teacher: 'SDN',
                  room: 'Seminar Hall'
                },
                {
                  id: 2,
                  isBreak: true
                },
                {
                  id: 3,
                  time: '1:30 PM - 3:30 PM',
                  subject: 'PMCD 212',
                  teacher: 'SMR',
                  room: 'Seminar Hall'
                }
              ]
            },
            {
              id: 2,
              day: 'Tue',
              classes: [
                {
                  id: 1,
                  time: '10:30 AM - 12:30 PM',
                  subject: 'PMCD 212 Lab',
                  teacher: 'SMR',
                  room: 'Workshop'
                },
                {
                  id: 2,
                  isBreak: true
                },
                {
                  id: 3,
                  time: '1:30 PM - 3:30 PM',
                  subject: 'PMCD 211 Lab',
                  teacher: 'SDN',
                  room: 'Workshop'
                }
              ]
            }
          ]
        },
        {
          id: 'pg4',
          name: 'Masters Semester 4',
          days: [
            {
              id: 1,
              day: 'Mon',
              classes: [
                {
                  id: 1,
                  time: '9:30 AM - 11:30 AM',
                  subject: 'PMCD 471',
                  teacher: 'ALL',
                  room: 'Seminar Hall'
                },
                {
                  id: 2,
                  isBreak: true
                }
              ]
            },
            {
              id: 2,
              day: 'Tue',
              classes: [
                {
                  id: 1,
                  time: '9:30 AM - 11:30 AM',
                  subject: 'PMCD 471',
                  teacher: 'ALL',
                  room: 'Seminar Hall'
                },
                {
                  id: 2,
                  isBreak: true
                }
              ]
            }
          ]
        }
      ],
      activeItem: null,
      showClass: []
    }
  },
  created() {
    let roomid = 1
    console.log(roomid)
    // find the room by id
    let room = this.rooms.find((room) => {
      return room.id == roomid
    })
    console.log(room.name)
    this.title = room.name
  },
  methods: {
    findClasses(dayValue) {
      this.activeItem = dayValue
      let id = 1
      let room = this.rooms.find((room) => {
        return room.id == id
      })
      let roomname = room.name
      // find classes on room by day
      this.semesters.forEach((semester) => {
        if (semester.days) {
          semester.days.forEach((day) => {
            if (day.id === dayValue) {
              day.classes.forEach((classItem) => {
                if (classItem.room == roomname) {
                  this.showClass.push(classItem)
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
