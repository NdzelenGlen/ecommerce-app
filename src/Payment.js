import React, { useEffect, useState } from 'react'
import BasketProduct from './BasketProduct';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StatePrivider';
import { Button } from '@mui/material';
import './Payment.css'
import { getBasketTotal } from './reducer';
import { ReactComponent as Basketicon } from './basket_icon.svg'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import axios from './axios';
import { CurrencyFormat } from 'react-currency-format'

import { db } from './firebase';
function Payment() {
    const elements = useElements();
    const stripe = useStripe();
    const [{ basket, user }, dispatch] = useStateValue();
    const firstamount =basket?.reduce((amount , item) => item.price + amount, 0).toFixed(2);
   const discount = (firstamount*0.08).toFixed(2);
   const getFinalAmount=(firstamount-discount).toFixed(2);
    const history = useNavigate();
    const[ succeeded,setSuceeded] = useState(false);
    const[processing,setProcessing] = useState('');

   
    
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret,setClientSecret] = useState(true);
    useEffect(() => {
        const getClientSecret = async ()=>{
            const response = await axios({
                method:'post',
                url: `/payments/create?total=${getFinalAmount * 100}` 
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])


    console.log('the client secret>>>',clientSecret)
    const handleSubmit = async (event) => {
           event.preventDefault();
           setProcessing(true);
    const payload  = await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:elements.getElement(CardElement)
        }
        }).then(({paymentIntent}) =>{
        // db
        // .collection('users')
        // .doc(user?.uid)
        // .collection('orders')
        // .doc(paymentIntent.id)
        
        // .set({
        //     basket:basket,
        //     amount:paymentIntent.amount,
        //     created:paymentIntent.created,
        // });
                setSuceeded(true);
                setError(null)
                setProcessing(false)
                     

            dispatch({
                type:'EMPTY_BASKET'
            
               })

                history('/Orders',{replace:true})
        })
    }
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error? event.error.message : "Please verify your card number");


    }
   



    return (
        <div className='payment'>

            <div className='payment_container'>
                <h1>
                    <Basketicon
                        className='header_optionbasketicon' /><Link to='/Basket'>({basket?.length} Items)</Link>
                </h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p></p>
                        <p></p>

                    </div>

                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review Selected Items</h3>
                    </div>

                    <div className='payment_items'>
                        {basket.map(item => (
                            <BasketProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating} />
                        ))}

                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>

                    <div className='payment_details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment_pricecontainer'>
                                
                                            <p className='subtotal_finalamount'>
                                                Amount to Pay  : <strong className='subtotal_finalamountdigit'>${getFinalAmount}</strong>
                                            </p>

                                            <small className='subtotal_text'>Please Cross check items before making payment</small>
                                     
                                    

                                
                                <button  disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p>:"Buy Now"}</span>
                                </button>
                            </div>
                               {error && <div>{error}</div>}
                        </form>

                    </div>



                </div>
            </div>


        </div>
    )
}

export default Payment;
