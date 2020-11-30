import React from 'react';

import { Pokemon } from '../../../types/pokemon';

import {
  Container,
  PokemonHeaderDiv,
  Name,
  PokedexNumber,
  Types,
  Type,
  TypeText,
  PokemonGenera,
} from './styles';

type PokemonHeaderProps = {
  pokemon: Pokemon;
};

const PokemonHeader = ({ pokemon }: PokemonHeaderProps) => {
  return (
    <Container>
      <PokemonHeaderDiv>
        <Name>{pokemon.name}</Name>
        <PokedexNumber>#{pokemon.pokedex_number}</PokedexNumber>
      </PokemonHeaderDiv>

      <PokemonHeaderDiv style={{ marginTop: 16 }}>
        <Types>
          {pokemon.types.map(type => (
            <Type key={type.url}>
              <TypeText>{type.name}</TypeText>
            </Type>
          ))}
        </Types>
        <PokemonGenera>{pokemon.genera}</PokemonGenera>
      </PokemonHeaderDiv>
    </Container>
  );
};

export default PokemonHeader;
