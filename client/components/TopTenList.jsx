import React, { useRef } from 'react';
import IndividualSongContainer from './IndividualSongContainer.jsx';

export default function TopTenList({
  topTenSongs,
  songState,
  setSongState,
  setTopTenSongs,
}) {
  console.log('toptensongs is here ', topTenSongs);
  const dragItem = useRef();
  const dragOverItem = useRef();
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
  const drop = (e) => {
    const copyList = [...topTenSongs];
    const dragItemContent = copyList[dragItem.current];
    copyList.splice(dragItem.current, 1);
    copyList.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTopTenSongs(copyList);
  };

  const songContainer = topTenSongs.map((song, index) => {
    // console.log('song inside songContainer map... ', song);
    // console.log('index inside songcontainer map...', index);
    return (
      <div
        style={{
          backgroundColor: 'lightblue',
          margin: '20px',
          textAlign: 'center',
          borderStyle: 'solid',
          borderRadius: '5px',
        }}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable
      >
        <IndividualSongContainer
          key={Math.random() * 100}
          track={song}
          songState={songState}
          setSongState={setSongState}
          setTopTenSongs={setTopTenSongs}
          topTenSongs={topTenSongs}
        />
      </div>
    );
  });
  // toptensongs.map((song) => <div> <Indiv)
  console.log('song inside songContainer... ', songContainer);
  return <div>{songContainer}</div>;
}
