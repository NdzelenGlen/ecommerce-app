import React from 'react'
import './Basket.css'
import Subtotal from './Subtotal.js'
import "./Product.js"
import { Button } from '@mui/material'
import {useStateValue} from './StatePrivider';
import BasketProduct from './BasketProduct.js';
import FlipMove from 'react-flip-move'
function Basket() {
const [{basket,user}, dispatch ] = useStateValue();
  return (
    <div className='basket' >
      <FlipMove>
       <div className='basket_leftside'>
        <img 
        className='basket_ads'
        src=""
        alt=''/>
        <div className='basket_title'>
          <h3>Hello,{user?.name}</h3>
          <h2>Your selected Items</h2>
            {basket.map(item => (
            <BasketProduct
            key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}/>
            ))}
        </div>
        
       </div>
       </FlipMove>
       <div className='basket_rightside'>
        <Subtotal/>
        
       </div>
      
    </div>
  )
}

export default Basket

