import React, { useEffect } from 'react';

export default function DeleteButton({ setIsVisible }) {
  function deleteSong() {
    console.log('song to delete... ', song);
    useEffect(() => {
      fetch('user/deleteSong', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }).then((response) =>
        console.log('deleted song - indiv song container', response)
      );
    }, []);
    setIsVisible(false);
  }

  return <button onClick={deleteSong}>Delete icon goes here</button>;
}
