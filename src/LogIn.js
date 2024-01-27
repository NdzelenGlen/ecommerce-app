import React, { useState } from 'react'
import './LogIn.css'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase.js'
function LogIn() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      })
      .catch(error => alert('Please enter correct password and email', error.message))
  }
  // const register = e => {
  //   e.preventDefault();
  //   auth.createUserWithEmailAndPassword(email ,password)
  //   .then((auth)=>{
  //     console.log(auth);
  //     if (auth){
  //       history.push('/')
  //     }
  //   })
  //   .catch(error => (error.message))
  // }


  return (
    <div className='login'>
      <Link to='/'><img
        className='login_logo'
        src=''
        alt='logo'
      />
      </Link>
      <div className='login_container'>
        <h1 className='login_header' > Welcome back </h1>
        <h3 className='Login_header'>Enter your details to Login</h3>
        <form>
          <h5> E-mail</h5>
          <input
            type='email'
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Enter a valid email address"
          />
          <h5> Password</h5>
          <input type='password'
            value={password}
            onChange={e => setPassword(e.target.value)} />
          <Button className='login_button'
            onClick={signIn}
            type='submit'>Login</Button>
          <div className='logIn_'> <center><p>Don't have an account yet?
            <Link to='/SignUp'><p>SignUp</p></Link>
          </p></center>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn 