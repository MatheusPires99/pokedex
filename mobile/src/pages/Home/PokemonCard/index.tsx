import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { POKEMON_TYPE_COLORS } from '../../../constants';
import { Pokemon } from '../../../types';

import {
  Container,
  PokemonName,
  PokedexNumber,
  PokemonImage,
  Types,
  Type,
  TypeText,
} from './styles';

type PokemonCardProps = {
  pokemon: Pokemon;
  afterThirdCard: boolean;
  rightItem: boolean;
};

const PokemonCard = ({
  pokemon,
  afterThirdCard,
  rightItem,
}: PokemonCardProps) => {
  const navigation = useNavigation();

  const handleNavigateToPokemon = useCallback(() => {
    navigation.navigate('Pokemon', {
      pokemon,
    });
  }, [navigation, pokemon]);

  return (
    <Container
      afterThirdCard={afterThirdCard}
      rightItem={rightItem}
      style={{
        backgroundColor:
          POKEMON_TYPE_COLORS[pokemon.types[0].name.toLowerCase()],
      }}
      onPress={handleNavigateToPokemon}
    >
      <PokemonName>{pokemon.name}</PokemonName>

      <PokedexNumber>#{pokemon.pokedex_number}</PokedexNumber>

      <PokemonImage source={{ uri: pokemon.image }} />

      <Types>
        {pokemon.types.map(type => (
          <Type key={type.url}>
            <TypeText>{type.name}</TypeText>
          </Type>
        ))}
      </Types>
    </Container>
  );
};

export default PokemonCard;
