import React from 'react'
import './SignUp.css'
import { useStateValue } from './StatePrivider';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'



function SignUp() {
  return (
    <div className='signup'>
          <Link to ='/'><img
        className='signup_logo'
        src=''
        alt='logo'
        />
       </Link>
       <div className='signup_container'>
        <h1 className='signup_header' >Registration </h1>
        <h3 className='signup_header'>Please fill in your details</h3>
        <form>
            <h5>First Name</h5>
            <input type='text'/>
            <h5>Last Name </h5>
            <input type='text'/>
            <h5> E-mail</h5>
            <input type='text'/>
            <h5> Password</h5>
            <input type='password'/>
        </form>
           
            <Link to='/SignUp'>
            <Button className='signup_button'>Create an account</Button>
            </Link>
           <div className='signup_signupmessage'> <p>Already have an account? 
           <Link to = '/LogIn'><center><p>LogIn</p></center></Link>
            </p>
            </div>
        

       </div>
      
    </div>
  )
}

export default SignUp
