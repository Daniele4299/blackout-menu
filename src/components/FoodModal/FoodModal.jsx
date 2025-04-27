import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock } from '@fortawesome/free-solid-svg-icons'; // Icona del tempo di cottura (momentaneamente non usata)
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './FoodModal.css';

const FoodModal = ({ food, onClose }) => {
  if (!food) return null;

  const { name, description, price, image, /* cookingTime, */ extraDescription } = food;

  return (
    <div className="food-modal-overlay">
      <div className="food-modal">
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <img src={image} alt={name} className="food-modal-image" />
        <div className="food-modal-info">
          <h2 className="food-modal-name">{name}</h2>
          <p className="food-modal-description">{description}</p>
          {extraDescription && (
            <p className="food-modal-extra-description">Info: {extraDescription}</p>
          )}
          <p className="food-modal-price">{price}€</p>

          {/* Se in futuro vorrai riattivare il tempo di cottura, togli questi commenti */}
          {/*
          <div className="food-modal-cooking-time">
            <FontAwesomeIcon icon={faClock} />
            <span>{cookingTime} min</span>
          </div>
          */}
          
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
