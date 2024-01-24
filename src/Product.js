import React from 'react'
import "./Product.css"
import { useStateValue } from './StatePrivider';
import { Button } from '@mui/material'
function Product({title , price , image , rating ,id }) {
  const [{basket}, dispatch] = useStateValue();
  
  const addToBasket =() => {
   dispatch({
     type: "ADD_TO_BASKET",
     item:{
       id: id,
       title: title,
       image: image,
       price: price,
       rating: rating,
  },
  });
};
  // sent item to data layer
  return (
    <div className="product">
        <div className="product_info">
            <p className='product_title'>{title}</p>
            <p className="product_price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="product_rating">
              {Array(rating).fill().map((_, i) => (<p>⭐</p>))}
               
            </div>
           
        </div>
            <img 
            className='product_image'
            src={image}
            alt=""/>
            <Button
             onClick={addToBasket} >
              Add to basket
            </Button>

      
    </div>                                                                  
  )
}

export default Product
