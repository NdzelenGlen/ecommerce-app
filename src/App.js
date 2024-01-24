import React from 'react'
import './App.css'
import Header  from './Header.js'
import Home  from './Home.js'
import Basket from './Basket.js'

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
            <Route path='/Basket' element={<Basket/>}></Route>
          </Routes>

        
      </div>
      
      </Router>
  );
}

export default App;
