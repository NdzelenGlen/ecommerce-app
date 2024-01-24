import React from 'react'
import './LogIn.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
function LogIn() {
  return (
    <div className='login'>
        <Link to ='/'><img
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
            <input type='text'/>
            <h5> Password</h5>
            <input type='password'/>
            <Button className='login_button'>Login</Button>
           <div className='logIn_'> <p>Don't have an account yet? 
                <Link to = ''><p>SignUp</p></Link>
            </p>
            </div>
        </form>

       </div>
    </div>
  )
}

export default LogIn 