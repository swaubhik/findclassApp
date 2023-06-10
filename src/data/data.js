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
    name: 'Abhijit Padun',
    color: '#C1FFF0'
  },
  {
    id: 2,
    code: 'SDN',
    name: 'Swarnadeep Nath',
    color: '#B1E0FF'
  },
  {
    id: 3,
    code: 'JDHB',
    name: 'JD Herembeswar Basumatary',
    color: '#BFF9CB'
  },
  {
    id: 4,
    code: 'DKB',
    name: 'Debarshi Kr. Brahma',
    color: '#FBBDE5'
  },
  {
    id: 5,
    code: 'SMR',
    name: 'Susmita Roy',
    color: '#F8BBD0'
  },
  {
    id: 6,
    code: 'RKG',
    name: 'Ramakrisnan Ganji',
    color: '#DFC2FE'
  }
]
const rooms = [
  {
    id: 1,
    name: 'Seminar Hall'
  },
  {
    id: 2,
    name: 'Workshop'
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
          },
          {
            id: 5,
            time: '1:30 PM - 3:30 PM',
            subject: 'UMCD 274',
            teacher: 'ABP',
            room: 'Seminar Hall'
          },
          {
            id: 6,
            time: '3:30 PM - 5:30 PM',
            subject: 'UMCD 291 Lab',
            teacher: 'ABP',
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
      },
      {
        id: 3,
        day: 'Wed',
        classes: [
          {
            id: 1,
            time: '9:30 AM - 10:30 AM',
            subject: 'UMCD 203',
            teacher: 'SMR',
            room: 'Seminar Hall'
          },
          {
            id: 2,
            time: '10:30 AM - 12:30 PM',
            subject: 'UMCD 203 Lab',
            teacher: 'SMR',
            room: 'Workshop'
          }
        ]
      },
      {
        id: 4,
        day: 'Thurs',
        classes: [
          {
            id: 1,
            time: '9:30 AM - 10:30 PM',
            subject: 'UMCD 203 ',
            teacher: 'SMR',

            room: 'Seminar Hall'
          },
          {
            id: 2,

            time: '10:30 AM - 12:30 PM',
            subject: 'UMCD 472 ',
            teacher: 'RKG',
            room: 'Seminar Hall'
          },
          {
            id: 3,

            time: '1:30 PM - 2:30 PM',
            subject: 'UMCD 202 ',
            teacher: 'DKB',
            room: 'Seminar Hall'
          },

          {
            id: 4,
            time: '2:30 PM - 3:30 PM',
            subject: 'UMCD 202 LAB ',
            teacher: 'DKB',
            room: 'Workshop'
          }
        ]
      },
      {
        id: 5,
        day: 'Fri',
        classes: [
          {
            id: 1,
            time: '9:30 AM - 10:30 AM',
            subject: 'UMCD 291',
            teacher: 'ABP',
            room: 'Seminar Hall'
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
          },
          {
            id: 5,
            time: '1:30 PM - 3:30 PM',
            subject: 'UMCD 271 LAB',
            teacher: 'BKS',
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
          },
          {
            id: 5,
            time: '1:30 PM - 4:30 PM',
            subject: 'UMCD 412',
            teacher: 'DKS',
            room: 'Seminar Hall'
          }
        ]
      },
      {
        id: 3,
        day: 'Wed',
        classes: [
          {
            id: 1,
            time: '9:30 AM - 10:30 AM',
            subject: 'UMCD 404',
            teacher: 'SBR',
            room: 'Seminar Hall'
          },
          {
            id: 2,
            time: '10:30 AM - 12:30 PM',
            subject: 'UMCD 474 Lab',
            teacher: 'SBR',
            room: 'Workshop'
          },
          {
            id: 3,
            time: '1:30 PM - 2:30 PM',
            subject: 'UMCD 473 LAB',
            teacher: 'ABP',
            room: 'Workshop'
          },
          {
            id: 4,
            time: '2:30 PM - 5:30 PM',
            subject: 'UMCD 491',
            teacher: 'SDN',

            room: 'Seminar Hall'
          }
        ]
      },
      {
        id: 4,
        day: 'Thurs',
        classes: [
          {
            id: 1,
            time: '9:30 AM - 11:30 AM',
            subject: 'UMCD 491',
            teacher: 'SDN',
            room: 'Seminar Hall'
          },
          {
            id: 2,
            time: '1:30 AM - 5:30 PM',
            subject: 'UMCD 413',
            teacher: 'RKG',
            room: 'Seminar Hall'
          }
        ]
      },
      {
        id: 5,
        day: 'Fri',
        classes: [
          {
            id: 1,
            time: '9:30 AM - 12:30 PM',
            subject: 'UMCD 411',
            teacher: 'SMR',
            room: 'Seminar Hall'
          },
          {
            id: 2,
            time: '1:30 PM - 2:30 PM',
            subject: 'UMCD 402',
            teacher: 'RKG',
            room: 'Seminar Hall'
          },
          {
            id: 3,
            time: '2:30 PM - 4:30 PM',
            subject: 'UMCD 472',
            teacher: 'RKG',
            room: 'Seminar Hall'
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
]

export { days, semesters, faculties, rooms }
