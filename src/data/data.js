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
            teacher: 'ABP'
          },
          {
            id: 2,
            time: '10:30 AM - 11:30 AM',
            subject: 'UMCD 201',
            teacher: 'SDN'
          },
          {
            id: 3,
            time: '11:30 AM - 12:30 PM',
            subject: 'UHSS 201 Lab',
            teacher: 'JDHB'
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
            teacher: 'SDN'
          },
          {
            id: 2,
            time: '10:30 AM - 11:30 AM',
            subject: 'UMCD 202',
            teacher: 'DKB'
          },
          {
            id: 3,
            time: '11:30 AM - 12:30 PM',
            subject: 'UHSS 201 Lab',
            teacher: 'JDHB'
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
            teacher: 'ABP'
          },
          {
            id: 2,
            time: '10:30 AM - 11:30 AM',
            subject: 'UMCD 201',
            teacher: 'SDN'
          },
          {
            id: 3,
            time: '11:30 AM - 12:30 PM',
            subject: 'UHSS 201 Lab',
            teacher: 'JDHB'
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
            teacher: 'SDN'
          },
          {
            id: 2,
            time: '10:30 AM - 11:30 AM',
            subject: 'UMCD 202',
            teacher: 'DKB'
          },
          {
            id: 3,
            time: '11:30 AM - 12:30 PM',
            subject: 'UHSS 201 Lab',
            teacher: 'JDHB'
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
            teacher: 'SDN'
          },
          {
            id: 2,
            isBreak: true
          },
          {
            id: 3,
            time: '1:30 PM - 3:30 PM',
            subject: 'PMCD 212',
            teacher: 'SMR'
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
            teacher: 'SMR'
          },
          {
            id: 2,
            isBreak: true
          },
          {
            id: 3,
            time: '1:30 PM - 3:30 PM',
            subject: 'PMCD 211 Lab',
            teacher: 'SDN'
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
            teacher: 'ALL'
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
            teacher: 'ALL'
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

export { days, semesters }
