import React from 'react';
import { ViewProps } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

import { Pokemon } from '../../types';

import { Container, Type, TypeText } from './styles';

type PokemonTypesProps = ViewProps & {
  pokemon: Pokemon;
  size: 'regular' | 'small';
};

const PokemonTypes = ({ pokemon, size, ...rest }: PokemonTypesProps) => {
  return (
    <Container size={size} {...rest}>
      {pokemon.types.map(type => (
        <SharedElement
          key={type.url}
          id={`pokemon.${pokemon.id}.type.${type.url}`}
        >
          <Type size={size}>
            <TypeText size={size}>{type.name}</TypeText>
          </Type>
        </SharedElement>
      ))}
    </Container>
  );
};

export default PokemonTypes;
