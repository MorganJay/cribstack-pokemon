import { createContext, useState, useMemo, useCallback } from 'react';
import { PokemonContextType } from 'types/pokemon.types';

import { getPokemonsAsync } from 'api/pokemon.service';

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);
PokemonContext.displayName = 'Pokemon Context';

interface Props {
  children: React.ReactNode;
}

const PokemonContextProvider = ({ children }: Props) => {
  const [pokemons, setPokemons] = useState<string[]>([]);
  const [modalOpen, setModalState] = useState<boolean>(false);

  const addPokemon = useCallback(
    (name: string) => setPokemons((prevState) => [name, ...prevState]),
    []
  );

  const deletePokemon = useCallback(
    (name: string) =>
      setPokemons((prevState) => prevState.filter((state) => state !== name)),
    []
  );

  const fetchPokemons = useCallback(async (offset?: number, limit?: number) => {
    const pokemons = await getPokemonsAsync(offset, limit);
    setPokemons(pokemons);
  }, []);

  const toggleModalState = useCallback(
    (state: boolean) => setModalState(state),
    []
  );

  const contextValue = useMemo(
    () => ({
      pokemons,
      addPokemon,
      deletePokemon,
      fetchPokemons,
      modalOpen,
      toggleModalState,
    }),
    [
      pokemons,
      addPokemon,
      deletePokemon,
      fetchPokemons,
      modalOpen,
      toggleModalState,
    ]
  );

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonContextProvider };
