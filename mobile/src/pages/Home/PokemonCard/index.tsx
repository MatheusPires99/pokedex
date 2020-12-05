import React, { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { View } from 'react-native';

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
            <Text color="white" bold>
              {pokemon.name}
            </Text>
          </SharedElement>
        </View>

        <PokedexNumber style={{ fontSize: 10 }}>
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
              <Text color="white" style={{ fontSize: 8, lineHeight: 0 }}>
                {type.name}
              </Text>
            </Type>
          ))}
        </Types>
      </Button>
    </Container>
  );
};

export default PokemonCard;
