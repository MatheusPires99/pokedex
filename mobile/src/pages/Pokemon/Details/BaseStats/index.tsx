import React, { useMemo } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Animated } from 'react-native';

import Text from '../../../../components/Text';
import { SlideProps } from '../tabs';

import Effectiveness from './Effectiveness';
import { Stat, StatGraph, StatLine, StatValue } from './styles';

const BaseStats = ({ pokemon }: SlideProps) => {
  const translateX = useMemo(() => new Animated.Value(-1), []);

  useFocusEffect(() =>
    Animated.timing(translateX, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(),
  );

  return (
    <>
      {pokemon.stats.map(stat => (
        <Stat key={stat.url}>
          <Text color="grey" style={{ width: 100 }}>
            {stat.name}
          </Text>

          <StatGraph>
            <Text bold style={{ width: 30, textAlign: 'right' }}>
              {stat.base_stat}
            </Text>

            <StatLine>
              <StatValue
                width={stat.base_stat}
                style={{
                  transform: [
                    {
                      translateX: translateX.interpolate({
                        inputRange: [-1, 0],
                        outputRange: [-stat.base_stat * 2.5, 0],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                }}
              />
            </StatLine>
          </StatGraph>
        </Stat>
      ))}

      <Effectiveness pokemon={pokemon} />
    </>
  );
};

export default BaseStats;
