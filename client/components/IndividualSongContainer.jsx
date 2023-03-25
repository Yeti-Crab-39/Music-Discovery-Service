import React, { useState, useEffect } from 'react';
import DeleteButton from './DeleteButton.jsx';
//{track : {song: song, artist: artist}}
//song = song.song
//track = track.track
export default function IndividualSongContainer({
  track,
  songState,
  setSongState,
}) {
  // { track } = track
  //if console.log here, song should be { song: song, artist, name}
  // {song: song, artist: artist}
  console.log('track is.. ', track);
  // console.log({song} = song);
  const { song, artist, uri } = track;
  // console.log(song, artist);
  const [isVisible, setIsVisible] = useState(true);

  function playSong() {
    setSongState(uri);
  }

  // const deleteSong = () => {
  //   console.log('song to delete... ', song);
  //   fetch('user/deleteSong', {
  //     method: 'DELETE',
  //     headers: { 'Content-Type': 'application/json' },
  //   }).then(() => {
  //     console.log('deleted song - indiv song container');
  //     setIsVisible(false);
  //   });
  // };
  // useEffect(() => {
  //   deleteSong
  // }, [song]);

  // const DeleteButton = ({ onDelete }) => {
  //   return <button onClick={onDelete}>Delete icon goes here</button>;
  // };

  const PlayButton = ({ onPlay }) => {
    return (
      <button onClick={onPlay}>
        {song}, {artist}
      </button>
    );
  };

  return isVisible ? (
    <div className="song-container">
      lesgoooooooo
      <div id="drag-btn">Drag Button</div>
      <PlayButton onPlay={playSong} />
      <DeleteButton setIsVisible={setIsVisible} />
    </div>
  ) : null;
}
