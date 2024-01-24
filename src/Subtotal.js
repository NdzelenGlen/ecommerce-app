import React from 'react'
import "./Subtotal.css" 
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StatePrivider';
import { Button } from '@mui/material'

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
       <p className='subtotal_amount'>Total Amount  <strong>={/* {' ${value}'} */}</strong></p>     
      
      <small className='subtotal_text'>
        Please Cross check items before making payment
      </small>
      </>)}
      decimalScale={2}
      value={0}
    //   value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      />
      <Button className='subtotal_paymentbutton'>Make Payment</Button>
      

    </div>
  )
}

export default Subtotal
