import React from 'react'
import './App.css'
import Header  from './Header.js'
import Home  from './Home.js'
import Basket from './Basket.js'
import LogIn from './LogIn.js'
import SignUp from './SignUp.js'
import { auth } from './firebase.js'
import Payment from './Payment.js'
import { useStateValue } from './StatePrivider.js'
import { BrowserRouter as Router , Routes , Route ,Switch } from 'react-router-dom'
import { useState , useEffect } from 'react'
import Footer from './Footer.js'


function App() {
  const [{basket}, dispatch ] = useStateValue();
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
         
        
          <Routes>
            <Route path='/' element={<Home/>}>
            </Route>
            
          </Routes> 
          
          <Routes>
            <Route path='/Basket' element={<Basket/> }></Route>
          </Routes>
          <Routes>
            <Route path='/LogIn' element={<LogIn/>}></Route>
          </Routes>
          <Routes>
            <Route path='SignUp' element={<SignUp/>}></Route>
          </Routes>
          <Routes >
            <Route path='Payment' element={<Payment/>}></Route>
          </Routes>

        <Footer className='app_footer'/>
      
      
      </Router>
  );
}

export default App;
