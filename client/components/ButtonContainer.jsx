import React, { useEffect } from 'react';

export default function ButtonContainer({
  songState,
  setSongState,
  topTenSongs,
  setTopTenSongs,
}) {
  const { song, artist, uri } = songState;
  // add song button
  // find a new song
  // useEffect(() => {

  // },[topTenSongs]);

  // useEffect(() => {

  // },[songState]);

  function addToTopTenSong() {
    fetch('user/addSong', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `{ "song": "${song}", "artist": "${artist}", "uri": "${uri}" }`,
    })
      .then((response) => response.json())
      .then((song) => console.log('topTenList was updated with song ', song));
  }

  const AddSongButton = ({ onAdd }) => {
    return <button onClick={onAdd}>Add song</button>;
  };

  function getNewSong() {
    fetch('user/getSong', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('got new song from API ', response);
        setSongState(response);
      })
      .catch((err) => console.log(err));
  }

  const NewSongButton = ({ onPlayNext }) => {
    return <button onClick={onPlayNext}>Play Next Song</button>;
  };

  return (
    <div>
      <AddSongButton onAdd={addToTopTenSong} />
      <NewSongButton onPlayNext={getNewSong} />
    </div>
  );
}
//setSongState(uri);
