import React, { useEffect, useState } from 'react';
import { Flight } from '@/lib/mockData';

interface FlightResultProps {
  flight: Flight;
}

const FormattedTime = ({ date, timezone }: { date: string, timezone: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <span className="opacity-0">--:--</span>;

  return (
    <span>
      {new Date(date).toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: timezone 
      })}
    </span>
  );
};

const FlightResult: React.FC<FlightResultProps> = ({ flight }) => {
  return (
    <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl text-white animate-fade-in-up">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-wide">{flight.airline}</h2>
          <p className="text-sm text-gray-300 font-mono">{flight.flightNumber}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
          flight.status === 'On Time' ? 'bg-green-500/20 text-green-300' :
          flight.status === 'Delayed' ? 'bg-yellow-500/20 text-yellow-300' :
          flight.status === 'Cancelled' ? 'bg-red-500/20 text-red-300' :
          'bg-blue-500/20 text-blue-300'
        }`}>
          {flight.status}
        </div>
      </div>

      <div className="flex justify-between items-center mb-8 relative">
        {/* Origin */}
        <div className="text-left">
          <div className="text-4xl font-bold mb-1">{flight.origin.code}</div>
          <div className="text-sm text-gray-300">{flight.origin.city}</div>
          <div className="text-xs text-gray-400 mt-1">
            <FormattedTime date={flight.origin.time} timezone={flight.origin.timezone} />
          </div>
        </div>

        {/* Flight Path Visual */}
        <div className="flex-1 px-4 flex flex-col items-center relative">
          <div className="text-xs text-gray-400 mb-1">{flight.duration}</div>
          <div className="w-full h-0.5 bg-white/20 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          </div>
        </div>

        {/* Destination */}
        <div className="text-right">
          <div className="text-4xl font-bold mb-1">{flight.destination.code}</div>
          <div className="text-sm text-gray-300">{flight.destination.city}</div>
          <div className="text-xs text-gray-400 mt-1">
            <FormattedTime date={flight.destination.time} timezone={flight.destination.timezone} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm border-t border-white/10 pt-4">
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Departure Timezone</p>
          <p>{flight.origin.timezone}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Arrival Timezone</p>
          <p>{flight.destination.timezone}</p>
        </div>
      </div>
    </div>
  );
};

export default FlightResult;
