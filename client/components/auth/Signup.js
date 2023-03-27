import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup({ setIsLoggedIn }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/auth/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log('data received: ', data);
        if (data.length === 24) setIsLoggedIn('true');
      });
  };

  return (
    <div className='auth-container'>
      <h1>Sign up</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className='auth-element'
          id='firstname'
          name='firstname'
          type='text'
          placeholder='First Name'
          autoComplete='off'
        ></input>
        <br></br>
        <input
          className='auth-element'
          id='lastname'
          name='lastname'
          type='text'
          placeholder='Last Name'
          autoComplete='off'
        ></input>
        <br></br>
        <input
          className='auth-element'
          id='username'
          name='username'
          type='text'
          placeholder='Username'
          autoComplete='off'
        ></input>
        <br></br>
        <input
          className='auth-element'
          id='password'
          name='password'
          type='password'
          placeholder='Password'
          autoComplete='off'
        ></input>
        <br></br>
        <input
          className='auth-element button'
          id='submit'
          type='submit'
          value='Signup'
        ></input>
        <br></br>
        <p className='auth-element'>
          Already a member? <Link to='/'>Login</Link>
        </p>
      </form>
    </div>
  );
}
