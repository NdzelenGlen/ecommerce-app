import React from 'react';
import './ProductView.css';
import { useParams } from 'react-router-dom';
import thumb_up from './thumb_up.svg';
import thumb_down from './thumb_down.svg';
import products from './Home'; // Import the default export 'products'
import { Button } from '@mui/material';
import Comment from './Comment';

function ProductView({name ,title ,rating ,price,like ,image }) {
  


  return (
    <div className='productview'>
      <div className='productview_left'>
        <div className='productview_top'>
          <p className='productview_title'>{title}</p>
          <p className="productview_price">
            <small>$</small><strong>{price}</strong>
          </p>
          <div className="productview_rating">
            {Array(rating).fill().map((_, i) => (<p key={i}>⭐</p>))}
          </div>
        </div>
        <div className='productview_bottom'>
          <div className='productview_likebutton'>
            <span className='productview_buttonlineone'><img src={thumb_up} alt="thumb up" /></span>
            
            <span className='productview_buttonlinetwo'><b>{like}</b></span>
          </div>
          
        </div>
      </div>
      <div className='productview_right'>
        <div className='productview_top'>
          <img
            className='productview_image'
            src={image}
            alt=''
          />
        </div>
        {/* <div className='productview_bottom'>
        <Comment postId={postId} />
          
        </div> */}
      </div>
    </div>
  );
}

export default ProductView;