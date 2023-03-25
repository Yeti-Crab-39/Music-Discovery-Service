import React from 'react';
import IndividualSongContainer from './IndividualSongContainer.jsx';

export default function TopTenList({ topTenSongs } = topTenSongs) {
  console.log('toptensongs is here ', topTenSongs);
  
  const songContainer = topTenSongs.map((song) => {
    const { Song, _id } = song;
    return (
        <div>
          <IndividualSongContainer id={_id} key={Song} song={song}/>
        </div>
    );
  });
  // toptensongs.map((song) => <div> <Indiv)
  return (
      <div>
      {songContainer}
    </div>
  );
}
