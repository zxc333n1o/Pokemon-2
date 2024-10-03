import React from 'react';
import '../CSS/Pokemon.css';

interface PokemonProps {
  pokemon: {
    id: number;
    name: string;
    basePrice: number;
  };
  inflationRate: number;
  onBuy: () => void;
  canBuy: boolean;
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemon, inflationRate, onBuy, canBuy }) => {
  const price = Math.round(pokemon.basePrice * inflationRate);

  return (
    <div className="pokemon">
      <span>{pokemon.name} - {price} coins</span>
      <button
        className={`button ${canBuy ? 'can-buy' : 'cannot-buy'}`}
        onClick={onBuy}
        disabled={!canBuy}
      >
        Buy
      </button>
    </div>
  );
};
