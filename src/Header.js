import React from 'react'
import './Header.css'
import {ReactComponent as Basketicon} from './basket_icon.svg'
import { Link } from 'react-router-dom'
import { useStateValue } from './StatePrivider.js'
import {ReactComponent as SearchIcon} from './search.svg'
import { auth } from './firebase.js'
// remember everything commented below needs to be edited later 

function Header() {
    const [{basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
   
  return (
    
    <div className="header">
        
        <Link to ="/">
            <img
        className="header_logo"
        src="" 
        alt="logo "/>
        </Link>
        <div className="header_search">
            <input
            className="header_searchinput" 
            type="text"/>
            <SearchIcon
            className='header_searchicon'/>


        </div>
        <div className="header_nav">
        <Link to ={!user && '/LogIn'}>
            <div onClick={handleAuthentication} 
            className="header_option">
               <span className='header_optionlineone'> {user?'Hi, ' : 'Welcome'}<b>{user?.email}</b> </span>
                <center><span className='header_optionlinetwo'>
                    {user?'LogOut' : 'LogIn'}
                    </span></center>

            </div>

        </Link>
         
        {!user && (
          <Link to="/SignUp">
            <div className="header_option">
              <span className="header_optionlineone">Guest?</span>
              <span className="header_optionlinetwo">SignIn</span>
            </div>
          </Link>
        )}
        <Link to ="/Orders">
            <div className="header_option">
                <span className='header_optionlineone'>Returns &</span>
                <span className='header_optionlinetwo'>Orders</span>

             </div>

        </Link>  
            
        <Link to="/Basket">
            <div className="header_optionbasket">
               <span> <Basketicon
               className='header_optionbasketicon'  /></span>
                <span className="header_basketcount">{basket?.length}</span>
            </div>
        </Link>
            
            
        </div>

      
    </div>
    
  );
}

export default Header
