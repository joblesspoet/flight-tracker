'use client';

import React, { useState } from 'react';
import SearchForm from '@/components/SearchForm';
import FlightResult from '@/components/FlightResult';
import { Flight } from '@/lib/mockData';

export default function Home() {
  const [flight, setFlight] = useState<Flight | null>(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
          Flight Tracker
        </h1>
        <p className="text-gray-400 text-lg">
          Real-time flight status at your fingertips.
        </p>
      </div>

      <SearchForm onSearch={setFlight} />

      {flight && <FlightResult flight={flight} />}
    </main>
  );
}
