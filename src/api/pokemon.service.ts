import { Pokemon, PokemonClient } from 'pokenode-ts';
import { Pokemon as PokemonType } from '../types/pokemon.types';

export const getPokemonsAsync = async (
  offset = 0,
  limit = 10
): Promise<string[]> => {
  try {
    const api = new PokemonClient();

    const response = await api.listPokemons(offset, limit || 10);
    return response.results.map((result) => result.name);
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getPokemonByNameAsync = async (
  name: string
): Promise<PokemonType | undefined> => {
  try {
    const api = new PokemonClient();
    const response: Pokemon = await api.getPokemonByName(name);
    const result: PokemonType = {
      name: response.name,
      image: response.sprites.front_default,
      moves: response.moves.slice(0, 2).map((move) => move.move.name),
      abilities: response.abilities.map((ability) => ability.ability.name),
    };
    return result;
  } catch (error) {
    console.error(error);
    return;
  }
};
