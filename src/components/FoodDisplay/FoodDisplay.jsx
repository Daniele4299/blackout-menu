import React from 'react';
import { food_list } from '../../assets/assets'; // Importa direttamente la lista
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';

export const FoodDisplay = ({ category }) => {
    return (
        <div className='food-display' id='food-display'>
            <div className="food-display-list">
                {food_list
                    .filter((item) => category === "All" || category === item.category)
                    .map((item) => (
                        <FoodItem
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                            cookingTime={item.cookingTime} // Passa cookingTime qui
                        />
                    ))}
            </div>
        </div>
    );
};
