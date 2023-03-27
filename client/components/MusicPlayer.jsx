import React, { useEffect } from 'react';

export default function MusicPlayer({ songState } = songState) {
  const { song, artist, uri } = songState;
  useEffect(() => {
    // const { song, artist, uri } = songState;
    console.log('this is the songState in musicPLayer, ', songState);
    console.log('here are the things from songState ', song, artist, uri);
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      let element = document.getElementById('embed-iframe');
      let options = {
        uri: 'spotify:track:' + uri,
      };
      let callback = (EmbedController) => {};
      IFrameAPI.createController(element, options, callback);
    };
  }, [songState]);

  return (
    <>
      <div
        id="embed-iframe"
        src="https://embed.spotify.com/?uri=spotify:trackset:PREFEREDTITLE:<%=@trackplaylist%>"
        frameborder="0"
        allowtransparency="true"
      ></div>
    </>
  );
}
