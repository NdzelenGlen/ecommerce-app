import React from 'react'
import './ProductTab.css'
import { useStateValue } from './StatePrivider';
import  './BasketProduct.js'
function Producttab({id , price , image ,title , rating } ){
    
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
    
    <div className='producttabmain'>
      <button className='producttab_button'
      
    onClick={removeFromBasket}>x</button>
      <div className='producttab'>
     <div className='producttab_left'> 
     <img
      className='producttab_image' 
      src={image}/></div>
      <div className='producttab_right'>
        <p className='producttab_title'>{title}</p>
       
    
      </div>
      </div>
      
      
    </div>
    
  )
}
    

export default Producttab
