import React from 'react';
import { Pokemon } from '../Pokemon/Pokemon';
import * as PIXI from 'pixi.js';





interface PokemonType {
  id: number;
  name: string;
  basePrice: number;
}

const initialPokemons: PokemonType[] = [
  { id: 1, name: "Pikachu", basePrice: 10 },
  { id: 2, name: "Charmander", basePrice: 15 },
  { id: 3, name: "Bulbasaur", basePrice: 12 },
  { id: 4, name: "Squirtle", basePrice: 8 },
];


interface MarketProps {
  coins: number;
  inflationRates: { [key: string]: number }; // Используем объект с инфляцией для каждого покемона
  onPokemonPurchase: (pokemonName: string, price: number) => void; 
}

export const Market: React.FC<MarketProps> = ({ coins, inflationRates, onPokemonPurchase }) => {
  const [pokemons] = React.useState<PokemonType[]>(initialPokemons);

  const buyPokemon = (id: number, price: number) => {
    const pokemon = pokemons.find(p => p.id === id);
    if (pokemon) {
      const adjustedPrice = Math.round(price * (inflationRates[pokemon.name] || 1)); // Применяем индивидуальный коэффициент инфляции
      if (coins >= adjustedPrice) {
        onPokemonPurchase(pokemon.name, adjustedPrice); // Передаем имя и цену в App
        alert(`Вы купили ${pokemon.name} за ${adjustedPrice} монет!`);
      } else {
        alert("Недостаточно монет!");
      }
    }
  };

  return (
    <div id="market">
      <p>Монеты: {coins}</p>
      <h2>Доступные покемоны</h2>
      <div id="pokemon-list">
        {pokemons.map(pokemon => (
          <Pokemon
            key={pokemon.id}
            pokemon={pokemon}
            inflationRate={inflationRates[pokemon.name] || 1} // Применяем индивидуальный коэффициент инфляции
            onBuy={() => buyPokemon(pokemon.id, pokemon.basePrice)}
            canBuy={coins >= Math.round(pokemon.basePrice * (inflationRates[pokemon.name] || 1))}
          />
        ))}
      </div>
    </div>
  );
};

