import React from 'react';

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
    </>
  );
}
