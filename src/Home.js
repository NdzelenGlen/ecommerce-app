import React from 'react'
import "./Home.css"
import Product from "./Product"
import logo from './logo.jpeg'


function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img 
        className="home_image"
        src=''
        alt="home"
        />
       
       <div className="home_row">
        
        <Product title="Thank hahah noo yes okay bye nice blala you very much this was awsome but i will  having u back inn " 
        price={65.6} 
        image={logo}
        rating={5}/>
        <Product/>
        <Product/>
        
        
       </div>
       <div className="home_row">
        <Product/>
        <Product/>
       </div>
       <div className="home_row">
        <Product/>
        <Product/>
        <Product/>
       </div>
       <div className="home_row">
        <Product/>
       </div>
       
      </div>
    </div>
  )
}

export default Home
