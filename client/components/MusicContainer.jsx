import React, { useState, useEffect } from 'react';
import MusicPlayer from './MusicPlayer.jsx';
import ButtonContainer from './ButtonContainer.jsx';
import TopTenList from './TopTenList.jsx';

export default function MusicContainer() {
  const [songState, setSongState] = useState({
    song: 'my first song',
    artist: 'is this test',
    uri: 'none',
  });
  const [topTenSongs, setTopTenSongs] = useState([
    //need this to reflect what is in the database somehow
    { song: 'Jebs 2nd Song', artist: 'john', uri: 'test' },
    { song: 'Kudrat', artist: 'Matt', uri: 'secondTest' },
    { song: 'Jebs 2nd Song', artist: 'jeb', uri: 'jeb.com' },
    { song: 'LESSGOO', artist: 'Yeti Crab', uri: 'teststring here' },
  ]);
  return (
    <div>
      <MusicPlayer songState={songState} />
      <TopTenList
        topTenSongs={topTenSongs}
        songState={songState}
        setSongState={setSongState}
      />
      <ButtonContainer
        songState={songState}
        setSongState={setSongState}
        topTenSongs={topTenSongs}
        setTopTenSongs={setTopTenSongs}
      />
    </div>
  );
}
