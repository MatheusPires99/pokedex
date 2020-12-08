import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import Text from '../../../../../components/Text';
import api from '../../../../../services/api';
import { getColorByPokemonType } from '../../../../../utils';
import { TabProps } from '../../tabs';

import {
  Container,
  Header,
  EffectivenessList,
  EffectivenessItem,
} from './styles';

type EffectivenessType = {
  multiplier: string;
  type: string;
};

const Effectiveness = ({ pokemon }: TabProps) => {
  const [effectiveness, setEffectiveness] = useState<EffectivenessType[]>([]);
  const [loading, setLoading] = useState(true);

  const pokemonPrimaryType = pokemon.types[0].name.toLowerCase();

  useEffect(() => {
    async function loadPokemonEffectiveness() {
      const response = await api.get(`effectiveness/${pokemonPrimaryType}`);

      setEffectiveness(response.data);
      setLoading(false);
    }

    loadPokemonEffectiveness();
  }, [pokemonPrimaryType]);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Header>
            <Text variant="body1" bold>
              Type defenses
            </Text>
            <Text color="grey" style={{ marginTop: 8 }}>
              The effectiveness of each type on {pokemon.name}.
            </Text>
          </Header>

          <EffectivenessList>
            {effectiveness.map(effect => {
              const backgroundColor = getColorByPokemonType(effect.type);

              return (
                <EffectivenessItem
                  key={effect.type}
                  style={{ backgroundColor: `${backgroundColor}30` }}
                >
                  <Text
                    variant="caption"
                    bold
                    style={{ color: backgroundColor }}
                  >
                    {effect.type} {effect.multiplier}
                  </Text>
                </EffectivenessItem>
              );
            })}
          </EffectivenessList>
        </>
      )}
    </Container>
  );
};

export default Effectiveness;
