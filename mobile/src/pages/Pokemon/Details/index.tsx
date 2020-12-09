import React, { useCallback, useRef, useMemo } from 'react';
import { Animated, Dimensions, ScrollView } from 'react-native';
import { useTheme } from 'styled-components';

import { POKEMON_SUMMARY_HEIGHT } from '../../../constants';
import { Pokemon } from '../../../types';
import Text from '../../../components/Text';

import { tabs, TAB_BUTTON_WIDTH } from './tabs';
import {
  Container,
  Tabs,
  TabButton,
  SelectedIndicator,
  SlideWrapper,
} from './styles';

type DetailsProps = {
  translateY: Animated.Value;
  pokemon: Pokemon;
};

const { width } = Dimensions.get('window');

const Details = ({ pokemon, translateY }: DetailsProps) => {
  const { colors } = useTheme();

  const scrollViewRef = useRef<ScrollView>(null);

  const translateX = useMemo(() => new Animated.Value(0), []);

  const handleChangeSlide = useCallback((index: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: width * index,
        animated: true,
      });
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
    { useNativeDriver: false },
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
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const color = translateX.interpolate({
            inputRange,
            outputRange: [colors.grey, colors.black, colors.grey],
            extrapolate: 'clamp',
          });

          return (
            <TabButton key={index} onPress={() => handleChangeSlide(index)}>
              <Text bold style={{ color }}>
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

export default Details;
