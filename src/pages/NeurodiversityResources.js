import React from 'react';
import BookShelf from '../components/BookShelf';

function NeurodiversityResources() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-8">
      <h1 className="text-3xl font-bold text-sky-700 mt-14 mb-6">
        Neurodiversity Resource Library
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        We’ve curated some helpful resources for understanding neurodivergence, including books written by autistic authors and guides for families, professionals, and allies.
      </p>
      <p className="text-base font-bold italic text-gray-700 mb-8">
        Note: This site contains affiliate links to products. We may receive a commission for purchases made through these links at no additional cost to you.
      </p>
      <BookShelf />
    </div>
  );
}

export default NeurodiversityResources;
