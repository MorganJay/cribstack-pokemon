import { Link, Routes, Route } from 'react-router-dom';

import HomeView from './views/home';
import PokemonView from 'views/pokemon';

import { Container } from './App.style';

import { PokemonContextProvider } from 'context/pokemon.context';

import PokeapiLogo from 'assets/img/pokeapi_256.3fa72200.png';

function App() {
  return (
    <Container>
      <Link to="/">
        <img src={PokeapiLogo} alt="PokeAPI" height={50} />
      </Link>
      <PokemonContextProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/pokemons/:name" element={<PokemonView />} />
        </Routes>
      </PokemonContextProvider>
    </Container>
  );
}

export default App;
