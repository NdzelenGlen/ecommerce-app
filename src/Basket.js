import React from 'react'
import './Basket.css'
import Subtotal from './Subtotal.js'

function Basket() {
  return (
    <div className='basket' >
       <div className='basket_leftside'>
        <img 
        className='basket_ads'
        src=""
        alt=''/>
        <div className='basket_title'>
          <h2>Your selected Items</h2>

        </div>
        
       </div>
       <div className='basket_rightside'>
        <Subtotal/>
        
       </div>
      
    </div>
  )
}

export default Basket

