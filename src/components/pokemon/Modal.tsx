import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Select from 'components/pokemon/Select';

import { usePokemonContext } from 'hooks/usePokemonContext';
import { getPokemonsAsync } from 'api/pokemon.service';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
};

const AddPokemonModal = () => {
  const { modalOpen, toggleModalState, addPokemon } = usePokemonContext();
  const [options, setOptions] = useState<string[]>([]);
  const [inputtedValue, setInputtedValue] = useState<string | null>('');

  const fetchPokemonOptions = async () => {
    const result = await getPokemonsAsync(Math.random() * 50, 20);
    setOptions(result);
  };

  useEffect(() => {
    fetchPokemonOptions();

    return () => {
      setOptions([]);
      setInputtedValue('');
    };
  }, []);

  const handleAddPokemon = (name: string) => {
    addPokemon(name);
    setInputtedValue('');
    toggleModalState(false);
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={() => toggleModalState(false)}
        aria-labelledby="modal-add-pokemon"
        aria-describedby="modal to add a pokemon"
      >
        <Box sx={style}>
          <Typography
            id="Select Pokemon"
            variant="h6"
            component="h2"
            color="text.primary"
            gutterBottom
          >
            Choose your desired pokemon
          </Typography>
          <InputContainer>
            <Select
              options={options}
              value={inputtedValue}
              setValue={setInputtedValue}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                inputtedValue ? handleAddPokemon(inputtedValue) : null
              }
            >
              SAVE
            </Button>
          </InputContainer>
        </Box>
      </Modal>
    </div>
  );
};

export default AddPokemonModal;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  justify-content: space-between;
`;
