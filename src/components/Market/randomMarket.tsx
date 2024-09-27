import React from 'react';

interface RandomMarketProps {
  coins: number;
  onPokemonPurchase: (pokemonName: string, price: number) => void;
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

export const RandomMarket: React.FC<RandomMarketProps> = ({ coins, onPokemonPurchase }) => {
  const buyRandomPokemon = () => {
    const randomIndex = Math.floor(Math.random() * initialPokemons.length);
    const randomPokemon = initialPokemons[randomIndex];
    const price = randomPokemon.basePrice;

    if (coins >= price) {
      onPokemonPurchase(randomPokemon.name, price);
      alert(`Вы купили случайного покемона: ${randomPokemon.name} за ${price} монет!`);
    } else {
      alert('Недостаточно монет!');
    }
  };

  return (
    <div>
      <h2>Случайный Магазин</h2>
      <button 
        onClick={buyRandomPokemon} 
        style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        Купить случайного покемона
      </button>
    </div>
  );
};
