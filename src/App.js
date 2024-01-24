import React from 'react'
import './App.css'
import Header  from './Header.js'
import Home  from './Home.js'
import Basket from './Basket.js'
import LogIn from './LogIn.js'
import SignUp from './SignUp.js'

import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className="App">
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

        
      </div>
      
      </Router>
  );
}

export default App;
