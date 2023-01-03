export interface PokemonPreview {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  abilities: string[];
  image: string | null;
  moves: string[];
}

export type PokemonContextType = {
  pokemons: string[];
  // pokemon: Pokemon | undefined;
  addPokemon: (name: string) => void;
  deletePokemon: (name: string) => void;
  fetchPokemons: (offset?: number, limit?: number) => void;
  modalOpen: boolean;
  toggleModalState: (state: boolean) => void;
};
