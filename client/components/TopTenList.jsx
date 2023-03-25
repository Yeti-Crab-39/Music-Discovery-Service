import React from 'react';
import IndividualSongContainer from './IndividualSongContainer.jsx';

export default function TopTenList({ topTenSongs, songState, setSongState }) {
  console.log('toptensongs is here ', topTenSongs);

  const songContainer = topTenSongs.map((song) => {
    console.log('song inside songContainer map... ', song);
    return (
      <div>
        <IndividualSongContainer
          key={Math.random() * 100}
          track={song}
          songState={songState}
          setSongState={setSongState}
        />
      </div>
    );
  });
  // toptensongs.map((song) => <div> <Indiv)
  console.log('song inside songContainer... ', songContainer);
  return <div>{songContainer}</div>;
}
