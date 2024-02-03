import React from 'react'
import './BasketProduct.css'
import { Button } from '@mui/material'
import './Product.js'
import { useStateValue } from './StatePrivider.js';
function BasketProduct( {id , price , image ,title , rating , hideButton}){
    
    const [{basket,user }, dispatch ] = useStateValue();
  const removeFromBasket =() => {
  dispatch({
     type: "REMOVE_FROM_BASKET",
     item:{
       id: id,
       title: title,
       image: image,
       price: price,
       rating: rating,
  },
  });
};
  return (
    <div className='basketproduct'>
      <img
      className='basketproduct_image' 
      src={image}/>
      <div className='basketproduct_info'>
        <p className='basketproduct_title'>{title}</p>
        <p className='basketproduct_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='basketproduct_rating'>
        {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
         {!hideButton &&(
          <Button  onClick={removeFromBasket}>Remove from Basket </Button>
          
         )}

        </div>
         
      </div>
    </div>
  )
}

export default BasketProduct
