import './SignUp.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { auth, firestore } from './firebase';

function SignUp() {
  const history = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        
        console.log(authUser);

   
      })
      .then(() => {
        
        history('/');
      })
      .catch((error) => {
        
        console.error('Registration failed: ', error.message);
      });
  };

  return (
    <div className='signup'>
      <Link to='/'>
        <img className='signup_logo' src='' alt='logo' />
      </Link>
      <div className='signup_container'>
        <h1 className='signup_header'>Registration </h1>
        <h3 className='signup_header'>Please fill in your details</h3>
        <form>
          <h5>Username </h5>
          <input
            type='text'
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <h5>E-mail</h5>
          <input
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Enter a valid email address"
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            className='signup_registerbutton'
            type='submit'
            onClick={register}
          >
            Create an account
          </Button>
        </form>

        <div className='signup_signupmessage'>
          <p>
            Already have an account?
            <Link to='/LogIn'>
              <center>
                <p>LogIn</p>
              </center>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
