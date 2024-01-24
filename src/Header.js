import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StatePrivider';
// remember everything commented below needs to be edited later 

function Header() {
    const [{basket}, dispatch] = useStateValue();
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
            {/* {textsearch logo icon} */}


        </div>
        <div className="header_nav">
        <Link to ="">
            <div className="header_option">
               <span header_optionlineone>Welcome back</span>
                <span header_optionlinetwo><center>LogIn</center></span>

            </div>

        </Link>
         
        <Link to ="">
             <div className="header_option">
                <span header_optionlineone>Guest?</span>
                <span header_optionlinetwo>SignIn</span>

             </div>
        </Link>
        <Link to ="">
            <div className="header_option">
                <span header_optionlineone>Returns</span>
                <span header_optionlinetwo>& Orders</span>

             </div>

        </Link>  
             
        <Link to ="">
            <div className="header_option">
               <span header_optionlineone>Your</span>
                <span header_optionlinetwo>Prime</span>

            </div>

        </Link>
            
        <Link to="/Basket">
            <div className="header_optionbasket">
                {/* basketicon like save to cart basket */}
                <span className="header_optionlineone header_basketcount">{basket?.length}</span>
            </div>
        </Link>
            
            
        </div>

      
    </div>
    
  )
}

export default Header
