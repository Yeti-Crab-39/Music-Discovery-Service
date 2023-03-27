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
  console.log('topTenSongs at top of indivSongCont... ', topTenSongs);
  // console.log({song} = song);
  const { Song, Artist, uri } = track;
  console.log(Song, Artist, uri);
  const [isVisible, setIsVisible] = useState(true);
  //const { setTopTenSongs } = setTopTenSongs;
  function playSong(e) {
    e.preventDefault();
    setSongState({ Song, Artist, uri });
    console.log('songState after setState called in playSong... ', songState);
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
    console.log('playButton -> song: ', song, 'artist: ', artist);
    return (
      <button className='play-btn' onClick={onPlay}>
        Click to Play 
      </button>
    );
  };

  return isVisible ? (
    <div className="inner-song-container">
     <strong>"{Song}"</strong>,  {Artist}
      {/* <div id="drag-btn"></div> */}
      <div className="song-btns">
        <PlayButton onPlay={playSong} song={Song} artist={Artist}/>
        <DeleteButton setIsVisible={setIsVisible} setTopTenSongs={setTopTenSongs} topTenSongs={topTenSongs} track={track}/>
      </div>
    </div>
  ) : null;
}
