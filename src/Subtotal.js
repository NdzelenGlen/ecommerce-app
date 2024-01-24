import React from 'react'
import "./Subtotal.css" 
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StatePrivider';
import { Button } from '@mui/material'
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
      renderText={(value) =>(
      <>
      <p>
        Number of selected items <strong>= {basket?.length}</strong>
        {/* Subtotal({basket.length} items): */}
        
      </p> 
       <p >Total Amount : <strong>{value}</strong></p> 
       {/* <p id='discount'>20<small>%</small>Discount : <strong></strong></p>
       <p className='subtotal_finalamount'>Final Amount : <strong>u</strong></p> */}
           
      
      <small className='subtotal_text'>
        Please Cross check items before making payment
      </small>
      </>)}
      decimalScale={2}
      
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      />
      <Button className='subtotal_paymentbutton'>Make Payment</Button>
      

    </div>
  )
}

export default Subtotal
