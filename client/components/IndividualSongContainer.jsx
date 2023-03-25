import React from 'react';

export default function IndividualSongContainer({ song } = song) {
//if console.log here, song should be { song: song, artist, name}
// {song: song, artist: artist}
  const { song, artist } = song;
  function playSong() {
    
  }

  function deleteSong() {
    
  }

  return <div className = "song-container">lesgoooooooo
    <div id="drag-btn">Drag Button</div>
    <div id="song-btn" onClick={playSong}>Song Button</div>
    <div id='delete-btn' onClick={deleteSong}>Delete Button</div>
  </div>;
}
