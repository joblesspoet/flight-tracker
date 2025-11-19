import { NextResponse } from 'next/server';
import { mockFlights, Flight } from '@/lib/mockData';

const AVIATION_STACK_KEY = process.env.AVIATION_STACK_KEY;
const AVIATION_STACK_URL = 'http://api.aviationstack.com/v1/flights';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  const normalizedQuery = query.toUpperCase().trim();

  // 1. Try AviationStack API if key is present
  if (AVIATION_STACK_KEY) {
    try {
      const response = await fetch(`${AVIATION_STACK_URL}?access_key=${AVIATION_STACK_KEY}_iata=${normalizedQuery}`);
      const data = await response.json();

      if (data.data && data.data.length > 0) {
        const flightData = data.data[0];
        
        // Transform AviationStack data to our Flight interface
        const flight: Flight = {
          flightNumber: flightData.flight.iata,
          airline: flightData.airline.name,
          origin: {
            code: flightData.departure.iata,
            city: flightData.departure.airport, // AviationStack might not give city directly in all tiers, using airport name as fallback
            time: flightData.departure.scheduled,
            timezone: flightData.departure.timezone,
          },
          destination: {
            code: flightData.arrival.iata,
            city: flightData.arrival.airport,
            time: flightData.arrival.scheduled,
            timezone: flightData.arrival.timezone,
          },
          status: flightData.flight_status === 'active' ? 'On Time' : 
                  flightData.flight_status === 'scheduled' ? 'Scheduled' :
                  flightData.flight_status === 'landed' ? 'Arrived' :
                  flightData.flight_status === 'cancelled' ? 'Cancelled' : 'Delayed',
          duration: 'N/A', // AviationStack free tier might not calculate this easily
        };

        return NextResponse.json(flight);
      }
    } catch (error) {
      console.error('AviationStack API Error:', error);
      // Fallback to mock data on error
    }
  }

  // 2. Fallback to Mock Data
  // Simulate network delay for realism
  await new Promise(resolve => setTimeout(resolve, 500));

  const flight = mockFlights.find((f) => f.flightNumber === normalizedQuery);

  if (flight) {
    return NextResponse.json(flight);
  } else {
    return NextResponse.json({ error: 'Flight not found' }, { status: 404 });
  }
}
