import React, { useState } from 'react';

const AdvancedSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [tag, setTag] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching with:', { searchTerm, category, tag, startDate, endDate });
  };

  return (
    <div className="p-10 bg-base-200">
      <h2 className="text-3xl font-bold mb-6">Advanced Search</h2>
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full"
        >
          <option value="">Select Category</option>
          <option value="projects">Projects</option>
          <option value="news">News</option>
          <option value="events">Events</option>
        </select>
        <input
          type="text"
          placeholder="Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="input input-bordered w-full"
        />
        <div className="flex space-x-4">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="input input-bordered w-full"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">Search</button>
      </form>
    </div>
  );
};

export default AdvancedSearch;