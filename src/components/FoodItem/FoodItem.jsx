import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock } from '@fortawesome/free-solid-svg-icons'; // Icona del tempo di cottura
import './FoodItem.css';

const FoodItem = ({ id, name, price, description, image /*, cookingTime */ }) => {
    
    // Gestione tocco su mobile
    const handleTouchStart = (e) => {
        e.currentTarget.classList.add('active');
    };

    const handleTouchEnd = (e) => {
        e.currentTarget.classList.remove('active');
    };

    const handleTouchCancel = (e) => {
        e.currentTarget.classList.remove('active');
    };

    return (
        <div
            className='food-item'
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
        >
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
            </div>
            <div className="food-item-info">
                <div className="food-item-name-cookingTime">
                    <p className="food-item-name">{name}</p>
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">{price}€</p>

                {/* Se in futuro avrai il tempo di cottura disponibile, decommenta questa parte */}
                {/*
                <div className="cooking-time-container">
                    <FontAwesomeIcon icon={faClock} className="cooking-time-icon" />
                    <span className="cooking-time-text">{cookingTime} min</span>
                </div>
                */}
            </div>
        </div>
    );
};

export default FoodItem;
