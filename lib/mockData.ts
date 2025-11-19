export interface Flight {
  flightNumber: string;
  airline: string;
  origin: {
    code: string;
    city: string;
    time: string; // ISO string
    timezone: string;
  };
  destination: {
    code: string;
    city: string;
    time: string; // ISO string
    timezone: string;
  };
  status: 'On Time' | 'Delayed' | 'Cancelled' | 'Arrived' | 'Scheduled';
  duration: string;
}

export const mockFlights: Flight[] = [
  // US Domestic
  {
    flightNumber: 'AA100',
    airline: 'American Airlines',
    origin: { code: 'JFK', city: 'New York', time: '2023-11-20T18:00:00', timezone: 'America/New_York' },
    destination: { code: 'LHR', city: 'London', time: '2023-11-21T06:00:00', timezone: 'Europe/London' },
    status: 'On Time',
    duration: '7h 00m',
  },
  {
    flightNumber: 'DL405',
    airline: 'Delta Air Lines',
    origin: { code: 'JFK', city: 'New York', time: '2023-11-20T16:30:00', timezone: 'America/New_York' },
    destination: { code: 'CDG', city: 'Paris', time: '2023-11-21T06:00:00', timezone: 'Europe/Paris' },
    status: 'Delayed',
    duration: '7h 30m',
  },
  {
    flightNumber: 'UA80',
    airline: 'United Airlines',
    origin: { code: 'EWR', city: 'Newark', time: '2023-11-20T15:00:00', timezone: 'America/New_York' },
    destination: { code: 'MAN', city: 'Manchester', time: '2023-11-21T02:45:00', timezone: 'Europe/London' },
    status: 'On Time',
    duration: '6h 45m',
  },
  {
    flightNumber: 'B6123',
    airline: 'JetBlue',
    origin: { code: 'BOS', city: 'Boston', time: '2023-11-20T07:00:00', timezone: 'America/New_York' },
    destination: { code: 'LAX', city: 'Los Angeles', time: '2023-11-20T10:30:00', timezone: 'America/Los_Angeles' },
    status: 'On Time',
    duration: '6h 30m',
  },
  {
    flightNumber: 'AS450',
    airline: 'Alaska Airlines',
    origin: { code: 'SEA', city: 'Seattle', time: '2023-11-20T09:00:00', timezone: 'America/Los_Angeles' },
    destination: { code: 'JFK', city: 'New York', time: '2023-11-20T17:30:00', timezone: 'America/New_York' },
    status: 'On Time',
    duration: '5h 30m',
  },
  {
    flightNumber: 'WN500',
    airline: 'Southwest Airlines',
    origin: { code: 'DAL', city: 'Dallas', time: '2023-11-20T10:00:00', timezone: 'America/Chicago' },
    destination: { code: 'HOU', city: 'Houston', time: '2023-11-20T11:00:00', timezone: 'America/Chicago' },
    status: 'On Time',
    duration: '1h 00m',
  },
  
  // International - Europe
  {
    flightNumber: 'BA112',
    airline: 'British Airways',
    origin: { code: 'JFK', city: 'New York', time: '2023-11-20T18:30:00', timezone: 'America/New_York' },
    destination: { code: 'LHR', city: 'London', time: '2023-11-21T06:30:00', timezone: 'Europe/London' },
    status: 'On Time',
    duration: '7h 00m',
  },
  {
    flightNumber: 'AF007',
    airline: 'Air France',
    origin: { code: 'JFK', city: 'New York', time: '2023-11-20T19:00:00', timezone: 'America/New_York' },
    destination: { code: 'CDG', city: 'Paris', time: '2023-11-21T08:30:00', timezone: 'Europe/Paris' },
    status: 'Delayed',
    duration: '7h 30m',
  },
  {
    flightNumber: 'LH401',
    airline: 'Lufthansa',
    origin: { code: 'JFK', city: 'New York', time: '2023-11-20T15:55:00', timezone: 'America/New_York' },
    destination: { code: 'FRA', city: 'Frankfurt', time: '2023-11-21T05:30:00', timezone: 'Europe/Berlin' },
    status: 'On Time',
    duration: '7h 35m',
  },
  {
    flightNumber: 'LX15',
    airline: 'Swiss International Air Lines',
    origin: { code: 'JFK', city: 'New York', time: '2023-11-20T20:55:00', timezone: 'America/New_York' },
    destination: { code: 'ZRH', city: 'Zurich', time: '2023-11-21T10:40:00', timezone: 'Europe/Zurich' },
    status: 'On Time',
    duration: '7h 45m',
  },
  {
    flightNumber: 'VS4',
    airline: 'Virgin Atlantic',
    origin: { code: 'JFK', city: 'New York', time: '2023-11-20T18:00:00', timezone: 'America/New_York' },
    destination: { code: 'LHR', city: 'London', time: '2023-11-21T06:25:00', timezone: 'Europe/London' },
    status: 'Cancelled',
    duration: '7h 25m',
  },

  // International - Asia
  {
    flightNumber: 'SQ23',
    airline: 'Singapore Airlines',
    origin: { code: 'JFK', city: 'New York', time: '2023-11-20T22:30:00', timezone: 'America/New_York' },
    destination: { code: 'SIN', city: 'Singapore', time: '2023-11-22T05:00:00', timezone: 'Asia/Singapore' },
    status: 'On Time',
    duration: '18h 30m',
  },
  {
    flightNumber: 'JL5',
    airline: 'Japan Airlines',
    origin: { code: 'JFK', city: 'New York', time: '2023-11-20T13:25:00', timezone: 'America/New_York' },
    destination: { code: 'HND', city: 'Tokyo', time: '2023-11-21T17:15:00', timezone: 'Asia/Tokyo' },
    status: 'On Time',
    duration: '14h 50m',
  },
  {
    flightNumber: 'NH109',
    airline: 'All Nippon Airways',
    origin: { code: 'JFK', city: 'New York', time: '2023-11-20T16:55:00', timezone: 'America/New_York' },
    destination: { code: 'HND', city: 'Tokyo', time: '2023-11-21T21:10:00', timezone: 'Asia/Tokyo' },
    status: 'Delayed',
    duration: '15h 15m',
  },
  {
    flightNumber: 'CX841',
    airline: 'Cathay Pacific',
    origin: { code: 'JFK', city: 'New York', time: '2023-11-20T10:00:00', timezone: 'America/New_York' },
    destination: { code: 'HKG', city: 'Hong Kong', time: '2023-11-21T14:00:00', timezone: 'Asia/Hong_Kong' },
    status: 'On Time',
    duration: '16h 00m',
  },
  {
    flightNumber: 'KE82',
    airline: 'Korean Air',
    origin: { code: 'JFK', city: 'New York', time: '2023-11-20T14:00:00', timezone: 'America/New_York' },
    destination: { code: 'ICN', city: 'Seoul', time: '2023-11-21T17:20:00', timezone: 'Asia/Seoul' },
    status: 'On Time',
    duration: '15h 20m',
  },

  // International - Middle East
  {
    flightNumber: 'EK202',
    airline: 'Emirates',
    origin: { code: 'JFK', city: 'New York', time: '2023-11-20T23:00:00', timezone: 'America/New_York' },
    destination: { code: 'DXB', city: 'Dubai', time: '2023-11-21T19:45:00', timezone: 'Asia/Dubai' },
    status: 'On Time',
    duration: '12h 45m',
  },
  {
    flightNumber: 'QR702',
    airline: 'Qatar Airways',
    origin: { code: 'JFK', city: 'New York', time: '2023-11-20T21:00:00', timezone: 'America/New_York' },
    destination: { code: 'DOH', city: 'Doha', time: '2023-11-21T17:30:00', timezone: 'Asia/Qatar' },
    status: 'On Time',
    duration: '12h 30m',
  },
  {
    flightNumber: 'EY100',
    airline: 'Etihad Airways',
    origin: { code: 'JFK', city: 'New York', time: '2023-11-20T22:00:00', timezone: 'America/New_York' },
    destination: { code: 'AUH', city: 'Abu Dhabi', time: '2023-11-21T19:30:00', timezone: 'Asia/Dubai' },
    status: 'On Time',
    duration: '12h 30m',
  },

  // Oceania
  {
    flightNumber: 'QF12',
    airline: 'Qantas',
    origin: { code: 'LAX', city: 'Los Angeles', time: '2023-11-20T22:30:00', timezone: 'America/Los_Angeles' },
    destination: { code: 'SYD', city: 'Sydney', time: '2023-11-22T08:20:00', timezone: 'Australia/Sydney' },
    status: 'On Time',
    duration: '14h 50m',
  },
  {
    flightNumber: 'NZ5',
    airline: 'Air New Zealand',
    origin: { code: 'LAX', city: 'Los Angeles', time: '2023-11-20T21:00:00', timezone: 'America/Los_Angeles' },
    destination: { code: 'AKL', city: 'Auckland', time: '2023-11-22T06:00:00', timezone: 'Pacific/Auckland' },
    status: 'On Time',
    duration: '13h 00m',
  },
];
