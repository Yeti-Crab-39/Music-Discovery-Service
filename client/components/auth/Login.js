import React from 'react';
import { Link } from 'react-router-dom';


export default function Login({ setIsLoggedIn }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
      })
    }).then((data) => data.json())
    .then(data => {
      if (data.length === 24) setIsLoggedIn('true');
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
        <p className='auth-element redirect'>
          Not a member? <Link to='/signup'>Signup</Link>
        </p>
      </form>
    </div>
  );
}
