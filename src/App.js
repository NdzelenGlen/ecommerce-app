import React from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Basket from './Basket.js';
import Orders from './Orders.js';
import LogIn from './LogIn.js';
import SignUp from './SignUp.js';
import { auth } from './firebase';
import Payment from './Payment.js';
import { useStateValue } from './StatePrivider.js'
import { BrowserRouter as Router , Routes , Route ,Switch } from 'react-router-dom'
import { useState , useEffect } from 'react'

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51Oe8F6DmEFpczxKzIsW0ZxvXIFsCoSgZ8V8sQJUJzSlNKDK1eYvpWZK4ZLcLToU8UOoe1brQHXl8KJVEu8tDEwOp00i2nhEYbf');


function App() {
  const [{basket}, dispatch ] = useStateValue();
  const [clientSecret,setClientSecret] = useState(true);
  
  const options = {
    clientSecret: `${clientSecret}`,
  };
  
  useEffect(() =>{
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);
      if (authUser){
          dispatch({
            type: 'SET_USER',
            user:authUser
          })
      } else{
        dispatch({
          type:'SET_USER',
          user: null
        }

        )

      }
    })
  },[])
  return (
    <Router>
      <Header/>
         
         
        
          <Routes >
         
          <Route path='/' element={<Home/>}></Route>
        
          </Routes>
            
          
          <Routes  >
          
            <Route path='/Basket' element={<Basket/> }></Route>
            
          </Routes>
            <Routes >
            
            <Route path='/LogIn' element={<LogIn/>}></Route>
           
            </Routes>
            <Routes >
            
            <Route  path='/SignUp' element={<SignUp/>}></Route>
           
            </Routes>
            <Routes >
            
            <Route path='/Payment' element={<Elements  stripe={stripePromise}><Payment/></Elements>}></Route>
           
            </Routes>
            <Routes >
           
            <Route path='/Orders' element={<Orders/>}></Route>
           
          </Routes>

        
      
    </Router>
  );
}

export default App;



