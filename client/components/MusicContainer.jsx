import React, { useState, useEffect } from 'react';
import MusicPlayer from './MusicPlayer.jsx';
import ButtonContainer from './ButtonContainer.jsx';
import TopTenList from './TopTenList.jsx';

export default function MusicContainer() {
  const [songState, setSongState] = useState({
    song: 'my first song',
    artist: 'is this test',
    uri: '25aawb25AiIdfj5ctvr3Do',
  });
  //<iframe src="https://open.spotify.com/embed/track/2Y8D1aBfSngGN41XnOwydy?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
  const [topTenSongs, setTopTenSongs] = useState([
    //need this to reflect what is in the database somehow
    // { song: 'Jebs 2nd Song', artist: 'john', uri: 'test' },
    // { song: 'Kudrat', artist: 'Matt', uri: 'secondTest' },
    // { song: 'Jebs 2nd Song', artist: 'jeb', uri: 'jeb.com' },
    // { song: 'LESSGOO', artist: 'Yeti Crab', uri: 'teststring here' },
  ]);
  useEffect(() => {

  }, [topTenSongs])
  return (
    <div>
      <MusicPlayer songState={songState} />
      <ButtonContainer
        songState={songState}
        setSongState={setSongState}
        topTenSongs={topTenSongs}
        setTopTenSongs={setTopTenSongs}
      />
      Top Ten List
      <TopTenList
        topTenSongs={topTenSongs}
        songState={songState}
        setSongState={setSongState}
        setTopTenSongs={setTopTenSongs}
      />
    </div>
  );
}

//https://open.spotify.com/track/25aawb25AiIdfj5ctvr3Do?si=1ef56b64f5214526
//https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ?si=404fab36dc1046af
//https://open.spotify.com/track/4VRx6f8ALmWGNdKvKFggxa?si=5acd14fe289f4446
