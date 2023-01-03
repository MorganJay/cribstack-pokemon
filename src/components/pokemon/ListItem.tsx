import MUIListItem from '@mui/material/ListItem';
import MUIListItemButton from '@mui/material/ListItemButton';
import MUIListItemIcon from '@mui/material/ListItemIcon';
import MUIListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom'

import { usePokemonContext } from 'hooks/usePokemonContext';

interface Props {
  name: string;
}

const ListItem: React.FC<Props> = ({ name }: Props) => {
  const { deletePokemon } = usePokemonContext();
  const navigate = useNavigate();
  
  return (
    <MUIListItem disablePadding>
      <MUIListItemButton onClick={() => navigate(`pokemons/${name}`)}>
        <MUIListItemText primary={name} />
      </MUIListItemButton>
      <MUIListItemIcon>
        <DeleteIcon
          sx={{ cursor: 'pointer' }}
          color="error"
          onClick={() => deletePokemon(name)}
        />
      </MUIListItemIcon>
    </MUIListItem>
  );
};

export default ListItem;
