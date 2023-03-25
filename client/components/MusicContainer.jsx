import React, { useState, useEffect }from 'react';
import MusicPlayer from './MusicPlayer.jsx';
import ButtonContainer from './ButtonContainer.jsx';
import TopTenList from './TopTenList.jsx';

export default function MusicContainer() {
  const [ songState, setSongState ] = useState('none');
  const [ topTenSongs, setTopTenSongs ] = useState([]);
  return (
    <div>
      <MusicPlayer />
      <TopTenList topTenSongs={topTenSongs}/>
      <ButtonContainer />
    </div>
  );
}
