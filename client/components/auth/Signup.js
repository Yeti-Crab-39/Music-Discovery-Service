import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup({setIsLoggedIn}) {
  return (
    <div className='auth-container'>
      <h1>Sign up</h1>
      <form method='POST' action='/auth/login'>
        <input className='auth-element'
          id='firstName'
          name='firstname'
          type='text'
          placeholder='First Name'
          autocomplete='off'
        >
        </input>
        <br></br>
        <input className='auth-element'
          id='lastName'
          name='lastName'
          type='text'
          placeholder='Last Name'
          autocomplete='off'
        >
        </input>
        <br></br>
        <input
          className='auth-element'
          id='username'
          name='username'
          type='text'
          placeholder='Username'
          autocomplete='off'
        ></input>
        <br></br>
        <input
          className='auth-element'
          id='password'
          name='Password'
          type='password'
          placeholder='Password'
          autocomplete='off'
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
