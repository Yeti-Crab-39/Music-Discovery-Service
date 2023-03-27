import React from 'react';
import Iframe from 'react-iframe';

export default function MusicPlayer({ songState } = songState) {
  const { song, artist, uri } = songState;
  return (
    <>
      <div className='music-player-div'>
        <Iframe
          url={
            'https://open.spotify.com/embed/track/' +
            uri +
            '?utm_source=generator'
          }
          // position="relative"
          // width="100%"
          // height="100%"
          id="myId"
          className="music-player"
          // styles={{ height: '250px' }}
        />
      </div>
    </>
  );
}
