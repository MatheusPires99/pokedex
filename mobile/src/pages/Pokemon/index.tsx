import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { Feather as Icon } from '@expo/vector-icons';
import { Text } from 'react-native';

import api from '../../services/api';
import { Pokemon as PokemonType } from '../../types/pokemon';

import {
  Container,
  Header,
  GoBackButton,
  Content,
  PokemonHeader,
  PokemonHeaderDiv,
  Name,
  PokedexNumber,
  Types,
  Type,
  TypeText,
  PokemonGenera,
} from './styles';

const Pokemon = () => {
  const { colors } = useTheme();

  const [pokemon, setPokemon] = useState({} as PokemonType);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPokemon() {
      const response = await api.get<PokemonType>(`pokemons/${4}`);

      setPokemon(response.data);
      setLoading(false);
    }

    getPokemon();
  }, []);

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  return (
    <Container>
      <Header>
        <GoBackButton>
          <Icon name="arrow-left" color={colors.white} size={24} />
        </GoBackButton>
      </Header>

      <Content>
        <PokemonHeader>
          <PokemonHeaderDiv>
            <Name>{pokemon.name}</Name>
            <PokedexNumber>#{pokemon.pokedex_number}</PokedexNumber>
          </PokemonHeaderDiv>

          <PokemonHeaderDiv style={{ marginTop: 16 }}>
            <Types>
              {pokemon.types.map(type => (
                <Type>
                  <TypeText>{type.name}</TypeText>
                </Type>
              ))}
            </Types>
            <PokemonGenera>{pokemon.genera}</PokemonGenera>
          </PokemonHeaderDiv>
        </PokemonHeader>
      </Content>
    </Container>
  );
};

export default Pokemon;
