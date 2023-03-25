import React from 'react';

export default function ButtonContainer({
  songState,
  setSongState,
  topTenSongs,
  setTopTenSongs,
}) {
  const { song, artist, uri } = songState;
  // add song button
  // find a new song

  function addToTopTenSong() {
    useEffect(() => {
      fetch('user/addSong', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{ "song": "${song}", "artist": "${artist}", "uri": "${uri}" }`,
      }).then(() => console.log('added song to topTenList'));
    }, []);
  }

  const AddSongButton = ({ onAdd }) => {
    return <button onClick={onAdd}>Add song</button>;
  };

  function getNewSong() {
    useEffect(() => {
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
    }, [songState]);
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
