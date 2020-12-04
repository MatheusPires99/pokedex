import React, { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { View } from 'react-native';
import { useTheme } from 'styled-components';

import { Pokemon } from '../../../types';
import { getColorByPokemonType } from '../../../utils';
import Text from '../../../components/Text';

import {
  Container,
  Button,
  PokedexNumber,
  PokemonImage,
  Types,
  Type,
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
  const { colors } = useTheme();

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
    <Container>
      <Button
        afterThirdCard={afterThirdCard}
        rightItem={rightItem}
        style={{
          backgroundColor,
        }}
        onPress={handleNavigateToPokemon}
      >
        <View style={{ alignItems: 'flex-start' }}>
          <SharedElement id={`pokemon.${pokemon.id}.name`}>
            <Text fontWeight="bold">{pokemon.name}</Text>
          </SharedElement>
        </View>

        <PokedexNumber size={10} color={`${colors.black}30`}>
          #{pokemon.pokedex_number}
        </PokedexNumber>

        <SharedElement
          id={`pokemon.${pokemon.id}.image`}
          style={{ position: 'absolute', bottom: 8, right: 8 }}
        >
          <PokemonImage source={{ uri: pokemon.image }} />
        </SharedElement>

        <Types>
          {pokemon.types.map(type => (
            <Type key={type.url}>
              <Text size={8}>{type.name}</Text>
            </Type>
          ))}
        </Types>
      </Button>
    </Container>
  );
};

export default PokemonCard;
