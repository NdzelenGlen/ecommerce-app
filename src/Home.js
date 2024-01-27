import React from 'react'
import "./Home.css"
import Product from "./Product"
import logo from './logo.jpeg'
import { Link } from 'react-router-dom'
import { useStateValue } from './StatePrivider';
import { ReactComponent as Basketicon } from './basket_icon.svg'
import { ReactComponent as Rightarrow } from './arrowright.svg'
import { ReactComponent as Leftarrow } from './arrowleft.svg'
import {Button} from '@mui/material'

function Home() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="home">
      
     
      <div className="home_container">
        <img
          className="home_image"
          src={logo}
          alt="home"
        />
        <div className='home_optionbasket'></div>
        <Leftarrow  className='home_leftbutton'
                />
      
      <Rightarrow  className='home_rightbutton'
                />
      
      
        <Link to="/Basket">
          <div className="home_optionbasket">
            <span> <Basketicon
              className='home_optionbasketicon' /></span>
            <span className="home_basketcount">{basket?.length}</span>
          </div>
        </Link>
       
        <div className="home_row">

          <Product title="Thank hahah noo yes okay bye nice blala you very much this was awsome but i will  having u back inn "
            price={65.6}
            image={logo}
            rating={5} />
          <Product />
          <Product />


        </div>
        <div className="home_row">
          <Product />
          <Product />
        </div>
        <div className="home_row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home_row">
          <Product />
        </div>
        <div className='home_bottombuttons'>
        <Button className='home_nextpreviousbutton'><h2>Previous</h2></Button>
        <Button className='home_nextpreviousbutton'><h2>Next</h2></Button>
       </div>
     
 

      </div>
    
    </div>
  

  )
}

export default Home
