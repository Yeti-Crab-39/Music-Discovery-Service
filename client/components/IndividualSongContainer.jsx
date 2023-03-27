import React, { useState, useEffect } from 'react';
import DeleteButton from './DeleteButton.jsx';
//{track : {song: song, artist: artist}}
//song = song.song
//track = track.track
export default function IndividualSongContainer({
  track,
  songState,
  setSongState,
  setTopTenSongs,
  topTenSongs,
}) {
  // { track } = track
  //if console.log here, song should be { song: song, artist, name}
  // {song: song, artist: artist}
  console.log('IndivSongContainer -> track is.. ', track);
  console.log('topTenSongs at top of indivSongCont... ', topTenSongs)
  // console.log({song} = song);
  const { Song, Artist, uri } = track;
  console.log(Song, Artist, uri);
  const [isVisible, setIsVisible] = useState(true);
  //const { setTopTenSongs } = setTopTenSongs;
  function playSong() {
    setSongState({ Song, Artist, uri });
    console.log('songState after setState called in playSong... ', songState)
  }

  
  // useEffect(() => {
  //   deleteSong
  // }, [song]);

  // function deleteSong() {
  //   setIsVisible(false);
  // }

  // const DeleteButton = ({ onDelete, setTopTenSongs, topTenSongs }) => {
  //   return <button onClick={deleteSong}>Delete icon goes here</button>;
  // };

  const PlayButton = ({ onPlay, song, artist }) => {
    console.log('playButton -> song: ', song, 'artist: ', artist)
    return (
      <button onClick={onPlay}>
        {song}, {artist}
      </button>
    );
  };

  return isVisible ? (
    <div className="song-container">
      {Song}
      <div id="drag-btn"></div>
      <PlayButton onPlay={playSong} song={Song} artist={Artist}/>
      <DeleteButton setIsVisible={setIsVisible} setTopTenSongs={setTopTenSongs} topTenSongs={topTenSongs} track={track}/>
    </div>
  ) : null;
}
