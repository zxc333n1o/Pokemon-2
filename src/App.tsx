import React, { useState } from 'react';  
import { Market } from './components/Market/Market';
import { RandomMarket } from './components/Market/randomMarket';
import * as PIXI from 'pixi.js';
import storeImage from './components/Pictures/Store.jpg'; 
import randomMarketImage from './components/Pictures/randomMarket.png'; 
import pikachuImage from './components/Pictures/Pikachu.png'; 
import backArrow from './components/Pictures/strelka.png'; 





const App: React.FC = () => {
  const [marketVisible, setMarketVisible] = useState(false);
  const [pokemonVisible, setPokemonVisible] = useState(false);
  const [randomMarketVisible, setRandomMarketVisible] = useState(false);
  const [purchasedPokemons, setPurchasedPokemons] = useState<{ [key: string]: number }>({});
  const [coins, setCoins] = useState(100);
  const [inflationRates, setInflationRates] = useState<{ [key: string]: number }>({
    Pikachu: 1.0,
    Charmander: 1.0,
    Bulbasaur: 1.0,
    Squirtle: 1.0,
  });

  const openMarket = () => {
    setMarketVisible(true);
  };

  const closeMarket = () => {
    setMarketVisible(false);
    setPokemonVisible(false);
  };

  const openRandomMarket = () => {
    setRandomMarketVisible(true);
  };

  const closeRandomMarket = () => {
    setRandomMarketVisible(false);
  };

  const togglePokemonList = () => {
    setPokemonVisible(!pokemonVisible);
  };

  const handlePokemonPurchase = (pokemonName: string, price: number) => {
    setPurchasedPokemons(prevState => ({
      ...prevState,
      [pokemonName]: (prevState[pokemonName] || 0) + 1
    }));
    setCoins(coins - price);
    setInflationRates(prevRates => ({
      ...prevRates,
      [pokemonName]: prevRates[pokemonName] + 0.1,
    }));
  };

  return (
    <div>
      {!marketVisible && !randomMarketVisible && (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '320px' }}>
          <img 
            src={storeImage} 
            alt="Store" 
            style={{ cursor: 'pointer', width: '150px' }} 
            onClick={openMarket}
          />
          <img 
            src={randomMarketImage} 
            alt="Random Market" 
            style={{ cursor: 'pointer', width: '150px' }} 
            onClick={openRandomMarket}
          />
        </div>
      )}

      {marketVisible && (
        <div>
          <img 
            src={backArrow} 
            alt="Back to Store" 
            onClick={closeMarket} 
            style={{ cursor: 'pointer', width: '50px' }} 
          />
          <img 
            src={pikachuImage} 
            alt="Pikachu" 
            onClick={togglePokemonList} 
            style={{ cursor: 'pointer', width: '150px' }} 
          />
          {pokemonVisible && (
            <Market 
              coins={coins} 
              inflationRates={inflationRates} 
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

      {randomMarketVisible && (
        <div>
          <img 
            src={backArrow} 
            alt="Back to Store" 
            onClick={closeRandomMarket} 
            style={{ cursor: 'pointer', width: '50px' }} 
          />
          <RandomMarket 
            coins={coins} 
            onPokemonPurchase={handlePokemonPurchase} 
          />
        </div>
      )}
    </div>
  );
};

export default App;
