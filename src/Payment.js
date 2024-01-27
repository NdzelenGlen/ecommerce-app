import React, { useState } from 'react'
import BasketProduct from './BasketProduct';
import { Link } from 'react-router-dom';
import { useStateValue } from './StatePrivider';
import './Payment.css'
import {ReactComponent as Basketicon} from './basket_icon.svg'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>

            <div className='payment_container'>
                <h1>
                <Basketicon
               className='header_optionbasketicon'  /><Link to='/Basket'>({basket?.length} Items)</Link>
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
                            {/* stripe */}

                        </div>



                    </div>
                </div>
            

        </div>
    )
}

export default Payment
