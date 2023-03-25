import React from 'react';

export default function MusicPlayer({ songState } = songState) {
  console.log('this is the songState in musicPLayer, ', songState);
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
      uri: songState,
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
