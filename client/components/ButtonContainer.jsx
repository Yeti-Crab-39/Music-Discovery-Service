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

  function addToTopTenSong(song, artist, uri) {
    fetch('user/addSong', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: `{ "song": "${song}", "artist": "${artist}", "uri": "${uri}" }`,
    })
      .then((response) => response.json())
      .then((song) => {
        console.log('topTenList was updated with song ', song)
        setTopTenSongs(prevSongs => {
          return [...prevSongs, song];
        });
      });
  }

  const scope = encodeURIComponent('user-read-private user-read-email');
  const redirectUri = 'http://localhost:3000/callback';
  const state =  'WinJB947VKUbmrRn';
  const clientId = 'a4ab59da815f4446893f930f835d8c2c'; // Your client id
  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=${state}`; 
  const client_secret = '10e568609b4447d29b846ebd88d91b24'  

  const queryWebAPI = (e) => {
    e.preventDefault();
    let authParameters = { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + client_secret
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    // .then(result => hardCodeToken = result)
    .then(result => {
      console.log('calling getAllParams with result.. ', result)
      getAllParams(result)
    })
    // .then((apiToken) => getAllParams(apiToken))
    // use the access token to access the Spotify Web API
  }
  
  const getAllParams = (token) => {
    const songName = document.getElementById('songName').value;
    const artistName = document.getElementById('artistName').value;
    console.log('song: ', songName, 'artist: ', artistName )
    fetch('https://api.spotify.com/v1/search?q=' + 'track:' + songName + '%20artist:'+ artistName + '&type=track' + '&limit=5' , {headers: {
      Authorization: 'Bearer ' + token.access_token,
      Accept: 'application/json',
    }})
      .then((response) => response.json())
      .then((allParams) => {
        console.log('response in getAllParams...', allParams)
        const track = allParams.tracks.items[0].name;
        const artist = allParams.tracks.items[0].artists[0].name;
        const url = allParams.tracks.items[0].id;
        addToTopTenSong(track, artist, url);
    });
  }
    
    
  const AddSongContainer = ({ onAdd }) => {
    return (
      <form onSubmit={(e) => queryWebAPI(e)}>
        <label for='songName'>Song Name</label>
        <input type="text" id="songName" name ='songName'/>
        <br></br>
        <div>
        <label for='artistName'>Artist</label>
        <input type="text" id="artistName" name ='artistName'/>
        </div>
        <br></br>
        <input type="submit"/>
         {/* <button onClick={onAdd}>Add song</button> */}
      </form>
      
    );
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
      <AddSongContainer onAdd={addToTopTenSong} />
      <NewSongButton onPlayNext={getNewSong} />
    </div>
  );
}
