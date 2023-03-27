import React from 'react';

export default function MusicPlayer({ songState } = songState) {
  const { Song, Artist, uri } = songState;
  console.log('this is the songState in musicPLayer, ', songState);
  console.log('here are the things from songState ', Song, Artist, uri);
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
      uri: 'spotify:track:' + uri,
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
