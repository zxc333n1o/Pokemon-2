import React from 'react';

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
    <div className="pokemon" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
      <span>{pokemon.name} - {price} coins</span>
      <button
        className="button"
        onClick={onBuy}
        disabled={!canBuy}
        style={{ padding: '5px 10px', backgroundColor: canBuy ? '#28a745' : '#ccc', color: 'white', border: 'none', cursor: canBuy ? 'pointer' : 'not-allowed' }}
      >
        Buy
      </button>
    </div>
  );
};
