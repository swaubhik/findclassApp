const days = [
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
]
const faculties = [
  {
    id: 1,
    code: 'ABP',
    name: 'Abhijit Padun'
  },
  {
    id: 2,
    code: 'SDN',
    name: 'Swarnadeep Nath'
  },
  {
    id: 3,
    code: 'JDHB',
    name: 'Susmita Roy'
  },
  {
    id: 4,
    code: 'DKB',
    name: 'Debarshi Kr. Brahma'
  }
]
const semesters = [
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
            room: 'Lab 1'
          },
          {
            id: 2,
            time: '10:30 AM - 11:30 AM',
            subject: 'UMCD 201',
            teacher: 'SDN',
            room: 'Lab 2'
          },
          {
            id: 3,
            time: '11:30 AM - 12:30 PM',
            subject: 'UHSS 201 Lab',
            teacher: 'JDHB',
            room:'Lab 1'
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
            room: 'Lab 1'
          },
          {
            id: 2,
            time: '10:30 AM - 11:30 AM',
            subject: 'UMCD 202',
            teacher: 'DKB',
            room: 'Lab 2'
          },
          {
            id: 3,
            time: '11:30 AM - 12:30 PM',
            subject: 'UHSS 201 Lab',
            teacher: 'JDHB',
            room: 'Seminar Hall'
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
            room: 'Lab 2'
          },
          {
            id: 2,
            time: '10:30 AM - 11:30 AM',
            subject: 'UMCD 201',
            teacher: 'SDN',
            room: 'Lab 1'
          },
          {
            id: 3,
            time: '11:30 AM - 12:30 PM',
            subject: 'UHSS 201 Lab',
            teacher: 'JDHB',
            room: 'Seminar Hall'
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
            room: 'Lab 1'
          },
          {
            id: 2,
            time: '10:30 AM - 11:30 AM',
            subject: 'UMCD 202',
            teacher: 'DKB',
            room: 'Lab 2'
          },
          {
            id: 3,
            time: '11:30 AM - 12:30 PM',
            subject: 'UHSS 201 Lab',
            teacher: 'JDHB',
            room: 'Seminar Hall'
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
            room: 'Workshop'
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
            room: 'Seminar Hall'
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
]

export { days, semesters, faculties }
