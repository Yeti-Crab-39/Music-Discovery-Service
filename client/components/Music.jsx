import React from 'react';

/* 
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3t8pnImpBpOwxdtYBpKvA9?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
*/

export default function Music() {
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
      uri: 'spotify:track:3t8pnImpBpOwxdtYBpKvA9',
    };
    let callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };

  return (
    <>
      <div id='embed-iframe' style={{ border: '1px solid black' }}></div>
    </>
  );
}
