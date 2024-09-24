import React from 'react';
import { Pokemon } from '../Pokemon/Pokemon';
import * as PIXI from 'pixi.js';

interface MarketProps {
  coins: number;
  inflationRate: number;
  onPokemonPurchase: (pokemonName: string, price: number) => void; // Новый пропс
}

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

export const Market: React.FC<MarketProps> = ({ coins, inflationRate, onPokemonPurchase }) => {
  const [pokemons] = React.useState<PokemonType[]>(initialPokemons);

  const buyPokemon = (id: number, price: number) => {
    const adjustedPrice = Math.round(price * inflationRate);
    if (coins >= adjustedPrice) {
      const pokemon = pokemons.find(p => p.id === id);
      if (pokemon) {
        onPokemonPurchase(pokemon.name, adjustedPrice); // Передаем имя и цену в App
        alert(`Вы купили ${pokemon.name} за ${adjustedPrice} монет!`);
      }
    } else {
      alert("Недостаточно монет!");
    }
  };

  return (
    <div id="market">
      <p>Монеты: {coins}</p>
      <p>Уровень инфляции: {inflationRate.toFixed(2)}</p>
      <h2>Доступные покемоны</h2>
      <div id="pokemon-list">
        {pokemons.map(pokemon => (
          <Pokemon
            key={pokemon.id}
            pokemon={pokemon}
            inflationRate={inflationRate}
            onBuy={() => buyPokemon(pokemon.id, pokemon.basePrice)}
            canBuy={coins >= Math.round(pokemon.basePrice * inflationRate)}
          />
        ))}
      </div>
    </div>
  );
};
