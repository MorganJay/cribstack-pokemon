import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

import PokemonCard from 'components/pokemon/Card';

import { getPokemonByNameAsync } from 'api/pokemon.service';
import { Pokemon } from 'types/pokemon.types';

import { Wrapper } from './styles';

const PokemonView = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();

  const fetchPokemon = async (name: string) => {
    const result = await getPokemonByNameAsync(name);
    setPokemon(result);
  };

  useEffect(() => {
    if (name) fetchPokemon(name);
  }, [name]);

  return (
    <Wrapper>
      {pokemon ? (
        <PokemonCard pokemon={pokemon} />
      ) : (
        <CircularProgress size={30} />
      )}
    </Wrapper>
  );
};

export default PokemonView;
