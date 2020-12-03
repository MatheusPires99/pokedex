import React, { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

import { Pokemon } from '../../../types';
import { getColorByPokemonType } from '../../../utils';

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

  const backgroundColor = useMemo(
    () => getColorByPokemonType(pokemon.types[0].name),
    [pokemon.types],
  );

  return (
    <Container
      afterThirdCard={afterThirdCard}
      rightItem={rightItem}
      style={{
        backgroundColor,
      }}
      onPress={handleNavigateToPokemon}
    >
      <PokemonName>{pokemon.name}</PokemonName>

      <PokedexNumber>#{pokemon.pokedex_number}</PokedexNumber>

      <SharedElement
        id={`pokemon.${pokemon.id}`}
        style={{ position: 'absolute', bottom: 8, right: 8 }}
      >
        <PokemonImage source={{ uri: pokemon.image }} />
      </SharedElement>

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
