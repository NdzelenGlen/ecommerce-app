import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StatePrivider';
import { Button } from '@mui/material';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const history = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const discount = basket?.reduce((amount, item) => (item.price + amount) * 0.15, 0).toFixed(2);
  const finalAmount = (getBasketTotal(basket) - discount).toFixed(2);

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Number of selected items <strong>= {basket?.length}</strong>
            </p>
            <p>
              Total Amount : <strong className='subtotal_totalamount'>{value}</strong>
            </p>
            <p id='discount'>
              <strong>15</strong>
              <small>%</small> Discount : <strong className='subtotal_discount'><small>$</small>{discount}</strong>
            </p>
            <p className='subtotal_finalamount'>
              Final Amount : <strong className='subtotal_finalamountdigit'><small>$</small>{finalAmount}</strong>
            </p>

            <small className='subtotal_text'>Please Cross check items before making payment</small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
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
