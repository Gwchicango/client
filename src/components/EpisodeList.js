import React from 'react';
import EpisodeCard from './EpisodeCard';

const EpisodeList = ({ episodes }) => {
  return (
    <div className="episode-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default EpisodeList;