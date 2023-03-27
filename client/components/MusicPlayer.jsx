import React from 'react';
import Iframe from 'react-iframe';

export default function MusicPlayer({ songState } = songState) {
  const { song, artist, uri } = songState;
  return (
    <>
      <div>
        <Iframe
          url={
            'https://open.spotify.com/embed/track/' +
            uri +
            '?utm_source=generator'
          }
          position="relative"
          width="100%"
          id="myId"
          className="myClassname"
          styles={{ height: '350px' }}
        />
      </div>
    </>
  );
}
