const DUMMY_EVENTS = [
    {
      id: 'e1',
      name: 'GBEMINIYI AJAKAIYE',
      accStatus: 'ACTIVE', 
      accType: 'Savings Account',
      availableBal: '$905,320.70',
      image: 'images/man-3.jpg',
      isEnrolled: false,
    },
    {
      id: 'e2',
      name: 'ADAUGO NWUZOR',
      accStatus: 'ACTIVE',    
      accType: 'Savings Account',
      availableBal: 'N700,175.20',
      image: 'images/woman-1.jpg',
      isEnrolled: true,
    },
    {
      id: 'e3',
      name: 'JOHNSON EMMANUEL',
      accStatus: 'ACTIVE', 
      accType: 'Current Account',
      availableBal: 'N1,085,060.38',
      image: 'images/man-4.jpg',
      isEnrolled: false,
    },
    {
      id: 'e4',
      name: 'SEKINAT BELLO',
      accStatus: 'ACTIVE', 
      accType: 'Current Account',
      availableBal: '$1,501,075.40',
      image: 'images/woman-3.jpg',
      isEnrolled: true,
    },
    {
      id: 'e5',
      name: 'KUBURA OLUTOLA',
      accStatus: 'ACTIVE', 
      accType: 'Savings Account',
      availableBal: 'N566,005.20',
      image: 'images/man-2.jpg',
      isEnrolled: true,
    },
    {
      id: 'e6',
      name: 'JOLAYEMI ADENIYAN',
      accStatus: 'ACTIVE', 
      accType: 'Savings Account',
      availableBal: '$1,050,045.10',
      image: 'images/woman-2.jpg',
      isEnrolled: true,
    },
];

export function getAllEvent(){
  return DUMMY_EVENTS
}
export function getEnrolledEvent() {
  return DUMMY_EVENTS.filter((profile)=>profile.isEnrolled);
}

export function getEventById(primaryKey) {
  return DUMMY_EVENTS.find((profile) => profile.id === primaryKey);
}