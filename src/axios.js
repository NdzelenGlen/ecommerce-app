import axios from 'axios';
const instance = axios.create({baseURL: 'http://127.0.0.1:5001/ecommerce-d1bd9/us-central1/api'//paste api end point
});
export default instance;
// pk_test_51Oe8F6DmEFpczxKzIsW0ZxvXIFsCoSgZ8V8sQJUJzSlNKDK1eYvpWZK4ZLcLToU8UOoe1brQHXl8KJVEu8tDEwOp00i2nhEYbf
// secretkey ..pk_test_51Oe8F6DmEFpczxKzIsW0ZxvXIFsCoSgZ8V8sQJUJzSlNKDK1eYvpWZK4ZLcLToU8UOoe1brQHXl8KJVEu8tDEwOp00i2nhEYbf



// import React, { useEffect } from 'react';
// import './App.css';
// import Header from './Header.js';
// import Home from './Home.js';
// import Basket from './Basket.js';
// import Orders from './Orders.js';
// import LogIn from './LogIn.js';
// import SignUp from './SignUp.js';
// import { auth } from './firebase.js';
// import Payment from './Payment.js';
// import { useStateValue } from './StatePrivider.js';
// import { BrowserRouter as Routes,Router, Route } from 'react-router-dom';
// import Footer from './Footer.js';
// import ProductView from './ProductView.js';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';

// const promise = loadStripe('your_stripe_public_key');

// function App() {
//   const [{ basket }, dispatch] = useStateValue();

//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       console.log('THE USER IS >>>', authUser);
//       if (authUser) {
//         dispatch({
//           type: 'SET_USER',
//           user: authUser,
//         });
//       } else {
//         dispatch({
//           type: 'SET_USER',
//           user: null,
//         });
//       }
//     });
//   }, []);

//   return (
   
//       <div className="app">
//         <Router>
      
//       <Header/>
      
     
//        <Routes>
//          <Route path='/' element={<Home/>}>
//          </Route>
         
//        </Routes> 
       
//        <Routes>
//          <Route path='/Basket' element={<Basket/> }></Route>
//        </Routes>
//        <Routes>
//          <Route path='/LogIn' element={<LogIn/>}></Route>
//        </Routes>
//        <Routes>
//          <Route path='SignUp' element={<SignUp/>}></Route>
//        </Routes>
//        <Routes >
//          <Route path='Payment' element={<Elements><Payment/></Elements>}></Route>
//        </Routes>

//      <Footer className='app_footer'/>
   
   
//    </Router>
//       </div>
    
//   );
// }

// export default App;
