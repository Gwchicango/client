import React from 'react';
import EpisodeCard from './EpisodeCard';

const EpisodeList = ({ episodes }) => {
  // Agrupar episodios por temporada
  const groupedEpisodes = episodes.reduce((acc, episode) => {
    const season = episode.episode.slice(0, 3); // Obtener la temporada (e.g., "S01")
    if (!acc[season]) {
      acc[season] = [];
    }
    acc[season].push(episode);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(groupedEpisodes).map(season => (
        <div key={season} className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">{`Season ${season.slice(1)}`}</h2>
          <div className="episode-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {groupedEpisodes[season].map(episode => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;