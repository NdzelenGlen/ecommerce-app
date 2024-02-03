import React from 'react'
import './Basket.css'
import Subtotal from './Subtotal.js'
import "./Product.js"
import { Button } from '@mui/material'
import {useStateValue} from './StatePrivider.js';
import BasketProduct from './BasketProduct.js';
import Header from './Header.js'

function Basket() {
const [{basket,user}, dispatch ] = useStateValue();
  return (
    
    <div className='basket' >
     
       <div className='basket_leftside'>
        <img 
        className='basket_ads'
        src=""
        alt=''/>
        <div className='basket_title'>
          <h3>Hello,{user?.email}</h3>
          <h2>Your selected Items</h2>
            {basket.map(item => (
            <BasketProduct
            
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}/>
            ))}
        </div>
        
       </div>
       
       <div className='basket_rightside'>
        <Subtotal/>
        
       </div>
      
    </div>
  )
}

export default Basket

