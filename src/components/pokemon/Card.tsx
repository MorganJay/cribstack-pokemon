import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Pokemon } from 'types/pokemon.types';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const { name, image, moves, abilities } = pokemon;
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt={name}
        height="180"
        image={
          image ||
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png'
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Moves:{' '}
          {moves.map((move, idx) => (
            <Typography variant="body1" component="span" key={idx}>
              {move}{' '}
            </Typography>
          ))}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Abilities:{' '}
          {abilities.map((ability, idx) => (
            <Typography variant="body1" component="span" key={idx}>
              {ability}{' '}
            </Typography>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
