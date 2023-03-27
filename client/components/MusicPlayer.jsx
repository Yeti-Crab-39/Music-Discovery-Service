import React from 'react';
import Iframe from 'react-iframe';

export default function MusicPlayer({ songState } = songState) {
  const { song, artist, uri } = songState;
  console.log('this is the songState in musicPLayer, ', songState);
  console.log('here are the things from songState ', song, artist, uri);
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
      uri: uri,
    };
    let callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };

  return (
    <>
      <div id="embed-iframe" style={{ border: '1px solid black' }}></div>
      <div>
        <link
          rel="alternate"
          type="application/json+oembed"
          href="https://open.spotify.com/oembed?url=https%3A%2F%2Fopen.spotify.com%2Fshow%2F5eXZwvvxt3K2dxha3BSaAe"
        />
      </div>
    </>
  );
}
