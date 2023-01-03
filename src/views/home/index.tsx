import { useEffect } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CircularProgress from '@mui/material/CircularProgress';

import List from 'components/pokemon/List';
import Header from 'components/pokemon/Header';
import Modal from 'components/pokemon/Modal';

import { ListHeader, Wrapper } from './styles';

import { usePokemonContext } from 'hooks/usePokemonContext';

const HomePage = () => {
  const { pokemons, fetchPokemons, toggleModalState } = usePokemonContext();

  useEffect(() => {
    fetchPokemons(Math.random() * 50);
  }, []);

  return (
    <Wrapper>
      <Header />
      <ListHeader>
        <h3>List of Pokemons</h3>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => toggleModalState(true)}
        >
          <AddIcon /> Add Pokemon
        </Button>
      </ListHeader>
      {pokemons.length ? (
        <List data={pokemons} />
      ) : (
        <CircularProgress
          size={50}
          sx={{ position: 'absolute', left: '50%', top: '70%' }}
        />
      )}
      <Modal />
    </Wrapper>
  );
};

export default HomePage;
