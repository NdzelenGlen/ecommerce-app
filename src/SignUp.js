
import './SignUp.css'
import { useStateValue } from './StatePrivider';
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'


function SignUp() {
  const history = useNavigate();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const signIn = e => {
  //   e.preventDefault();
  //   auth.signInWithEmailAndPassword(email,password)
  //   .then(auth => {
  //        history.push('/')
  //   })
  //   .catch(error => alert(error.message))
  // }

  const register = async (e) => {
    e.preventDefault();
  
    try {
      const existingUser = await auth.createUserWithEmailAndPassword(email, password);
      
      
      console.log(existingUser.user);
  
     
      history('/');
    } catch (error) {
     
      if (error.code === 'auth/email-already-in-use') {
        alert('Email address is already in use. Please use a different email.');
      } else {
        alert('Registration failed: ' + error.message);
      }
    }
  };
  return (
    <div className='signup'>
      <Link to='/'><img
        className='signup_logo'
        src=''
        alt='logo'
      />
      </Link>
      <div className='signup_container'>
        <h1 className='signup_header' >Registration </h1>
        <h3 className='signup_header'>Please fill in your details</h3>
        <form>
          <label>
            <h5>First Name</h5>
            <input type='text'
              value={firstname}
              required
              onChange={e => setFirstname(e.target.value)} />
            <h5>Last Name </h5>
            <input type='text'
              value={lastname}
              required
              onChange={e => setLastname(e.target.value)} />
          </label>
          <h5> E-mail</h5>
          <input
            type='email'
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Enter a valid email address"
          />
          <h5> Password

          </h5>
          <input type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required />
          <Link to='/SignUp'>
            <Button className='signup_registerbutton'
              type='submit'
              onClick={register}>Create an account</Button>
          </Link>
        </form>


        <div className='signup_signupmessage'> <p>Already have an account?
          <Link to='/LogIn'><center><p>LogIn</p></center></Link>
        </p>
        </div>


      </div>

    </div>
  )
}

export default SignUp
