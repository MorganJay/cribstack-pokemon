import styled from 'styled-components';

import ListItem from './ListItem';

interface Props {
  data: string[] | undefined;
}

const List = ({ data }: Props) => {
  if (!data) {
    return <p>Please create pokemons</p>;
  }

  return (
    <ListContainer>
      {data.map((pokemon, idx) => (
        <ListItem name={pokemon} key={idx} />
      ))}
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.ul`
  margin: 0 auto;
  margin-top: 2rem;
  width: 40%;
  max-height: 50%;
  overflow-y: scroll;
`;
