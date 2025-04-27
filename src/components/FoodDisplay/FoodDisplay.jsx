import React, { useState } from 'react';
import { food_list } from '../../assets/assets';
import FoodItem from '../FoodItem/FoodItem';
import FoodModal from '../FoodModal/FoodModal'; // importa la modale
import './FoodDisplay.css';

export const FoodDisplay = ({ category }) => {
    const [selectedFood, setSelectedFood] = useState(null);

    return (
        <div className='food-display' id='food-display'>
            <div className="food-display-list">
                {food_list
                    .filter((item) => category === "All" || category === item.category)
                    .map((item) => (
                        <div key={item._id} onClick={() => setSelectedFood(item)}>
                            <FoodItem
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                cookingTime={item.cookingTime}
                            />
                        </div>
                    ))}
            </div>
            {/* Modale */}
            {selectedFood && (
                <FoodModal food={selectedFood} onClose={() => setSelectedFood(null)} />
            )}
        </div>
    );
};
