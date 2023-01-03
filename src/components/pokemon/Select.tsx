import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
  options: string[];
  value: string | null;
  setValue: (value: string | null) => void;
}

const PokemonSelect = ({ options, value, setValue }: Props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Autocomplete
      value={value}
      onChange={(
        event: React.SyntheticEvent<Element, Event>,
        newValue: string | null
      ) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="controllable-states-pokemon"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Select or type pokemon name" />
      )}
    />
  );
};

export default PokemonSelect;
