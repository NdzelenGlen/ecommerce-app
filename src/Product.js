import React, { useState } from 'react';
import "./Product.css";
import { useStateValue } from './StatePrivider';
import { Button, Modal } from '@mui/material'; // Import Modal from Material-UI
import thumb_up from './thumb_up.svg';
import { firestore } from './firebase';

function Product({ title, price, image, rating, id, like }) {
  const [{ basket }, dispatch] = useStateValue();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  const addToBasket = () => {
    // Dispatch action to add the item to the basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p className='product_title'>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => (<p key={i}>⭐</p>))}
        </div>
      </div>
      <img
        className='product_image'
        src={image}
        alt=""
      />
      <div className='product_button'>
        <p className='product_buttonlike' title='number of orders successfully delivered'>
          <img className='product_likebutton' src={thumb_up} alt="thumb up" />
          <b>{like}</b>
        </p>
        <Button onClick={addToBasket}>
          Order
        </Button>
        <Button onClick={openModal}>
          View
        </Button>
      </div>

      
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-content">
          <h5>{title}</h5>
          <div className="modal-left">
           
          <h3 className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </h3>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => (<p key={i}>⭐</p>))}
        </div>
          </div>
          <div className="modal-right">
            <img src={image} alt={title}  />
          </div >
          <div className='modal-rightbottom'>
          <p className='product_buttonlike' title='number of orders successfully delivered'>
          <img className='product_likebutton' src={thumb_up} alt="thumb up" />
          <b>{like}</b>
        </p>
          <Button onClick={closeModal}>Close</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Product;
