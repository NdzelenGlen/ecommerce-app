import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StatePrivider';
import { Button } from '@mui/material';
import { getBasketTotal } from './reducer';
import { getFinalAmount } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const history = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  
  const firstamount =basket?.reduce((amount , item) => item.price + amount, 0).toFixed(2);
  const discount = (firstamount*0.08).toFixed(2);
  const getFinalAmount=(firstamount-discount)

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Number of selected items <strong>= {basket?.length}</strong>
            </p>
            <p>
              Total Amount : <strong className='subtotal_totalamount'>{firstamount}</strong>
            </p>
            <p id='discount'>
              <strong>8</strong>
              <small>%</small> Discount : <strong className='subtotal_discount'><small>$</small>{discount}</strong>
            </p>
            <p className='subtotal_finalamount'>
              Final Amount : <strong className='subtotal_finalamountdigit'>{value}</strong>
            </p>

            <small className='subtotal_text'>Please Cross check items before making payment</small>
          </>
        )}
        decimalScale={2}
        value={getFinalAmount}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <Button className='subtotal_paymentbutton' onClick={() => history('/Payment')}>
        Make Payment
      </Button>
    </div>
  );
}


export default Subtotal;
