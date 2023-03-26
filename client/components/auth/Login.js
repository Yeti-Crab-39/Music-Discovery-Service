import React from 'react';
import { Link } from 'react-router-dom';


export default function Login({ setIsLoggedIn }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    return fetch('/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => {
      console.log('data received: ', data)
      if (data) setIsLoggedIn('true');
    });
  };

  return (
    <div className='auth-container'>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className='auth-element'
          id='username'
          name='username'
          type='text'
          placeholder='username'
          autoComplete='off'
        ></input>
        <br></br>
        <input
          className='auth-element'
          id='password'
          name='password'
          type='password'
          placeholder='password'
          autoComplete='off'
        ></input>
        <br></br>
        <input
          className='auth-element button'
          id='submit'
          type='submit'
          value='Login'
        ></input>
        <br></br>
        <p className='auth-element'>
          Not a member? <Link to='/signup'>Signup</Link>
        </p>
      </form>
    </div>
  );
}
