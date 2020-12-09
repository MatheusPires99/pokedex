import React, { useCallback, useRef, useState, useMemo } from 'react';
import { Animated, Dimensions, ScrollView } from 'react-native';

import { POKEMON_SUMMARY_HEIGHT } from '../../../constants';
import { Pokemon } from '../../../types';
import Text from '../../../components/Text';

import { tabs } from './tabs';
import {
  Container,
  Tabs,
  TabButton,
  SelectedIndicator,
  SlideWrapper,
} from './styles';

type PokemonDetailsProps = {
  translateY: Animated.Value;
  pokemon: Pokemon;
};

const { width } = Dimensions.get('window');

export const TAB_BUTTON_WIDTH = (width - 48) / 4;

const PokemonDetails = ({ pokemon, translateY }: PokemonDetailsProps) => {
  const scrollViewRef = useRef<ScrollView>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const translateX = useMemo(() => new Animated.Value(0), []);

  const handleChangeTab = useCallback((index: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: width * index,
        animated: true,
      });

      setCurrentIndex(index);
    }
  }, []);

  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: translateX,
          },
        },
      },
    ],
    { useNativeDriver: true },
  );

  const containerStyle = {
    transform: [
      {
        translateY: translateY.interpolate({
          inputRange: [-POKEMON_SUMMARY_HEIGHT, 0],
          outputRange: [0, -32],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const selectedIndicatorStyle = {
    transform: [
      {
        translateX: translateX.interpolate({
          inputRange: tabs.map((_, index) => width * index),
          outputRange: tabs.map((_, index) => TAB_BUTTON_WIDTH * index),
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <Container style={containerStyle}>
      <Tabs>
        {tabs.map((tab, index) => {
          const isSelected = index === currentIndex;

          return (
            <TabButton key={index} onPress={() => handleChangeTab(index)}>
              <Text color={isSelected ? 'black' : 'grey'} bold={isSelected}>
                {tab.name}
              </Text>
            </TabButton>
          );
        })}

        <SelectedIndicator style={selectedIndicatorStyle} />
      </Tabs>

      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate="fast"
        bounces={false}
      >
        {tabs.map(({ slide: Slide }, index) => (
          <SlideWrapper key={index}>
            <Slide pokemon={pokemon} />
          </SlideWrapper>
        ))}
      </Animated.ScrollView>
    </Container>
  );
};

export default PokemonDetails;
