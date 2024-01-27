import React from 'react'
import './Footer.css'
import { auth } from './firebase.js'
import { useStateValue } from './StatePrivider';
import { Link } from 'react-router-dom';
import gmailicon from './gmail.svg'
import telegramicon from './telegram.svg'
import whatsappicon from './whatsapp.svg'

function Footer() {
    const [{basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
  return (
    <div className='footer'>
        <div className='footer_container'>
        <Link to ="/">
        <div className='footer_aboutourproduct'>
                <h3>Home</h3>
            </div>
        </Link>
        <Link to ={!user && '/LogIn'}>
        <div onClick={handleAuthentication} 
        className='footer_aboutourproduct'>
             <h3> {user?'LogOut' : 'LogIn'}</h3>
            </div>
            
        </Link>
        <Link to ="/">
            <div className='footer_aboutourproduct'>
                <h3>About Us</h3>

            </div>
        </Link>
        <Link to ="/">
            <div className='footer_aboutourproduct'>
                <h3>FAQS</h3>
                
            </div>
        </Link>

        <Link to ="/">    
            <div className='footer_aboutourproduct'>
            <h5><img className='footer_icon'
                src={gmailicon}/>Gmail</h5>
                
            </div>
        </Link>
        <Link to ="/">
            <div className='footer_aboutourproduct'>
                
                <h5><img className='footer_icon'
                src={telegramicon}/>Telegram</h5>
                
            </div>
        </Link>
        <Link to ="/">
            <div className='footer_aboutourproduct'>
                
                 <h5><img className='footer_icon'
                src={whatsappicon}/>Whatsapp</h5>
                
            </div>
        </Link>
           
        </div>

      
    </div>
  )
}

export default Footer 

