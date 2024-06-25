import React, { useState, useEffect } from 'react';

const AutocompleteSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Mock data for suggestions
  const mockSuggestions = [
    'Clean Water Initiative',
    'Educational Programs',
    'Healthcare Services',
    'Community Development',
    'Volunteer Opportunities',
    'Donation Programs'
  ];

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredSuggestions = mockSuggestions.filter(
        suggestion => suggestion.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSearch = (term) => {
    console.log('Searching for:', term);
    // Implement actual search logic here
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input input-bordered w-full"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSearchTerm(suggestion);
                handleSearch(suggestion);
                setSuggestions([]);
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteSearch;