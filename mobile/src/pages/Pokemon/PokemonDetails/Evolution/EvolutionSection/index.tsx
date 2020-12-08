import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import Text from '../../../../../components/Text';

import { Container, Pokemon, PokemonImage, MinLevel } from './styles';

type EvolutionSectionProps = {
  firstImage: string;
  firstName: string;
  secondImage: string;
  secondName: string;
  minLevel: number;
};

const EvolutionSection = ({
  firstImage,
  firstName,
  secondImage,
  secondName,
  minLevel,
}: EvolutionSectionProps) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Pokemon>
        <PokemonImage source={{ uri: firstImage }} />
        <Text>{firstName}</Text>
      </Pokemon>

      <MinLevel>
        <Icon name="arrow-right" size={20} color={colors.grey} />
        <Text bold style={{ marginTop: 8 }}>
          Lvl {minLevel}
        </Text>
      </MinLevel>

      <Pokemon>
        <PokemonImage source={{ uri: secondImage }} />
        <Text>{secondName}</Text>
      </Pokemon>
    </Container>
  );
};

export default EvolutionSection;
