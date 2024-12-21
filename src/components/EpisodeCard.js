import React from 'react';

const EpisodeCard = ({ episode }) => {
  return (
    <div className="episode-card bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{episode.name}</h2>
        <p className="text-gray-600 mb-2">Air Date: {episode.air_date}</p>
        <p className="text-gray-600 mb-4">Episode: {episode.episode}</p>
        <a href={episode.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default EpisodeCard;