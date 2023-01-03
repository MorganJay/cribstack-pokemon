import { useContext } from 'react';

import { PokemonContext } from 'context/pokemon.context';

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);

  // if `undefined`, throw an error
  if (context === undefined)
    throw new Error('usePokemonContext was used outside of its Provider');

  return context;
};
