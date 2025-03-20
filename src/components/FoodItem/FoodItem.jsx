import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons'; // Importa l'icona dell'orologio
import './FoodItem.css';

const FoodItem = ({ id, name, price, description, image, cookingTime }) => {
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
            </div>
            <div className="food-item-info">
                <div className="food-item-name-cookingTime">
                    <p className="food-item-name">{name}</p>
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">{price}€</p>
                <div className="cooking-time-container">
                        {/* Usa l'icona importata */}
                        <FontAwesomeIcon icon={faClock} className="cooking-time-icon" />
                        <span>{cookingTime} min</span>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
