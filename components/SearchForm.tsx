'use client';

import React, { useState } from 'react';
import { Flight } from '@/lib/mockData';

interface SearchFormProps {
  onSearch: (flight: Flight | null) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    onSearch(null);

    try {
      const response = await fetch(`/api/flights?query=${encodeURIComponent(query)}`);
      const data = await response.json();

      if (response.ok) {
        onSearch(data);
      } else {
        setError(data.error || 'Flight not found');
      }
    } catch (err) {
      setError('An error occurred while fetching flight data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mb-8">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter Flight Number (e.g., AA123)"
          className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all shadow-lg backdrop-blur-sm"
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full px-6 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {error && (
        <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-200 text-sm text-center animate-fade-in">
          {error}
        </div>
      )}
    </div>
  );
};

export default SearchForm;
