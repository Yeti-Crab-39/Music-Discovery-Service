import React, { useEffect } from 'react';

export default function DeleteButton( { setTopTenSongs, topTenSongs, track }) {
  const { Song, Artist, uri} = track;
  const deleteSong = () => {
    console.log('song to delete... ', Song);
    fetch('/user/deleteSong', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Song }),
    })
    .then(response => response.json())
    .then((response) => {
      console.log('response in deleteSong... ', response);
      //setIsVisible(false);
      setTopTenSongs((currState) => {
        // search top ten songs for an element that matches the deleted song
        // remove it from the array and return
        // make sure in DB you are returning the updated/after deletion value
        console.log('topTenSongs in deleteSong, setTopTen... ', currState)
        // console.log('songs in deleteSong, setTopTen... ', prevState)
        for(let i=0; i < topTenSongs.length; i++){
          if (currState[i].Song === response.Song){
            currState.splice(i, 1)
          }
        }
        console.log('topTenSongs in deleteSong, setTopTen after removal... ', currState) 
        return [...currState];
      });
    })
  }
  return <button onClick={deleteSong} id='delete-btn'><img id='trash' src='https://cdn-icons-png.flaticon.com/512/6861/6861362.png'/></button>;
}
