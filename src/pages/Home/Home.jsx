import React, { useState, useEffect } from 'react';
import Menu from '../../components/ExploreMenu/Menu';
import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay';
import Header from '../../components/Header/Header';
import { menu_list } from '../../assets/assets'; // Assicurati che questa importazione ci sia per accedere alla lista delle categorie
import './Home.css';

const Home = () => {
  // Stato per la categoria, inizializzato alla prima categoria della lista
  const [category, setCategory] = useState("");

  // Impostare la categoria iniziale quando il componente si monta
  useEffect(() => {
    if (menu_list.length > 0) {
      setCategory(menu_list[0].menu_name);  // Imposta la prima categoria come categoria di default
    }
  }, []);

  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
}

export default Home;
