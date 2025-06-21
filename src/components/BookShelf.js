import React, { useState } from 'react';
import Select from 'react-select';
import { autismBooks } from '../data/books';
import { bookImages } from '../assets/bookimages';

function BookShelf() {
  const [selectedTags, setSelectedTags] = useState([]);

  if (!autismBooks || !Array.isArray(autismBooks)) {
    return <p className="text-red-500">No books available.</p>;
  }

  // Generate unique tag options
  const tagOptions = Array.from(
    new Set(autismBooks.flatMap(book => book.tags || []))
  ).map(tag => ({ value: tag, label: tag }));

  // Filter books by selected tags
  const filteredBooks =
    selectedTags.length === 0
      ? autismBooks
      : autismBooks.filter(book =>
          selectedTags.every(tag => book.tags?.includes(tag.value))
        );

  return (
    <div className="max-w-7xl mx-auto px-4">

      <div className="mb-8">
        <label className="block font-semibold text-gray-700 mb-2">Filter by Tags:</label>
        <Select
          isMulti
          options={tagOptions}
          value={selectedTags}
          onChange={setSelectedTags}
          className="text-black"
          placeholder="Select tags..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {filteredBooks.map((book, idx) => (
          <a
            key={idx}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[300px] bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center"
          >
            <div className="w-full h-[240px] flex items-center justify-center overflow-hidden mb-4">
              <img
                src={bookImages[book.title] || '/fallback.jpg'}
                alt={`Cover of ${book.title}`}
                className="h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-sky-700">{book.title}</h3>
            <p className="text-base text-gray-700 mt-2">{book.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default BookShelf;
