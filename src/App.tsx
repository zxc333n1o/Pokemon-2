import React, { useState } from 'react'; 
import { Market } from './components/Market/Market';
import * as PIXI from 'pixi.js';
import storeImage from './components/Pictures/Store.jpg'; // обнови путь к иконке магазина
import pikachuImage from './components/Pictures/Pikachu.png'; // обнови путь к иконке Pikachu

const App: React.FC = () => {
  const [marketVisible, setMarketVisible] = useState(false);
  const [pokemonVisible, setPokemonVisible] = useState(false);
  const [purchasedPokemons, setPurchasedPokemons] = useState<{ [key: string]: number }>({});
  const [coins, setCoins] = useState(100); // Переносим сюда состояние монет
  const [inflationRate, setInflationRate] = useState(1.0); // И инфляции

  const openMarket = () => {
    setMarketVisible(true);
  };

  const togglePokemonList = () => {
    setPokemonVisible(!pokemonVisible);
  };

  const handlePokemonPurchase = (pokemonName: string, price: number) => {
    setPurchasedPokemons(prevState => ({
      ...prevState,
      [pokemonName]: (prevState[pokemonName] || 0) + 1
    }));
    setCoins(coins - price); // Обновляем монеты
    setInflationRate(inflationRate + 0.1); // Обновляем инфляцию
  };

  return (
    <div>
      {!marketVisible && (
        <img 
          src={storeImage} 
          alt="Store" 
          style={{ cursor: 'pointer', width: '150px' }} 
          onClick={openMarket}
        />
      )}

      {marketVisible && (
        <div>
          <img 
            src={pikachuImage} 
            alt="Pikachu" 
            onClick={togglePokemonList} 
            style={{ cursor: 'pointer', width: '150px' }} 
          />
          {pokemonVisible && (
            <Market 
              coins={coins} 
              inflationRate={inflationRate} 
              onPokemonPurchase={handlePokemonPurchase} 
            />
          )}
          <div style={{ marginTop: '20px' }}>
            <h3>Купленные покемоны:</h3>
            <ul>
              {Object.keys(purchasedPokemons).map(pokemon => (
                <li key={pokemon}>
                  {pokemon}: {purchasedPokemons[pokemon]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
