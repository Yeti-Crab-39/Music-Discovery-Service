import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import MusicContainer from './components/MusicContainer.jsx';

const App = () => {
  const [IsLoggedIn, setIsLoggedIn] = useState('false');

  if (IsLoggedIn === 'false') {
    return (
      <Routes>
        <Route
          path='/'
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path='/signup'
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path='/' element={<MusicContainer />} />
    </Routes>
  );
};

export default App;
